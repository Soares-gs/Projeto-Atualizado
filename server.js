const usuario = require("./Models/usuario")

const express = require("express")
const app = express()
app.listen(3000)

app.use('/static',express.static(__dirname + '/public'))

app.get('/login',function(req,res){
    res.render("formulario")
})

const handlebars = require("express-handlebars")
const bodyparser = require("body-parser")

app.engine('handlebars',handlebars({defaultLayout:'main'}))
app.set('view engine','handlebars')

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

//esse bloco e disparado pelo enviar do formulario
app.post('/cadUsuario',function(req,res){
    usuario.create({
        nome:req.body.nome,
        senha:req.body.senha
    }).then(function(){
        res.send("Cadastro com Sucesso")
    }).catch(function(erro){
        res.send("Erro" +erro)
    })
})

app.get('/',function(req,res){
    //res.send('ola, essa e a pagina cadastro')
    res.render('pag1')
})

app.get('/login',function(req,res){
    //res.send('ola, essa e a pagina login')
    res.render('login')
})

app.get('/doaçao',function(req,res){
    res.send('ola, essa e a pagina de doaçao')
    //res.render('login)
})




