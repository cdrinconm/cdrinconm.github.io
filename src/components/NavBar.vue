<template>
<!----------------------------------------------- Barra de navegacion ------------------------------------------------------->
    <div id="NavBar">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <!-- fixed-top  -->
                <nav id="navbar" class="navbar navbar-expand-lg">
                    <!-- <i><h1>Ingenio</h1></i> -->
                    <router-link class="nav-link text-white" to="/">
                        <img src="../assets/images/IngenioLogo.png" class="card-img-top" alt="Personaje" style="height: 80px; width:160px">
                    </router-link>
                    <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button> -->
                    <div class="collapse navbar-collapse d-flex justify-content-around" id="navbarSupportedContent">
                        <!-- Categorias -->
                        <router-link class="nav-link text-white" to="/categorias">Categories</router-link>
                        <!-- Recientes -->
                        <router-link class="nav-link text-white" to="/lomasreciente">Recently</router-link>
                        <!-- Publicacion -->
                        <router-link class="nav-link text-white" to="/publication">Publication</router-link>
                        <!-- Contactenos -->
                        <router-link class="nav-link text-white" to="/contactenos">Contact us</router-link>
                        <!-- Contactenos -->
                        <router-link class="nav-link text-white"  to="/pruebas">Tests</router-link>
                        <!-- Perfil -->
                        <router-link class="nav-link text-white" to="/Perfil" v-if="Role!=3">Profile</router-link>
                        <!-- Registro -->
                        <a data-toggle="modal" data-target="#RegistrarseModal" v-if="Role==3">
                            <div class="card-body">
                                <button type="button" class="btn btn-outline-light">
                                    <b-icon icon="arrow-bar-up" aria-hidden="true"></b-icon>
                                    Sign Up
                                </button>
                            </div>
                        </a>
                        <!-- Iniciar sesion -->
                        <a data-toggle="modal" data-target="#IniciarSesionModal" v-if="Role==3">
                            <div class="card-body">
                                <button type="button" class="btn btn-outline-light" style="">
                                    <b-icon icon="arrow-bar-right" aria-hidden="true"></b-icon>
                                    Sign In
                                </button>
                            </div>
                        </a>
                        <!-- Cerrar sesion -->
                        <a data-toggle="modal" data-target="#CerrarSesionModal" v-if="Role!=3">
                            <div class="card-body">
                                <button type="button" class="btn btn-outline-light" style="">
                                    <b-icon icon="power" aria-hidden="true"></b-icon>
                                    Sign Out
                                </button>
                            </div>
                        </a>
                    </div>
                </nav>
            </div>
        </div>
        <div class="modal fade" id="IniciarSesionModal" tabindex="-1" role="dialog" aria-labelledby="IniciarSesionModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <!-- <div class="modal-header">
                    <h1 class="modal-title" id="IniciarSesionModal"><i>Bienvenido</i></h1>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div> -->
                    <div class="modal-body bg-light border border-dark rounded container">
                        <IniciarSesion/>
                        <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Ver mas</button>
                        <button type="button" class="btn btn-primary">Ir al sitio</button> -->
                    </div>
                    <!-- <div class="modal-footer">
                        Crear Footer
                        Terminos y Condiciones
                    </div> -->
                </div>
            </div>
        </div>
        <div class="modal fade" id="RegistrarseModal" tabindex="-1" role="dialog" aria-labelledby="RegistrarseModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <!-- <div class="modal-header">
                    <h1 class="modal-title" id="RegistrarseModal"><i>Bienvenido</i></h1>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div> -->
                    <div class="modal-body bg-light border border-dark rounded container">
                        <Registro/>
                        <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Ver mas</button>
                        <button type="button" class="btn btn-primary">Ir al sitio</button> -->
                    </div>
                    <!-- <div class="modal-footer">
                         Crear Footer
                        Terminos y Condiciones
                    </div> -->
                </div>
            </div>
        </div>
    </div>
<!----------------------------------------------- Barra de navegacion ------------------------------------------------------->
</template>

<script>
import IniciarSesion from './IniciarSesion.vue'
import Registro from './Registro.vue'

export default {
  name: 'NavBar',
  components:{
      IniciarSesion,
      Registro
  },
  data: function (){
    return {
      Role:3,
      nameRole: ''
    }
  },
  created: function(){
    this.Role = parseInt(localStorage.getItem('Role'));
     switch(this.Role) {
       case "0":
         this.nameRole = 'Usuario'
         break;
       case "1":
         this.nameRole = 'Autor'
         break;
       case "2":
         this.nameRole = 'Administrador'
         break;
       default:
         this.nameRole = 'Error'
    }
  }
}
</script>

 <style scoped>
 
 </style>