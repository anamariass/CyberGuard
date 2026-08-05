const mysql = require("mysql2");

const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "2010gabi",
    database: "estoque"
});

conexao.connect((erro) => {
    if (erro) {
        console.log("Erro ao conectar:", erro);
        return;
    }

    console.log("Conectado ao MySQL!");
});

module.exports = conexao;