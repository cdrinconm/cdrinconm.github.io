<template>
    <div class="divlogin">
        <hr width="70%"/>
        <div class="row">
          <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3" v-for="item of items" :key="item.id">
            <div class="card" >
              <div  class="card">
                <img src="../assets/images/Perfil1.jpg" class="card-img-top" alt="item.img" />
                <!-- <img :src="item.img" class="card-img-top" alt="item.img" /> -->
                <div class="card-body">
                  <small class="card-title">{{item.nombre}}</small>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Activo hace {{item.id}} minutos</small>
                </div>
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
  name: 'Siguiendo.vue',
  components: {},
  data: function (){
    return {
      items: {
        usu1: {
          id:1,
          nombre: 'Pepo Perez',
          img: '../assets/images/Perfil1.jpg'
        },
        usu2: {
          id:2,
          nombre: 'Juana Arevalo',
          img: '../assets/images/Perfil2.jpg'
        },
        usu3: {
          id:3,
          nombre: 'Roman Romero',
          img: '../assets/images/Perfil3.jpg'
        },
        usu4: {
          id:4,
          nombre: 'Juancho Perez',
          img: '../assets/images/Perfil1.jpg'
        },
        usu5: {
          id:5,
          nombre: 'Juancho Perez 2',
          img: '../assets/images/Perfil1.jpg'
        }
      }
    }
    },
    methods:{

    },
    computed:{}
}
</script>
