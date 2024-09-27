const { Router } = require('express')
const MembroController = require('../controllers/membroController')

const router = Router()

router
    .post('/membros', MembroController.cadastrarMembro)
    .post('/membrosFiltros', MembroController.buscarMembroFiltros)
    .get('/membros', MembroController.buscarTodosMembros)
    .get('/membros/id/:id', MembroController.buscarMembroPorId)
    .delete('/membros/id/:id', MembroController.deletarMembroPorId)
    .put('/membros/id/:id', MembroController.editarMembro)

module.exports = router