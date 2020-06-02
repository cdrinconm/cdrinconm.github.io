<template>
    <div class="divlogin">
      <div v-for="(item) in Categories" :key="item.id">
        <p>
          <a class="btn btn-light btn-lg btn-block" data-toggle="collapse" :href="'#' + item.Name" role="button" aria-expanded="false" aria-controls="collapseExample">
            {{item.Name}}
            <a class="badge badge-dark text-white">{{item.NumNot}}</a>
          </a>
        </p>
        <div :id="item.Name" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
          <div class="card-body">
            Hi {{item.Name}}, you have {{item.NumNot}} notifications.
          </div>
        </div>
        <hr width="70%"/>
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
      Categories: {
          _1 :{
            Name: 'Systems',
            NumNot: 4
          },
          _2:{
            Name: 'Chemistry',
            NumNot: 2
          },
          _3:{
            Name: 'Civil',
            NumNot: 2
          },
          _4:{
            Name: 'Industrial',
            NumNot: 1
          }
      }
    }
  },
  methods:{
    
  },
  computed:{}
}
</script>
