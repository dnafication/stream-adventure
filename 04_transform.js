var through = require("through2");

var stream = through(
  function(buffer, encoding, next) {
    // console.log(buffer.toString());
    this.push(buffer.toString().toUpperCase());
    next();
  },
  function(done) {
    done();
  }
);

process.stdin.pipe(stream).pipe(process.stdout);
