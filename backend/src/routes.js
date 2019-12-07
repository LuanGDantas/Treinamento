const express =  require('express');

const routes = express.Router();
const NoticiaCtrl = require('./Controllers/NoticiaControlle');

/*routes.get('/teste/', (req, res)=>{
    //return res.send(`Tecnologia: ${req.params.tech}`);
    //return res.send(`Tecnologia: ${req.query.tech}`);
    return res.send(`Tecnologia: ${req.body.tech}`);
});*/

routes.get('/noticias', NoticiaCtrl.teste);

module.exports = routes;

