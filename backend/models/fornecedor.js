const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const fornecedor = sequelize.define('fornecedor',{
    nome:{
        type:DataTypes.STRING,
        allowNull:false
    },

    cnpj:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },

    telefone:{
        type:DataTypes.STRING,
        allowNull:true
    },

    email:{
        type:DataTypes.STRING,
        allowNull:true
    },
    
    endereco:{
        type:DataTypes.STRING,
        allowNull:true
    }
},{
    tableName:'fornecedores',
    timestamps:true
});

module.exports = fornecedor;