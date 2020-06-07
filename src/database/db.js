// importar a dependecia do sqlite3
const sqlite3 = require('sqlite3').verbose()

//Criar o objeto que irá fazer operações no bando de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

//Utilizar o objeto de banco de dados, para nossas operações
//db.serialize( () => {
//Com comandos sql:

//Criar uma tabela 
 //db.run(`
 //CREATE TABLE IF NOT EXISTS places (
   //     id INTEGER PRIMARY KEY AUTOINCREMENT,
     //   image TEXT,
       //name TEXT,
        //adress TEXT,
      //adress2 TEXT,
       //state TEXT,
        //city TEXT,
        //items TEXT
//); 
// `)
 //Inserir Dados na Tabela
//const query = `
  //  INSERT INTO places (        
    //image,
    //name,
    //adress,
    //adress2,
    //state,
    //city,
    //items
  //  ) VALUES (?,?,?,?,?,?,?);
// `
//const values = [
//"https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
//"Papersider",
//"Guilherme Genballa, Jardim América",
//"Nº 260",
 //"Santa Catarina",
//"Rio do Sul",
//"Papéis e Papelão"
 //]

//function afterInsertData(err){
//if(err){
  //     return console.log(err)
//}

   //console.log("Cadastrado com sucesso!")
  //  console.log(this)
//}

 //db.run(query, values, afterInsertData)

//Consultar os dados da tabela

//db.all('SELECT * FROM places', function(err,rows){
    //if(err){
  //       return console.log(err)
//}

    // console.log("Aqui estão seus registros: ")
  //   console.log(rows)
// })

     //Deletar um dado da tabela

 //db.run('DELETE FROM places WHERE id = ?', [4], function(err){
    //if(err){
    //   return console.log(err)
  //   }

   // console.log("Registro deletado com sucesso")
 //})

    
    
//})