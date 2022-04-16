const {FactoryReqJson} = require("../lib/FactoryReqJson");

const urlApi = "https://api.nasa.gov/planetary";
const apiKey = "KCWmDqT8YpTIIidvtjsuaYaydYEaVVvQBbgKyku9";


const reqJson = FactoryReqJson();

const NasaApiClient = {
  Apod: async (ymd = null) => {
    
    const urlDate = ymd
      ? `&date=${ymd}`
      : '';
    
    const url = `${urlApi}/apod?api_key=${apiKey}${urlDate}`;
    
    return await reqJson.requestGET(url);
  }
}
module.exports = NasaApiClient;