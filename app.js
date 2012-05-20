var restify = require('restify');

var response = {};
response.playground = "{|lyHfoSwAdPrIjFBnQwMlK~Az[e@vBoHhEtAlEkRzVkMkw@_VpQoCcSnNsOuEwMjAoB{AeE_A_JjBoF{AkHzGcDnBPeC{VzQkHnG{GzGPr@vM`Kjb@hGcA";
response.players = [];

response.players[1] = {};
response.players[1].userId = "1";
response.players[1].color = "ff0000";
response.players[1].polyline = [];

response.players[0] = {};
response.players[0].userId = "0";
response.players[0].color = "00ff00";
response.players[0].polyline = [];


function respond(req, res, next) {
console.log(req.params);
  if(typeof req.params.playerid != 'undefined') {
        geo = {};
        geo.lat = req.params.lat;
        geo.long = req.params.long;
        response.players[parseInt(req.params.playerid)].polyline.push(geo);
  }


  res.setHeader('Content-Type', 'text/javascript');
console.log(JSON.stringify(response));
  res.send(JSON.stringify(response));
}

var server = restify.createServer();
server.get('/:playerid/:lat/:long', respond);
server.get('/', respond);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
