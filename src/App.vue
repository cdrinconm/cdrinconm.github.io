<template>
  <div id="app">
    <NavBar id="navbar"/>
    <!-- <NavBar/> -->
    <router-view/>
    <Footer id="navbar"/>
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

export default {
name: 'App',
components:{
  NavBar,
  Footer
  },
  created: function(){
    //localStorage.setItem('Role',3);
  },
}
</script>
<style>
#navbar{
  background-color: #000D0D;
  /* color: #000D0D;
 color: #01403A;
 color: #035951;
 color: #648C88; */
}


/* npm install vue bootstrap-vue bootstrap */
</style>


 