<template>
    <div id="app">
      <Header />
      <router-view></router-view>
      <Foorl />

  </div>
</template>

<script>

import Index from './views/index.vue'

export default {
  name: 'App',
  components: {
   
    Index
},
mounted(){
 
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
  width: 70%;
  margin: 0 auto;
}
@media(max-width:1000px){
  .active{
  width: 90%;
  margin: 0 auto;
}
}

</style>
