const { write } = require("../fileWriter/fileWriter");

function StringGenerator(str, lineNumber) {
  var strRegex = new RegExp(/"(.*?)"/);
  if (strRegex.test(str)) {
    obj = {
      CLASSNAME: "STRING_CONSTANT",
      VALUE: str,
      LINE_NUMBER: lineNumber,
    };
    obj = JSON.stringify(obj);
    write(obj);
  }
}
exports.StringGenerator = StringGenerator;
