const { Sequelize } = require('sequelize')
const db = new Sequelize('ciber_exec','root','senai',{
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

