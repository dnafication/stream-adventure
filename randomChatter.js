var request = require("request");

request.get("https://www.reddit.com/r/reactjs/.json", function(
  err,
  response,
  body
) {
  if (err) {
    console.log(err);
  }

  const respJson = JSON.parse(body);

  setInterval(function() {
    const key = Math.round(Math.random() * (respJson.data.children.length - 1));
    console.log(respJson.data.children[key].data.title);
  }, 500);
});
