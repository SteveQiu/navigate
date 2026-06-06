<template>
  <header class="header" role="banner">
    <div class="header-inner">
      <div class="logo">Profile</div>

      <button
        type="button"
        class="menu"
        :aria-expanded="showMenu"
        aria-label="Toggle navigation menu"
        @click="toggleMenu"
      >
        <span>Menu</span>
      </button>

      <nav
        class="link-a"
        v-if="allowMenu"
        role="navigation"
        aria-label="Main navigation"
        @click="onNavClick"
      >
        <slot></slot>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  name: 'HeaderContainer',
  data() {
    return {
      windowWidth: window.innerWidth,
      showMenu: false,
      mobileBreakpoint: 760,
    };
  },
  mounted() {
    window.addEventListener('resize', this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  computed: {
    allowMenu() {
      return this.showMenu || this.windowWidth > this.mobileBreakpoint;
    },
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    onNavClick(event) {
      if (this.windowWidth > this.mobileBreakpoint) {
        return;
      }
      const target = event.target;
      if (target && target.closest('a')) {
        this.showMenu = false;
      }
    },
    onResize() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth > this.mobileBreakpoint && this.showMenu) {
        this.showMenu = false;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 20;
}

.header-inner {
  width: min(1100px, calc(100% - 20px));
  height: 44px;
  margin: 8px auto;
  padding: 0 20px 0 12px;
  box-sizing: border-box;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.45);
  background: linear-gradient(140deg, rgba(255, 255, 255, 0.78), rgba(255, 255, 255, 0.48));
  backdrop-filter: blur(8px);
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.12);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 1.15rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  color: #111827;
  user-select: none;
}

.menu {
  display: none;
  align-items: center;
  justify-content: center;
  height: 32px;
  padding: 0 12px;
  border-radius: 999px;
  border: 1px solid rgba(17, 24, 39, 0.15);
  background: rgba(255, 255, 255, 0.8);
  color: #1f2937;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  cursor: pointer;
}

.link-a {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: auto;
  padding-right: 6px;
}

.link-a a {
  padding: 7px 14px;
  border-radius: 999px;
  font-size: 0.98rem;
  font-weight: 600;
  text-decoration: none;
  color: #1f2937;
  transition: color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
}

.link-a a:hover {
  color: #0f172a;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 6px 14px rgba(15, 23, 42, 0.12);
}

.link-a a.router-link-active,
.link-a a.router-link-exact-active {
  color: #fff;
  background: linear-gradient(135deg, #111827, #000000);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.35);
}

.link-a a.router-link-active:hover,
.link-a a.router-link-exact-active:hover {
  color: #fff;
}

@media only screen and (max-width: 760px) {
  .header-inner {
    width: calc(100% - 14px);
    margin: 7px auto;
    padding: 0 16px 0 10px;
  }

  .menu {
    display: inline-flex;
  }

  .link-a {
    position: absolute;
    top: 52px;
    left: 7px;
    right: 7px;
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
    padding: 12px;
    box-sizing: border-box;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    background: linear-gradient(155deg, rgba(15, 23, 42, 0.93), rgba(30, 41, 59, 0.9));
    box-shadow: 0 16px 28px rgba(15, 23, 42, 0.26);
  }

  .link-a a {
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    color: #f8fafc;
    background: rgba(255, 255, 255, 0.08);
  }

  .link-a a:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.15);
  }

  .link-a a.router-link-active,
  .link-a a.router-link-exact-active {
    background: linear-gradient(135deg, #111827, #000000);
  }
}

@media only screen and (max-width: 420px) {
  .logo {
    font-size: 1rem;
  }

  .menu {
    height: 30px;
    padding: 0 10px;
    font-size: 0.75rem;
  }

  .link-a {
    width: 100%;
    left: 0;
    right: 0;
    border-radius: 0 0 14px 14px;
  }
}
</style>