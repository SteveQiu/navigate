<template>
  <div class="directory-description">
    <h1>Steve's Web Directory</h1>
    <h3>It is a directory for Steve's website.</h3>
      <div class="flex" ref="box1">
        <div class="box mouse"></div>
        <table class="box" @click="toggleBox1=!toggleBox1">
        <transition name="slide-fade">
          <td v-if="toggleBox1">Design a page with minimualist style</td>
        </transition>
        </table>
      </div>
      <div class="flex inverted-flex" ref="box2">
        <div class="box keyboard"></div>
        <table class="box">
          <transition name="slide-fade">
            <td v-show="toggleBox2">Incorporate Project VueJS, Webpack, and NodeJS</td>
          </transition>
        </table>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'Introduction',
    data:function () {
      return {
        toggleBox1:false,
        toggleBox2:false,
        observer:null
      }
    },
    destroyed() {
      this.observer.unobserve(this.$refs.box1)
      this.observer.unobserve(this.$refs.box2)
    },
    mounted: function () {
      let options = {
        root: null,
        rootMargin: "0px",
        threshold: [0, 0.9]
      };

      this.observer = new IntersectionObserver(this.updateDisplay, options);

      this.observer.observe(this.$refs.box1)
      this.observer.observe(this.$refs.box2)
      console.log(this.$refs.des1);
    },
    methods:{
      updateDisplay(entries, observer) {
        entries.forEach((entry) => {
          if (entry.target==this.$refs.box1) {
            // console.log('box1');
            this.toggleBox1=entry.intersectionRatio>0.5
          }
          else if (entry.target==this.$refs.box2) {
            // console.log('box2');
            this.toggleBox2=entry.intersectionRatio>0.5
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
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
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

  @media only screen and (max-width: 600px) {
    .flex {
      flex-wrap: wrap;
    }

    td {
      height: auto !important;
    }
  }

  .mouse {
    background-image: url('/img/mouse.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position-y: center;
  }

  .keyboard {
    background-image: url('/img/keyboard.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position-y: center;
  }
</style>