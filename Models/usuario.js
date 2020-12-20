const db = require('./db')

const usuario = db.sequelize.define('usuarios',{
    nome:{
        type:db.Sequelize.STRING
    },
    senha:{
        type:db.Sequelize.STRING
    }
})

//cria tabela - somente uma vez
//usuario.sync({force:true})

module.exports=usuario