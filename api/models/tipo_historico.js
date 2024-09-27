'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class tipo_historico extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    tipo_historico.init({
        nome: DataTypes.STRING,
        codigo: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'tipo_historico',
        freezeTableName: true
    });
    return tipo_historico;
};