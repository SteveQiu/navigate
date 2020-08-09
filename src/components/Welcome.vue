<template>
  <div>
        <div class="img img-city rellax" data-rellax-speed="6"></div>
        <div class="img img-platform rellax" data-rellax-speed="1"></div>
        <div class="img img-title rellax" data-rellax-speed="-3">WELCOME!</div>
        <div class="parallax-fillter"></div>
  </div>
</template>

<script>
export default {
    name:'WelcomeBanner'
}
</script>

<style>

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