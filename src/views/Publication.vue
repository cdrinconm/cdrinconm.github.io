<template>    
  <div class="divlogin jumbotron">        
    <div class="row">
      <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 offset-1 shadow p-3 mb-5 rounded">
        <div class="jumbotron">
          <div class="row">
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-center">              
              <img src="../assets/images/PerfilMujer.jpg" class="w-100 p-3 border">
              <br/>
              <br/>
              <p class="lead text-center font-italic"><b>{{AuthorName}} {{AuthorLastName}} </b></p>
              
              <div class="list-group">
                <a class="list-group-item list-group-item-action" v-for="(item) in Categories" :key="item.id">
                  {{item}}
                </a>
              </div>
            </div>
            <div class="col-7 col-sm-7 col-md-7 col-lg-7 col-xl-7 offset-1">
              <h1 class="display-4 text-center">{{Title}}</h1>              
              <hr class="my-4">
              <p class="lead text-center font-italic"><b>Abstract: </b></p>
              <p class="lead text-justify font-italic">{{Abstract}}</p>
              <hr class="my-4">
              <p class="text-justify">{{Text}}</p>
              <hr class="my-4">
              Download PDF
              <br/>
              <button type="button" class="btn btn-outline-dark">
                <b-icon class="text-black" icon="download" font-scale="2"></b-icon>
              </button>
              <br/>
              <br/>
              Share Link
              <br/>
              <button type="button" class="btn btn-outline-dark">
                <b-icon icon="box-arrow-up-right" font-scale="2"></b-icon>
              </button>
              
              <!-- <b-button-toolbar>
                <b-button-group class="mr-1">
                  <b-button title="Save file">
                    <b-icon icon="cloud-upload" aria-hidden="true"></b-icon>
                  </b-button>
                  <b-button title="Load file">
                    <b-icon icon="cloud-download" aria-hidden="true"></b-icon>
                  </b-button>
                  <b-button title="New document">
                    <b-icon icon="file-earmark" aria-hidden="true"></b-icon>
                  </b-button>
                </b-button-group>
              </b-button-toolbar> -->
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
  name: 'Publication.vue',
  components: {},
  data: function (){
    return {
      Title: 'Paris, la capital del mundo',
      Abstract: 'En el mundo actual... bla bla bla',
      KeyWords: ['Francia','Capitales del Mundo'],
      Text: 'Paris ha sido una de las ciudades mas importantes debido a la cantidad de personas en el mundo que la visitan constantemente, dado que...',
      AuthorName: 'Juana',
      AuthorLastName: 'Martinez',
      Categories: ['Systems', 'Chemistry', 'Civil', 'Industrial']
    }
    },
    methods:{
        
    },
    computed:{}
}
</script>
