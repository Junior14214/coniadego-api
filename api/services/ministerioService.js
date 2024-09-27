const { v4: uuidv4 } = require('uuid')
const database = require('../models')

class MinisterioService {

    async cadastrarMinisterio(dto) {

        const historico = await database.ministerio.findOne({
            where: {
                nome: dto.nome
            }
        });

        if (historico) {
            throw new Error('Ministério já Cadastrado');
        }

        try {
            const newMinisterio = await database.ministerio.create({
                id: uuidv4(),
                cnpj: dto.cnpj,
                email: dto.email,
                filiacao: dto.filiacao,
                fundacao: dto.fundacao,
                nome: dto.nome,
                membro_id: dto.membro_id,
                ddd: dto.ddd,
                telefone: dto.telefone,
                situacao_id: dto.situacao_id,
                endereco: dto.endereco
            });

            return newMinisterio;
        } catch (error) {
            throw error;
        }
    }

    async buscarTodosMinisterios() {
        const ministerio = await database.ministerio.findAll({
            include: [{
                model: database.membros,
                as: 'membro'
            }, {
                model: database.situacao,
                as: 'situacao'
            }]
        })

        return ministerio;
    }

    async buscarMinisterioPorId(id) {
        const ministerio = await database.ministerio.findOne({
            where: {
                id: id
            },
            include: [{
                model: database.membros,
                as: 'membro'
            }]
        });

        if (!ministerio) {
            throw new Error('Estado Civil informado não cadastrado!')
        }

        return ministerio;
    }

    async deletarMinisterioPorId(id) {
        const ministerio = await database.ministerio.findOne({
            where: {
                id: id
            }
        });

        if (!ministerio) {
            throw new Error('Estado Civil informado não cadastrado!')
        }

        try {
            await database.ministerio.destroy({
                where: {
                    id: id
                }
            });
        } catch (error) {
            console.error('Message error: ', error.message)
            throw error;
        }
    }

    async editarMinisterio(dto) {
        const ministerio = await database.ministerio.findOne({
            where: {
                id: dto.id
            }
        });

        if (!ministerio) {
            throw new Error('Estado Civil informado não cadastrado!')
        }

        try {
            ministerio.cnpj = dto.cnpj,
                ministerio.email = dto.email,
                ministerio.filiacao = dto.filiacao,
                ministerio.fundacao = dto.fundacao,
                ministerio.nome = dto.nome,
                ministerio.pastor = dto.pastor,
                ministerio.ddd = dto.ddd,
                ministerio.telefone = dto.telefone,
                ministerio.situacao_id = dto.situacao_id,
                ministerio.endereco = dto.endereco

            await ministerio.save()

            return await ministerio.reload()
        } catch (error) {
            console.error('Message error: ', error.message)
            throw error
        }
    }

}

module.exports = MinisterioService