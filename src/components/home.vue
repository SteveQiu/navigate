<template>
   <h3>This is a VueJS Webpack NodeJS Project. It is used as a directory for Steve's website.</h3>
</template>
<script>
  // Home.vue
export default {
  computed: {
    // username () {
    //   // We will see what `params` is shortly
    //   // return this.$route.params.username
    // }
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
h3{
  padding: 40px;
  padding-top: 0;
  color: #4c4c4c;
  text-align: center;
}
</style>