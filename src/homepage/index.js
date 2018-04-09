var page = require('page');
var empty = require('empty-element');
var template = require('./template.js');
var title = require('title');

page('/', function (ctx, next) {
    title('Portafolio');
    var main = document.getElementById('main-container');
    var pictures = [
        {
            user:{
                username:'Ander',
                avatar: 'https://scontent.fntr3-1.fna.fbcdn.net/v/t1.0-9/14095833_10209765400868919_6550536803304241945_n.jpg?_nc_cat=0&oh=c387fa03455799c3c973fd0497264553&oe=5B6BE247'
            },
            url:'office.jpg',
            likes: 10,
            liked: true
        },
        {
            user:{
                username:'Ander',
                avatar: 'https://scontent.fntr3-1.fna.fbcdn.net/v/t1.0-9/14095833_10209765400868919_6550536803304241945_n.jpg?_nc_cat=0&oh=c387fa03455799c3c973fd0497264553&oe=5B6BE247'
            },
            url:'office.jpg',
            likes: 2,
            liked: true
        }
        
    ];
    empty(main).appendChild(template(pictures));
})

