const SituacaoService = require('../services/situacaoService')
const situacaoService = new SituacaoService()

class SituacaoController {

    static async cadastrarSituacao(req, res) {
        const {
            nome
        } = req.body

        try {
            const situacao = await situacaoService.cadastrarSituacao({
                nome
            })

            res.status(201).json(situacao)

        } catch (error) {
            console.log('Message error: ', error.message)
            res.status(400).send({ message: error.message })
        }
    }

    static async buscarTodosSituacaos(req, res) {
        const situacao = await situacaoService.buscarTodosSituacaos()

        res.status(200).json(situacao)
    }

    static async buscarSituacaoPorId(req, res) {
        try {
            const { id } = req.params
            const situacao = await situacaoService.buscarSituacaoPorId(id)

            res.status(200).json(situacao)
        } catch (error) {
            console.log('Message error: ', error.message)
            res.status(400).send({ message: error.message })
        }
    }

    static async deletarSituacaoPorId(req, res) {
        const { id } = req.params

        try {
            await situacaoService.deletarSituacaoPorId(id)

            res.status(200).send({ message: 'Situacao deletada com sucesso!' })

        } catch (error) {
            console.log('Message error: ', error.message)
            res.status(400).send({ message: error.message })
        }
    }

    static async editarSituacao(req, res) {
        const { id } = req.params
        const {
            nome
        } = req.body

        try {
            const situacao = await situacaoService.editarSituacao({
                nome
            })

            res.status(200).json(situacao)
        } catch (error) {
            console.log('Message error: ', error.message)
            res.status(400).send({ message: error.message })
        }
    }

}

module.exports = SituacaoController;