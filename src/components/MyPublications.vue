<template>
    <div class="divlogin">
      <div class="accordion" id="accordionExample2">
        <div class="card" v-for="item of savedPublications" :key="item.id">
          <div class="card-header" id="headingOne">
            <h2 class="mb-0">
              <button class="btn btn-link btn-block text-left " type="button" data-toggle="collapse" :data-target="'#P' + item.Id" aria-expanded="true" aria-controls="collapseOne">
                {{item.Name}}
              </button>
            </h2>
          </div>
          <div :id="'P' + item.Id" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample2">
            <div class="card-body">
              Description: {{item.Description}}
              <br/>
              <br/>
              Go to: URL...................
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
  name: 'MyPublications.vue',
  components: {},
  data: function (){
    return {
      savedPublications: {
          _1 :{
            Id: '1AB1',
            Name: 'Systemsaroundtheworld',
            Description: 'The systems are changing all days..'
          },
          _2:{
            Id: '2AB2',
            Name: 'Chemistrythebaseoflife',
            Description: 'Im a chemical engineer, and along my life..'
          },
          _3:{
            Id: '3AB3',
            Name: 'Civil',
            Description: 'Nowadays, the society...'
          },
          _4:{
            Id: '4AB4',
            Name: 'Industrial',
            Description: 'All companies in United States...'
          }
      }
    }
  },
  methods:{
  },
  computed:{}
}
</script>
