const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const mysql = require('mysql')
const db = mysql.createConnection(config)
try {
    db.connect();
  } catch (err) {
    console.log(err);
  }

const sql = `INSERT INTO people(name) values ('Mike')`
db.query(sql)

const sqlDois = `SELECT * FROM people`


getNames =function(){
    return new Promise(function(resolve, reject){
      db.query(
        sqlDois, 
          function(err, rows){                                                
              if(rows === undefined){
                  reject(new Error("Error rows is undefined"));
              }else{
                  resolve(rows);
              }
          }
      )}
  )}

  
// const names = db.query(sqlDois, (err, results) => {
//     if (err) {
//      console.log(err)
//     }
//     console.log(results, "RESULTADOS")
//     return results
//    })

let html = '<h1>Full Cycle Rocks!</h1>'

function makeHtml(element) {
    console.log(element.name, "ELEMENTOOOO")
    html += `
    <p>${element.name}</p>`
}
getNames()
.then(function(results){
  results.forEach(element => {
      makeHtml(element)
  });
})
.catch(function(err){
  console.log("Promise rejection error: "+err);
})

app.get('/', (req, res) => res.send(html))

app.listen(3000);
