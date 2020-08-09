<template>
<div class="container">
  <div class="img1">
    <div class="text">Creativity and Efficiency</div>
  </div>

  <section class="section section-light">
    <h1>Linkedin</h1>
    <h3><a href="https://www.linkedin.com/in/qsteve/" target="_blank">https://www.linkedin.com/in/qsteve/</a></h3>
  </section>

  <div class="img2">
    <div class="text">
      Work hard Everyday
    </div>
  </div>

  <section class="section section-dark">
    <h1>Github</h1>
    <h3><a href="https://github.com/SteveQiu" target="_blank">https://github.com/SteveQiu</a></h3>
  </section>

  <div class="img3">
    <div class="text">
      THANK YOU !
    </div>
  </div>

  
</div>
</template>
<script>

export default {
  data:()=>{
    return{

    };
  },
  computed: {},
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
  height: 100%;
}
h1, h3{
  text-align: center;
}

.img1{
  background-image: url('/img/computer.jpg');
  min-height: calc( 100vh - 60px);
}
.img1>.text{
  position: absolute;
  left: 15%;
  top: 40%;
  font-size: 2em;
}
.img2{
  background-image: url('/img/stairs.jpg');
  min-height: 100vh;
}
.img2>.text{
  position: absolute;
  right: 15%;
  top: 40%;
  font-size: 2em;
  color: #939393;
}
.img3{
  background-image: url('/img/city.jpg');
  min-height: 100vh;
}
.img3>.text{
  position: absolute;
  right: 30%;
  top: 40%;
  font-size: 3em;
  color: white;
}

.img1, .img2, .img3 {
  position: relative;
  // opacity: 0.7;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>