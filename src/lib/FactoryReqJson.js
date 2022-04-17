const axios = require('axios').default;

async function getHeaders(factoryHeader, paramHeader, customHeaders) {
  let h = {};
  if (typeof factoryHeader === 'function') {
    h = factoryHeader();
    //en caso de ser promise------------
    if (h.then) {
      h = await factoryHeader();
    }
  }
  
  return {...paramHeader, ...customHeaders, ...h};
  
}

/***
 *
 * @param factoryHeader
 * @returns {{setIsDebug: setIsDebug, requestGET: ((function(*=, *=): Promise<unknown>)|*), requestPOST: ((function(*=, *=, *=): Promise<unknown>)|*), requestDELETE: ((function(*=, *=): Promise<unknown>)|*)}}
 * @constructor
 */
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
            return {success: true, data: response.data};
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
            return {success: true, data: response.data};
            
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
            return {success: true, data: response.data};
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
