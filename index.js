var fs = require("fs");
const { data } = require("./Workers/Filereader/ReadFiles");
var { write } = require("./Workers/FileWriter/fileWriter");
const grep = require("./Workers/BreakingLogic/wordsBreaker");
const { TokenGenerator } = require("./Workers/TokenGenerator/tokenGenerator");
var resultantArray = [];

//LINE BREAKER
var array = data.match(/[^\r\n]+/g);
for (let i = 0; i < array.length; i++) {
  var tokens = grep(array[i].split(re)); // note: filter function omitted
  resultantArray.push(tokens);
}
//MAIN LOGIC
for (let i = 0; i < resultantArray.length; i++) {
  for (let j = 0; j < resultantArray[i].length; j++) {
    var lineNumber = i;
    resultantArray[i][j];
    if (resultantArray[i][j] == ">") {
      if (resultantArray[i][j + 1] == "=") {
        resultantArray[i][j] = resultantArray[i][j] + resultantArray[i][j + 1];
        TokenGenerator(resultantArray[i][j], lineNumber + 1);
        j = j + 1 + 1;
      }
    }
    if (resultantArray[i][j] == "<") {
      if (resultantArray[i][j + 1] == "=") {
        resultantArray[i][j] = resultantArray[i][j] + resultantArray[i][j + 1];
        TokenGenerator(resultantArray[i][j], lineNumber + 1);
        j = j + 1 + 1;
      }
    }
    if (resultantArray[i][j] == "=") {
      if (resultantArray[i][j + 1] == "=") {
        resultantArray[i][j] = resultantArray[i][j] + resultantArray[i][j + 1];
        TokenGenerator(resultantArray[i][j], lineNumber + 1);
        j = j + 1 + 1;
      }
    }
    TokenGenerator(resultantArray[i][j], lineNumber + 1);
  }
}
