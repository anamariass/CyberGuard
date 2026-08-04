const produtoRouter = require('./routers/produtoRouter');
const express = require('express');
const cors = require('cors');
const app = express();

const sequelize = require('./config/db');

app.use(express.json());
app.use(cors());

sequelize.authenticate()
.then(() => {
    console.log("Banco conectado!");
    return sequelize.sync();
})
.then(() => {
    console.log("Tabelas criadas!");
})
.catch((erro) => {
    console.log(erro);
});

app.use("/produtos", produtoRouter);

app.listen(3000, () => {
    console.log("Servidor rodando!");
});
