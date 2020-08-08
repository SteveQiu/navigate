<template>
<div class="container">
  <a 
    v-for="site in sites" 
    :key="site.env" 
    :href="site.link" 
    target="_blank"
    :class="{disabled:site.disabled}"
  >
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
        'content': 'This is the profile page for Steve',
        'disabled': false,
      },{
        'env': 'JAVA',
        'link': 'http://targetanalysis.steveqiu.com',
        'content': 'MongoDB Spring ReactJS App for financial statement query. Due price hike, I stopped subscription. Cached: MCD, BA, MAR, LVS, AAPL, WYNN',
        'disabled': false,
      }, {
        'env': 'NodeJs',
        'link': 'https://thechecklist.herokuapp.com/',
        'content': '(Discontinued) MEAN(MongoDB ExpressJS AngularJS NodeJS) stack. This is of an TODO List application for personal/team goal management',
        'disabled': false,
      }, {
        'env': 'Django',
        'link': 'https://noteweb.herokuapp.com/',
        'content': '(Discontinued) This is a simple note taking application with authentication.',
        'disabled': false,
      }, {
        'env': 'Rail',
        'link': 'https://infiloopmusic.herokuapp.com/',
        'content': '(Discontinued) A simple web application using Rails and prestige sql',
        'disabled': false,
      }]
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.container{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.box{
  margin: 14px;
  width: 200px;
  height: 250px;
  border: solid #316c94 8px;
  border-radius: 5px;
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

.disabled{
  // pointer-events: none;
  cursor: not-allowed;
}
</style>
