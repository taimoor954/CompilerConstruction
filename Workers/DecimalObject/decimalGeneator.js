const { write } = require("../fileWriter/fileWriter");

function decimalObject(decimal, valueAfterDecimal, lineNumber) {
  let decimalObject = {
    CLASSNAME: checkIfFloatOrDouble(valueAfterDecimal),
    VALUE: decimal,
    LINE_NUMBER: lineNumber,
  };
  let valueAfterDecimalDup = valueAfterDecimal;
  function checkIfFloatOrDouble(valueAfterDecimalDup) {
    if (valueAfterDecimalDup.length > 7) {
      return "DOUBLE_CONSTANT";
    }
    return "FLOAT_CONSTANT";
  }
  decimalObject = JSON.stringify(decimalObject);
  write(decimalObject);
}
exports.decimalObject = decimalObject;
