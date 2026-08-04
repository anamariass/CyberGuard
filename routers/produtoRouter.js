const express = require('express');
const router = express.Router();
const Produto = require('../models/produto');

console.log("produtoRoutes carregado!");

router.post("/cadastrar", async (req, res) => {
  try {
    const produto = await Produto.create({
      nome: req.body.nome,
      descricao: req.body.descricao,
      categoria: req.body.categoria,
      quantidade: req.body.quantidade,
      preco: req.body.preco,
      dataentrada: req.body.dataentrada
    });

    res.status(201).json(produto);
  } catch (erro) {
    console.log(erro);
    res.status(500).json({ erro: erro.message });
  }
});

router.get("/listar", async (req, res) => {
    try {

        const produtos = await Produto.findAll();

        res.status(200).json(produtos);

    } catch (error) {

        console.error("listarProdutos error:", error);

        res.status(500).json({
            error: error.message
        });

    }

});

router.get("/:id", async (req, res) => {
    try {

        const dados = await Produto.findByPk(req.params.id);

        if (!dados) {
            return res.status(404).json({
                mensagem: "Produto não encontrado."
            });
        }

        res.status(200).json(dados);

    } catch (error) {

        console.error("buscarProduto error:", error);

        res.status(500).json({
            error: error.message
        });

    }
});



router.put('/atualizar/:id', async (req, res) => {
    try {
        const { id } = req.params; 

        const [linhasAfetadas] = await Produto.update(req.body, {
            where: { id: id }
        });

        if (linhasAfetadas === 0) {
            return res.status(404).json({ mensagem: "Produto não encontrado!" });
        }

        res.json({ mensagem: "Produto atualizado com sucesso!" });
    } catch (erro) {
        console.error("Erro ao atualizar:", erro);
        res.status(500).json({ erro: erro.message });
    }
});


router.delete("/excluir/:id", async (req, res) => {
    try {

        await Produto.destroy({
            where: {
                id: req.params.id
            }
        });

        res.status(200).json({
            mensagem: "Produto excluído com sucesso!"
        });

    } catch (error) {

        console.error("excluirProduto error:", error);

        res.status(500).json({
            error: error.message
        });

    }
});






module.exports = router;