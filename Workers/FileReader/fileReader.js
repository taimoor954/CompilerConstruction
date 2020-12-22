var fs = require("fs"); //NODE MODULE

var fileReader = () => {
  try {
    var data = fs.readFileSync("file.txt", "utf8");
    // CHANGES
    // data = data.replace(/\n\n/, /\n/);
    return data.toString(); //CONVERT DATA INTO STRING
  } catch (e) {
    console.log("Error:", e);
  }
};
exports.fileReader = fileReader;
