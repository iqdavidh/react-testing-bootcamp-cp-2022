const KEY_LOCALSTORAGE_APOD = "apodcache";


const getList = () => {
  const json = window.localStorage.getItem(KEY_LOCALSTORAGE_APOD) || "[]";
  return JSON.parse(json);
}

const ApodStore = {
  getItem: (date) => {
    if(!date){
      return null;
    }
    
    const list=getList();
    return list.find(k=>k.date===date);
  },
  setItem: (item) => {
    
    let list = getList();
    list = [...list, item];
    window.localStorage.setItem(KEY_LOCALSTORAGE_APOD, JSON.stringify(list));
  }
  
}

export default ApodStore;