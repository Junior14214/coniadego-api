const MinisterioService = require('../services/ministerioService')
const ministerioService = new MinisterioService()

class MinisterioController {

    static async cadastrarMinisterio(req, res) {
        const {
            cnpj,
            email,
            filiacao,
            fundacao,
            nome,
            membro_id,
            ddd,
            telefone,
            situacao_id,
            endereco
        } = req.body

        try {
            const ministerio = await ministerioService.cadastrarMinisterio({
                cnpj,
                email,
                filiacao,
                fundacao,
                nome,
                membro_id,
                ddd,
                telefone,
                situacao_id,
                endereco
            })

            res.status(201).json(ministerio)

        } catch (error) {
            console.log('Message error: ', error.message)
            res.status(400).send({ message: error.message })
        }
    }

    static async buscarTodosMinisterios(req, res) {
        const ministerios = await ministerioService.buscarTodosMinisterios()

        res.status(200).json(ministerios)
    }

    static async buscarMinisterioPorId(req, res) {
        try {
            const { id } = req.params
            const ministerio = await ministerioService.buscarMinisterioPorId(id)

            res.status(200).json(ministerio)
        } catch (error) {
            console.log('Message error: ', error.message)
            res.status(400).send({ message: error.message })
        }
    }

    static async deletarMinisterioPorId(req, res) {
        const { id } = req.params

        try {
            await ministerioService.deletarMinisterioPorId(id)

            res.status(200).send({ message: 'Ministerio deletada com sucesso!' })

        } catch (error) {
            console.log('Message error: ', error.message)
            res.status(400).send({ message: error.message })
        }
    }

    static async editarMinisterio(req, res) {
        const {
            id,
            cnpj,
            email,
            filiacao,
            fundacao,
            nome,
            pastor,
            ddd,
            telefone,
            situacao_id,
            endereco
        } = req.body

        try {
            const ministerio = await ministerioService.editarMinisterio({
                id,
                cnpj,
                email,
                filiacao,
                fundacao,
                nome,
                pastor,
                ddd,
                telefone,
                situacao_id,
                endereco
            })

            res.status(200).json(ministerio)
        } catch (error) {
            console.log('Message error: ', error.message)
            res.status(400).send({ message: error.message })
        }
    }

}

module.exports = MinisterioController;