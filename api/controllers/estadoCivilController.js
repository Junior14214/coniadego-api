const EstadoCivilService = require('../services/estadoCivilService')
const estadoCivilService = new EstadoCivilService()

class EstadoCivilController {

    static async cadastrarEstadoCivil(req, res) {
        const {
            nome
        } = req.body

        try {
            const estadoCivil = await estadoCivilService.cadastrarEstadoCivil({
                nome
            })

            res.status(201).json(estadoCivil)

        } catch (error) {
            console.log('Message error: ', error.message)
            res.status(400).send({ message: error.message })
        }
    }

    static async buscarTodosEstadoCivils(req, res) {
        const estadoCivil = await estadoCivilService.buscarTodosEstadoCivils()

        res.status(200).json(estadoCivil)
    }

    static async buscarEstadoCivilPorId(req, res) {
        try {
            const { id } = req.params
            const estadoCivil = await estadoCivilService.buscarEstadoCivilPorId(id)

            res.status(200).json(estadoCivil)
        } catch (error) {
            console.log('Message error: ', error.message)
            res.status(400).send({ message: error.message })
        }
    }

    static async deletarEstadoCivilPorId(req, res) {
        const { id } = req.params

        try {
            await estadoCivilService.deletarEstadoCivilPorId(id)

            res.status(200).send({ message: 'EstadoCivil deletada com sucesso!' })

        } catch (error) {
            console.log('Message error: ', error.message)
            res.status(400).send({ message: error.message })
        }
    }

    static async editarEstadoCivil(req, res) {
        const { id } = req.params
        const {
            nome
        } = req.body

        try {
            const estadoCivil = await estadoCivilService.editarEstadoCivil({
                nome
            })

            res.status(200).json(estadoCivil)
        } catch (error) {
            console.log('Message error: ', error.message)
            res.status(400).send({ message: error.message })
        }
    }

}

module.exports = EstadoCivilController;