'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class anuidade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  anuidade.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    descricao: DataTypes.STRING,
    valor: DataTypes.FLOAT,
    data_referencia_inicio: DataTypes.DATE,
    data_referencia_fim: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'anuidade',
  });
  return anuidade;
};