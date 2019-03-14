var trumpet = require("trumpet");
var tr = trumpet();

const through = require("through2");

process.stdin.pipe(tr);

tr.selectAll(".loud", function(loud) {
  loud
    .createReadStream()
    .pipe(through(write, end))
    .pipe(loud.createWriteStream());
});

function write(chunk, enc, next) {
  this.push(chunk.toString().toUpperCase());
  next();
}
function end(done) {
  done();
}

tr.pipe(process.stdout);

/**
 * Solution from the program
 * 
 * var trumpet = require('trumpet');
  var through = require('through2');
  var tr = trumpet();

  var loud = tr.select('.loud').createStream();
  loud.pipe(through(function (buf, _, next) {
      this.push(buf.toString().toUpperCase());
      next();
  })).pipe(loud);

  process.stdin.pipe(tr).pipe(process.stdout);
 */
