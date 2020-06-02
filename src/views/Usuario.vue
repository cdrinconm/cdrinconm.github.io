<template>
  <div class="row">
    <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
    </div>
    <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
      <div id="usuario" class="container mt-5 border border-dark rounded bg-light">
        <br/>
      <div class="row">
        <router-view></router-view>
      </div>
      <button @click="get()" class="btn btn-outline-dark mb-3 mt-3">Get</button>
      <div class="form-group col-12">
          <ul id="roles">
            <li v-for="role in roles" :key="role.id" :value="role.id">
              {{role.firstName}}, {{role.lastName}}, {{role.email1}}, {{role.description}}
            </li>
          </ul>
        </div>
      <button @click="register()" class="btn btn-outline-dark mb-3 mt-3">Post</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

  export default{
    name: "Usuario",
    data: function (){
      return {
        form:{
          type: 0 // 0 - Iniciar Sesion , 1 - Registro,  2 - Recuperar contraseña
        },
        //Get
        roles: [],
        //Post
        firstName: "Pepito",
        lastName: "Perez",
        email1: "pperez@gmail.com",
        password: "12345",
        email2: "pepo@gmail.com",
        description: "Prueba 2 Desde Vue"
      }
    },
    beforeCreate( ){
    },
    methods:{
      changeType(val){
        this.form.type = val;
      },
      //REST API
      register( event ){
            axios
            .post( this.$store.state.backURL + "/user", // URL

                {
                    "firstName": this.firstName,
                    "lastName": this.lastName,
                    "email1": this.email1,
                    "password": this.password,
                    "email2": this.email2,
                    "description": this.description
                }
            ).then( response => {
                if( response.status !== 201 ){
                    alert( "Error en la autenticación" );
                }else{
                    //localStorage.setItem( 'token', response.data.access_token );
                    //alert( "Funciono esta vaina!" )
                    console.log(response);
                    //this.$router.push( {name: 'home'} )
                }
            } ).catch( error => {
                if( error.response.status === 400 ){
                    alert( "Credenciales incorrectas" );
                }else{
                    alert( "¡Parece que hubo un error de comunicación con el servidor!" );
                }
            } );
            //event.preventDefault();
        },
      get( event ){
            axios
            .get( this.$store.state.backURL + "/user", // URL
            ).then( response => {
                if( response.status !== 200 ){
                    alert( "Error en la autenticación" );
                }else{
                    //localStorage.setItem( 'token', response.data.access_token );
                    //alert( "Funciono esta vaina!" )
                    console.log(response.data);
                    this.roles = response.data;
                }
            } ).catch( error => {
                if( error.response.status === 400 ){
                    alert( "Credenciales incorrectas" );
                }else{
                    alert( "¡Parece que hubo un error de comunicación con el servidor!" );
                }
            } );
            //event.preventDefault();
        }
    },
    components:{
    }
  }
</script>