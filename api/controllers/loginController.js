const jsonSecret = require('../config/jsonSecret')

class LoginController {
    static getUsuarioLogado(req, res) {
        try {
            res.status(200).send(true)
        } catch (error) {
            res.status(401).send({ message: error.message })
        }
    }

}

module.exports = LoginController