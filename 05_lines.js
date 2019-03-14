const through = require("through2");
const split = require("split");

// counter to track the buffer events
let count = 0;

process.stdin
  .pipe(split())
  .pipe(
    through(function(chunk, enc, next) {
      if (count % 2 != 0) {
        // process and push the buffer to outpu
        this.push(chunk.toString().toUpperCase());
        this.push("\n");
        count++; // counter to keep track of even or odd chunk
        next(); // callback to get more chunks
      } else {
        this.push(chunk.toString().toLowerCase());
        this.push("\n");
        count++;
        next();
      }
    })
  )
  .pipe(process.stdout);
