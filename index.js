const express = require('express')
const app = express();
const {engine} = require('express-handlebars');
const bodyParser = require('body-parser')

//configurando uso do handlebars
app.engine('view engine', 'handlebars')
app.set('handlebars', engine())

//configurando uso do bodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res)=>{
    res.render('list_usuario')
})

app.get('/cad_usuario', (req, res)=>{
    res.render('cad_usuario')
})

app.listen(8080, ()=>{
    console.log('app rodando')
})