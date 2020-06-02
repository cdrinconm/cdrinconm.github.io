<template>
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div class="d-flex justify-content-between align-items-center">
            <label for="validationServer01"><h5>E-Mail: </h5></label>
            {{userdata.EMail}}
        </div>
        <br/>
        <div class="d-flex justify-content-between align-items-center">
            <label for="validationServer01"><h5>Profesional Card: </h5></label>
            {{userdata.ProfCard}}
        </div>
        <br/>
        <div class="d-flex justify-content-between align-items-center">
            <label for="validationServer01"><h5>Employment History: </h5></label>
            {{userdata.EmpHis}}
        </div>
        <br/>
        <div class="d-flex justify-content-between align-items-center">
            <label for="validationServer01"><h5>Academic History: </h5></label>
            {{userdata.AcaHis}}
            {{id}}
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
        
        userdata: {
            EMail: 'pp@gmail.com',
            ProfCard: '12345678-9',
            EmpHis: 'Nada',
            AcaHis: 'Nada'
        }
    
    }
    },
    props:['id'],
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
