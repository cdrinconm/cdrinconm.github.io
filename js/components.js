class CRHeader extends HTMLElement{
    constructor(){
        super();
        this.saludo = 'Hola que tal';
    }

    connectedCallback(){
        this.innerHTML = this.getHeader();
    }

    disconnectedCallback(){
        
    }

    attributeChangedCallback(nombre, viejoValor, nuevoValor){
        //console.log(`${nombre} ha cambiado de ${viejoValor} a ${nuevoValor}`);
    }

    static get observedAttributes(){
        return ['nombre'];
    }

    getHeader(){
        let htmltags = ``;
        htmltags += `<nav class="navbar navbar-light bg-light fixed-top">
                        <div class="container-fluid">
                        <a class="navbar-brand" href="#">Bienvenido a CDRM</a>
                        <a href="https://www.contadorvisitasgratis.com"><img src="https://counter7.stat.ovh/private/contadorvisitasgratis.php?c=etphut3c32rpdj87hljdbmtgp6yatclx"></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="./index.html">Inicio</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="./cv.html">CV</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="./css.html">CSS</a>
                                </li>
                                <!--
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li>
                                        <hr class="dropdown-divider">
                                        </li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <form class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>-->
                            </div>
                        </div>
                        </div>
                    </nav>`;
        return htmltags;
    };
}

window.customElements.define("saludo-basico", CRHeader);