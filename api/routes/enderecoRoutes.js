const { Router } = require('express')
const EnderecoController = require('../controllers/enderecoController')

const router = Router()

router
    .post('/endereco', EnderecoController.cadastrarEndereco)
    .get('/endereco', EnderecoController.buscarTodosEnderecos)
    .get('/endereco/id/:id', EnderecoController.buscarEnderecoPorId)
    .delete('/endereco/id/:id', EnderecoController.deletarEnderecoPorId)
    .put('/endereco/id/:id', EnderecoController.editarEndereco)

module.exports = router