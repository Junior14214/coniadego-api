'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('ministerios', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUID
            },
            cnpj: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING
            },
            filiacao: {
                type: Sequelize.STRING
            },
            fundacao: {
                type: Sequelize.DATE
            },
            nome: {
                type: Sequelize.STRING
            },
            membro_id: {
                type: Sequelize.UUID,
                references: {
                    model: 'membros',
                    key: 'id'
                }
            },
            ddd: {
                type: Sequelize.INTEGER
            },
            telefone: {
                type: Sequelize.INTEGER
            },
            situacao_id: {
                type: Sequelize.UUID,
                references: {
                    model: 'situacao',
                    key: 'id'
                }
            },
            endereco: {
                type: Sequelize.STRING,
                allowNull: false
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
        await queryInterface.dropTable('ministerios');
    }
};