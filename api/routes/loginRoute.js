const { Router } = require('express')
const LoginController = require('../controllers/loginController')

const router = Router()

router
    .post('/login', LoginController.getUsuarioLogado)

module.exports = router