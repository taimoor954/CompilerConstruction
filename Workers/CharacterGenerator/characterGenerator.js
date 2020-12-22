const { write } = require("../fileWriter/fileWriter");

function characterGenerator(char, lineNumber) {
  var charRegex = new RegExp(/^`(.*)`$/);
  console.log(`${strRegex.test(str)} ${str}`);
  if (charRegex.test(char)) {
    obj = {
      CLASSNAME: "CHAR_CONSTANT",
      VALUE: char,
      LINE_NUMBER: lineNumber,
    };
    obj = JSON.stringify(obj);
    write(obj); 
    console.log(obj);
  }
}
exports.characterGenerator = characterGenerator;
