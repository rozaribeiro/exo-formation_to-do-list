//  C R I A C A O   D O  S E R V I D O R :

      // carrega o modulo express:
      const express = require('express');
      // cria o servidor:
      const server = express();

//  I N S T A L A Ç A O   D O   B O D Y -  P A R S E R
      const bodyParser = require("body-parser");
      server.use(bodyParser.urlencoded({ extended: false }));
      
      // Sandro:
      // server.use(express.urlencoded({ extended: false }));

//  C R I A C A O   D O  M O T O R  D E  R E N D E R I Z A Ç A O :

      // carrega o motor de templates e suas funçoes (moteur de rendu)
      const ejs = require('ejs');
      // explicita que o "servidor.motor" vai usar a funçao renderFile do ejs
      server.engine('ejs', ejs.renderFile);
      // configuraçao do local onde o servidor deve procurar os views
      server.set('views', './src/views');
      // diz para usar o diretorio assets como repositorio de imagens e css
      // a funçao middleware "static" de express faz com que o diretorio...
      // em questao seja disponivel como se estivesse na raiz do servidor
      server.use(express.static("./src/assets"));


//  D I Z  A O  S E R V I D O R  Q U E  U S E  O  C O N T R O L A D O R  D E  R O T A S :
    
      // indicacao do endereço do router:
      const router = require('./routers')
      // comando para o servidor o usar:
      server.use(router);


//  I N D I C A  A O  S E R V I D O R  Q U A L  P O R T A  U S A R

      server.listen(5000, () => {
      console.log("servidor em funcionamento!")
           }); 