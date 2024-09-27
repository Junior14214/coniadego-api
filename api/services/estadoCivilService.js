const { v4: uuidv4 } = require('uuid')
const database = require('../models')

class EstadoCivilService {

    async cadastrarEstadoCivil(dto) {

        const historico = await database.estado_civil.findOne({
            where: {
                nome: dto.nome
            }
        });

        if (historico) {
            throw new Error('Estado Civil já Cadastrado');
        }

        try {
            const newEstadoCivil = await database.estado_civil.create({
                id: uuidv4(),
                nome: dto.nome
            });

            return newEstadoCivil;
        } catch (error) {
            throw error;
        }
    }

    async buscarTodosEstadoCivils() {
        const estadoCivil = await database.estado_civil.findAll()

        return estadoCivil;
    }

    async buscarEstadoCivilPorId(id) {
        const estadoCivil = await database.estado_civil.findOne({
            where: {
                id: id
            }
        });

        if (!estadoCivil) {
            throw new Error('Estado Civil informado não cadastrado!')
        }

        return estadoCivil;
    }

    async deletarEstadoCivilPorId(id) {
        const estadoCivil = await database.estado_civil.findOne({
            where: {
                id: id
            }
        });

        if (!estadoCivil) {
            throw new Error('Estado Civil informado não cadastrado!')
        }

        try {
            await database.estado_civil.destroy({
                where: {
                    id: id
                }
            });
        } catch (error) {
            console.error('Message error: ', error.message)
            throw error;
        }
    }

    async editarEstadoCivil(dto) {
        const estadoCivil = await database.estado_civil.findOne({
            where: {
                id: dto.id
            }
        });

        if (!estadoCivil) {
            throw new Error('Estado Civil informado não cadastrado!')
        }

        try {
            estadoCivil.cep,
                estadoCivil.estadoCivil,
                estadoCivil.numero,
                estadoCivil.complemento

            await estadoCivil.save()

            return await estadoCivil.reload()
        } catch (error) {
            console.error('Message error: ', error.message)
            throw error
        }
    }

}

module.exports = EstadoCivilService