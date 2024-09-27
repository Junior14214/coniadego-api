const { v4: uuidv4 } = require('uuid')
const database = require('../models')

class CargoService {

    async cadastrarCargo(dto) {

        const historico = await database.cargos.findOne({
            where: {
                nome: dto.nome
            }
        });

        if (historico) {
            throw new Error('Cargo já Cadastrado');
        }

        try {
            const newCargo = await database.cargos.create({
                id: uuidv4(),
                nome: dto.nome
            });

            return newCargo;
        } catch (error) {
            throw error;
        }
    }

    async buscarTodosCargos() {
        const cargo = await database.cargos.findAll()

        return cargo;
    }

    async buscarCargoPorId(id) {
        const cargo = await database.cargos.findOne({
            where: {
                id: id
            }
        });

        if (!cargo) {
            throw new Error('Cargo informado não cadastrado!')
        }

        return cargo;
    }

    async deletarCargoPorId(id) {
        const cargo = await database.cargos.findOne({
            where: {
                id: id
            }
        });

        if (!cargo) {
            throw new Error('Cargo informado não cadastrado!')
        }

        try {
            await database.cargos.destroy({
                where: {
                    id: id
                }
            });
        } catch (error) {
            console.error('Message error: ', error.message)
            throw error;
        }
    }

    async editarCargo(dto) {
        const cargo = await database.cargos.findOne({
            where: {
                id: dto.id
            }
        });

        if (!cargo) {
            throw new Error('Cargo informado não cadastrado!')
        }

        try {
            cargo.cep,
                cargo.cargo,
                cargo.numero,
                cargo.complemento

            await cargo.save()

            return await cargo.reload()
        } catch (error) {
            console.error('Message error: ', error.message)
            throw error
        }
    }

}

module.exports = CargoService