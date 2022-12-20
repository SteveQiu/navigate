<template>
<div class="container">
  <welcome-banner/>
  <Introduction/>
  <encouragement-banner/>
</div>
</template>
<script>
let Rellax = require('rellax');
import WelcomeBanner from './Welcome'
import EncouragementBanner from './Encouragement'
import Introduction from './Introduction'

export default {
  name:'HomePage',
  components:{
    WelcomeBanner,
    EncouragementBanner,
    Introduction,
  },
  mounted: function () {
    new Rellax('.rellax', {
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
</style>