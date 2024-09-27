const { v4: uuidv4 } = require('uuid')
const database = require('../models')
const { Op } = require('sequelize')

class MembroService {

    async cadastrarMembro(dto) {
        const membro = await database.membros.findOne({
            where: {
                nome: dto.nome
            }
        });

        if (membro) {
            throw new Error('Membro já Cadastrado');
        }

        try {
            const newMembro = await database.membros.create({
                id: uuidv4(),
                nome: dto.nome,
                data_nascimento: dto.data_nascimento,
                nome_mae: dto.nome_mae,
                nome_pai: dto.nome_pai,
                sexo: dto.sexo,
                nacionalidade: dto.nacionalidade,
                naturalidade: dto.naturalidade,
                nome_conjuje: dto.nome_conjuje,
                data_nascimento_conjuje: dto.data_nascimento_conjuje,
                cpf: dto.cpf,
                rg: dto.rg,
                email: dto.email,
                telefone: dto.telefone,
                cargo_id: dto.cargo_id,
                estado_civil_id: dto.estado_civil_id,
                situacao_id: dto.situacao_id,
                endereco_id: dto.endereco_id,
                ministerio_id: dto.ministerio_id
            });

            return newMembro;
        } catch (error) {
            throw error;
        }
    }

    async buscarTodosMembros() {
        const membros = await database.membros.findAll({
            include: [{
                model: database.endereco,
                as: 'endereco'
            }, {
                model: database.situacao,
                as: 'situacao'
            }, {
                model: database.ministerio,
                as: 'ministerio'
            }, {
                model: database.cargos,
                as: 'cargo'
            }, {
                model: database.estado_civil,
                as: 'estado_civil'
            }],
            order: [
                ['rol', 'ASC']
            ]
        })

        return membros;
    }

    async buscarMembroPorId(id) {
        const membro = await database.membros.findOne({
            where: {
                id: id
            },
            include: [{
                    model: database.endereco,
                    as: 'endereco'
                }, {
                    model: database.situacao,
                    as: 'situacao'
                }, {
                    model: database.ministerio,
                    as: 'ministerio'
                }, {
                    model: database.cargos,
                    as: 'cargo'
                }, {
                    model: database.historico,
                    as: 'historico',
                    include: [{
                            model: database.tipo_historico,
                            as: 'tipo_historico'
                        }

                    ],
                    order: [
                        ['createdAt', 'DESC']
                    ]
                }

            ],
            order: [
                [{ model: database.historico, as: 'historico' }, 'createdAt', 'ASC'],
            ]
        });

        if (!membro) {
            throw new Error('Membro informado não cadastrado!')
        }

        return membro;
    }

    async buscarMembroFiltros(dto) {

        // Objeto que será usado para construir as condições da consulta
        const whereConditions = {};

        // Adiciona condições ao objeto se os filtros estiverem preenchidos
        if (dto.rol) {
            whereConditions.rol = dto.rol;
        }

        if (dto.nome) {
            whereConditions.nome = dto.nome;
        }

        if (dto.ministerio_id) {
            whereConditions.ministerio_id = dto.ministerio_id;
        }

        if (dto.cargo_id) {
            whereConditions.cargo_id = dto.cargo_id;
        }

        if (dto.situacao_id) {
            whereConditions.situacao_id = dto.situacao_id;
        }

        // Adiciona condição $or se houver mais de uma condição
        if (Object.keys(whereConditions).length > 1) {
            whereConditions[Op.or] = {...whereConditions };
        }

        const membro = await database.membros.findAll({
            where: whereConditions,
            include: [{
                    model: database.endereco,
                    as: 'endereco'
                },
                {
                    model: database.situacao,
                    as: 'situacao'
                },
                {
                    model: database.ministerio,
                    as: 'ministerio'
                },
                {
                    model: database.cargos,
                    as: 'cargo'
                },
                {
                    model: database.historico,
                    as: 'historico',
                    include: [{
                        model: database.tipo_historico,
                        as: 'tipo_historico'
                    }],
                    order: [
                        ['createdAt', 'DESC']
                    ]
                }
            ],
            order: [
                [{ model: database.historico, as: 'historico' }, 'createdAt', 'ASC'],
            ]
        });

        if (membro.length == 0) {
            throw new Error('Membro informado não encontrado!');
        }

        return membro;
    }

    async deletarMembroPorId(id) {
        const membro = await database.membros.findOne({
            where: {
                id: id
            }
        });

        if (!membro) {
            throw new Error('Membro informado não cadastrado!')
        }

        try {
            await database.membros.destroy({
                where: {
                    id: id
                }
            });
        } catch (error) {
            console.error('Message error: ', error.message)
            throw error;
        }
    }

    async editarMembro(dto) {
        const membro = await database.membros.findOne({
            where: {
                id: dto.id
            }
        });

        if (!membro) {
            throw new Error('Membro informado não cadastrado!')
        }

        try {
            membro.nome = dto.nome,
                membro.data_nascimento = dto.data_nascimento,
                membro.nome_mae = dto.nome_mae,
                membro.nome_pai = dto.nome_pai,
                membro.sexo = dto.sexo,
                membro.nacionalidade = dto.nacionalidade,
                membro.naturalidade = dto.naturalidade,
                membro.nome_conjuje = dto.nome_conjuje,
                membro.data_nascimento_conjuje = dto.data_nascimento_conjuje,
                membro.cpf = dto.cpf,
                membro.rg = dto.rg,
                membro.email = dto.email,
                membro.telefone = dto.telefone,
                membro.cargo_id = dto.cargo_id,
                membro.estado_civil_id = dto.estado_civil_id,
                membro.situacao_id = dto.situacao_id,
                membro.endereco_id = dto.endereco_id,
                membro.ministerio_id = dto.ministerio_id

            await membro.save()

            return await membro.reload()
        } catch (error) {
            console.error('Message error: ', error.message)
            throw error
        }
    }

}

module.exports = MembroService