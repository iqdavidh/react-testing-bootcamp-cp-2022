const path = require('path');
const axios = require('axios').default;


async function getHeaders(factoryHeader, paramHeader, customHeaders) {
  let facHeaders = {};
  if (typeof factoryHeader === 'function') {
    facHeaders = factoryHeader();
    //en caso de ser promise------------
    if (facHeaders.then) {
      facHeaders = await factoryHeader();
    }
  }
  
  return {...paramHeader, ...customHeaders, ...facHeaders};
  
}


export const FactoryReqJson = (factoryHeader = null) => {
  
  let isDebug = false;
  
  const logger = data => {
    if (isDebug) {
      console.log(data);
    }
  };
  
  
  const customHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  };
  
  const handleCatchError = (error, url) => {
    logger(error.response);
    
    if (error.response && typeof error.response.data !== 'undefined') {
      return error.response.data;
    }
    
    return {
      success: false,
      msg: error
    };
  };
  
  
  return {
    
    setIsDebug: (b = true) => {
      isDebug = b;
    },
    requestGET: async (url, paramHeader) => {
      
      logger(url);
      
      let headers = await getHeaders(factoryHeader, paramHeader, customHeaders);
      
      try {
        return await axios
          .get(url, {headers})
          .then(function (response) {
            logger(response);
            return response.data;
          })
          .catch(function (error) {
            return handleCatchError(error, url);
          });
      } catch (error) {
        return handleCatchError(error, url);
      }
    },
    
    requestPOST: async (url, dataObject, paramHeader) => {
      logger(url);
      
      
      let headers = await getHeaders(factoryHeader, paramHeader, customHeaders);
      
      try {
        return await axios
          .post(url, dataObject, {headers})
          .then(function (response) {
            logger(response);
            
            return response.data;
          })
          .catch(function (error) {
            return handleCatchError(error, url);
          });
      } catch (error) {
        return handleCatchError(error, url);
      }
    },
    
    requestDELETE: async (url, paramHeader) => {
      logger(url);
      let headers = await getHeaders(factoryHeader, paramHeader, customHeaders);
      
      try {
        return await axios
          .delete(url, {headers})
          .then(function (response) {
            logger(response);
            return response.data;
          })
          .catch(function (error) {
            return handleCatchError(error, url);
          });
      } catch (error) {
        return handleCatchError(error, url);
      }
    },
  
  }
  
};
