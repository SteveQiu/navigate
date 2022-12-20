<template>
<div class="container">
  <a 
    v-for="site in sites" 
    :key="site.env" 
    :href="`${site.disabled? 'javascript:;': site.link}`" 
    :target="`${site.disabled? '_self': '_blank'}`"
    :class="{disabled:site.disabled}"
  >
    <div class="box">
      <div class="title">
        <table><tr><td>{{site.env}}</td></tr></table>
      </div>
      <div class="description">{{site.content}}</div>
    </div>
  </a>
</div>
</template>
<script>
  // Home.vue
export default {
  name: "ProjectPage",
  data: ()=>{
    return {
      sites:[{
        'env': 'PHP',
        'link': 'http://profile.steveqiu.com',
        'content': 'Profile website. This is another profile with details of other projects from the past',
        'disabled': false,
      },{
        'env': 'JAVA',
        'link': 'http://targetanalysis.steveqiu.com',
        'content': '(Discontinued) MongoDB, Springboot, ReactJS, Intrinio Financial Service. App for financial statement query. Due to price hike, service unsubscribed',
        'disabled': true,
      }, {
        'env': 'NodeJs',
        'link': '',//'https://thechecklist.herokuapp.com/',
        'content': '(Discontinued) MEAN(MongoDB ExpressJS AngularJS NodeJS) stack. This is of an TODO List application for personal/team goal management',
        'disabled': true,
      }, {
        'env': 'Django',
        'link': 'https://noteweb.herokuapp.com/',
        'content': '(Discontinued) This is a simple note taking application with authentication.',
        'disabled': true,
      }, {
        'env': 'Rail',
        'link': 'https://infiloopmusic.herokuapp.com/',
        'content': '(Discontinued) A simple web application using Rails and prestige sql',
        'disabled': true,
      }]
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.disabled{
  // pointer-events: none;
  cursor: not-allowed;
}
.container{
  padding: 50px 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.box{
  margin: 14px;
  width: 200px;
  height: 250px;
  border: solid #484848 8px;
  position:relative;
}

.title{
  position:absolute;
  display: block;
  width:100%;
  height: 100%;
  font-weight: bold;
  font-size: 2em;
  background-color: white;
  margin: auto;
  text-align: center;
  table{
    width: 100%;
    height: 100%;
  }
  td{
    vertical-align: center;
  }

  left:0;
  transform: scaleX(1);
  transition: transform 0.38s ease-in-out, left 0.38s ease-in-out;
}
a:hover .title {
  left: 100px;
  transform: scaleX(0);
}

.description{
  display: flex;
  width:100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #484848;
  color: white;
  z-index: 0;
}
</style>
