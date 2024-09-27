const { v4: uuidv4 } = require('uuid')
const database = require('../models')

class HistoricoService {

    async cadastrarHistorico(dto) {
        try {
            const newHistorico = await database.historico.create({
                id: uuidv4(),
                membro_id: dto.id,
                rol: dto.rol,
                nome: dto.nome,
                data_nascimento: dto.data_nascimento,
                nome_mae: dto.nome_mae,
                nome_pai: dto.nome_pai,
                sexo: dto.sexo,
                nacionalidade: dto.nacionalidade,
                naturalidade: dto.naturalidade,
                nome_conjuje: dto.nome_conjuje,
                data_nascimento_conjuje: dto.data_nascimento_conjuje,
                cpf: dto.cpf,
                rg: dto.rg,
                cargo_id: dto.cargo_id,
                estado_civil_id: dto.estado_civil_id,
                situacao_id: dto.situacao_id,
                ministerio_id: dto.ministerio_id,
                tipo_historico_id: dto.tipo_historico_id,
                historico: dto.historico,
                observacao: dto.observacao
            });

            return newHistorico;
        } catch (error) {
            throw error;
        }
    }

    async buscarTodosHistoricos() {
        const historico = await database.historico.findAll()

        return historico;
    }

    async buscarTodosTipoHistorico() {
        const tipo_historico = await database.tipo_historico.findAll()

        return tipo_historico;
    }

    async buscarHistoricoPorId(id) {
        const historico = await database.historico.findOne({
            where: {
                id: id
            }
        });

        if (!historico) {
            throw new Error('Historico informado não cadastrado!')
        }

        return historico;
    }

    async deletarHistoricoPorId(id) {
        const historico = await database.historico.findOne({
            where: {
                id: id
            }
        });

        if (!historico) {
            throw new Error('Historico informado não cadastrado!')
        }

        try {
            await database.historico.destroy({
                where: {
                    id: id
                }
            });
        } catch (error) {
            console.error('Message error: ', error.message)
            throw error;
        }
    }

    async editarHistorico(dto) {
        const historico = await database.historico.findOne({
            where: {
                id: dto.id
            }
        });

        if (!historico) {
            throw new Error('Historico informado não cadastrado!')
        }

        try {
            historico.rol = dto.rol,
                historico.nome = dto.nome,
                historico.data_nascimento = dto.data_nascimento,
                historico.nome_mae = dto.nome_mae,
                historico.nome_pai = dto.nome_pai,
                historico.sexo = dto.sexo,
                historico.nacionalidade = dto.nacionalidade,
                historico.naturalidade = dto.naturalidade,
                historico.nome_conjuje = dto.nome_conjuje,
                historico.data_nascimento_conjuje = dto.data_nascimento_conjuje,
                historico.cpf = dto.cpf,
                historico.rg = dto.rg,
                historico.cargo_id = dto.cargo_id,
                historico.estado_civil_id = dto.estado_civil_id,
                historico.situacao_id = dto.situacao_id

            await historico.save()

            return await historico.reload()
        } catch (error) {
            console.error('Message error: ', error.message)
            throw error
        }
    }

}

module.exports = HistoricoService