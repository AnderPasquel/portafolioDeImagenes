var experss = require('express');
var app = experss();

app.set('view engine', 'pug');

app.use(experss.static('public'));


app.get('/',function(req,res){
    res.render('index', {title: 'Portafolio'});
});

app.get('/signup',function(req,res){
    res.render('index',{title: 'Portafolio-signup'});
});

app.get('/signin',function(req,res){
    res.render('index',{title: 'Portafolio-signin'});
});

app.listen(3000, function(err){
    if(err)return console.log('Algo Paso'), process.exit(1);

    console.log('Esuchando por el puerto 3000');
})