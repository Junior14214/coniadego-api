'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ministerio extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            ministerio.belongsTo(models.membros, {
                foreignKey: 'membro_id',
                as: 'membro'
            });

            ministerio.belongsTo(models.situacao, {
                foreignKey: 'situacao_id',
                as: 'situacao'
            });
        }
    }
    ministerio.init({
        cnpj: DataTypes.STRING,
        email: DataTypes.STRING,
        filiacao: DataTypes.STRING,
        fundacao: DataTypes.DATE,
        nome: DataTypes.STRING,
        membro_id: DataTypes.UUID,
        ddd: DataTypes.INTEGER,
        telefone: DataTypes.INTEGER,
        situacao_id: DataTypes.UUID,
        endereco: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'ministerio',
    });
    return ministerio;
};