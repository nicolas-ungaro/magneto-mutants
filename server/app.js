const express = require('express');
const app = express();
const routes = require('./routes/index.route');
const config = require('./config.json');
const http = require('http');

app.use(express.json());
app.use(routes);
const httpServer = http.createServer(app);

httpServer.listen(config.port);
console.log(`http server listening at port ${config.port}`);

module.exports = { app };
