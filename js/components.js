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
                                <div class="offcanvas-footer">
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
                                            <small class="text-muted">Home Page</small>
                                            </div>
                                            <p class="mb-1">Pagina inicial en donde esta la descripcion de todas las secciones.</p>
                                            <small class="text-muted">Editado el 3 Enero 2021.</small>
                                        </a>
                                        <a href="./css.html" class="list-group-item list-group-item-action">
                                            <div class="d-flex w-100 justify-content-between">
                                            <h5 class="mb-1">Diseños en CSS</h5>
                                            <small class="text-muted">CSS Designs</small>
                                            </div>
                                            <p class="mb-1">Algunos diseños hechos en CSS.</p>
                                            <small class="text-muted">Editado el 3 Enero 2021.</small>
                                        </a>
                                        <a href="https://cdrinconm.github.io/vc/" target="_blank" class="list-group-item list-group-item-action">
                                            <div class="d-flex w-100 justify-content-between">
                                            <h5 class="mb-1">Computacion Visual</h5>
                                            <small class="text-muted">Visual Computation</small>
                                            </div>
                                            <p class="mb-1">Programas hechos en p5.js.</p>
                                            <small class="text-muted">Editado el 3 Enero 2021.</small>
                                        </a>
                                        <a href="./cv.html" class="list-group-item list-group-item-action">
                                            <div class="d-flex w-100 justify-content-between">
                                            <h5 class="mb-1">Mi Hoja de Vida</h5>
                                            <small class="text-muted">Curriculum Vitae</small>
                                            </div>
                                            <p class="mb-1">Resumen de mi carrera profesional.</p>
                                            <small class="text-muted">Editado el 3 Enero 2021.</small>
                                        </a>
                                    </div>
                                </div>
                                <div class="offcanvas-footer">
                                    <div class="jumbotron footer">
                                        <div>
                                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Patreon</h5>
                                            <small class="text-muted">¿Quieres apoyarme?</small>
                                        </div>
                                        <button type="button" class="btn btn-outline-warning" h><a href="https://www.patreon.com/cdrinconm" target="_blank" class="text-dark">Link</a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>`;
        return htmltags;
    };
}

window.customElements.define("saludo-basico", CRHeader);