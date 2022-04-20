require("./patcher"); // Llamas este módulo que modifica el objeto instanciado
const logger = require("./logger"); // Al llamar el módulo en logger.js te dará el objeto modificado

logger.customMessage();
// logger.log("Algo");

// const logger2 = new logger.Logger("DB2");
// logger2.log("Hola");
