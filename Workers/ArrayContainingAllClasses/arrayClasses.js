const {
    dataTypes,
    str,
    iff,
    els,
    forr,
    retrn,
    bool_const,
    func,
    breakCont,
    static,
    arithOperators,
    incDecOperator,
    relOperator,
    assignOperator,
    logicalOpeartors,
    punctuators,
  } = require("../Classes/classes");
  
  const CLASS_ARRAY = [];
  
  CLASS_ARRAY.push(
    dataTypes.dataTypes,
    str.str,
    iff.iff,
    els.els,
    forr.forr,
    retrn.retrn,
    bool_const.bool_const,
    func.func,
    arithOperators.arithOperators,
    incDecOperator.incDecOperator,
    relOperator.relOperator,
    assignOperator.assignOperator,
    logicalOpeartors.logicalOpeartors,
    punctuators.punctuators,
    static.static
  );
  
  exports.CLASS_ARRAY = CLASS_ARRAY;