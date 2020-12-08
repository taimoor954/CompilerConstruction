const { ArrayOfClasses } = require("../ArrayOfClasses/arrayOfClasses");
const { write } = require("../FileWriter/fileWriter");
exports.TokenGenerator = function (input, lineNumber) {
  for (let i = 0; i < ArrayOfClasses.length; i++) {
    for (j = 0; j < ArrayOfClasses[i].length; j++) {
      if (input == ArrayOfClasses[i][j].name) {
        var generatedToken = {
          CLASSNAME: ArrayOfClasses[i][j].class,
          VALUE: input,
          LINE_NUMBER: lineNumber,
        };
        generatedToken = JSON.stringify(generatedToken); //to convert object to string so that can be written in txt
        write(generatedToken);
      }
    }
  }
};
