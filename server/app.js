const express = require('express');
const app = express();
const routes = require('./routes/index.route');
const config = require('./config.json');
const http = require('http');
const morgan = require('morgan');

app.use(morgan('dev'));

app.use(express.json());
app.use(routes);

// Middleware para manejo de recursos no encontrados (Not Found)
app.use((req, res, next) => {
    const error = new Error('Recurso no encontrado');
    error.status = 404;
    next(error);
});

// Middleware para manejo de excepciones:
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
            path: req.url,
            requestBody: req.body
        }
    });
});

const httpServer = http.createServer(app);
httpServer.listen(config.port);
console.log(`http server listening at port ${config.port}`);

module.exports = { app };
