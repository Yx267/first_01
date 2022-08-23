<template>
    <div id="app">
      <Header/>
      <swiper/>
      <Foorl/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Foorl from './components/Foorl.vue'
import swiper from './components/swiper.vue'

export default {
  name: 'App',
  components: {
    Foorl,Header,
    swiper
},
mounted(){
   var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });
}
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
li{
  list-style: none;
}
a{
  text-decoration: none;
  color: #000;
}
.active{
  width: 80%;
  margin: 0 auto;
}


</style>
