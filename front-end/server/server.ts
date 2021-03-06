const express = require('express');
const mysql = require('mysql');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

//configurando o body parser para pegar o parse das rotas
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname));

//definindo as rotas com express
const router = express.Router();

//habilitando REST em qualquer método menos PUTCH
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
    if ('OPTIONS' == req.method) {
        res.sendStatus(200);
    } else {
        console.log(`${req.ip} ${req.method} ${req.url}`);
        next();
    }
})

//inicia o servidor na porta 4201
app.listen(4201, 'localhost', function () {
    console.log("Server routes are running on 4201");
});
app.use(express.json());
app.use('/', router);
app.use(cors());

//GET padrão configurado
router.get('/', (req, res) => {
    let orderLimit = "";
    orderLimit = " ORDER BY RAND() LIMIT 3;";
    execSQLQuery('SELECT substr(title, 1, 42) as title, substr(description, 8, 100) as description, ISBN FROM bookdescriptions' + orderLimit, res);
});

//GET de exibição completa de um livro
router.get('/exibir/:ISBN?', (req, res) => {
    let uniqueFilter = '';
    uniqueFilter = 'WHERE ISBN = 0201433362;';
    execSQLQuery('SELECT ISBN, title, substr(description, 3, 345) as description, price, publisher, pubdate, edition, pages FROM bookdescriptions '+ uniqueFilter, res);
});


//GET da caixa de buscas por titulo, categoria, descrição ou editora
router.get('/buscar/:textUser?', (req, res) => {
    let filterPartOne = '';
    filterPartOne = ' WHERE a.AuthorID = ba.AuthorID AND ba.ISBN = d.ISBN AND d.ISBN = cb.ISBN AND c.CategoryID = cb.CategoryID';

    let filterPartTwo = '';
    if (req.params.textUser) filterPartTwo = ` AND (c.CategoryName = '%${req.params.textUser}%' OR d.title LIKE '%${req.params.textUser}%' OR d.description LIKE '%${req.params.textUser}%' OR d.publisher LIKE '%${req.params.textUser}%' OR concat_ws(' ', nameF, nameL, nameF) LIKE '%${req.params.textUser}%')`;
    execSQLQuery('SELECT DISTINCT d.isbn, d.title, d.description, d.price FROM bookauthors a, bookauthorsbooks ba, bookdescriptions d, bookcategoriesbooks cb, bookcategories c' + filterPartOne + filterPartTwo, res);
});

//GET da Sidebar, que cada Link retorna os livros da categoria
router.get('/listar/:CategoryID?', (req, res) => {
    let filter = '';
    if (req.params.CategoryID) filter = ' WHERE c.ISBN = d.ISBN AND c.CategoryID=' + parseInt(req.params.CategoryID) + ' AND b.CategoryID = c.CategoryID GROUP BY(c.ISBN) ORDER BY RAND() LIMIT 2;';
    execSQLQuery('SELECT d.title, substr(d.description, 8, 250) as description, COUNT(c.ISBN) AS qtd, b.CategoryName as categoria, c.ISBN as ISBN FROM bookdescriptions d, bookcategoriesbooks c, bookcategories b ' + filter, res);
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

/*
router.get('/', (req, res) => res.json(
    {
        message: 'GET no diretório raiz da livraria funcionando!'
    }
));
*/