'use strict';

const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const getPort = require('get-port');
const webpackConfig = require('../config/webpack.config');

const startServer = async () => {
  const port = await getPort({ port: getPort.makeRange(8080, 9999) });
  const compiler = Webpack(webpackConfig);
  const server = new WebpackDevServer(compiler);
  server.listen(port, '127.0.0.1');
};

module.exports = startServer;
