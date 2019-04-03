<template>
   <div id="app">
      <h1>Steve's Web Directory</h1>
      <p>
        <router-link class="btn-outline" to="/">Home</router-link>
        <router-link class="btn-outline" to="/projects">Web Projects</router-link>
        <router-link class="btn-outline" to="/contact">Contact</router-link>
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
   margin-botton: 42px;
   font-size: 3em;
}
.btn-outline{
   text-align: center;
   margin: 30px;
   border: solid #316c94 3px;
   padding: 7px 24px;
   border-radius: 8px;
   color: #316c94;
}
.router-link-exact-active{
   color: white;
   background-color: #316c94;
}
p{
   text-align: center;
   margin-bottom: 40px;
}
</style>
