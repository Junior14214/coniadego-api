const { Router } = require('express')
const AuthController = require('../controllers/authController')

const router = Router()

router
    .post('/auth/login', AuthController.login)
    .post('/auth/logout', AuthController.logout)

module.exports = router