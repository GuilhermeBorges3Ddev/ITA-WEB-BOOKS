const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000; //porta padrão para a API Node.JS
const mysql = require('mysql');

//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//definindo as rotas com express
const router = express.Router();

//GET padrão configurado
router.get('/', (req, res) => res.json(
    {
        message: 'GET no diretório raiz da livraria funcionando!'
    }
));
app.use('/', router);

//inicia o servidor
app.listen(port);
console.log('API funcionando!');

//GET trazendo do banco as categorias disponíveis
router.get('/categorias', (req, res) => {
    execSQLQuery('SELECT * FROM bookcategories;', res);
});

//parametros influenciando GET com Where
router.get('/buscar/:CategoryID?', (req, res) => {
    let filter = '';
    if (req.params.CategoryID) filter = ' WHERE CategoryID=' + parseInt(req.params.CategoryID);
    execSQLQuery('SELECT * FROM  bookcategoriesbooks' + filter, res);
});//essa busca é a dos livros por categoria

//rota com POST para testar inserção de livros
router.post('/adicionarLivro', (req, res) => {
    const ISBN = req.body.ISBN.substring(0, 10);
    const title = req.body.title.substring(0, 120);
    execSQLQuery(
        'INSERT INTO bookdescriptions(ISBN, title) VALUES('`${ISBN}` + ',' + `${title}` + ')', res);
});

//A execução das queries devem ficar no final do arquivo
function execSQLQuery(sqlQry, res) {
    const connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'password',
        database: 'sandvigbookstore'
    });
    connection.query(sqlQry, function (error, results, fields) {
        if (error)
            res.json(error);
        else
            res.json(results);
        connection.end();
        console.log('Query executada!');
    });
}