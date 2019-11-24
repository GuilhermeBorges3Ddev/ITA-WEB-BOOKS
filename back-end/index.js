const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000; //porta padrão para a API Node.JS
const mysql = require('mysql');

//configurando o body parser para pegar o parse das rotas
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


//GET de exibição de 4 livros aleatórios no <body>
router.get('/exibir', (req, res) => {
    let orderLimit = "";
    orderLimit = " ORDER BY RAND() LIMIT 3;";
    execSQLQuery('SELECT title, description FROM bookdescriptions' + orderLimit, res);
});

//GET da caixa de buscas por titulo, categoria, descrição ou editora
router.get('/buscar/:textUser?', (req, res) => {
    let filterPartOne = '';
    filterPartOne = ' WHERE a.AuthorID = ba.AuthorID AND ba.ISBN = d.ISBN AND d.ISBN = cb.ISBN AND c.CategoryID = cb.CategoryID';

    let filterPartTwo = '';
    if (req.params.textUser) filterPartTwo = ` AND (c.CategoryName = '%${req.params.textUser}%' OR d.title LIKE '%${req.params.textUser}%' OR d.description LIKE '%${req.params.textUser}%' OR d.publisher LIKE '%${req.params.textUser}%' OR concat_ws(' ', nameF, nameL, nameF) LIKE '%${req.params.textUser}%')`;
    execSQLQuery('SELECT DISTINCT d.isbn, d.title, d.description, d.price FROM bookauthors a, bookauthorsbooks ba, bookdescriptions d, bookcategoriesbooks cb, bookcategories c' + filterPartOne + filterPartTwo, res);
});

//GET da Navbar, que cada Link retorna os livros da categoria
router.get('/listar/:CategoryID?', (req, res) => {
    let filter = '';
    if (req.params.CategoryID) filter = ' WHERE c.ISBN = d.ISBN AND c.CategoryID=' + parseInt(req.params.CategoryID);
    execSQLQuery('SELECT d.title, d.description FROM bookdescriptions d, bookcategoriesbooks c' + filter, res);
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