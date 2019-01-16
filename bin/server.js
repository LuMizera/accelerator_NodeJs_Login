'use strict';

const
    mongoose = require('mongoose'),
    express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    db = require('../config/mongodb'),
    api = require('../config/api'),
    app = express();

//CORS
app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    headers: ['Content-Type', 'Authorization', 'Access-Control-Allow-Origin'],
}));

//MIDDLEWARES
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

//HEADERS A SEREM ENVIADOS GLOBALMENTE
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json')
    next()
})

require('../src/app')(app);

//CONEXAO MONGO
mongoose.connect(db.connection, {
    useNewUrlParser: true
})
.then(() => {
    app.listen(api.port, () => {
        console.log('-----------------------------------------------')
        console.log(`API Rodando na porta: ${api.port}`)
        console.log('-----------------------------------------------')
    });
}).catch(error => {
    // console.error(error), 
    console.log("Não foi possivel conectar com o banco de dados :(")
});

module.exports = app;