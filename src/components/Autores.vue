<template>
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <table class="table table-hover table-bordered" >
            <thead class="thead-light">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre Autor</th>
                    <th scope="col">Apellido Autor</th>
                    <th scope="col">Perfil</th>
                </tr>
            </thead>
            <tbody v-for="item of items" :key="item.id">
                <!-- <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr> -->
                <tr>
                    <th scope="row">{{item.id}}</th>
                    <td>{{item.nombre}}</td>
                    <td>{{item.apellido}}</td>
                    <td>{{item.img}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
import router from '../router'

export default {
  name: 'Autor.vue',
  components: {},
  data: function (){
    return {
        form:{
            type: 0, // 0 - Iniciar Sesion , 1 - Registro,  2 - Recuperar contraseña
            email1:"",
            password:""
            //passwordos:""           
        },
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
            }
    },
    computed:{
        
    }
}
</script>
