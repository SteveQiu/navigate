<template>
<div class="container">
  <welcome-banner/>
  <div class="directory-description">
    <h1>Steve's Web Directory</h1>
    <h3>This is a VueJS Webpack NodeJS Project. It is used as a directory for Steve's website.</h3>
  </div>
  <encouragement-banner/>
</div>
</template>
<script>
let Rellax = require('rellax');
import WelcomeBanner from './Welcome'
import EncouragementBanner from './Encouragement'

export default {
  name:'home',
  components:{
    WelcomeBanner,
    EncouragementBanner,
  },
  mounted: function () {
    var rellax = new Rellax('.rellax', {
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });
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
.container{
  height:100%;
}
h1{
   text-align: center;
   font-size: 3em;
}

h3{
  padding: 40px;
  padding-top: 0;
  color: #4c4c4c;
  text-align: center;
}
.directory-description{
  padding: 80px;
  position: relative;
  background: white;
  z-index: 1;
}
</style>