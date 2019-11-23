const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000; //porta padrão para a API Node.JS
const mysql = require('mysql');

//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//definindo as rotas
const router = express.Router();
router.get('/', (req, res) => res.json(
    {
        message: 'GET no diretório raiz da livraria funcionando!'
    }
));
app.use('/', router);

//inicia o servidor
app.listen(port);
console.log('API funcionando!');