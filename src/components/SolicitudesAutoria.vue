<template>
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <table class="table table-hover table-bordered" >
            <thead class="thead-light">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Acepted</th>
                    <th scope="col">Send</th>
                </tr>
            </thead>
            <tbody v-for="item of items" :key="item.id">
                <tr>
                    <th scope="row">{{item.id}}</th>
                    <td>
                        <a data-toggle="modal" data-target="#MoreInfoUser">
                            {{item.nombre}} {{item.apellido}}
                        </a>
                    </td>
                    <td><div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                        </div>
                    </td>
                    <td>
                        <button type="button" class="btn btn-primary">Send</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="modal fade" id="MoreInfoUser" tabindex="-1" role="dialog" aria-labelledby="MoreInfoUserModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-md modal-dialog-scrollable" role="document">
              <div class="modal-content">
                  <div class="modal-header bg-light">
                  <h1 class="modal-title" id="MoreInfoUserModal"><i>User Information</i></h1>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
                  </div>
                  <div class="modal-body bg-light container">
                      <MoreInfoUser :id="datoPasar"/>
                      <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Ver mas</button>
                      <button type="button" class="btn btn-primary">Ir al sitio</button> -->
                  </div>
                  <div class="modal-footer bg-light">
                      Terms y Conditions
                  </div>
              </div>
          </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import router from '../router'
import MoreInfoUser from '../components/MoreInfoUser.vue'

export default {
  name: 'Ingreso.vue',
  components: {
      MoreInfoUser
  },
  data: function (){
    return {
        datoPasar : 'Pasar a otro comp',
        items: {
        usu1: {
          id:1,
          nombre: 'Pepo',
          apellido: 'Perez',
          img: '../assets/images/Perfil1.jpg'
        },
        usu2: {
          id:2,
          nombre: 'Juana',
          apellido: 'Rodriguez',
          img: '../assets/images/Perfil2.jpg'
        },
        usu3: {
          id:3,
          nombre: 'Roman',
          apellido: 'Romero',
          img: '../assets/images/Perfil3.jpg'
        },
        usu4: {
          id:4,
          nombre: 'Juancho',
          apellido: 'Diaz',
          img: '../assets/images/Perfil1.jpg'
        },
        usu5: {
          id:5,
          nombre: 'Mari',
          apellido: 'Gonzalez',
          img: '../assets/images/Perfil1.jpg'
        }
      }
    
    }
    },
    methods:{
        login( event ){
                axios
                .post( this.$store.state.backURL + '/ingenio/signin', // URL
                    {
                        "email1": this.form.email1,
                        "password": this.form.password
                        //grant_type: 'password'
                    }
                ).then( response => {
                    if( response.status !== 200 ){
                        alert( "Error en la autenticación" );
                    }else{
                        localStorage.setItem( 'token', response.data.access_token );
                        alert( "¡Autenticación Exitosa! El token se ha almacenado en el Local Storage" )
                        //this.$router.push('principal')
                    }
                } ).catch( error => {
                    if( error.response.status === 400 ){
                      alert( "Credenciales incorrectas" );
                    }else{
                      alert( "¡Parece que hubo un error de comunicación con el servidor!" );
                    }
                } );

               // event.preventDefault();
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
            if(exp.test(this.form.email1)){
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
        }
    }
}
</script>
