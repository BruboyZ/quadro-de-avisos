//Importanto dependencias
const express = require('express')
const bodyParser = require('body-parser')

//Iniciando express
const app = express()

//Configurando ejs e pasta publlica
app.set('view engine','ejs')
app.use(express.static('public'))

//Configurando body parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//rotas
app.get("/", (req,res)=>{
  res.send("Jacaré")
})

//Escutar a porta
app.listen(3000)


