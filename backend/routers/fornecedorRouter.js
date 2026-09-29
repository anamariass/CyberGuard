const express = require('express');
const router = express.Router();
const sequelize = require("../config/db");
const Fornecedor = require('../models/fornecedor');

console.log("fornecedorRoutes carregado!");

router.post("/cadastrar", async (req, res) => {
    try {
        const fornecedor = await Fornecedor.create({
            nome: req.body.nome,
            cnpj: req.body.cnpj,
            telefone: req.body.telefone,
            email: req.body.email,
            endereco: req.body.endereco
        });

        res.status(201).json(fornecedor);

    } catch (erro) {
        console.log(erro);
        res.status(500).json({
            erro: erro.message
        });
    }
});


router.get("/listar", async (req, res) => {
    try {
        const fornecedore = await Fornecedor.findAll();

        res.status(200).json(fornecedore);

    } catch (error) {
        console.error("listarFornecedores error:", error);

        res.status(500).json({
            error: error.message
        });
    }
});


router.get("/:id", async (req, res) => {
    try {
        const dados = await Fornecedor.findByPk(req.params.id);

        if (!dados) {
            return res.status(404).json({
                mensagem: "Fornecedor não encontrado."
            });
        }

        res.status(200).json(dados);

    } catch (error) {
        console.error("buscarFornecedor error:", error);

        res.status(500).json({
            error: error.message
        });
    }
});


router.put("/atualizar/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const [linhasAfetadas] = await Fornecedor.update(
            {
                nome: req.body.nome,
                cnpj: req.body.cnpj,
                telefone: req.body.telefone,
                email: req.body.email,
                endereco: req.body.endereco
            },
            {
                where: {
                    id: id
                }
            }
        );

        if (linhasAfetadas === 0) {
            return res.status(404).json({
                mensagem: "Fornecedor não encontrado!"
            });
        }

        res.json({
            mensagem: "Fornecedor atualizado com sucesso!"
        });

    } catch (erro) {
        console.error("Erro ao atualizar:", erro);

        res.status(500).json({
            erro: erro.message
        });
    }
});


router.delete("/excluir/:id", async (req, res) => {
    try {
        const linhasAfetadas = await Fornecedor.destroy({
            where: {
                id: req.params.id
            }
        });

        if (linhasAfetadas === 0) {
            return res.status(404).json({
                mensagem: "Fornecedor não encontrado!"
            });
        }

        res.status(200).json({
            mensagem: "Fornecedor excluído com sucesso!"
        });

    } catch (error) {
        console.error("excluirFornecedor error:", error);

        res.status(500).json({
            error: error.message
        });
    }
});


module.exports = router;