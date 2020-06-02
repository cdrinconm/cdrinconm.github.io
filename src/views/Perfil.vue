<template>
  <div class="divlogin">
    <div class="row container-fluid jumbotron">
        <div class="col-7 col-sm-7 col-md-7 col-lg-7 col-xl-7 offset-1 shadow p-3">
            <div class="card text-center" v-if="Role!=2">
              <div class="card-header ">
                <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" id="siguiendo-tab textcolor" data-toggle="tab" href="#siguiendo1" role="tab" aria-controls="siguiendo1" aria-selected="true">
                      Following
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="mesiguen-tab" data-toggle="tab" href="#mesiguen" role="tab" aria-controls="mesiguen" aria-selected="false">
                      Follow me
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="categorias-tab" data-toggle="tab" href="#categorias" role="tab" aria-controls="categorias" aria-selected="false">
                      Categories
                      <a href="#" class="badge badge-dark">9</a>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="articulosguardados-tab" data-toggle="tab" href="#articulosguardados" role="tab" aria-controls="articulosguardados" aria-selected="false">
                      Saved Publications
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="publicaciones-tab" data-toggle="tab" href="#publicaciones" role="tab" aria-controls="publicaciones" aria-selected="false" v-if="Role==1">
                      My Publications
                    </a>
                  </li>
                </ul>
              </div>
              <div class="card-body tab-content">
                <div class="tab-pane fade show active" id="siguiendo1" role="tabpanel" aria-labelledby="profile-tab">
                  <Siguiendo/>
                </div>
                <div class="tab-pane fade" id="mesiguen" role="tabpanel" aria-labelledby="profile-tab">
                  <MeSiguen/>
                </div>
                <div class="tab-pane fade" id="categorias" role="tabpanel" aria-labelledby="profile-tab">
                  <MyCategories/>
                </div>
                <div class="tab-pane fade" id="articulosguardados" role="tabpanel" aria-labelledby="profile-tab">
                  <SavedPublications/>
                </div>
                <div class="tab-pane fade" id="publicaciones" role="tabpanel" aria-labelledby="profile-tab" v-if="Role==1">
                  <MyPublications/>
                </div>
              </div>
            </div>
            <div class="card text-center" v-if="Role==2">
              <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                  <li class="nav-item">
                    <a class="nav-link active" id="usuarios-tab" data-toggle="tab" href="#usuarios" role="tab" aria-controls="usuarios" aria-selected="true">Todos los Usuarios</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="autores-tab" data-toggle="tab" href="#autores" role="tab" aria-controls="autores" aria-selected="true">Todos los Autores</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="solicitudesautoria-tab" data-toggle="tab" href="#solicitudesautoria" role="tab" aria-controls="solicitudesautoria" aria-selected="false">Solicitudes Autoria</a>
                  </li>
                </ul>
              </div>
              <div class="card-body tab-content">
                <div class="tab-pane fade show active" id="usuarios" role="tabpanel" aria-labelledby="usuarios-tab">
                  <Usuarios/>
                </div>
                <div class="tab-pane fade" id="autores" role="tabpanel" aria-labelledby="autores-tab">
                  <Autores/>
                </div>
                <div class="tab-pane fade" id="solicitudesautoria" role="tabpanel" aria-labelledby="solicitudesautoria-tab">
                  <SolicitudesAutoria/>
                </div>
              </div>
            </div>
        </div>
        <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
          <PerfilInfoPersonal/>
        </div>
    </div>      
  </div>
</template>

<script>
import axios from 'axios';
import {mapState,mapMutations} from 'vuex';
import SolicitudesAutoria from '../components/SolicitudesAutoria.vue'
import Usuarios from '../components/Usuarios.vue'
import Autores from '../components/Autores.vue'
import Siguiendo from '../components/Siguiendo.vue'
import MeSiguen from '../components/MeSiguen.vue'
import PerfilInfoPersonal from '../components/PerfilInfoPersonal.vue'
import MyCategories from '../components/MyCategories.vue'
import SavedPublications from '../components/SavedPublications.vue'
import MyPublications from '../components/MyPublications.vue'

const path = "/user";

export default {
  name: 'Ingenio',
  components:{
      SolicitudesAutoria,
      Usuarios,
      Autores,
      Siguiendo,
      MeSiguen,
      PerfilInfoPersonal,
      MyCategories,
      SavedPublications,
      MyPublications
  },
  data: function (){
    return {
      Role:3,
      nameRole: ''
    }
  },
  created: function(){
    this.Role = parseInt(localStorage.getItem('Role'));
    // switch(this.Role) {
    //   case "0":
    //     this.nameRole = 'Usuario'
    //     break;
    //   case "1":
    //     this.nameRole = 'Autor'
    //     break;
    //   case "2":
    //     this.nameRole = 'Administrador'
    //     break;
    //   default:
    //     this.nameRole = 'Error'
    //}
  },
  methods:{
  }
}
</script>

<style>
a { color: #01403A; }

</style>
