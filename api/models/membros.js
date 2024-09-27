'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class membros extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            membros.belongsTo(models.endereco, {
                foreignKey: 'endereco_id',
                as: 'endereco'
            })
            membros.belongsTo(models.situacao, {
                foreignKey: 'situacao_id',
                as: 'situacao'
            })
            membros.belongsTo(models.ministerio, {
                foreignKey: 'ministerio_id',
                as: 'ministerio'
            })
            membros.belongsTo(models.cargos, {
                foreignKey: 'cargo_id',
                as: 'cargo'
            })
            membros.hasMany(models.historico, {
                foreignKey: 'membro_id',
                as: 'historico'
            })
            membros.belongsTo(models.estado_civil, {
                foreignKey: 'estado_civil_id',
                as: 'estado_civil'
            })
        }
    }
    membros.init({
        rol: DataTypes.INTEGER,
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
        email: DataTypes.STRING,
        telefone: DataTypes.STRING,
        cargo_id: DataTypes.UUID,
        estado_civil_id: DataTypes.UUID,
        situacao_id: DataTypes.UUID,
        endereco_id: DataTypes.UUID,
        ministerio_id: DataTypes.UUID
    }, {
        sequelize,
        modelName: 'membros',
        freezeTableName: true
    });
    return membros;
};