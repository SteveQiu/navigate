<template>
   <div>
      <p>{{hello}}</p>
      <header></header>
   </div>
</template>
<script>
   import header from './header.vue';
   console.log(header);

   export default {
      // name:'Application',
      components:{
         header:header,
      },
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
