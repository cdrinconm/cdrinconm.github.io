<template>
    <div id="Footer">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <!-- fixed-bottom  -->
                <nav id="navbar" class="navbar navbar-expand-lg d-flex justify-content-between">
                    <router-link class="nav-link text-white" to="/"><i><h1>Ingenio</h1></i></router-link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <!-- Contactenos -->
                        <router-link class="nav-link text-white" to="/contactenos">Contactenos</router-link>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
import Contactenos from '../views/Contactenos.vue'

export default {
  name: 'Footer',
  components:{
      Contactenos
  }
}
</script>

 <style scoped>
 #footer {
    /* background-color: #012626; */
 }
 </style>