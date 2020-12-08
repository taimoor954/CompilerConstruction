var fs = require("fs");
var path = require("path");
var write = (dataOfTokens) => {
  fs.writeFileSync(
    "Output.txt",
    dataOfTokens + "\n",
    { flag: "a+" },
    function (err) {
      if (err) {
        return console.log(err);
      }
    }
  );
};
exports.write = write;
