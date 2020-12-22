var fs = require("fs"); //NODE MODULE

var write = (dataOfTokens) => {
  fs.writeFileSync(
    "Output.txt",
    dataOfTokens + "\n",
    {
      flag: "a+",
    },
    function (err) {
      if (err) {
        return console.log(err);
      }
    }
  );
};
var writeFileFormatter = (data) => {
  fs.writeFileSync(
    "InputFormatter.txt",
    data + "\n",
    {
      flag: "a+",
    },
    function (err) {
      if (err) {
        return console.log(err);
      }
    }
  );
};

exports.write = write;
exports.writeFileFormatter = writeFileFormatter;
