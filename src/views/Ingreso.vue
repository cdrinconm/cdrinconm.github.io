<template>
<!----------------------------------------------- Ingreso ------------------------------------------------------->
    <div class="divlogin">
        <div class="row">
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
            </div>
            <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <div id="usuario" class="container mt-5 border border-dark rounded bg-light">
                    <div class="divcont">
                        <h1><i>{{title}}</i></h1>
                        <form @submit.prevent="sendForm()" @submit="register">
                            <button @click="register()" class="btn btn-outline-dark mb-3 mt-3">Post</button>
                            <!-- Clases para form utiles: action="/action_page.php class="was-validated" -->
                            <div class="form-group" v-if="form.type==0">
                                <label for="uname">Usuario:</label>
                                <input type="email" class="form-control" :class="{'border border-success':!validaEmail}" placeholder="Email" v-model="form.email" required>
                                <label for="pwd">Contraseña:</label>
                                <input type="password" class="form-control" v-if="form.type!=2" :class="{'border border-success':!validaPassword}" placeholder="Contraseña" v-model="form.password" required>
                                <!-- <div class="valid-feedback">Valid.</div>
                                <div class="invalid-feedback">Favor llenar este campo.</div> -->
                                <button @click="validar()" class="btn btn-outline-dark mb-3 mt-3" v-if="form.type==0">Ingresar</button>
                            </div>
                            <div class="form-group" v-if="form.type==1">
                                <label for="uname">Usuario:</label>
                                <input type="email" class="form-control" :class="{'border border-success':!validaEmail}" placeholder="Email" v-model="form.email" required>
                                <label for="pwd">Contraseña:</label>
                                <input type="password" class="form-control" :class="{'border border-success':!validaPassword}" placeholder="Ingresar contraseña" v-model="form.password" required>
                                <label for="pwd">Repetir Contraseña:</label>
                                <input type="password" class="form-control" :class="{'border border-success':!validaRepetirPassword, 'border border-danger':validaRepetirPassword}" placeholder="Repetir contraseña" v-model="form.passwordos" required>
                                <div class="form-group form-check">
                                    <label class="form-check-label">
                                        <input class="form-check-input" type="checkbox" name="remember" required> Acepto los terminos y condiciones de Ingenio.
                                    </label>
                                </div>
                                <button @click="validar()" class="btn btn-outline-dark mb-3 mt-3" v-if="form.type==1">Registrarme</button>
                            </div>
                            <div v-if="form.type==2">
                                <label for="uname">Ingresar Email:</label>
                                <input type="email" class="form-control" :class="{'border border-success':!validaEmail}" placeholder="Email" v-model="form.email" required>
                                <button @click="validar()" class="btn btn-outline-dark mb-3 mt-3">Olvide Contraseña</button>
                            </div>
                            <button type="button" class="btn btn-link" href="javascript:void(0)" @click="form.type=2" v-if="form.type!=2">Recuperar contraseña</button>
                            <button type="button" class="btn btn-link" href="javascript:void(0)" @click="form.type=1" v-if="form.type!=1">Registrarme</button>
                            <button type="button" class="btn btn-link" href="javascript:void(0)" @click="form.type=0" v-if="form.type!=0">Iniciar sesión</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
<!----------------------------------------------- Ingreso ------------------------------------------------------->
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
            type: 0, // 0 - Iniciar Sesion , 1 - Registro,  2 - Recuperar contraseña
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
                    //alert( "Funciono esta vaina!" )
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
