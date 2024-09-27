const HistoricoService = require('../services/historicoService')
const MembroService = require('../services/membroService')
const membroService = new MembroService()
const historicoService = new HistoricoService();

class MembroController {

    static async cadastrarMembro(req, res) {
        const {
            id,
            nome,
            data_nascimento,
            nome_mae,
            nome_pai,
            sexo,
            nacionalidade,
            naturalidade,
            nome_conjuje,
            data_nascimento_conjuje,
            cpf,
            rg,
            email,
            telefone,
            cargo_id,
            estado_civil_id,
            situacao_id,
            endereco_id,
            ministerio_id
        } = req.body

        try {
            var membro

            if (id) {

                membro = await membroService.editarMembro({
                    id,
                    nome,
                    data_nascimento,
                    nome_mae,
                    nome_pai,
                    sexo,
                    nacionalidade,
                    naturalidade,
                    nome_conjuje,
                    data_nascimento_conjuje,
                    cpf,
                    rg,
                    email,
                    telefone,
                    cargo_id,
                    estado_civil_id,
                    situacao_id,
                    endereco_id,
                    ministerio_id
                })
            } else {
                membro = await membroService.cadastrarMembro({
                    nome,
                    data_nascimento,
                    nome_mae,
                    nome_pai,
                    sexo,
                    nacionalidade,
                    naturalidade,
                    nome_conjuje,
                    data_nascimento_conjuje,
                    cpf,
                    rg,
                    email,
                    telefone,
                    cargo_id,
                    estado_civil_id,
                    situacao_id,
                    endereco_id,
                    ministerio_id
                })
            }

            res.status(201).json(membro)

        } catch (error) {
            console.log('Message error: ', error.message)
            res.status(400).send({ message: error.message })
        }
    }

    static async cadastrarHistorico(req, res) {
        const {
            id,
            rol,
            nome,
            data_nascimento,
            nome_mae,
            nome_pai,
            sexo,
            nacionalidade,
            naturalidade,
            nome_conjuje,
            data_nascimento_conjuje,
            cpf,
            rg,
            email,
            telefone,
            cargo_id,
            estado_civil_id,
            situacao_id,
            endereco_id,
            ministerio_id,
            observacao
        } = req.body

        try {
            const historico = await historicoService.cadastrarHistorico({
                id,
                rol,
                nome,
                data_nascimento,
                nome_mae,
                nome_pai,
                sexo,
                nacionalidade,
                naturalidade,
                nome_conjuje,
                data_nascimento_conjuje,
                cpf,
                rg,
                email,
                telefone,
                cargo_id,
                estado_civil_id,
                situacao_id,
                endereco_id,
                ministerio_id,
                observacao
            })

            res.status(201).json(historico)

        } catch (error) {
            console.log('Message error: ', error.message)
            res.status(400).send({ message: error.message })
        }
    }

    static async buscarTodosMembros(req, res) {
        const membros = await membroService.buscarTodosMembros()

        res.status(200).json(membros)
    }

    static async buscarMembroPorId(req, res) {
        try {
            const { id } = req.params
            const membro = await membroService.buscarMembroPorId(id)

            res.status(200).json(membro)
        } catch (error) {
            console.log('Message error: ', error.message)
            res.status(400).send({ message: error.message })
        }
    }

    static async buscarMembroFiltros(req, res) {
        try {
            const {
                rol,
                nome,
                cargo_id,
                ministerio_id,
                situacao_id
            } = req.body
            console.log(rol, nome, cargo_id, ministerio_id)
            const membro = await membroService.buscarMembroFiltros({
                rol,
                nome,
                cargo_id,
                ministerio_id,
                situacao_id
            })

            res.status(200).json(membro)
        } catch (error) {
            console.log('Message error: ', error.message)
            res.status(400).send({ message: error.message })
        }
    }

    static async deletarMembroPorId(req, res) {
        const { id } = req.params

        try {
            await membroService.deletarMembroPorId(id)

            res.status(200).send({ message: 'Membro deletada com sucesso!' })

        } catch (error) {
            console.log('Message error: ', error.message)
            res.status(400).send({ message: error.message })
        }
    }

    static async editarMembro(req, res) {
        const { id } = req.params
        const {
            rol,
            nome,
            data_nascimento,
            nome_mae,
            nome_pai,
            sexo,
            nacionalidade,
            naturalidade,
            nome_conjuje,
            data_nascimento_conjuje,
            cpf,
            rg,
            email,
            telefone,
            cargo_id,
            estado_civil_id,
            situacao_id,
            endereco_id,
            ministerio_id
        } = req.body

        try {
            const membro = await membroService.editarMembro({
                id,
                rol,
                nome,
                data_nascimento,
                nome_mae,
                nome_pai,
                sexo,
                nacionalidade,
                naturalidade,
                nome_conjuje,
                data_nascimento_conjuje,
                cpf,
                rg,
                email,
                telefone,
                cargo_id,
                estado_civil_id,
                situacao_id,
                endereco_id,
                ministerio_id
            })

            res.status(200).json(membro)
        } catch (error) {
            console.log('Message error: ', error.message)
            res.status(400).send({ message: error.message })
        }
    }

}

module.exports = MembroController;