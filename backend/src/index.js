const app = require('./server');

const routes = require('./routes');

app.use(routes);

app.listen(3007, function(){
    console.log('Rodando na porta 3007');

});