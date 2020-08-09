<template>
<div class="content">
  <!-- <h1>Steve's Web Directory</h1> -->
  <!-- <h3>This is a VueJS Webpack NodeJS Project. It is used as a directory for Steve's website.</h3> -->
  <div class="img1">
    <div class="text">
      <div class="border"><span>Parallax website</span></div>
    </div>
  </div>

  <section class="section section-light">
    <h2>Section 1</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum amet enim numquam ab ex similique labore dolor inventore iste est, vitae assumenda dolorum molestiae repellat eveniet magnam tenetur quasi sed.</p>
  </section>

  <div class="img2">
    <div class="text">
      <div class="border"><span>Parallax website</span></div>
    </div>
  </div>

  <section class="section section-dark">
    <h2>Section 2</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
  </section>

  <div class="img3">
    <div class="text">
      <div class="border"><span>Parallax website</span></div>
    </div>
  </div>

  <section class="section section-dark">
    <h2>Section 3</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
  </section>

  <div class="img4">
    <div class="text">
      <div class="border"><span>Parallax website</span></div>
    </div>
  </div>

</div>
</template>
<script>
let Rellax = require('rellax');

export default {
  name:'home',
  mounted: function () {
    var rellax = new Rellax('.rellax', {
      speed: -2,
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
</style>