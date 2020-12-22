// console.time()
const { fileReader } = require("./Workers/FileReader/fileReader");
const {
  writeFileFormatter,
  write,
} = require("./Workers/fileWriter/fileWriter");
const { grep } = require("./Workers/RegularExpression/re");
const {
  CLASS_ARRAY,
} = require("./Workers/ArrayContainingAllClasses/arrayClasses");
const { TokenGenerator } = require("./Workers/TokenGenerator/tokenGenerator");
const {
  StringGenerator,
} = require("./Workers/StringGenerator/stringGenerator");
const {
  characterGenerator,
} = require("./Workers/CharacterGenerator/characterGenerator");
const { decimalObject } = require("./Workers/DecimalObject/decimalGeneator");
var flag = 0;
var fs = require("fs"); //NODE MODULE
const { els } = require("./Workers/Classes/classes");
var count = 0;
var obj = {};
var open;
var close;
var resultantArray = [];

var arrayForStr = [];
var data = fileReader(); //READ DATA FROM TEXT FILE SAVED IN VAR DATA

//STEP2  BREAK YOUR TEXT FILE IN SUCH A WAY THAT EACH POSITION OF YOUR ARRAY CONTAIN EACH LINE OF TEXTFILE
var array = data.match(/[^\r\n]+/g);
//Incase if input file is empty then array will be null
if (array != null) {
  for (let index = 0; index < array.length; index++) {
    writeFileFormatter(array[index]);
  }
  //STEP 3 BREAK YOUR ARRAY ACCORDING TO REGULAR EXPRESSION I.E GREP

  for (let i = 0; i < array.length; i++) {
    var tokens = grep(array[i].split(re)); // note: filter function omitted
    resultantArray.push(tokens);
  }
  //STEP 5 START SENDING YOUR VALUE TO THE TOKEN GENERATOR
  for (let i = 0; i < resultantArray.length; i++) {
    for (let j = 0; j < resultantArray[i].length; j++) {
      obj = {};
      var lineNumber = i;
      //STRING CONSTANT
      if (resultantArray[i][j] == `"`) {
        count = count + 1;
        while (count < 2) {
          arrayForStr.push(resultantArray[i][j++]);
          var strforstr = arrayForStr.join(" ");

          if (resultantArray[i][j] == '"') {
            arrayForStr.push(resultantArray[i][j]);
            strforstr = arrayForStr.join(" ");

            count = count + 1;
          }
          if (resultantArray[i][j] == undefined) {
            if (Object.keys(obj).length == 0)
              obj = {
                CLASSNAME: "LEXICAL ERROR",
                VALUE: `${arrayForStr.join(" ")}`,
                LINE_NUMBER: lineNumber + 1,
                ERROR: 'ADD " IN THE END OF STRING ☀ 🔥🔥',
              };
            obj = JSON.stringify(obj);
            write(obj);
            ++i;
            j = 0;
            lineNumber = i;
            break;
          }
        }

        count = 0;
        arrayForStr = [];
        StringGenerator(strforstr, lineNumber + 1);
      }
      if (i == resultantArray.length) break;

      //CHARACTER CONSTANT
      if (resultantArray[i][j] == "`") {
        // console.log('huaehuehu')
        count = count + 1;
        while (count < 2) {
          arrayForStr.push(resultantArray[i][j++]);
          var strforstr = arrayForStr.join(" ");

          if (resultantArray[i][j] == "`") {
            arrayForStr.push(resultantArray[i][j]);
            strforstr = arrayForStr.join(" ");
            count = count + 1;
            ++j;
          }

          if (strforstr.length == 5 || strforstr.length == 3) {
            var charRegex = new RegExp(/^`(.*)`$/);
            if (charRegex.test(strforstr)) {
              obj = {
                CLASSNAME: "CHAR_CONSTANT",
                VALUE: strforstr,
                LINE_NUMBER: lineNumber + 1,
              };
              obj = JSON.stringify(obj);
              write(obj);
            }
          }
          if (strforstr.length > 5 && Object.keys(obj).length == 0) {
            obj = {
              CLASSNAME: "CHAR_CONSTANT",
              VALUE: strforstr,
              LINE_NUMBER: lineNumber,
              ERROR: "CHARACTER CANT HOLD MORE THAN 1 CHARACTER 🔥🔥",
            };
            obj = JSON.stringify(obj);
            write(obj);
            break;
          }
          if (
            resultantArray[i][j] == undefined &&
            Object.keys(obj).length == 0
          ) {
            obj = {
              CLASSNAME: "LEXICAL ERROR",
              VALUE: `${arrayForStr.join(" ")}`,
              LINE_NUMBER: lineNumber + 1,
              ERROR: "ADD ` AT THE END OF CHARACTER ☀ 🔥🔥",
            };

            obj = JSON.stringify(obj);
            write(obj);
            ++i;
            j = 0;
            lineNumber = i;
            break;
          }
        }
        if (i == resultantArray.length) break;

        if (resultantArray[i][j] == undefined) {
          i = i + 1;
          j = 0;
          lineNumber = i;
        }
        count = 0;
        arrayForStr = [];
      }

      if (i == resultantArray.length) break;

      //CHECK NUMBER BEFORE DEICMAL
      if (resultantArray[i][j] == ".") {
        // console.log(`${resultantArray[i][j - 1]} here you go`);
      }

      //CHECKING DECIMAL POINT AFTER A NUMBER
      if (i == resultantArray.length) break;

      if (resultantArray[i][j + 1] == ".") {
        j = j + 1;
      }
      //DECIMAL FOR DOUBLE/FLOAT
      if (i == resultantArray.length) break;
      if (resultantArray[i][j] == ".") {
        lineNumber = i;
        var decErrorObject = {};
        let arrayForDecimal = [];
        var valueBeforeDecimal = resultantArray[i][--j];
        ++j;
        var valueAfterDecimal = resultantArray[i][++j];
        --j;
        let numberConstant = new RegExp(/^\d+$/);
        if (!numberConstant.test(valueBeforeDecimal)) {
          arrayForDecimal.push(valueBeforeDecimal);
          arrayForDecimal.push(resultantArray[i][j]);
          arrayForDecimal.push(valueAfterDecimal);
          decErrorObject = {
            CLASSNAME: "LEXICAL ERROR",
            VALUE: arrayForDecimal.join(""),
            LINE_NUMBER: lineNumber + 1,
            ERROR: "YOU HAVE ENTERTED AN INVALID VALUE BEFORE DECIMAL 🔥🔥  ",
          };
          // console.log(resultantArray[i][j - 1]);

          decErrorObject = JSON.stringify(decErrorObject);
          write(decErrorObject);
          if (resultantArray[i][j + 2] == undefined) {
            ++i;
            j = 0;
            lineNumber = i;
          }
        }
        if (!numberConstant.test(valueAfterDecimal)) {
          if (Object.keys(decErrorObject).length == 0) {
            arrayForDecimal.push(valueBeforeDecimal);
            arrayForDecimal.push(resultantArray[i][j]);
            arrayForDecimal.push(valueAfterDecimal);
            decErrorObject = {
              CLASSNAME: "LEXICAL ERROR",
              VALUE: arrayForDecimal.join(""),
              LINE_NUMBER: lineNumber + 1,
              ERROR: "YOU HAVE ENTERTED AN INVALID VALUE AFTER DECIMAL  🔥🔥 ",
            };
            decErrorObject = JSON.stringify(decErrorObject);
            write(decErrorObject);
            if (resultantArray[i][j + 2] == undefined) {
              ++i;
              j = 0;
              lineNumber = i;
            }
          }
        }
        if (
          numberConstant.test(valueAfterDecimal) &&
          numberConstant.test(valueBeforeDecimal)
        ) {
          arrayForDecimal.push(valueBeforeDecimal);
          arrayForDecimal.push(resultantArray[i][j]);
          arrayForDecimal.push(valueAfterDecimal);
          var strForDecimal = arrayForDecimal.join("");

          decimalObject(strForDecimal, valueAfterDecimal, lineNumber + 1);
          //for line number issue
          if (resultantArray[i][j + 2] == undefined) {
            ++i;
            j = 0;
            lineNumber = i;
          }
        }
      }

      //CHECK AT DECIMALPOINT
      if (i == resultantArray.length) break;

      if (resultantArray[i][j] == ".") {
        j = j + 1;
      }
      //CHECK AT VALUE AFTER DECIMAL POINT
      if (i == resultantArray.length) break;

      if (resultantArray[i][j - 1] == ".") {
        if (resultantArray[i][j + 1] == undefined) {
          ++i;
          j = 0;
          lineNumber = i;
        } else if (resultantArray[i][j + 1] != undefined) {
          j = j + 1;
        }
      }

      if (i == resultantArray.length) break;

      TokenGenerator(resultantArray[i][j], lineNumber + 1);
    }
  }
} else {
  console.log("YOUR FILE IS EMPTY 😁 😁 😁");
}
