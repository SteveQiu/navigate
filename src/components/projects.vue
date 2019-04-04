<template>
   <div class="content-box">
      <a v-for="site in sites" v-bind:href="site.link" target="_blank">
        <div class="box">
          <div class="title">{{site.env}}</div>
          <div class="description">{{site.content}}</div>
        </div>
      </a>
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
        'content': 'MongoDB Spring ReactJS App for financial statement query. Due price hike, I stopped subscription. Cached: MCD, BA, MAR, LVS, AAPL, WYNN'
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
.box{
  margin: 14px;
  width: 200px;
  height: 250px;
  border: solid #316c94 6px;
  padding: 7px 24px;
  color: #316c94;
  float: left;
}
.title{
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: bold;
  text-align: center;
  font-size: x-large;
  font-family: sans-serif;
}
.content-box{
 padding-bottom: 60px;
}
</style>
