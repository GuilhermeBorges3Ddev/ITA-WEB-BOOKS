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