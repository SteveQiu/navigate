<template>
  <div class="header">
    <div class="logo">Profile</div>
    
    <div class="menu" @click="toggleMenu()">
      <a>MENU</a>
    </div> 
    <div class="link-a" v-if="allowMenu">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name:'HeaderContainer',
  data:function() {
    return{
      windowWidth: window.innerWidth,
      showMenu: false
    }
  },
  mounted:function() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  },
  computed:{
    allowMenu(){
      return this.showMenu || (this.windowWidth>600)
    }
  },
  methods:{
    toggleMenu(){
      console.log(this.allowMenu);
      this.showMenu = !this.allowMenu
    },
    onResize() {
      this.windowWidth = window.innerWidth
    }
  }
}
</script>
<style lang="less" scoped>
.header{
  position:fixed;
  top:0;
  left: 0;
  height: 60px;
  width: 100%;
  background: linear-gradient(white 90%, #ddd 91%, transparent 100%) bottom;
  z-index: 9;
}
.logo{
  float: left;
  margin:15px;
  font-size: 30px;
  font-weight: 900;
  font-family: sans-serif;
  width: 100px;
}
.menu{
  float:right;
  display:none;
  cursor: pointer;
}
menu, .link-a{
  float:right;
  margin-right: 20px;
  background: white;
}
a{
  position:relative;
  font-size: 22px;
  margin: 10px 7px;
  display: inline-block;
  text-decoration: none;
  width: inherit;
  box-shadow: 0 1px transparent;
}
a:hover{
  color: #838383;
  box-shadow: 0 5px #838383;
  transition: all 0.3s ease-out;
}

.router-link-exact-active{
  box-shadow: 0 5px #838383;
}

@media only screen and (max-width: 600px) {
  .menu{
    display: inline-block;
    font-size: 22px;
    margin-top: 6px;
    margin-right: 20px;
  }
  .link-a{
    width: 100%;
    margin-right:0px !important;
    text-align: center;
    background: linear-gradient(white 90%, #ddd 91%, transparent 100%) bottom;
    padding-bottom: 20px;
  }
  a, a:hover, .router-link-exact-active{
    box-shadow: none;
  }
  .router-link-exact-active{
    color: #838383;
  }
}
</style>