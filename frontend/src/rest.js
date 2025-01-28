var http = require("http");

const delay = ms => new Promise( res => setTimeout(res, ms));

const requestJson = async function() {
  var output = '';

  var options = {
    host: 'localhost',
    port: 8080,
    path: '/example/chart/data.json',
    method: 'GET'
  };

  var req = http.request(options, function(res) {
    res.on('data', function(chunk) {
      output += chunk;
      console.log('chunk = '+chunk);
    });
  });

  req.on('error', function(e) {
    console.log('problem with request: '+e.message);
  });

  req.end();

  await delay(1000);
  return output;
}

module.exports = requestJson;
