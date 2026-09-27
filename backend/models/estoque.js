const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");

const estoque = sequelize.define("estoque", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },

    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    },

    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    preco_unitario: {
        type: DataTypes.FLOAT,
        allowNull: false
    }

}, {
    tableName: "estoque",
    timestamps: false
});

module.exports = estoque;