<template>    
  <div class="divlogin jumbotron">        
      <div class="row">
          <div class="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 offset-1">
              <div class="card bg-dark text-white">
                <img src="../assets/images/Mecanica.jpg" class="card-img" alt="..." style="height: 200px; opacity: 0.2">
                <div class="card-img-overlay">
                  <h5 class="card-title">Mechanical Ingineering</h5><br/>
                  <p class="card-text">In this section you can find all about Mechanical Ingineering</p>
                  <!-- <p class="card-text">Last updated 3 mins ago</p> -->
                </div>
              </div>
          </div>
          <div class="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5">
              <div class="card bg-dark text-white">
                <img src="../assets/images/Agricola.jpg" class="card-img" alt="..." style="height: 200px; opacity: 0.2"> 
                <div class="card-img-overlay">
                  <h5 class="card-title">Agricultural Ingineering</h5><br/>
                  <p class="card-text">In this section you can find all about Agricultural Ingineering</p>
                  <!-- <p class="card-text">Last updated 3 mins ago</p> -->
                </div>
              </div>
          </div>
          <div class="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 mt-5 offset-1">
              <div class="card bg-dark text-white">
                <img src="../assets/images/Electronica.jpg" class="card-img" alt="..." style="height: 200px; opacity: 0.2">
                <div class="card-img-overlay">
                  <h5 class="card-title">Electronic Ingineering</h5><br/>
                  <p class="card-text">In this section you can find all about Electronic Ingineering</p>
                  <!-- <p class="card-text">Last updated 3 mins ago</p> -->
                </div>
              </div>
          </div>
          <div class="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 mt-5">
              <div class="card bg-dark text-white">
                <img src="../assets/images/Mecatronica.jpg" class="card-img" alt="..." style="height: 200px; opacity: 0.2"> 
                <div class="card-img-overlay">
                  <h5 class="card-title">Mechatronics Ingineering</h5><br/>
                  <p class="card-text">In this section you can find all about Mechatronics Ingineering</p>
                  <!-- <p class="card-text">Last updated 3 mins ago</p> -->
                </div>
              </div>
          </div>
          <div class="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 mt-5 offset-1">
              <div class="card bg-dark text-white">
                <img src="../assets/images/Civil.jpg" class="card-img" alt="..." style="height: 200px; opacity: 0.2">
                <div class="card-img-overlay">
                  <h5 class="card-title">Civil Ingineering</h5><br/>
                  <p class="card-text">In this section you can find all about Civil Ingineering</p>
                  <!-- <p class="card-text">Last updated 3 mins ago</p> -->
                </div>
              </div>
          </div>
          <div class="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 mt-5">
              <div class="card bg-dark text-white">
                <img src="../assets/images/Quimica.jpg" class="card-img" alt="..." style="height: 200px; opacity: 0.2"> 
                <div class="card-img-overlay">
                  <h5 class="card-title">Chemical Ingineering</h5><br/>
                  <p class="card-text">In this section you can find all about Chemical Ingineering</p>
                  <!-- <p class="card-text">Last updated 3 mins ago</p> -->
                </div>
              </div>
          </div>
          <div class="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 mt-5 offset-1">
              <div class="card bg-dark text-white">
                <img src="../assets/images/Sistemas.jpg" class="card-img" alt="..." style="height: 200px; opacity: 0.2"> 
                <div class="card-img-overlay">
                  <h5 class="card-title">Systems Ingineering</h5><br/>
                  <p class="card-text">In this section you can find all about Systems Ingineering</p>
                  <!-- <p class="card-text">Last updated 3 mins ago</p> -->
                </div>
              </div>
          </div>
          <div class="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 mt-5">
              <div class="card bg-dark text-white">
                <img src="../assets/images/Electrica.jpg" class="card-img" alt="..." style="height: 200px; opacity: 0.2">
                <div class="card-img-overlay">
                  <h5 class="card-title">Electric Ingineering</h5><br/>
                  <p class="card-text">In this section you can find all about Electric Ingineering</p>
                  <!-- <p class="card-text">Last updated 3 mins ago</p> -->
                </div>
              </div>
          </div>
          <div class="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 mt-5 offset-1">
              <div class="card bg-dark text-white">
                <img src="../assets/images/Industrial.jpg" class="card-img" alt="..." style="height: 200px; opacity: 0.2"> 
                <div class="card-img-overlay">
                  <h5 class="card-title">Industrial Ingineering</h5><br/>
                  <p class="card-text">In this section you can find all about Industrial Ingineering</p>
                  <!-- <p class="card-text">Last updated 3 mins ago</p> -->
                </div>
              </div>
          </div>
          <div class="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 mt-5">
              <div class="card bg-dark text-white">
                <img src="../assets/images/Otras.jpg" class="card-img" alt="..." style="height: 200px; opacity: 0.2"> 
                <div class="card-img-overlay">
                  <h5 class="card-title">Other Categories</h5><br/>
                  <p class="card-text">In this section you can find all about Other Categories</p>
                  <!-- <p class="card-text">Last updated 3 mins ago</p> -->
                </div>
              </div>
          </div>
      </div>
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
    }
    },
    methods:{
        
    },
    computed:{}
}
</script>
