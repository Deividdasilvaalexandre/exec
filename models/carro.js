const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Carro = db.define('carro',{
    codCarro: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    marca: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    ano: {
        type: DataTypes.DATE,
        allowNull: false
    }
})