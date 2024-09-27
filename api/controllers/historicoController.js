const HistoricoService = require('../services/historicoService')
const historicoService = new HistoricoService()

class HistoricoController {

    static async cadastrarHistorico(req, res) {
        const {
            rol,
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
            cargo_id,
            estado_civil_id,
            situacao_id,
            ministerio_id,
            tipo_historico_id,
            historico,
            observacao
        } = req.body

        try {
            const hst = await historicoService.cadastrarHistorico({
                rol,
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
                cargo_id,
                estado_civil_id,
                situacao_id,
                ministerio_id,
                tipo_historico_id,
                historico,
                observacao
            })

            res.status(201).json(hst)

        } catch (error) {
            console.log('Message error: ', error.message)
            res.status(400).send({ message: error.message })
        }
    }

    static async buscarTodosHistoricos(req, res) {
        const historico = await historicoService.buscarTodosHistoricos()

        res.status(200).json(historico)
    }

    static async buscarHistoricoPorId(req, res) {
        try {
            const { id } = req.params
            const historico = await historicoService.buscarHistoricoPorId(id)

            res.status(200).json(historico)
        } catch (error) {
            console.log('Message error: ', error.message)
            res.status(400).send({ message: error.message })
        }
    }

    static async deletarHistoricoPorId(req, res) {
        const { id } = req.params

        try {
            await historicoService.deletarHistoricoPorId(id)

            res.status(200).send({ message: 'Historico deletada com sucesso!' })

        } catch (error) {
            console.log('Message error: ', error.message)
            res.status(400).send({ message: error.message })
        }
    }

    static async editarHistorico(req, res) {
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
            cargo_id,
            estado_civil_id,
            situacao_id
        } = req.body

        try {
            const historico = await historicoService.editarHistorico({
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
                cargo_id,
                estado_civil_id,
                situacao_id
            })

            res.status(200).json(historico)
        } catch (error) {
            console.log('Message error: ', error.message)
            res.status(400).send({ message: error.message })
        }
    }

    static async listarTipoHistorico(req, res) {
        const historico = await historicoService.buscarTodosTipoHistorico()

        res.status(200).json(historico)
    }

}

module.exports = HistoricoController;