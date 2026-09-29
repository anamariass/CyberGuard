const express = require('express');
const cors = require('cors');

const produtoRouter = require('./routers/produtoRouter');
const fornecedorRouter = require('./routers/fornecedorRouter');
const estoqueRouter = require('./routers/estoqueRouter');

const sequelize = require('./config/db');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/produtos', produtoRouter);
app.use('/fornecedor', fornecedorRouter);
app.use('/estoque', estoqueRouter);

sequelize.authenticate()
    .then(() => {
        console.log('Banco conectado!');
        return sequelize.sync();
    })
    .then(() => {
        console.log('Tabelas criadas!');
    })
    .catch((erro) => {
        console.error('Erro ao conectar:', erro);
    });

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000!');
});