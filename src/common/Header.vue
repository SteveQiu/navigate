<template>
  <div>
    <span class="left">Profile(Steve)</span>
    
    <span class="right"></span>
    <ul>
      <slot></slot>
    </ul>
  </div>
</template>
<script>
export default {
  name:'header',
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
.left{
  float: left;
}
.right{
  float:right;
}
</style>