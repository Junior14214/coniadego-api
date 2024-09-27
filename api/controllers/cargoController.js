const CargoService = require('../services/cargoService')
const cargoService = new CargoService()

class CargoController {

    static async cadastrarCargo(req, res) {
        const {
            nome
        } = req.body

        try {
            const cargo = await cargoService.cadastrarCargo({
                nome
            })

            res.status(201).json(cargo)

        } catch (error) {
            console.log('Message error: ', error.message)
            res.status(400).send({ message: error.message })
        }
    }

    static async buscarTodosCargos(req, res) {
        const cargo = await cargoService.buscarTodosCargos()

        res.status(200).json(cargo)
    }

    static async buscarCargoPorId(req, res) {
        try {
            const { id } = req.params
            const cargo = await cargoService.buscarCargoPorId(id)

            res.status(200).json(cargo)
        } catch (error) {
            console.log('Message error: ', error.message)
            res.status(400).send({ message: error.message })
        }
    }

    static async deletarCargoPorId(req, res) {
        const { id } = req.params

        try {
            await cargoService.deletarCargoPorId(id)

            res.status(200).send({ message: 'Cargo deletada com sucesso!' })

        } catch (error) {
            console.log('Message error: ', error.message)
            res.status(400).send({ message: error.message })
        }
    }

    static async editarCargo(req, res) {
        const { id } = req.params
        const {
            nome
        } = req.body

        try {
            const cargo = await cargoService.editarCargo({
                nome
            })

            res.status(200).json(cargo)
        } catch (error) {
            console.log('Message error: ', error.message)
            res.status(400).send({ message: error.message })
        }
    }

}

module.exports = CargoController;