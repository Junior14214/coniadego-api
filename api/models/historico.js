'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class historico extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            historico.belongsTo(models.tipo_historico, {
                foreignKey: 'tipo_historico_id',
                as: 'tipo_historico'
            })
        }
    }
    historico.init({
        rol: DataTypes.INTEGER,
        membro_id: DataTypes.UUID,
        nome: DataTypes.STRING,
        data_nascimento: DataTypes.DATE,
        nome_mae: DataTypes.STRING,
        nome_pai: DataTypes.STRING,
        sexo: DataTypes.STRING,
        nacionalidade: DataTypes.STRING,
        naturalidade: DataTypes.STRING,
        nome_conjuje: DataTypes.STRING,
        data_nascimento_conjuje: DataTypes.DATE,
        cpf: DataTypes.STRING,
        rg: DataTypes.STRING,
        cargo_id: DataTypes.UUID,
        estado_civil_id: DataTypes.UUID,
        situacao_id: DataTypes.UUID,
        ministerio_id: DataTypes.UUID,
        responsavel_alteracao: DataTypes.UUID,
        tipo_historico_id: DataTypes.UUID,
        historico: DataTypes.STRING,
        observacao: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'historico',
        freezeTableName: true
    });
    return historico;
};