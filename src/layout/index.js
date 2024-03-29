var yo = require('yo-yo');

module.exports = function layout(content) {
  return yo`<div>
        <nav class="header">
            <div class="nav-wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col sl2 m6 offset-m1">
                            <a href="/" class="brand-logo portafolio">Portafolio</a>
                        </div>
                        <div class="col s2 m6 push-s10 push-m10">
                            <a  href="#" class=" waves-effect waves-light btn btn-large btn-flat dropdown-button" data-activates="drop-user">
                                <i class="material-icons">face</i>
                            </a>
                            <ul id="drop-user" class="dropdown-content">
                                <li><a href="#">Salir</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div class="content">
        ${content}
        </div>
    </div>`;
}
