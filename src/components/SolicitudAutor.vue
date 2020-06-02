<template>
    <div id="SolicitudAutor">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <form ><!-- class="was-validated" -->
                    <div class="col-md-12 mb-3">
                        <label for="validationServer01"><h5>Hola, Mario Lopez</h5></label><br/>
                        <br><!-- <label for="validationServer01">Correo: mp@gmail.com</label> -->
                        <p>
                            Al solicitar el rol de "Autor", adquiere las siguientes funcionalidades:
                            <br/>
                            <ul id="funciones">
                                <li>
                                    Puede subir, actualizar y gestionar publicaciones de su propiedad.
                                </li>
                                <li>
                                    Puede ser seguido por otros usuarios, y se les enviara notificaciones a estos cada que suba una publicacion
                                </li>
                            </ul>
                            <b>NOTA:</b> Su nombre de usuario seguira siendo la misma y podra seguir usando sus funcionalidades como usuario.
                            <br>
                            <br>
                            Favor llenar los siguientes datos:
                        </p>
                    </div>
                    <div class="col-md-8 mb-3">

                        <label for="email2">E-mail de respaldo</label>
                        <input type="email" class="form-control" :class="{'border border-success':!validaEmail}" placeholder="Email" v-model="form.email2" required>
                        <label for="professionalCard">Tarjeta Profesional</label>
                        <input type="text" class="form-control" placeholder="Tarjeta Profesional" v-model="form.professionalCard" required>
                        <label for="employmentHistory">Historial de Empleo</label>
                        <input type="text" class="form-control" placeholder="Historial de empleo" v-model="form.employmentHistory" required>
                        <label for="academicHistory">Historia Academica</label>
                        <input type="text" class="form-control" placeholder="Historia Academica" v-model="form.academicHistory" required>
                        <br/>
                        <label for="exampleFormControlInput2">Historia Laboral</label>
                        <input type="text" class="form-control" id="exampleFormControlInput22" placeholder="Historia Laboral">
                        <br/>
                        <label for="exampleFormControlInput3">Historial Academico</label>
                        <input type="text" class="form-control" id="exampleFormControlInput23" placeholder="Historial Academico">
                        <!-- <div class="mb-3">
                            <label for="exampleFormControlInput2">¿A que te dedicas?</label>
                            <select class="custom-select" required>
                            <option value="">Seleccionar...</option>
                            <option value="1">Trabajo</option>
                            <option value="2">Independiente</option>
                            <option value="3">Estudiante</option>
                            </select>
                            <div class="invalid-feedback">Example invalid custom select feedback</div>
                        </div> -->
                        <br/>
                        <!-- <div class="custom-file mb-3">
                            <input type="file" class="custom-file-input" id="validatedCustomFile" required>
                            <label class="custom-file-label" for="validatedCustomFile">Añadir diploma...</label>
                            <div class="invalid-feedback">Error al cargar el archivo</div>
                        </div> -->
                        <div class="custom-control custom-checkbox mb-3">
                            <input type="checkbox" class="custom-control-input" id="customControlValidation1" required>
                            <label class="custom-control-label" for="customControlValidation1">
                                Acepto que todas mis publicaciones sean descargadas y compartidas a los usuarios de Ingenio.
                            </label>
                            <div class="invalid-feedback">Debe marcar la casilla</div>
                        </div>
                        <button @click="sendAuthReq()" class="btn btn-dark mb-2">Enviar Solicitud</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import router from '../router'

export default {
  name: 'SolicitudAutor',
  components: {},
  data: function (){
    return {
        form:{
             email2: "",
             professionalCard: "",
             employmentHistory:"",
             academicHistory:""
        }
    }
    },
    methods: {
        sendAuthReq( event ){
            var reqData = {
                "email2": this.form.email2,
                "professionalCard": this.form.professionalCard,
                "employmentHistory": this.form.employmentHistory,
                "academicHistory": this.form.academicHistory
            }
            axios({
                method: 'post',
                url: this.$store.state.backURL + "/author-request/add-author-request",
                /*withCredentials: true,
                crossdomain: true,    //Changed the format in order to solve the issue
                data: $.param (reqData)
                */
            }).then( response => {
                    if( response.status == 201){
                        alert( "Solicitud creada" );
                        console.log(response);
                    }else if( response.status == 200){
                        alert( "Ya haz enviado tu solicitud" )
                        //this.$router.push('principal')
                        console.log(response);
                    }
                    else {
                        alert( "Error al solicitar la peticion de autor" );
                        console.log(response);
                    }
                } ).catch( error => {
                    if( error.response.status === 400 ){
                      alert( "Credenciales incorrectas" );
                      alert(error.response.status);
                        console.log(response);
                    }else{
                      alert( "¡Parece que hubo un error de comunicación con el servidor!" );
                      console.log(response);
                    }
                } );
        },
    },
    computed:{
        validaEmail(){
            var exp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if(exp.test(this.form.email2)){
                return false;
            } else{
                return true;
            }
        }
    }
}
</script>

 <style scoped>

 </style>
