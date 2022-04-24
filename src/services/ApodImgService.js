import apiClient from "./NasaApiClient";

const KEY_LOCALSTORAGE_APOD = "apodcache";


const getListInLocaslStorage = () => {
  const json = window.localStorage.getItem(KEY_LOCALSTORAGE_APOD) || "[]";
  return JSON.parse(json);
}

const getItemFromLocalStorage = (date) => {
  if (!date) {
    return null;
  }
  const list = getListInLocaslStorage();
  return list.find(k => k.date === date);
};


const addItemToLocalStorage = (item) => {
  let list = getListInLocaslStorage();
  list = [...list, item];
  window.localStorage.setItem(KEY_LOCALSTORAGE_APOD, JSON.stringify(list));
}


const ApodImgService = {
  
  getItemFromDate: async (date) => {
    
    const itemCache = getItemFromLocalStorage(date);
    
    if (!itemCache) {
      const result = await apiClient.Apod(date);
      
      if (!result.success) {
        throw  new Error(result.msg);
      }
      const item = result.data;
      addItemToLocalStorage(item);
      return item;
    }
    
  }
}

export default ApodImgService;