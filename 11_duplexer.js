var duplexer = require("duplexer2");
var spawn = require("child_process").spawn;

module.exports = function(cmd, args) {
  // spawn the process and return a single stream
  spawn(cmd, args);
  console.log(spawn.pid);
  // joining together the stdin and stdout here
  return duplexer({}, spawn.stdin, spawn.stdout);
};
