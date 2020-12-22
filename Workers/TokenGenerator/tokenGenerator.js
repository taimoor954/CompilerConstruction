const { CLASS_ARRAY } = require("../ArrayContainingAllClasses/arrayClasses");
const { write } = require("../fileWriter/fileWriter");
function TokenGenerator(input, lineNumber) {
  let i;
  let j;
  var extraSpaces = new RegExp(/[ ]{1,}/g);
  var ID = new RegExp(/^[a-zA-Z_][0-9a-zA-Z_]*$/);
  var numberConstant = new RegExp(/^\d+$/);
  var floatConstant = new RegExp(/^\d+\.\d{0,50}$|^\.\d{0,50}$/g);
  var string = new RegExp(/"(.*?)"/);
  var TokenObj = {};

  for (i = 0; i < CLASS_ARRAY.length; i++) {
    for (j = 0; j < CLASS_ARRAY[i].length; j++) {
      if (input == CLASS_ARRAY[i][j].name) {
        TokenObj = {
          CLASSNAME: CLASS_ARRAY[i][j].class,
          VALUE: input,
          LINE_NUMBER: lineNumber,
        };
        TokenObj = JSON.stringify(TokenObj);
        write(TokenObj);
      }
    }
  }
  if (Object.keys(TokenObj).length == 0) {
    if (extraSpaces.test(input)) {
      TokenObj = {
        CLASSNAME: "EXTRA_SPACE",
        VALUE: input,
        LINE_NUMBER: lineNumber,
      };
    }
  }
  if (Object.keys(TokenObj).length == 0) {
    //check if the number of properties in object is null
    if (input != undefined)
      if (ID.test(input)) {
        TokenObj = {
          CLASSNAME: "IDENTIFIER",
          VALUE: input,
          LINE_NUMBER: lineNumber,
        };
        TokenObj = JSON.stringify(TokenObj);
        write(TokenObj);
      } else if (numberConstant.test(input)) {
        TokenObj = {
          CLASSNAME: "INTEGER_CONSTANT",
          VALUE: input,
          LINE_NUMBER: lineNumber,
        };
        TokenObj = JSON.stringify(TokenObj);
        write(TokenObj);
      } else {
        TokenObj = {
          CLASSNAME: "LEXICAL ERROR",
          VALUE: input,
          LINE_NUMBER: lineNumber,
          ERROR: "SOMETHING WENT VERY WRONG 🔥🔥🔥",
        };

        TokenObj = JSON.stringify(TokenObj);
        write(TokenObj);
      }
  }
}
exports.TokenGenerator = TokenGenerator;
