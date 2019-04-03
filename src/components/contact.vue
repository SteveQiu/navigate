<template>
  <a href="https://www.linkedin.com/in/qsteve/" target="_blank">
    <h3>https://www.linkedin.com/in/qsteve/</h3>
  </a>
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
h3{
  text-align: center;
}
</style>