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
  name:'header'
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