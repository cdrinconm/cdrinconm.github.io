<template>
    <div class="divlogin jumbotron">
        <div class="row container-fuild">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" >
                <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                      <div class="carousel-item active" >
                        <img src="../assets/images/arches.jpg" class="d-block w-100" alt="Arches" style="height: 500px; opacity: 0.2">
                        <div class="carousel-caption d-none d-md-block text-dark">
                          <h1>Ingenio</h1>
                          <p>A web site where you could...</p>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <img src="../assets/images/building.jpg" class="d-block w-100" alt="building" style="height: 500px; opacity: 0.2">
                        <div class="carousel-caption d-none d-md-block text-dark">
                          <h1>Ingenio</h1>
                          <p>..find every notice, information or investigation ...</p>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <img src="../assets/images/car.jpg" class="d-block w-100" alt="car" style="height: 500px; opacity: 0.2">
                        <div class="carousel-caption d-none d-md-block text-dark">
                          <h1>Ingenio</h1>
                          <p>... of your favorites topics.</p>
                        </div>
                      </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                </div>
              <nav class="nav nav-tabs nav-justified shadow p-3 mb-5 bg-light rounded sticky-top">
                  <a class="nav-item nav-link active" id="all-tab" data-toggle="tab" href="#all" role="tab" aria-controls="all" aria-selected="true">All Categories</a>
                  <a class="nav-item nav-link" id="filter-tab" data-toggle="tab" href="#filter" role="tab" aria-controls="filter" aria-selected="false" v-for="item of categories" :key="item.id">{{item.name}}</a>
              </nav>
              <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
                  <AllCategories/>
                </div>
                <div class="tab-pane fade" id="filter" role="tabpanel" aria-labelledby="filter-tab">
                  <FilterCategories/>
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
    </div>
</template>

<script>
import axios from 'axios';
import AllCategories from '../components/AllCategories.vue'
import FilterCategories from '../components/FilterCategories.vue'

const path = "/user";

export default {
  name: 'Ingenio.vue',
  components: {
    AllCategories,
    FilterCategories
  },
  data: function (){
    return {
      categories:{},
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

    //Get Categories
    axios
      .get( this.$store.state.backURL + '/category/get-all-categories',
      ).then( response => {
          if( response.status !== 201 ){
              alert( "Error en la autenticación" );
          }else{
              //console.log(response);
              this.categories = response.data;
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
  methods:{    
    getCategories( event ){
      axios
      .get( this.$store.state.backURL + '/category/get-all-categories',
      ).then( response => {
          if( response.status !== 201 ){
              alert( "Error en la autenticación" );
          }else{
              console.log(response);
              this.categories = response.data;
              //this.$router.push('ingenio')
          }
      }).catch( error => {
          if( error.response.status === 400 ){
            alert( "Credenciales incorrectas" );
          }else{
            alert( "¡Parece que hubo un error de comunicación con el servidor!" );
          }
      });
      // event.preventDefault();
    }
    
  },
  computed:{}
}
</script>
