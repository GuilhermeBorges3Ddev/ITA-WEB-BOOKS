const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'sandvigbookstore'
});

function createTable(conn) {
    const sql = "CREATE TABLE IF NOT EXISTS bookauthors(\n" +
        "AuthorID int (11) NOT NULL AUTO_INCREMENT,\n" +
        "nameF varchar(15) NOT NULL,\n" +
        "nameL varchar(15) NOT NULL,\n" +
        "PRIMARY KEY (AuthorID)\n" +
        ");";
    conn.query(sql, function (error, results, fields) {
        if (error) return console.log(error);
        console.log('Tabela de autores criada com sucesso!');
    });
};

function addRows(conn) {
    const sql = "INSERT INTO bookauthors(AuthorID,nameF,nameL) VALUES ?";
    const values = [
        [34, 'Machado', 'de Assis'],
        [35, 'Jorge', 'Amado'],
        [36, 'Gil', 'Vicente']
    ];
    conn.query(sql, [values], function (error, results, fields) {
        if (error) return console.log(error);
        console.log('Autores adicionados!');
        conn.end();//fecha a conexão
    });
}

//Conecta no MySQL executando as duas funções acima:
connection.connect(function (err) {
    if (err) return console.log(err);
    console.log('Funções executadas no MySQL!');
    createTable(connection);
    addRows(connection);
})


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

