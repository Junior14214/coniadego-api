const database = require('../models')
const { hash } = require('bcryptjs')
const uuid = require('uuid')

class EnderecoService {
    async cadastrarEndereco(dto) {
        try {
            const novoEndereco = await database.endereco.create({
                id: uuid.v4(),
                cep: dto.cep,
                endereco: dto.endereco,
                numero: dto.numero,
                complemento: dto.complemento
            })

            return novoEndereco
        } catch (error) {
            throw new Error('Erro ao cadastrar endereco' + error)
        }


    }

    async buscarTodosEnderecos() {
        const endereco = await database.endereco.findAll({})

        return endereco
    }

    async buscarEnderecoPorId(id) {
        const endereco = await database.endereco.findOne({
            where: {
                id: id
            }
        })

        if (!endereco) {
            throw new Error('Endereco informado não cadastrado!')
        }

        return endereco
    }

    async editarEndereco(dto) {
        const endereco = await this.buscarEnderecoPorId(dto.id)

        try {
            endereco.cep = dto.cep,
                endereco.endereco = dto.endereco,
                endereco.numero = dto.numero,
                endereco.complemento = dto.complemento

            await endereco.save()

            return endereco
        } catch (error) {
            throw new Error('Erro ao editar endereco!')
        }
    }

    async deletarEndereco(id) {
        await this.buscarEnderecoPorId(id)

        try {
            await database.endereco.destroy({
                where: {
                    id: id
                }
            })
        } catch (error) {
            throw new Error('Erro ao tentar deletar o endereco!')
        }
    }
}

module.exports = EnderecoService