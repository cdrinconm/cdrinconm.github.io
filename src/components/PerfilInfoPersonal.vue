<template>
    <div id="PerfilInfoPersonal">
        <div class="card text-center shadow p-3 mb-5 bg-white rounded" style="width: 18rem;">
            <img src="../assets/images/Perfil1.jpg" class="card-img-top" alt="...">
            <div class="card-body">
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <h5 class="card-title">Pepito Perez</h5>
                    Tu rol: {{nameRole}}<br/>
                    pp@gmail.com
                    <p class="card-text">
                    Hola! <br/>
                    Me gusta la ingenieria.
                    </p>  
                    <a data-toggle="modal" data-target="#SolicitudAutorModal" v-if="Role==0">
                        <div class="card-body">
                            <button id="boton" type="button" class="btn btn-outline-dark">Solicitud Autor</button>
                        </div>
                    </a>
                    <a data-toggle="modal" data-target="#SubirPublicacionModal" v-if="Role==1">
                        <div class="card-body">
                            <button id="boton" type="button" class="btn btn-outline-dark">Subir Publicacion</button>
                        </div>
                    </a>
                    <a data-toggle="modal" data-target="#CrearCategoriaModal" v-if="Role==2">
                        <div class="card-body">
                            <button id="boton" type="button" class="btn btn-outline-dark">Crear Categorias</button>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="modal fade" id="SolicitudAutorModal" tabindex="-1" role="dialog" aria-labelledby="SolicitudAutorModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
              <div class="modal-content">
                  <div class="modal-header bg-light">
                  <h1 class="modal-title" id="IniciarSesionModal"><i>Solicitud Autoria</i></h1>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
                  </div>
                  <div class="modal-body bg-light container">
                      <SolicitudAutor/>
                      <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Ver mas</button>
                      <button type="button" class="btn btn-primary">Ir al sitio</button> -->
                  </div>
                  <div class="modal-footer bg-light">
                      Terms y Conditions
                  </div>
              </div>
          </div>
      </div>
      <div class="modal fade" id="SubirPublicacionModal" tabindex="-1" role="dialog" aria-labelledby="SubirPublicacionModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
              <div class="modal-content">
                  <div class="modal-header bg-light">
                  <h1 class="modal-title" id="SubirPublicacionModal"><i>Add New Publication</i></h1>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
                  </div>
                  <div class="modal-body bg-light container">
                      <SubirPublicacion/>
                      <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Ver mas</button>
                      <button type="button" class="btn btn-primary">Ir al sitio</button> -->
                  </div>
                  <div class="modal-footer bg-light">
                      Terms y Conditions
                  </div>
              </div>
          </div>
      </div>
      <div class="modal fade" id="CrearCategoriaModal" tabindex="-1" role="dialog" aria-labelledby="CrearCategoriaModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-md modal-dialog-scrollable" role="document">
              <div class="modal-content">
                  <div class="modal-header bg-light">
                  <h1 class="modal-title" id="CrearCategoriaModal"><i>Add new category</i></h1>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
                  </div>
                  <div class="modal-body bg-light container">
                      <SubirCategoria/>
                      <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Ver mas</button>
                      <button type="button" class="btn btn-primary">Ir al sitio</button> -->
                  </div>
                  <div class="modal-footer bg-light">
                      Terms y Conditions
                  </div>
              </div>
          </div>
      </div>
    </div>
</template>

<script>
import Contactenos from '../views/Contactenos.vue'
import {mapState,mapMutations} from 'vuex';
import SolicitudAutor from '../components/SolicitudAutor.vue'
import SubirPublicacion from '../components/SubirPublicacion.vue'
import SubirCategoria from '../components/SubirCategoria.vue'

export default {
  name: 'PerfilInfoPersonal',
  components:{
      SolicitudAutor,
      SubirPublicacion,
      SubirCategoria
  },
  data: function (){
    return {
      Role:3,
      nameRole: ''
    }
  },
  created: function(){
    this.Role = localStorage.getItem('Role');
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
  },
  methods:{
    ...mapMutations(['cambiarRol'])  
  },
  computed:{
    ...mapState(['rol'])
  }
}
</script>

 <style scoped> 

 </style>