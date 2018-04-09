var yo = require('yo-yo');


module.exports = function pictureCard(pic) {
    var el;

    function render(picture) {
        return yo`<div class="card ${picture.liked ? 'liked' : ''}">
                <div class="card-image">
                    <img class="activator" src="${picture.url}">
                </div>
                <div class="card-content">
                    <a href="/user/${picture.user.username}" class="card-title">
                        <img class="avatar" src="${picture.user.avatar}"> />
                        <span class="username">${picture.user.username}</span>
                    </a>
                    <small class="right time">Hace 1 dia</small>
                    <p>
                        <a class="left" href="" onclick=${like}><i class="far fa-heart lleno" aria-hidden="true"></i></a>
                        <a class="left" href="" onclick=${dislike}><i class="fas fa-heart vacio" aria-hidden="true"></i></a>
                        <span class="left likes">${picture.likes} Me gusta</span>
                    </p>
                </div>
            </div>`
    }

    function like() {
        pic.liked = true;
        pic.likes++;
        var newELement = render(pic);
        yo.update(el, newELement);
        return false;
    }
    function dislike() {
        pic.liked = true;
        pic.likes--;
        var newELement = render(pic);
        yo.update(el, newELement);
        return false;
    }
    el = render(pic);
    return el;
}