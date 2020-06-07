const express = require("express")
const server = express()

//Pegar o banco de dados
const db = require("./database/db")

//Configurar pasta public
server.use(express.static("public"))

//Habilitar o uso do req.body na nossa aplicação
server.use(express.urlencoded({extended: true}))

//Utilizando Template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views",{
    express: server,
    noCache: true
})

//Configurar Routas.

//Página Inicial
//req: requisição
//res: resposta
server.get("/", (req, res) => {
    return res.render("index.html",{
        title: "Um título"
    })
})

server.get("/create", (req, res) => {

    
    return res.render("create-point.html")

})

server.post("/save", (req,res) => {
    const query = `
        INSERT INTO places (
            image,
            name,
            adress,
            adress2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `
    const values = [

        req.body.image,
        req.body.name,
        req.body.adress,
        req.body.adress2,
        req.body.state,
        req.body.city,
        req.body.items,

    ]

    function afterInsertData(err){
        if(err){
            console.log(err)
            return res.send("Erro no cadastro")
        }

        console.log("Cadastrado com sucesso!")
        console.log(this)

        return res.render("create-point.html", {saved: true})
    }

    db.run(query, values, afterInsertData)
    
    
    
})

server.get("/search", (req, res) => {
    // pegar os dados do banco de dados
    const search = req.query.search
    if(search == ""){
        return res.render("search-results.html", {total:0})
    }

    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err,rows){
        if(err){
            return console.log(err)
        }

        const total = rows.length

        
        // mostrar a página do html com os dados do banco de dados
        return res.render("search-results.html", { places: rows, total} )
    })
 
})

//Ligar o servidor.
server.listen(3000)