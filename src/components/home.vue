<template>
<div class="content">
  <!-- <h1>Steve's Web Directory</h1> -->
  <!-- <h3>This is a VueJS Webpack NodeJS Project. It is used as a directory for Steve's website.</h3> -->
  <div class="img img-sky rellax" data-rellax-speed="4"></div>
  <div class="img img-ground rellax" data-rellax-speed="2"></div>
  <div class="img img-cliff rellax" data-rellax-speed="1"></div>

  <!-- <section class="section section-light">
    <h2>Section 1</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum amet enim numquam ab ex similique labore dolor inventore iste est, vitae assumenda dolorum molestiae repellat eveniet magnam tenetur quasi sed.</p>
  </section>


  <section class="section section-dark">
    <h2>Section 2</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
  </section>


  <section class="section section-dark">
    <h2>Section 3</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
  </section> -->


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
.content{
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

.img-sky{
  background-image: url('/img/sky.jpg');
  min-height: 140vh;
  top: 0%;
}
.img-ground{
  background-image: url('/img/ground.png');
  top: 65%;
}
.img-cliff{
  background-image: url('/img/cliff.png');
  position:absolute;
  top: 65%;
}


</style>