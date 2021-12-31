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
                            <a class="navbar-brand" href="#">Bienvenido a CDRINCONM</a>
                            <a href="https://www.contadorvisitasgratis.com"><img src="https://counter7.stat.ovh/private/contadorvisitasgratis.php?c=etphut3c32rpdj87hljdbmtgp6yatclx"></a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                <div class="offcanvas-header">
                                    <div class="jumbotron menu">
                                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5></br>
                                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                </div>
                                <div class="offcanvas-body">
                                    <div class="list-group">
                                        <a href="./index.html" class="list-group-item list-group-item-action" aria-current="true">
                                            <div class="d-flex w-100 justify-content-between">
                                            <h5 class="mb-1">Inicio</h5>
                                            <small class="text-muted">3 days ago</small>
                                            </div>
                                            <p class="mb-1">Some placeholder content in a paragraph.</p>
                                            <small class="text-muted">And some small print.</small>
                                        </a>
                                        <a href="./css.html" class="list-group-item list-group-item-action">
                                            <div class="d-flex w-100 justify-content-between">
                                            <h5 class="mb-1">Diseños en CSS</h5>
                                            <small class="text-muted">3 days ago</small>
                                            </div>
                                            <p class="mb-1">Some placeholder content in a paragraph.</p>
                                            <small class="text-muted">And some muted small print.</small>
                                        </a>
                                        <a href="https://cdrinconm.github.io/vc/" target="_blank" class="list-group-item list-group-item-action">
                                            <div class="d-flex w-100 justify-content-between">
                                            <h5 class="mb-1">Computacion Visual</h5>
                                            <small class="text-muted">3 days ago</small>
                                            </div>
                                            <p class="mb-1">Some placeholder content in a paragraph.</p>
                                            <small class="text-muted">And some muted small print.</small>
                                        </a>
                                        <a href="./cv.html" class="list-group-item list-group-item-action">
                                            <div class="d-flex w-100 justify-content-between">
                                            <h5 class="mb-1">Mi Hoja de Vida</h5>
                                            <small class="text-muted">3 days ago</small>
                                            </div>
                                            <p class="mb-1">Some placeholder content in a paragraph.</p>
                                            <small class="text-muted">And some muted small print.</small>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>`;
        return htmltags;
    };
}

window.customElements.define("saludo-basico", CRHeader);