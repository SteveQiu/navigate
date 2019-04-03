<template>
   <div id="app">
      <h1>Steve's Web Projects</h1>
      <p>
        <router-link to="/">Home</router-link>
        <router-link to="/projects">Web Projects</router-link>
        <router-link to="/contact">Contact</router-link>
      </p>
      <!-- route outlet -->
      <router-view></router-view>
   </div>
</template>
<script>
   import Vue from 'vue';

   export default {
      name:'Application',
      data: ()=>{
           return{
               hello:'Vue app'
           };
       }
   }
</script>
<style lang="less" scoped>
h1{
   text-align: center;
}
p{
   margin: 20px;
   text-align: center;
}
</style>
