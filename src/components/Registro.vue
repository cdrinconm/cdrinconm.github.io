<template>
    <div class="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 offset-2">
        <div class="divcont">
            <h1><i>Registro</i></h1>
            <form @submit.prevent="sendForm()" class="was-validated">
                <!-- Clases para form utiles: action="/action_page.php class="was-validated" -->
                <div class="form-group">
                    <label for="uname">Nombre:</label>
                    <input type="text" class="form-control" placeholder="Nombre" v-model="form.firstName" required>
                    <label for="uname">Apellido:</label>
                    <input type="text" class="form-control" placeholder="Apellido" v-model="form.lastName" required>
                    <label for="uname">Email:</label>
                    <input type="email" class="form-control" :class="{'border border-success':!validaEmail}" placeholder="Email" v-model="form.email1" required>
                    <label for="pwd">Contraseña:</label>
                    <input type="password" class="form-control" :class="{'border border-success':!validaPassword}" placeholder="Ingresar contraseña" v-model="form.password" required>
                    <label for="pwd">Repetir Contraseña:</label>
                    <input type="password" class="form-control" :class="{'border border-success':!validaRepetirPassword, 'border border-danger':validaRepetirPassword}" placeholder="Repetir contraseña" v-model="form.confirmPassword" required>
                    <label for="pwd">Email 2:</label>
                    <input type="email" class="form-control" :class="{'border border-success':!validaEmail}" placeholder="Email2" v-model="form.email2" required>
                    <label for="pwd">Descripcion:</label>
                    <div class="input-group">
                    <div class="input-group-prepend">
                        <!-- <span class="input-group-text">With textarea</span> -->
                    </div>
                    <textarea class="form-control" aria-label="With textarea" placeholder="Cuentanos algo de ti..." v-model="form.description"></textarea>
                    </div>
                    <div class="form-group form-check">
                        <label class="form-check-label">
                            <input class="form-check-input" type="checkbox" name="remember" required> Acepto los terminos y condiciones de Ingenio.
                        </label>
                    </div>
                    <button @click="register()"  class="btn btn-outline-dark">Registrarme</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import router from '../router'
export default {
  name: 'Ingreso.vue',
  components: {},
  data: function (){
    return {
        form:{
            type: 0, // 0 - Iniciar Sesion , 1 - Registro,  2 - Recuperar contraseña
            email1:"",
            confirmPassword:"",
            //Post
            firstName: "",
            lastName: "",
            password: "",
            email2: "",
            description: ""
        }
    }
    },
    methods:{
        //REST API
      register( event ){
            axios
            .post( this.$store.state.backURL +'/ingenio/signup', // URL
                {
                    "firstName": this.form.firstName,
                    "lastName": this.form.lastName,
                    "email1": this.form.email1,
                    "password": this.form.password,
                    "confirmPassword": this.form.confirmPassword,
                    "email2": this.form.email2,
                    "description": this.form.description
                }
            ).then( response => {
                if( response.status !== 201 ){
                    alert( "Error en la autenticación" );
                }else{
                    //localStorage.setItem( 'token', response.data.access_token );
                    //alert( "Funciono esta vaina!" )
                    console.log(response);
                    //this.$router.replace( {name: 'ingenio'} )
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
            if(this.form.password==this.form.confirmPassword && this.form.confirmPassword != ''){
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
