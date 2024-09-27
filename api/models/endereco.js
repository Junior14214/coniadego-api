'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class endereco extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {}
    }
    endereco.init({
        cep: DataTypes.INTEGER,
        endereco: DataTypes.STRING,
        numero: DataTypes.INTEGER,
        complemento: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'endereco',
        freezeTableName: true
    });
    return endereco;
};