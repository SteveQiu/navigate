<template>
  <div class="container">
    <section class="contact-summary">
      <h1>Get in Touch</h1>
      <p>Connect with me for web development, software engineering, or UX-driven projects.</p>
      <div class="links">
        <a href="https://www.linkedin.com/in/qsteve/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/SteveQiu" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </section>

    <div class="img1">
      <div class="text">Creativity and Efficiency</div>
    </div>

    <section class="section section-light">
      <h1>LinkedIn</h1>
      <h3><a href="https://www.linkedin.com/in/qsteve/" target="_blank" rel="noopener noreferrer">linkedin.com/in/qsteve</a></h3>
    </section>

    <div class="img2">
      <div class="text">Work hard every day</div>
    </div>

    <section class="section section-dark">
      <h1>GitHub</h1>
      <h3><a href="https://github.com/SteveQiu" target="_blank" rel="noopener noreferrer">github.com/SteveQiu</a></h3>
    </section>

    <div class="img3">
      <div class="text">Thank you!</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
};
</script>

<style lang="less" scoped>
.container {
  min-height: calc(100vh - 60px);
}

.contact-summary {
  min-height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
}

.contact-summary h1 {
  margin-bottom: 12px;
  font-size: 3em;
}

.contact-summary p {
  margin: 0 auto 24px;
  max-width: 620px;
  font-size: 1.05em;
  color: #5a5a5a;
}

.links {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.links a {
  display: inline-block;
  padding: 12px 24px;
  background: #484848;
  color: white;
  border-radius: 999px;
  text-decoration: none;
  transition: background 0.2s ease;
}

.links a:hover {
  background: #656565;
}

h1,
h3 {
  text-align: center;
}

.img1 {
  background-image: url('../assets/img/computer.jpg');
  min-height: calc(100vh - 60px);
}

.img1 > .text {
  position: absolute;
  left: 15%;
  top: 40%;
  font-size: 2em;
}

.img2 {
  background-image: url('../assets/img/stairs.jpg');
  min-height: 100vh;
}

.img2 > .text {
  position: absolute;
  right: 15%;
  top: 40%;
  font-size: 2em;
  color: #939393;
}

.img3 {
  background-image: url('../assets/img/city.jpg');
  min-height: 100vh;
}

.img3 > .text {
  position: absolute;
  text-align: center;
  width: 100%;
  top: 40%;
  font-size: 3em;
  font-weight: bold;
  color: white;
}

.img1,
.img2,
.img3 {
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
}

.section {
  padding: 80px 20px;
}

.section-light {
  background: #f5f5f5;
}

.section-dark {
  background: #484848;
  color: white;
}

.section-dark a {
  color: #f5f5f5;
}

@media only screen and (max-width: 800px) {
  .img1 > .text,
  .img2 > .text,
  .img3 > .text {
    position: relative;
    left: 0;
    right: 0;
    top: 20px;
    width: 100%;
    text-align: center;
  }
}
</style>