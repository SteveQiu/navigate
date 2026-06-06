<template>
  <div class="notfound-container">
    <h1>Page not found</h1>
    <p>The page you are looking for does not exist.</p>
    <router-link to="/">Return to home</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFoundPage',
};
</script>

<style scoped>
.notfound-container {
  min-height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  text-align: center;
}

.notfound-container h1 {
  font-size: 3em;
  margin-bottom: 16px;
}

.notfound-container p {
  font-size: 1.1em;
  margin-bottom: 24px;
  max-width: 520px;
  color: #5a5a5a;
}

.notfound-container a {
  display: inline-block;
  padding: 12px 24px;
  background: #484848;
  color: white;
  border-radius: 999px;
  text-decoration: none;
}

.notfound-container a:hover {
  background: #656565;
}
</style>
