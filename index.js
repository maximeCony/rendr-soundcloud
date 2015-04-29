'use strict';

var express = require('express');
var rendr = require('rendr');
var compress = require('compression');
var bodyParser = require('body-parser');
var serveStatic = require('serve-static');
var app = express();

var dataAdapterConfig = {
  host: 'api.soundcloud.com',
  protocol: 'https'
};

var server = rendr.createServer({
  dataAdapterConfig: dataAdapterConfig
});

server.configure(function (expressApp) {
  expressApp.use(compress());
  expressApp.use(serveStatic(__dirname + '/public'));
  expressApp.use(bodyParser.json());
});

app.use('/', server.expressApp);

var start = function() {
  var port = process.env.PORT || 3030;
  app.listen(port);
  console.log('server pid %s listening on port %s in %s mode',
    process.pid,
    port,
    app.get('env')
  );
};

/**
 * Only start server if this script is executed, not if it's require()'d.
 * This makes it easier to run integration tests on ephemeral ports.
 */
if (require.main === module) {
  start();
}

exports.app = app;