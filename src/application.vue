<template>
<div id="app">
   <Header>
      <router-link to="/">Home</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/contact">Contact</router-link>
   </Header>
   <div>
      <router-view></router-view>
   </div>
</div>
</template>
<script>
import Header from './common/Header.vue';

export default {
   name:'Application',
   components:{
      Header,
   },
   data: ()=>{
         return{
            hello:'Vue app'
         };
      }
}
</script>
<style lang="less" scoped>
:root {
  --font-color: #484848;
}
#app{
   margin-top: 60px;
   width: 100%;
}
</style>
<style>
body{
   color: var(--font-color);
   font-family: Arial, Helvetica, sans-serif;
}
</style>
