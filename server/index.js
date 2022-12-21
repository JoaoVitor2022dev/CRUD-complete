const express = require("express"); 
const app = express(); 
const mysql = require('mysql'); 
const cors = require('cors');
const { response } = require("express");

const db = mysql.createPool({
    host:"localhost", 
    user:"root", 
    password:"root123",
    database:"gamesstore"
})

// configuraçao de express e cors 
app.use(cors()); 
app.use(express.json());



app.get("/getCards", ( requisition , resposta ) => {
     
   let SQL = "SELECT * FROM games_register";

   db.query(SQL, ( error , result ) => {
        if (error) {
            console.log(` Error no dados: ${error}`);
        } else {
            resposta.send(result); 
            console.log(` Dados sendo enviados para o front front com sucesso...`);
        }
   })
})




// colocar dados dentro do banco de dadod 

app.post("/resgister", (requisition, response) => {
   const { name } = requisition.body; 
   const { cost } = requisition.body; 
   const { category } = requisition.body;
   
   let SQL = " INSERT INTO games_register(name,cost,category) VALUES (?,?,?)"; 

   db.query(SQL, [ name , cost , category ] , ( error ,  result ) => { 
       if (error) {
         console.log(error)
          return; 
       } 
       console.log('Dados enviados com sucesso');
   }); 
 
})

// servidor rodando 
app.listen(3002, () => {
    console.log(`servidor rodando...`);
})
