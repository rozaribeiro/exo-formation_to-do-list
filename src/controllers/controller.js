// colocar a variavel entre chaves permite aue outras variaveis 
// sejam definidas na mesma linha (separadas por virgulas)
// const { response } = require("express"); // nao sei para que serve

// carrega um modelo do seguinte endereço:
const trelloModel = require("../models/model")

// funçao assincronica findAll criada a partir do trelloModel.getAll 
// o trelloModel é definido numa constante acima (model.js)
  exports.findAllTrellos = (request, response) => {
  trelloModel.getAllTrellos((error, trello_liste) => {
    if (error) {
      response.send(error.message);
    } 
      response.render("index.ejs", { trello_liste });
      });
}

// funcao findTrellos criada a partir do trelloModel.getTrello 
exports.findTrello = (request, response) => {
  const { id } = request.params;
  trelloModel.getTrello(id, (error, result) => {
    if (error) {
      response.send(error.message);
    }
    const bdArray = result;
    const trelloName = result[0].nameTrello;
    response.render("trello.ejs", { bdArray, trelloName });
  });
}

// funcao addTrello criada a partir do trelloModel
// ATENÇAO : para ler o body da requisiçao de um form é preciso instalar 
// um middleware que se chama body-parser: install i body-parser
    exports.addTrello = (request, response) => {
      trelloModel.create(request.body, (error, result) => {
        if (error) {
          response.send(error.message);
        }
        response.redirect("/");
      })
    }

// funcao addTache criada a partir do trelloModel
exports.addTache = (request, response) => {
  trelloModel.createTache(request.body, (error, result) => {
    if (error) {
      response.send(error.message);
    }
    response.redirect('back');
  })
}

// funcao deleteTache criada a partir do trelloModel

exports.deleteTache = (request, response) => {
  const { id } = request.params;
  trelloModel.dropTache(id, (error, result) => {
    if (error) {
      response.send(error.message);
    }
    response.redirect('back');
  })
}

// funcao findTache criada a partir do trelloModel

exports.findTache = (request, response) => {
  const { id } = request.params;
  trelloModel.selectTache(id, (error, dataTache) => {
    if (error) {
      response.send(error.message);
    } 
      response.render("tache.ejs", { dataTache });
  })
}

// funcao editTache criada a partir do trelloModel
exports.editTache = (request, response) => {
  trelloModel.updateTache(request.body, (error, result) => {
    if (error) { 
      response.send(error.message);
      
    }
      console.log(request.body);
      console.log(response);
          
      response.redirect('/');
  })
}