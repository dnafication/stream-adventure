var concat = require("concat-stream");

process.stdin.pipe(
  concat(function(input) {
    const reversed = input
      .toString()
      .split("")
      .reverse()
      .join("");
    process.stdout.write(reversed);
    // OR
    // console.log(reversed);
  })
);
