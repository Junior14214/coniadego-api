const { Router } = require('express')
const SituacaoController = require('../controllers/situacaoController')

const router = Router()

router
    .post('/situacao', SituacaoController.cadastrarSituacao)
    .get('/situacao', SituacaoController.buscarTodosSituacaos)
    .get('/situacao/id/:id', SituacaoController.buscarSituacaoPorId)
    .delete('/situacao/id/:id', SituacaoController.deletarSituacaoPorId)
    .put('/situacao/id/:id', SituacaoController.editarSituacao)

module.exports = router