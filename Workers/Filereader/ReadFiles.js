var fs = require("fs");
var path = require("path");
let reqpath = path.join(__dirname, "../../inputFile.txt");

var fileReader = () => {
  try {
    var data = fs.readFileSync(reqpath, "utf8");
    return data.toString();
  } catch (e) {
    console.log("Error:", e);
  }
};

exports.data = fileReader();
