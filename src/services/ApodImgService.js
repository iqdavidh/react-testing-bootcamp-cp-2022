import apiClient from "./NasaApiClient";

const KEY_LOCALSTORAGE_APOD = "apodcache";


const getCache = () => {
  const json = window.localStorage.getItem(KEY_LOCALSTORAGE_APOD) || "[]";
  return JSON.parse(json);
}

const getItemFromCache = (date) => {
  if (!date) {
    return null;
  }
  const list = getCache();
  return list.find(k => k.date === date);
};


const addItemToLocalStorage = (item) => {
  
  const itemInCache = getItemFromCache(item.date);
  
  if (itemInCache) {
    return;
  }
  
  let list = getCache();
  list = [...list, item];
  window.localStorage.setItem(KEY_LOCALSTORAGE_APOD, JSON.stringify(list));
}


const ApodImgService = {
  
  getItemFromDate: async (date) => {
    
    const itemCache = getItemFromCache(date);
    
    
    if (itemCache) {
      return itemCache;
    }
    
    const result = await apiClient.Apod(date);
    
    if (!result.success) {
      throw  new Error(result.msg);
    }
    const item = result.data;
    addItemToLocalStorage(item);
    return item;
    
  }
}

export default ApodImgService;