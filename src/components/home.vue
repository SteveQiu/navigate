<template>
<div class="container">
  <div class="img img-city rellax" data-rellax-speed="6"></div>
  <div class="img img-platform rellax" data-rellax-speed="1"></div>
  <div class="img img-title rellax" data-rellax-speed="-3">WELCOME!</div>
  <div class="parallax-fillter"></div>
  <h1>Steve's Web Directory</h1>
  <h3>This is a VueJS Webpack NodeJS Project. It is used as a directory for Steve's website.</h3>
  <div class="parallax-fillter"></div>
</div>
</template>
<script>
let Rellax = require('rellax');

export default {
  name:'home',
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

.img{
  width: 100%;
  min-height: 100vh;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: cover;
  position:absolute;
}

.img-city{
  background-image: url('/img/night-city.png');
  top: 0%;
  min-height: 110vh;
}
.img-title{
  text-align: center;
  font-size: 4em;
  top: 50%;
  color: white;
  font-weight: bold;
}
.img-platform{
  background-image: url('/img/platform.png');
  position:absolute;
  top: 0%;
}

.parallax-fillter{
  width: 100%;
  min-height: 100vh;
}


</style>