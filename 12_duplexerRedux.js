var duplexer = require("duplexer2");
var through = require("through2");
var concat = require("concat-stream");

module.exports = function(counter) {
  counter.pipe(process.stdout);
};
