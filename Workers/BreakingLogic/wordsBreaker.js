(punct =
  "\\[" +
  "\\!" +
  '\\"' +
  "\\#" +
  "\\$" + // since javascript does not
  "\\%" +
  "\\&" +
  "\\'" +
  "\\(" +
  "\\)" + // support POSIX character
  "\\*" +
  "\\+" +
  "\\," +
  "\\\\" +
  "\\-" + // classes, we'll need our
  "\\." +
  "\\/" +
  "\\:" +
  "\\;" +
  "\\<" + // own version of [:punct:]
  "\\=" +
  "\\>" +
  "\\?" +
  "\\@" +
  "\\[" +
  "\\]" +
  "\\^" +
  "\\_" +
  "\\`" +
  "\\{" +
  "\\|" +
  "\\}" +
  "\\~" +
  "\\]"),
  (re = new RegExp( // tokenizer
    "\\s*" + // discard possible leading whitespace
      "(" + // start capture group
      "\\.{3}" + // ellipsis (must appear before punct)
      "|" + // alternator
      "\\w+\\-\\w+" + // hyphenated words (must appear before punct)
      "|" + // alternator
      "\\w+'(?:\\w+)?" + // compound words (must appear before punct)
      "|" + // alternator
      "\\w+" + // other words
      "|" + // alternator
      "[" +
      punct +
      "]" + // punct
      ")" // end capture group
  ));
function grep(ary, filt) {
  var result = [];
  for (var i = 0, len = ary.length; i++ < len; ) {
    var member = ary[i] || "";
    if (filt && typeof filt === "Function" ? filt(member) : member) {
      result.push(member);
    }
  }
  return result;
}

module.exports = grep;
