"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
/* Acceso a BBDD de AWS

const sequelize = new Sequelize('prUsuarios', 'root', 'root2023', {

host: 'testbbdd.c00tjquuyvht.eu-north-1.rds.amazonaws.com',
dialect: 'mysql'

});

export default sequelize;

*/
/* Accesso a BBDD Local */
const sequelize = new sequelize_1.Sequelize('prusuarios', 'admin', 'admin2023', {
    host: '192.168.0.16',
    dialect: 'mysql',
});
exports.default = sequelize;
