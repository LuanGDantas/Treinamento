
class NoticiaControlle{
    teste(req, res){
        return res.send(`Tecnologia: ${req.body.tech}`);
    }
}

module.exports = new NoticiaControlle();
