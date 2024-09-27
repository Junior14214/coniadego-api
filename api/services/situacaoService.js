const { v4: uuidv4 } = require('uuid')
const database = require('../models')

class SituacaoService {

    async cadastrarSituacao(dto) {

        const historico = await database.situacao.findOne({
            where: {
                nome: dto.nome
            }
        });

        if (historico) {
            throw new Error('Situacao já Cadastrado');
        }

        try {
            const newSituacao = await database.situacao.create({
                id: uuidv4(),
                nome: dto.nome
            });

            return newSituacao;
        } catch (error) {
            throw error;
        }
    }

    async buscarTodosSituacaos() {
        const situacao = await database.situacao.findAll()

        return situacao;
    }

    async buscarSituacaoPorId(id) {
        const situacao = await database.situacao.findOne({
            where: {
                id: id
            }
        });

        if (!situacao) {
            throw new Error('Situacao informado não cadastrado!')
        }

        return situacao;
    }

    async deletarSituacaoPorId(id) {
        const situacao = await database.situacao.findOne({
            where: {
                id: id
            }
        });

        if (!situacao) {
            throw new Error('Situacao informado não cadastrado!')
        }

        try {
            await database.situacao.destroy({
                where: {
                    id: id
                }
            });
        } catch (error) {
            console.error('Message error: ', error.message)
            throw error;
        }
    }

    async editarSituacao(dto) {
        const situacao = await database.situacao.findOne({
            where: {
                id: dto.id
            }
        });

        if (!situacao) {
            throw new Error('Situacao informado não cadastrado!')
        }

        try {
            situacao.cep,
                situacao.situacao,
                situacao.numero,
                situacao.complemento

            await situacao.save()

            return await situacao.reload()
        } catch (error) {
            console.error('Message error: ', error.message)
            throw error
        }
    }

}

module.exports = SituacaoService