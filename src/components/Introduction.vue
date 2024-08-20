<template>
  <div class="directory-description">
    <h1>Steve's Web Directory</h1>
    <h3>It is a directory for Steve's website.</h3>
    <div class="flex">
      <div class="box mouse"></div>
      <table class="box" ref="box1">
        <transition name="slide-fade">
          <td v-if="toggleBox1">Design a page with minimualist style</td>
        </transition>
      </table>
    </div>
    <div class="flex inverted-flex">
      <div class="box keyboard"></div>
      <table class="box" ref="box2">
        <transition name="slide-fade">
          <td v-show="toggleBox2">Created with VueJS, Webpack, and NodeJS</td>
        </transition>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntroductionPage',
  data: function () {
    return {
      toggleBox1: false,
      toggleBox2: false,
      observer: null,
      observedElm1: null,
      observedElm2: null,
    }
  },
  destroyed() {
    this.observer.unobserve(this.observedElm1);
    this.observer.unobserve(this.observedElm2);
  },
  mounted: function () {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: [0, 0.9]
    };

    this.observer = new IntersectionObserver(this.updateDisplay, options);
    this.observedElm1 = this.$refs.box1;
    this.observedElm2 = this.$refs.box2;

    this.observer.observe(this.observedElm1);
    this.observer.observe(this.observedElm2);
  },
  methods: {
    updateDisplay(entries) {
      entries.forEach((entry) => {
        if (entry.target == this.observedElm1) {
          this.toggleBox1 = entry.intersectionRatio > 0.80
        }
        else if (entry.target == this.observedElm2) {
          this.toggleBox2 = entry.intersectionRatio > 0.80
        }
      })
    }
  }
}
</script>

<style scoped>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to

/* .slide-fade-leave-active below version 2.1.8 */
  {
  transform: translateX(10px);
  opacity: 0;
}

h1 {
  text-align: center;
  font-size: 3em;
}

h3 {
  padding: 40px;
  padding-top: 0;
  color: #4c4c4c;
  text-align: center;
}

.directory-description {
  padding: 80px;
  position: relative;
  background: white;
  z-index: 1;
}

.box {
  width: 280px;
  height: 280px;
  text-align: center;
  font-size: 1.1em;
  vertical-align: middle;
  padding: 10px;
  margin: 20px;
}

.flex {
  display: flex;
  justify-content: space-evenly;
}

.inverted-flex {
  flex-direction: row-reverse;
}

@media only screen and (max-width: 800px) {
  .flex {
    flex-wrap: wrap;
  }

  table {
    height: auto !important;
  }
}

.mouse {
  background-image: url('../assets/img/mouse.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: center;
}

.keyboard {
  background-image: url('../assets/img/keyboard.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: center;
}
</style>