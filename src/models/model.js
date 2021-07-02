const db = require("../db");

// F U N C A O  G E T A L L : funçao modelo que sera chamada pelo controllerTP
      // recupera todos as linhas da tabela trello
      // o "exports" é usado para exportar uma funçao
      // o "module.exports" é usado para exportar um objeto

      exports.getAllTrellos = (callback) => {
        db.query("SELECT * FROM trello ORDER BY nameTrello;", (error, result) => {
          if (error) { // se ha um erro...
            console.log("error: ", error); // mostra o erro no console
            callback(error, null); // reenvia a callback com erro e o resultado é nulo
            return; // o return aqui serve apenas para sair da funcao
          }
          callback(null, result); // se nao esta tudo ok... o erro é nulo 
        })                        // e a callback reenvia o resultado 
      }                           // encontrado pela funçao na base de dados


// F U N C A O  G E T T R E L L O : funçao modelo que sera chamada pelo controllerTP

      exports.getTrello = (id, callback) => {
        db.query(`SELECT * FROM trello INNER JOIN tache ON trello.id = ${id} WHERE tache.id_trello = ${id};`, (error, result) => {
          
          if (error) {
            console.log("error: ", error);
            callback(error, null);
            return;
          }
            callback(null, result);
        })
      }

// F U N C A O  C R E A T E  T R E L L O: funçao modelo que sera chamada pelo controllerTP

      exports.create = (entry, callback) => {
        db.query(`INSERT INTO trello (nameTrello) VALUES ("${entry.name}");`, (error, result) => {
          if (error) {
            console.log("error: ", error);
            callback(error, null);
            return;
          }
            callback(null, result);
        })
      }

// F U N C A O  C R E A T E  T A C H E : funçao modelo que sera chamada pelo controller
exports.createTache = (entry, callback) => {
  
  db.query(`INSERT INTO tache (date, nameTache, id_trello, description) VALUES ("${entry.date}", "${entry.name}", "${entry.id_trello}","${entry.description}");`, (error, result) => {
    if (error) {
      console.log("error: ", error);
      callback(error, null);
      return;
    }
    callback(null, result);
    })
}

// F U N C A O  D R O P  T A C H E : funçao modelo que sera chamada pelo controller
exports.dropTache = (id, callback) => {
  db.query(`DELETE FROM tache WHERE id = ${id};`, (error, result) => {

    if (error) {
      console.log("error: ", error);
      callback(error, null);
      return;
    }
      callback(null, result);
  })
}

// F U N C A O  S E L E C T  T A C H E : funçao modelo que sera chamada pelo controller

exports.selectTache = (id, callback) => {
  db.query(`SELECT * FROM tache WHERE id = ${id};`, (error, result) => {

    if (error) {
      console.log("error: ", error);
      callback(error, null);
      return;
    }
      callback(null, result);
  })
}

// F U N C A O  A L T E R  T A C H E : funçao modelo que sera chamada pelo controller

exports.updateTache = (entry, callback) => {

  db.query(`UPDATE tache SET description = "${entry.description}", fini = ${entry.fini} WHERE id = ${entry.id};`, (error, result) => {
      if (error) {
        console.log("error: ", error);
        callback(error, null);
        return;
      }
      callback(null, result);
      })
  }
