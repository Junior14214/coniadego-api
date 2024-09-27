'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('membros', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUID
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
            email: {
                type: Sequelize.STRING
            },
            telefone: {
                type: Sequelize.STRING
            },
            cargo_id: {
                type: Sequelize.UUID,
                references: {
                    model: 'cargos',
                    key: 'id'
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            },
            estado_civil_id: {
                type: Sequelize.UUID,
                references: {
                    model: 'estado_civil',
                    key: 'id'
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            },
            situacao_id: {
                type: Sequelize.UUID,
                references: {
                    model: 'situacao',
                    key: 'id'
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            },
            endereco_id: {
                type: Sequelize.UUID,
                references: {
                    model: 'endereco',
                    key: 'id'
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            },
            ministerio_id: {
                type: Sequelize.UUID,
                references: {
                    model: 'ministerios',
                    key: 'id'
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
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
        await queryInterface.dropTable('membros');
    }
};