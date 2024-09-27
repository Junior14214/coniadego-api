const EnderecoService = require('../services/enderecoService')
const enderecoService = new EnderecoService()

class EnderecoController {

    static async cadastrarEndereco(req, res) {
        const {
            id,
            cep,
            endereco,
            numero,
            complemento
        } = req.body

        try {
            var newEndereco;
            if (id) {
                newEndereco = await enderecoService.editarEndereco({
                    id,
                    cep,
                    endereco,
                    numero,
                    complemento
                })
            } else {
                newEndereco = await enderecoService.cadastrarEndereco({
                    id,
                    cep,
                    endereco,
                    numero,
                    complemento
                })
            }

            res.status(201).json(newEndereco)

        } catch (error) {
            console.log('Message error: ', error.message)
            res.status(400).send({ message: error.message })
        }
    }

    static async buscarTodosEnderecos(req, res) {
        const endereco = await enderecoService.buscarTodosEnderecos()

        res.status(200).json(endereco)
    }

    static async buscarEnderecoPorId(req, res) {
        try {
            const { id } = req.params
            const endereco = await enderecoService.buscarEnderecoPorId(id)

            res.status(200).json(endereco)
        } catch (error) {
            console.log('Message error: ', error.message)
            res.status(400).send({ message: error.message })
        }
    }

    static async deletarEnderecoPorId(req, res) {
        const { id } = req.params

        try {
            await enderecoService.deletarEnderecoPorId(id)

            res.status(200).send({ message: 'Endereco deletada com sucesso!' })

        } catch (error) {
            console.log('Message error: ', error.message)
            res.status(400).send({ message: error.message })
        }
    }

    static async editarEndereco(req, res) {
        const { id } = req.params
        const {
            cep,
            endereco,
            numero,
            complemento
        } = req.body

        try {
            const endereco = await enderecoService.editarEndereco({
                cep,
                endereco,
                numero,
                complemento
            })

            res.status(200).json(endereco)
        } catch (error) {
            console.log('Message error: ', error.message)
            res.status(400).send({ message: error.message })
        }
    }

}

module.exports = EnderecoController;