const express = require('express');
const config = require('config');
const http = require('http');
const connectDB = require('./database/connectDB');

const app = express();
const server = http.createServer(app);

/*
*Conectando ao banco de dados
 */
connectDB();

/*
*Middlewares
 */
app.use(express.json({extended: false}));

/**
 *Definindo rotas
 */
app.use('/user', require('./services/user/routes/main'));
app.use('/group', require('./services/group/routes/main'));

const PORT = process.env.PORT || config.get("httpServerPort");


server.listen(PORT, () => {
    console.log("Servidor no AR! Rodando na PORTA = " + PORT)
});



