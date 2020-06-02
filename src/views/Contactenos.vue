<template> 
    <div id="divclas">
        <div class="row jumbotron">
            <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 offset-3 shadow-lg p-3 mb-5">                
                <p class="text-right"><i><h1>Contactenos</h1></i></p>
                <br/>
                <p class="text-right" ><i><h3>
                Scrum Master:<br/>
                <h5>Guiselle Tatiana Zambrano Penagos</h5><br/>
                Desarrolladores:
                <h5>
                Valeria Huepa Ducuara<br/>
                Juan José Peña Becerra<br/>
                Carlos Daniel Rincón Mora<br/>
                </h5>
                <br/>  
                Product Owner:
                <h5>Sebastian David Moreno Bernal<br/>
                Ingenieria de Software II<br/>
                </h5>
                </h3></i></p>
            </div>
        </div>
        

    </div>
</template>

<script>
import axios from 'axios';
import { ToastPlugin } from 'bootstrap-vue';
import { BToast } from 'bootstrap-vue';

const path = "/user";

export default {
  name: 'Publication.vue',
  components: { 
    ToastPlugin,
    BToast
  },
  data: function (){
    return {
      hide: false,
      message: '',
      toastCount: 0 
    }
    },
    methods: {
    }
}
</script>

