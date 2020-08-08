<template>
<div class="container">
  <h1>Linkedin</h1>
  <h3><a href="https://www.linkedin.com/in/qsteve/" target="_blank">https://www.linkedin.com/in/qsteve/</a></h3>
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
  padding: 40px;
}
h1, h3{
  text-align: center;
}
</style>