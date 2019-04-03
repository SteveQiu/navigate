<template>
   <div>
     <ul>
       <li v-for="site in sites">
         <a v-bind:href="site.link" target="_blank">
          {{site.env}} - {{site.content}}
         </a>
       </li>
     </ul>
   </div>
</template>
<script>
  // Home.vue
export default {
  data: ()=>{
    return {
      sites:[{
        'env': 'PHP',
        'link': 'http://qylsteve.herokuapp.com',
        'content': 'This is the profile page for Steve'
      }, {
        'env': 'NodeJs',
        'link': 'https://thechecklist.herokuapp.com/',
        'content': 'This is only a testing prototype of an application'
      }, {
        'env': 'Django',
        'link': 'https://noteweb.herokuapp.com/',
        'content': 'This is a simple note taking application with authentication.'
      }, {
        'env': 'Rail',
        'link': 'https://infiloopmusic.herokuapp.com/',
        'content': 'A simple web application using Rails and prestige sql'
      },
      {
        'env': 'JAVA',
        'link': 'http://targetanalysis.steveqiu.com',
        'content': 'This is a website for stock query. It also include some other statistics calculated base on information received. No Paid Subcription. It currently has only some cached data with MCD, BA, MAR, LVS, APLE, WYNN '
      }]
    }
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>
ul{
  list-style-type:none;
}
li{
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
