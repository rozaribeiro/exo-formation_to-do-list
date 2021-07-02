//  C R I A C A O   D O  R O T E A D O R:

    // carrega o modulo express pq o routeur é um elemento deste
    const { response } = require("express");
    const express = require("express");
    // cria o router
    const router = express.Router();
    // cria o controllerTP que tem suas funçoes definidas no endereço indicado:
    const controllerTP = require("../controllers/controller");
      

//  C R I A C A O   D A S  R O T A S ( V E R B O  +  U R L ) :

    // rota "/"(raiz) => vai ser gerida por pela funçao findAll do controllerTP
    // o controllerTP é chamado acima (constante)
    router.get("/", controllerTP.findAllTrellos);
    router.get("/trello/:id", controllerTP.findTrello); //o "id" indica que o numero depois do / sera um id
    router.post("/addtrello", controllerTP.addTrello);
    router.post("/addtache", controllerTP.addTache);
    router.get("/findtache/:id", controllerTP.findTache);
    router.post("/edittache", controllerTP.editTache);
    router.get("/deletetache/:id", controllerTP.deleteTache);


// C R I A  U M  M O D U L O  C H A M A D O  E M  O U T R O S  A R Q U I V O S
    // o "module.exports" é usado para exportar um objeto
    // o "exports" é usado para exportar uma funçao
    module.exports = router;