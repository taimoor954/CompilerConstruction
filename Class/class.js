exports.dataTypes = {
  dataTypes: [
    { name: "intgr", class: "dataType" },
    { name: "dbl", class: "dataType" },
    { name: "char", class: "dataType" },
    { name: "bool", class: "dataType" },
  ],
};

exports.str = {
  str: [{ name: "str", class: "str" }],
};

exports.iff = {
  iff: [{ name: "iff", class: "iff" }],
};

exports.els = {
  els: [{ name: "els", class: "els" }],
};

exports.forr = {
  forr: [{ name: "forr", class: "forr" }],
};

exports.retrn = {
  retrn: [{ name: "retrn", class: "retrn" }],
};

exports.bool_const = {
  bool_const: [
    { name: "true", class: "bool_const" }, //changes
    { name: "false", class: "bool_const" }, //changes
  ],
};
exports.func = {
  func: [{ name: "func", class: "func" }],
};

exports.breakCont = {
  breakCont: [
    { name: "break", class: "breakCont" },
    { name: "continue", class: "breakCont" },
  ],
};

exports.static = {
  static: [{ name: "static", class: "static" }],
};

exports.arithOperators = {
  arithOperators: [
    { name: "+", class: "arithOperators" }, // + operator //add O
    { name: "-", class: "arithOperators" }, // - operator //sub o
    { name: "*", class: "arithOperators" }, // * operator //mul o
    { name: "/", class: "arithOperators" }, // / operator //div o
    { name: "%", class: "arithOperators" }, // % operator remaider o
  ],
};

exports.incDecOperator = {
  incDecOperator: [
    { name: "inc", class: "incDecOperator" }, // ++ operator
    { name: "dec", class: "incDecOperator" }, // -- operator
  ],
};

exports.relOperator = {
  relOperator: [
    { name: "==", class: "relOperator" }, // == operator
    { name: ">", class: "relOperator" }, // > operator
    { name: "<", class: "relOperator" }, // < operator
    { name: ">=", class: "relOperator" }, // >= operator
    { name: "<=", class: "relOperator" }, // <= operator
    { name: "!=", class: "relOperator" }, // != operator
  ],
};

exports.assignOperator = {
  assignOperator: [
    { name: "=", class: "assignOperator" }, // = operator
  ],
};

exports.logicalOpeartors = {
  logicalOpeartors: [
    { name: "nd", class: "logicalOpeartors" }, // && operator
    { name: "orr", class: "logicalOpeartors" }, // || operator
    { name: "not", class: "logicalOpeartors" }, // ! operator
  ],
};

exports.punctuators = {
  punctuators: [
    { name: ".", class: "punctuators" },
    { name: ",", class: "punctuators" },
    { name: ":", class: "punctuators" },
    { name: "(", class: "punctuators" },
    { name: ")", class: "punctuators" },
    { name: "[", class: "punctuators" },
    { name: "]", class: "punctuators" },
    { name: "{", class: "punctuators" },
    { name: "}", class: "punctuators" },
    { name: "'", class: "punctuators" },
  ],
};
