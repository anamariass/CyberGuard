const cors = require("cors");
const express = require("express");
const sequelize = require("../config/db");
const estoque = require("../models/estoque");

const router = express.Router();



router.get("/listar", async (req, res) => {
    try {
        const produtos = await estoque.findAll();

        res.json(produtos);

    } catch (erro) {
        res.status(500).json({
            mensagem: "Erro ao listar os produtos.",
            erro: erro.message
        });
    }
});

router.get("/consultar/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const produto = await estoque.findByPk(id);

        if (!produto) {
            return res.status(404).json({
                mensagem: "Produto não encontrado."
            });
        }

        res.json(produto);

    } catch (erro) {
        res.status(500).json({
            mensagem: "Erro ao consultar o produto.",
            erro: erro.message
        });
    }
});



router.post("/cadastrar", async (req, res) => {

    try {

        console.log("Entrou na rota cadastrar");

        const {
            id,
            nome,
            categoria,
            quantidade,
            preco_unitario
        } = req.body;

        const produto = await estoque.create({
            id,
            nome,
            categoria,
            quantidade,
            preco_unitario
        });

        res.status(201).json({
            mensagem: "Produto cadastrado.",
            produto: produto
        });

    } catch (erro) {

        console.log("Erro:", erro);

        res.status(500).json({
            mensagem: "Erro ao cadastrar o produto.",
            erro: erro.message
        });

    }

});


router.put("/atualizar/:id", async (req, res) => {

    try {

        const { id } = req.params;

        const {
            nome,
            categoria,
            quantidade,
            preco_unitario
        } = req.body;

        const produto = await estoque.findByPk(id);

        if (!produto) {
            return res.status(404).json({
                mensagem: "Produto não encontrado."
            });
        }

        await produto.update({
            nome,
            categoria,
            quantidade,
            preco_unitario
        });

        res.json({
            mensagem: "Produto atualizado com sucesso!",
            produto: produto
        });

    } catch (erro) {

        res.status(500).json({
            mensagem: "Erro ao atualizar o produto.",
            erro: erro.message
        });

    }

});


router.patch("/alterar/:id", async (req, res) => {

    try {

        const { id } = req.params;

        const {
            nome,
            categoria,
            quantidade,
            preco_unitario
        } = req.body;

        const produto = await estoque.findByPk(id);

        if (!produto) {
            return res.status(404).json({
                mensagem: "Produto não encontrado."
            });
        }

        const campos = {};

        if (nome !== undefined) {
            campos.nome = nome;
        }

        if (categoria !== undefined) {
            campos.categoria = categoria;
        }

        if (quantidade !== undefined) {
            campos.quantidade = quantidade;
        }

        if (preco_unitario !== undefined) {
            campos.preco_unitario = preco_unitario;
        }

        if (Object.keys(campos).length === 0) {
            return res.status(400).json({
                mensagem: "Nenhum campo foi enviado para atualização."
            });
        }

        await produto.update(campos);

        res.json({
            mensagem: "Produto atualizado com sucesso!",
            produto: produto
        });

    } catch (erro) {

        res.status(500).json({
            mensagem: "Erro ao alterar o produto.",
            erro: erro.message
        });

    }

});


router.delete("/excluir/:id", async (req, res) => {

    try {

        const { id } = req.params;

        const produto = await estoque.findByPk(id);

        if (!produto) {
            return res.status(404).json({
                mensagem: "Produto não encontrado."
            });
        }

        await produto.destroy();

        res.json({
            mensagem: "Produto excluído!"
        });

    } catch (erro) {

        res.status(500).json({
            mensagem: "Erro ao excluir o produto.",
            erro: erro.message
        });

    }

});

module.exports = router;