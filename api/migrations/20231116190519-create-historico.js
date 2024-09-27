'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('historico', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUID
            },
            membro_id: {
                type: Sequelize.UUID,
                references: {
                    model: 'membros',
                    key: 'id'
                }
            },
            rol: {
                type: Sequelize.INTEGER
            },
            nome: {
                type: Sequelize.STRING
            },
            data_nascimento: {
                type: Sequelize.DATE
            },
            nome_mae: {
                type: Sequelize.STRING
            },
            nome_pai: {
                type: Sequelize.STRING
            },
            sexo: {
                type: Sequelize.STRING
            },
            nacionalidade: {
                type: Sequelize.STRING
            },
            naturalidade: {
                type: Sequelize.STRING
            },
            nome_conjuje: {
                type: Sequelize.STRING
            },
            data_nascimento_conjuje: {
                type: Sequelize.DATE
            },
            cpf: {
                type: Sequelize.STRING
            },
            rg: {
                type: Sequelize.STRING
            },
            cargo_id: {
                type: Sequelize.UUID
            },
            estado_civil_id: {
                type: Sequelize.UUID,
                references: {
                    model: 'estado_civil',
                    key: 'id'
                }
            },
            situacao_id: {
                type: Sequelize.UUID,
                references: {
                    model: 'situacao',
                    key: 'id'
                }
            },
            ministerio_id: {
                type: Sequelize.UUID,
                references: {
                    model: 'ministerios',
                    key: 'id'
                }
            },
            responsavel_alteracao: {
                type: Sequelize.UUID,
                references: {
                    model: 'membros',
                    key: 'id'
                }
            },
            tipo_historico_id: {
                type: Sequelize.UUID,
                references: {
                    model: 'tipo_historico',
                    key: 'id'
                }
            },
            historico: {
                type: Sequelize.STRING
            },
            observacao: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('historico');
    }
};