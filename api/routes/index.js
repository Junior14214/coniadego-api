const bodyParser = require('body-parser')

const produto = require('./produtoRoute')
const usuario = require('./usuariosRoute')
const auth = require('./authRoute')
const role = require('./role')
const permissao = require('./permissao')
const seguranca = require('./seguranca')
const membros = require('./membrosRoutes')
const historico = require('./historicoRoutes')
const endereco = require('./enderecoRoutes')
const cargo = require('./cargoRoute')
const login = require('./loginRoute')
const situacao = require('./situacaoRoute')
const estado_civil = require('./estadoCivilRoute')
const ministerio = require('./ministerioRoute')

module.exports = app => {
    app.use(
        bodyParser.json(),
        auth,
        usuario,
        produto,
        membros,
        role,
        permissao,
        seguranca,
        historico,
        endereco,
        login,
        cargo,
        situacao,
        estado_civil,
        ministerio
    )
}