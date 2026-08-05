const cors = require("cors");

const express = require('express');
const conexao = require("./db");

const app = express();

app.use(express.json());
app.use(cors());

// Listar todos os produtos
app.get("/listar", (req, res) => {

    const sql = "SELECT * FROM produtos";

    conexao.query(sql, (erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.json(resultado);

    });

});

// Consultar um produto pelo ID
app.get("/consultar/:id", (req, res) => {

    const { id } = req.params;

    const sql = "SELECT * FROM produtos WHERE id = ?";

    conexao.query(sql, [id], (erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.json(resultado);

    });

});

// Cadastrar um novo produto
app.post("/cadastrar", (req, res) => {
    console.log("entrou na rota cadastrar");
    const { id, nome, categoria, quantidade, preco_unitario } = req.body;

    const sql = `
        INSERT INTO produtos
        (id, nome, categoria, quantidade, preco_unitario)
        VALUES (?, ?, ?, ?, ?)
    `;

    conexao.query(
        sql,
        [id, nome, categoria, quantidade, preco_unitario],

        (erro, resultado) => {
        console.log("Erro:", erro);
        console.log("Resultado:", resultado);

    if (erro) {
        return res.status(500).json({
            mensagem: "Erro ao cadastrar o produto.",
            erro: erro
        });
}

    res.status(201).json({
        mensagem: "produto cadastrado"
    });

});

});

// Atualizar todas as informações de um produto
app.put("/atualizar/:id", (req, res) => {

    const { id } = req.params;
    const { nome, categoria, quantidade, preco_unitario } = req.body;

    const sql = `
        UPDATE produtos
        SET nome = ?, categoria = ?, quantidade = ?, preco_unitario = ?
        WHERE id = ?
    `;

    conexao.query(
        sql,
        [nome, categoria, quantidade, preco_unitario, id],
        (erro, resultado) => {

            if (erro) {
                return res.status(500).json(erro);
            }

            res.send("Produto atualizado com sucesso!");

        }
    );

});

// Atualizar apenas algumas informações
app.patch("/alterar/:id", (req, res) => {

    const { id } = req.params;
    const { nome, categoria, quantidade, preco_unitario } = req.body;

    let campos = [];
    let valores = [];

    if (nome !== undefined) {
        campos.push("nome = ?");
        valores.push(nome);
    }

    if (categoria !== undefined) {
        campos.push("categoria = ?");
        valores.push(categoria);
    }

    if (quantidade !== undefined) {
        campos.push("quantidade = ?");
        valores.push(quantidade);
    }

    if (preco_unitario !== undefined) {
        campos.push("preco_unitario = ?");
        valores.push(preco_unitario);
    }

    if (campos.length === 0) {
        return res.status(400).json({
            mensagem: "Nenhum campo foi enviado para atualização."
        });
    }

    const sql = `UPDATE produtos SET ${campos.join(", ")} WHERE id = ?`;
    valores.push(id);

    conexao.query(sql, valores, (erro, resultado) => {
        if (erro) {
            return res.status(500).json(erro);
        }

        res.send("Produto atualizado com sucesso!");
    });

});

// Excluir um produto
app.delete("/excluir/:id", (req, res) => {

    const { id } = req.params;

    const sql = "DELETE FROM produtos WHERE id = ?";

    conexao.query(sql, [id], (erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.send("Produto excluído!");

    });

});

app.listen(
    3000, 
    () => console.log(`Servidor em execução`)
);