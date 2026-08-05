import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import db from './db.js';


const app = express();

app.use(express.json());
app.use(cors());


app.post('/fornecedores', async (req, res) => {
    try {
        const { nome, cnpj, telefone, email, endereco } = req.body;

        const sql = `
            INSERT INTO fornecedores
            (nome, cnpj, telefone, email, endereco)
            VALUES (?, ?, ?, ?, ?)
        `;

        const [resultado] = await db.execute(sql, [
            nome,
            cnpj,
            telefone,
            email,
            endereco
        ]);

        res.status(201).json({
            id: resultado.insertId,
            nome,
            cnpj,
            telefone,
            email,
            endereco
        });

    } catch (erro) {
        console.error(erro);
        res.status(500).json({
            mensagem: 'Erro interno do servidor'
        });
    }
});


app.get('/fornecedores', async (req, res) => {
    try {
        const [fornecedores] = await db.execute(
            'SELECT * FROM fornecedores'
        );

        res.json(fornecedores);

    } catch (erro) {
        console.error(erro);
        res.status(500).json({
            mensagem: 'Erro interno do servidor'
        });
    }
});


app.get('/fornecedores/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const [fornecedor] = await db.execute(
            'SELECT * FROM fornecedores WHERE id = ?',
            [id]
        );

        if (fornecedor.length === 0) {
            return res.status(404).json({
                mensagem: 'Fornecedor não encontrado'
            });
        }

        res.json(fornecedor[0]);

    } catch (erro) {
        console.error(erro);
        res.status(500).json({
            mensagem: 'Erro interno do servidor'
        });
    }
});


app.put('/fornecedores/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, cnpj, telefone, email, endereco } = req.body;

        const sql = `
            UPDATE fornecedores
            SET
                nome = ?,
                cnpj = ?,
                telefone = ?,
                email = ?,
                endereco = ?
            WHERE id = ?
        `;

        const [resultado] = await db.execute(sql, [
            nome,
            cnpj,
            telefone,
            email,
            endereco,
            id
        ]);

        if (resultado.affectedRows === 0) {
            return res.status(404).json({
                mensagem: 'Fornecedor não encontrado'
            });
        }

        res.json({
            mensagem: 'Fornecedor atualizado com sucesso'
        });

    } catch (erro) {
        console.error(erro);
        res.status(500).json({
            mensagem: 'Erro interno do servidor'
        });
    }
});


app.delete('/fornecedores/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const [resultado] = await db.execute(
            'DELETE FROM fornecedores WHERE id = ?',
            [id]
        );

        if (resultado.affectedRows === 0) {
            return res.status(404).json({
                mensagem: 'Fornecedor não encontrado'
            });
        }

        res.json({
            mensagem: 'Fornecedor excluído com sucesso'
        });

    } catch (erro) {
        console.error(erro);
        res.status(500).json({
            mensagem: 'Erro interno do servidor'
        });
    }
});

app.listen(process.env.PORT, () => {
    console.log('Servidor rodando');
});