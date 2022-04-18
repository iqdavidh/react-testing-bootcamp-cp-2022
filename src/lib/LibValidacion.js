

const LibValidacion = {
  
  
  getDataClean: (dataRaw, listaCamposAllow, isRequerdosAll = false) => {
    let dataClean = {};
    
    let contadorCampos = 0;
    
    listaCamposAllow
      .forEach(c => {
        if (dataRaw[c] !== undefined) {
          dataClean[c] = dataRaw[c];
          contadorCampos++;
        }
      })
    ;
    
    if (contadorCampos === 0) {
      throw new Error("No se encontraron datos requeridos");
    }
    
    if (isRequerdosAll && contadorCampos !== listaCamposAllow.length) {
      throw new Error("No se encontraron todos los campos requeriidos");
    }
    
    return dataClean;
    
  },
  
  getIsNotNullOrEmpty: (valor) => {
    
    if (typeof valor === "string") {
      return valor.toString().trim() !== "";
    }
    
    return valor !== null && valor !== undefined;
  },
  
  /*
  indicar si un modelo tiene las propieadeds indicadas
  return bool
  */
  modelHasProp: (model, listaProp, modelError) => {
    
    let isValid = true;
    
    listaProp.forEach(p => {
      let isPropValid = LibValidacion.getIsNotNullOrEmpty(model[p]);
      
      if (!isPropValid) {
        isValid = false;
        if (modelError) {
          modelError[p] = true;
        }
      }
    });
    
    return isValid;
  },
  modelHasPropOrMsgError: (model, listaProp) => {
    
    let isValid = true;
    
    
    let msgError = '';
    
    listaProp.forEach(p => {
      let isPropValid = LibValidacion.getIsNotNullOrEmpty(model[p]);
      
      if (!isPropValid) {
        isValid = false;
        msgError += (msgError === '' ? '' : ', ');
        msgError += p;
      }
    });
    
    if (isValid) {
      return true;
    }
    
    return msgError;
  },
  
  validarModelHasPropPosibleNullOrMsgError: (model, listaProp) => {
    
    let isValid = true;
    
    let msgError = '';
    
    listaProp.forEach(p => {
      
      let isPropValid = model[p] !== undefined;
      
      if (!isPropValid) {
        isValid = false;
        msgError += (msgError === '' ? '' : ', ');
        msgError += p;
      }
    });
    
    if (isValid) {
      return true;
    }
    
    return msgError;
  },
  getMsgFromModelError: (modelError) => {
    return Object.keys(modelError).join(',');
  },
  
  getIsMailValid: (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
};

module.exports = LibValidacion;
