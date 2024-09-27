const { Router } = require('express')
const HistoricoController = require('../controllers/historicoController')

const router = Router()

router
    .post('/historico', HistoricoController.cadastrarHistorico)
    .get('/historico', HistoricoController.buscarTodosHistoricos)
    .get('/historico/id/:id', HistoricoController.buscarHistoricoPorId)
    .get('/tipoHistorico', HistoricoController.listarTipoHistorico)
    .delete('/historico/id/:id', HistoricoController.deletarHistoricoPorId)
    .put('/historico/id/:id', HistoricoController.editarHistorico)

module.exports = router