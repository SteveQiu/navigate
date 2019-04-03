<template>
   <div id="app">
      <h1>Steve's Homepage - VueJS Webpack NodeJS Project</h1>
      <p>
        <router-link to="/">Home</router-link>
        <router-link to="/foo">Foo</router-link>
        <router-link to="/bar">Bar</router-link>
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
<style lang="less">
header{
   width:100%;
   border-bottom: 1px black;
}
</style>
