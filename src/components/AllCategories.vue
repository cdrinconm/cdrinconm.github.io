<template>
    <div class="divlogin">
        <!-- <hr width="70%"/> -->
        <div class="row">
          <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 mt-5 offset-1">
            <div class="row">
              <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3" v-for="item of publicaciones" :key="item.id">
                <div class="card">
                  <img src="../assets/images/paris.jpg" class="card-img-top" alt="Paris">
                  <div class="card-body">
                      <router-link class="nav-link text-dark" to="/publication"><h5>{{item.title}}</h5></router-link>
                      <p class="card-text">
                      {{item.abstract}}
                      {{item.date}}
                      </p>
                      <!-- <div v-for="item2 of item.tags" :key="item2.id">
                        <button type="button" class="btn btn-outline-dark mt-2">{{item2}}</button>
                      </div> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <hr width="70%"/> -->
        <!-- <div class="row">
          <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 mt-5 offset-1">
            <div class="row row-cols-1 row-cols-md-3">
              <div class="col mb-3">
                <div class="card h-100">
                  <img src="../assets/images/Perfil1.jpg" class="card-img-top" alt="Perfil1">
                  <div class="card-body">
                    <h5 class="card-title">Autor 1</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <a href="http://www.freepik.com" target="_blank">Designed by Freepik</a>
                  </div>
                </div>
              </div>
              <div class="col mb-3">
                <div class="card h-100">
                  <img src="../assets/images/Perfil2.jpg" class="card-img-top" alt="Perfil2">
                  <div class="card-body">
                    <h5 class="card-title">Autor 2</h5>
                    <p class="card-text">This is a short card.</p>
                    <a href="http://www.freepik.com" target="_blank">Designed by Freepik</a>
                  </div>
                </div>
              </div>
              <div class="col mb-3">
                <div class="card h-100">
                  <img src="../assets/images/Perfil3.jpg" class="card-img-top" alt="Perfil3">
                  <div class="card-body">
                    <h5 class="card-title">Autor 3</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                    <a href="http://www.freepik.com" target="_blank">Designed by Freepik</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->
        <!-- <hr width="70%"/> -->
    </div>
</template>

<script>
import axios from 'axios';

const path = "/user";

export default {
  name: 'Ingenio.vue',
  components: {},
  data: function (){
    return {
      publicaciones:{},
      Role:3
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
    };
    //GetAllPublications
    axios
      .get( this.$store.state.backURL + '/publication/get-all-publications',
      ).then( response => {
          if( response.status !== 200 ){
              alert( "Error en la autenticación" );
          }else{
              this.publicaciones = response.data;
              //console.log(this.publicaciones);
              for(val of this.publicaciones){ 
                 console.log(val);
              }
              //this.$router.push('ingenio')
          }
      }).catch( error => {
          if( error.response.status === 400 ){
            alert( "Credenciales incorrectas" );
          }else{
            alert( "¡Parece que hubo un error de comunicación con el servidor!" );
          }
      });
  },
  methods:{},
  computed:{}
}
</script>
