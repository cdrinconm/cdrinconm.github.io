<template>
    <div class="divlogin">
      <div class="accordion" id="accordionExample">
        <div class="card" v-for="item of savedPublications" :key="item.id">
          <div class="card-header" id="headingOne">
            <h2 class="mb-0">
              <button class="btn btn-link btn-block text-left " type="button" data-toggle="collapse" :data-target="'#' + item.Name" aria-expanded="true" aria-controls="collapseOne">
                {{item.Name}}
              </button>
            </h2>
          </div>
          <div :id="item.Name" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
              Description: {{item.Description}}
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
      savedPublications: {
          _1 :{
            Name: 'Systems',
            Description: 'Hi, Im systems'
          },
          _2:{
            Name: 'Chemistry',
            Description: 'Hi, Im chemistry'
          },
          _3:{
            Name: 'Civil',
            Description: 'Hi, Im civil'
          },
          _4:{
            Name: 'Industrial',
            Description: 'Hi, Im industrial'
          }
      }
    }
  },
  methods:{
    selectCategory(item){
      this.Category = item;
      console.log(this.Category);
    }
  },
  computed:{}
}
</script>
