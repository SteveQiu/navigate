<template>
  <div id="app">
    <Header>
      <router-link exact to="/" aria-label="Home">Home</router-link>
      <router-link to="/projects" aria-label="Projects">Projects</router-link>
      <router-link to="/contact" aria-label="Contact">Contact</router-link>
    </Header>
    <main class="page-content">
      <router-view />
    </main>
  </div>
</template>
<script>
import Header from './common/Header.vue';

export default {
  name: 'ApplicationEntry',
  components: {
    Header,
  },
};
</script>
<style lang="less" scoped>
:root {
  --font-color: #484848;
}

#app {
  margin-top: 60px;
  width: 100%;
}

.page-content {
  min-height: calc(100vh - 60px);
}
</style>
<style>
body {
  color: #484848;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  line-height: 1.6;
}

a,
a:active {
  color: #484848;
}
</style>
