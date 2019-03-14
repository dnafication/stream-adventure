const http = require("http");
const through = require("through2");

const server = http.createServer((request, response) => {
  if (request.method == "POST") {
    request.pipe(through(write, end)).pipe(response);
  } else res.end("send me a POST\n");
});

function write(buf, enc, next) {
  this.push(buf.toString().toUpperCase());
  next();
}

function end(done) {
  done();
}

server.listen(process.argv[2]);
