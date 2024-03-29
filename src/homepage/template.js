var yo = require('yo-yo');
var layout = require('../layout');
var picture = require('../cards')

module.exports =  function (pictures) {
var el = yo`<div class="container timeline">
        <div class="row">
            <div clas="col s12 m10 l6 offset-l3">
                ${pictures.map(function(pic) {
                    return picture(pic);
                })}
            </div>
        </div>
    </div>`;

return layout(el);
}
