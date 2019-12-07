const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

class App{
    constructor(){
        this.express = express();
        this.interceptors();
        this.connect();
    }

    interceptors(){
        this.express.use(cors());
        this.express.use(express.json());
    }

    connect(){
        mongoose.connect('mongodb+srv://elizieb:ebeye2313@cluster0-mngta.mongodb.net/test?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(sucess => console.log('Mongo ok'))
          .catch(erro => console.log("Mongo bugou"))
    }
}

module.exports = new App().express;
