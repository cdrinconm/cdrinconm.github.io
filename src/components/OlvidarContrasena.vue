<template>
    <div class="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 offset-2 mt-3">
        <div class="divcont">
            <h1><i>Olvidar Contraseña</i></h1>
            <form @submit.prevent="sendForm()">
                <!-- Clases para form utiles: action="/action_page.php class="was-validated" -->
                <div>
                    <label for="uname">Ingresar Email:</label>
                    <input type="email" class="form-control" :class="{'border border-success':!validaEmail}" placeholder="Email" v-model="form.email" required>
                    <button @click="validar()" class="btn btn-outline-dark mb-3 mt-3">Olvide Contraseña</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

const path = "/user";

export default {
  name: 'Ingreso.vue',
  components: {},
  data: function (){
    return {
        form:{
            email:"",
            password:"",
            passwordos:"",

            //Post
            firstName: "Pepito",
            lastName: "Perez",
            email1: "pperez@gmail.com",
            password: "12345",
            email2: "pepo@gmail.com",
            description: "Prueba 2 Desde Vue"
        }
    }
    },
    methods:{
        // REST API
        register( event ){
            axios
            .post( this.$store.state.backURL + path, // URL

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
                    alert( "Funciono esta vaina!" )
                    console.log(response.message);
                    //this.$router.push( {name: 'home'} )
                }
            } ).catch( error => {
                if( error.response.status === 400 ){
                    alert( "Credenciales incorrectas" );
                }else{
                    alert( "¡Parece que hubo un error de comunicación con el servidor!" );
                }
            } );
            event.preventDefault();
        },
        sendForm(){
            if(this.validaType()){
                console.log(this.form);
            }
        },
        validaType(){
            if(this.form.type==0 && !this.validaEmail && !this.validaPassword){
                return true;
            }
            else if(this.form.type==1 && !this.validaEmail && !this.validaRepetirPassword){
                return true;
            }
            else if(this.form.type==2 && !this.validaEmail){
                return true;
            }
            return false;
        }

    },
    computed:{
        validaEmail(){
            var exp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if(exp.test(this.form.email)){
                return false;
            } else{
                return true;
            }
        },
        validaPassword(){
            var exp = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;
            if(exp.test(this.form.password)){
                return false;
            } else{
                return true;
            }
        },
        validaRepetirPassword(){
            if(this.form.password==this.form.passwordos && this.form.passwordos != ''){
                return false;
            } else{
                return true;
            }
        },
        title(){
            return (this.form.type==0)?'Iniciar Sesion':(this.form.type==1)?'Registro':'Recuperar contraseña';
        }
    }
}
</script>
