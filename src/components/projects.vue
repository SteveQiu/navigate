<template>
  <div class="container">
    <div
      class="roulette-shell"
      tabindex="0"
      @keydown.left.prevent="rotateLeft"
      @keydown.right.prevent="rotateRight"
      @touchstart.passive="onTouchStart"
      @touchend.passive="onTouchEnd"
    >
      <button
        type="button"
        class="hit-zone hit-left"
        aria-label="Show previous project"
        @click="rotateLeft"
      />
      <button
        type="button"
        class="hit-zone hit-right"
        aria-label="Show next project"
        @click="rotateRight"
      />

      <div class="cards-track">
        <component
          :is="isFocused(index) && isCardClickable(site) ? 'a' : 'div'"
          v-for="(site, index) in sites"
          :key="site.env"
          class="project-card"
          :class="cardClasses(index, site)"
          :style="cardStyle(index)"
          :href="isFocused(index) && isCardClickable(site) ? site.link : null"
          :target="isFocused(index) && isCardClickable(site) ? '_blank' : null"
          :rel="isFocused(index) && isCardClickable(site) ? 'noopener noreferrer' : null"
          :aria-disabled="!isCardClickable(site) ? 'true' : null"
          @click.stop="onCardClick(index)"
        >
          <div class="title">{{ site.env }}</div>
          <div class="description">{{ site.content }}</div>
          <div class="status">{{ isCardClickable(site) ? 'Live site' : 'Unavailable' }}</div>
        </component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectPage',
  data: () => {
    return {
      sites: [
        {
          env: 'PHP',
          link: 'http://steveqiu.github.io/personal-web/',
          content: 'Profile website. This is another profile with details of other projects from the past',
          disabled: false,
        },
        {
          env: 'JAVA',
          link: 'http://targetanalysis.steveqiu.com',
          content: '(Discontinued) MongoDB, Springboot, ReactJS, Intrinio Financial Service. App for financial statement query. Due to price hike, service unsubscribed',
          disabled: true,
        },
        {
          env: 'NodeJs',
          link: '',
          content: '(Discontinued) MEAN(MongoDB ExpressJS AngularJS NodeJS) stack. This is of an TODO List application for personal/team goal management',
          disabled: true,
        },
        {
          env: 'C#',
          link: '',
          content: 'Internal workplace projects and enterprise application development. Built an event discovery and gathering platform for browsing upcoming activities, planning attendance, and coordinating communities.',
          disabled: true,
        },
        {
          env: 'Django',
          link: 'https://noteweb.herokuapp.com/',
          content: '(Discontinued) This is a simple note taking application with authentication.',
          disabled: true,
        },
        {
          env: 'Ruby',
          link: 'https://infiloopmusic.herokuapp.com/',
          content: '(Discontinued) A simple web application using Rails and prestige sql',
          disabled: true,
        },
      ],
      focusedIndex: 0,
      touchStartX: null,
      viewportWidth: typeof window === 'undefined' ? 1200 : window.innerWidth,
    };
  },
  mounted() {
    window.addEventListener('resize', this.syncViewport);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.syncViewport);
  },
  methods: {
    syncViewport() {
      this.viewportWidth = window.innerWidth;
    },
    normalizeIndex(index) {
      const total = this.sites.length;
      return ((index % total) + total) % total;
    },
    layoutSettings() {
      if (this.viewportWidth <= 500) {
        return { cardWidth: 210, cardHeight: 290, translateStep: 108, maxVisible: 2 };
      }
      if (this.viewportWidth <= 700) {
        return { cardWidth: 230, cardHeight: 310, translateStep: 124, maxVisible: 2 };
      }
      if (this.viewportWidth <= 900) {
        return { cardWidth: 250, cardHeight: 330, translateStep: 140, maxVisible: 2 };
      }
      if (this.viewportWidth <= 1200) {
        return { cardWidth: 270, cardHeight: 350, translateStep: 158, maxVisible: 3 };
      }
      return { cardWidth: 280, cardHeight: 360, translateStep: 170, maxVisible: 3 };
    },
    getOffset(index) {
      const total = this.sites.length;
      const half = Math.floor(total / 2);
      let offset = index - this.focusedIndex;
      if (offset > half) {
        offset -= total;
      }
      if (offset < -half) {
        offset += total;
      }
      return offset;
    },
    isFocused(index) {
      return this.getOffset(index) === 0;
    },
    isCardClickable(site) {
      return !site.disabled && Boolean(site.link);
    },
    rotateLeft() {
      this.focusedIndex = this.normalizeIndex(this.focusedIndex - 1);
    },
    rotateRight() {
      this.focusedIndex = this.normalizeIndex(this.focusedIndex + 1);
    },
    onTouchStart(event) {
      if (!event.changedTouches.length) {
        return;
      }
      this.touchStartX = event.changedTouches[0].clientX;
    },
    onTouchEnd(event) {
      if (!event.changedTouches.length || this.touchStartX === null) {
        return;
      }
      const touchEndX = event.changedTouches[0].clientX;
      const swipeDistance = touchEndX - this.touchStartX;
      this.touchStartX = null;
      if (Math.abs(swipeDistance) < 35) {
        return;
      }
      if (swipeDistance > 0) {
        this.rotateLeft();
        return;
      }
      this.rotateRight();
    },
    onCardClick(index) {
      const offset = this.getOffset(index);
      if (offset === 0) {
        return;
      }
      if (offset < 0) {
        this.rotateLeft();
        return;
      }
      this.rotateRight();
    },
    cardClasses(index, site) {
      const offset = this.getOffset(index);
      const absOffset = Math.abs(offset);
      const { maxVisible } = this.layoutSettings();
      return {
        focused: offset === 0,
        clickable: offset === 0 && this.isCardClickable(site),
        parked: offset !== 0,
        disabled: !this.isCardClickable(site),
        hidden: absOffset > maxVisible,
      };
    },
    cardStyle(index) {
      const offset = this.getOffset(index);
      const absOffset = Math.abs(offset);
      const direction = Math.sign(offset);
      const { cardWidth, cardHeight, translateStep, maxVisible } = this.layoutSettings();
      const isVisible = absOffset <= maxVisible;
      const translateX = offset * translateStep;
      const translateZ = absOffset === 0 ? 120 : Math.max(0, 40 - (absOffset - 1) * 18);
      const rotateY = direction === 0 ? 0 : -direction * Math.min(absOffset * 17, 45);
      const scale = absOffset === 0 ? 1 : Math.max(0.68, 1 - absOffset * 0.12);
      const opacity = isVisible ? 1 - absOffset * 0.2 : 0;
      const blur = absOffset > 1 ? (absOffset - 1) * 0.9 : 0;

      return {
        transform: `translate(-50%, -50%) translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
        opacity,
        filter: `blur(${blur}px)`,
        width: `${cardWidth}px`,
        height: `${cardHeight}px`,
        zIndex: 100 - absOffset,
        pointerEvents: isVisible ? 'auto' : 'none',
      };
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  min-height: calc(100vh - 60px);
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box;
  display: grid;
  place-items: center;
  padding: 30px 20px;
  overflow-x: hidden;
  background: radial-gradient(circle at 50% 20%, #3c4a6f 0%, #11182a 70%);
}

.roulette-shell {
  position: relative;
  width: min(1100px, 100%);
  max-width: 100%;
  height: min(72vh, 540px);
  min-height: 420px;
  border-radius: 28px;
  overflow: hidden;
  outline: none;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.03));
  box-shadow:
    0 35px 70px rgba(0, 0, 0, 0.35),
    inset 0 0 0 1px rgba(255, 255, 255, 0.15);
}

.roulette-shell::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 34px;
  width: 430px;
  height: 56px;
  transform: translateX(-50%);
  border-radius: 999px;
  background: radial-gradient(circle, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0) 75%);
  filter: blur(3px);
  pointer-events: none;
}

.cards-track {
  position: relative;
  width: 100%;
  height: 100%;
  perspective: 1300px;
  transform-style: preserve-3d;
}

.hit-zone {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 26%;
  z-index: 25;
  border: 0;
  background: transparent;
  cursor: pointer;
}

.hit-zone::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.hit-zone:hover::before {
  opacity: 0.28;
}

.hit-zone.hit-left {
  left: 0;
}

.hit-zone.hit-left::before {
  background: linear-gradient(to right, rgba(255, 255, 255, 0.2), transparent);
}

.hit-zone.hit-right {
  right: 0;
}

.hit-zone.hit-right::before {
  background: linear-gradient(to left, rgba(255, 255, 255, 0.2), transparent);
}

.project-card {
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 360px;
  padding: 22px 18px;
  border: 1px solid rgba(255, 255, 255, 0.36);
  border-radius: 24px;
  text-decoration: none;
  color: #0f172a;
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.42), rgba(255, 255, 255, 0.16));
  backdrop-filter: blur(10px);
  box-shadow: 0 16px 28px rgba(15, 23, 42, 0.2);
  transition:
    transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1),
    opacity 0.35s ease,
    filter 0.35s ease,
    box-shadow 0.35s ease;
}

.project-card.focused {
  box-shadow: 0 24px 45px rgba(15, 23, 42, 0.35);
  border-color: rgba(255, 255, 255, 0.6);
}

.project-card.parked {
  cursor: pointer;
}

.project-card.focused:not(.clickable) {
  cursor: not-allowed;
}

.project-card.disabled {
  opacity: 0.55;
}

.project-card.hidden {
  pointer-events: none;
}

.title {
  margin-top: 4px;
  font-size: 2.1em;
  font-weight: bold;
  text-align: center;
  letter-spacing: 0.02em;
}

.description {
  margin-top: 18px;
  font-size: 0.95em;
  line-height: 1.5;
  text-align: center;
  flex: 1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
}

.status {
  align-self: center;
  margin-top: 16px;
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 0.8em;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-align: center;
  color: #065f46;
  background: rgba(209, 250, 229, 0.9);
}

.project-card.disabled .status {
  color: #374151;
  background: rgba(229, 231, 235, 0.9);
}

@media only screen and (max-width: 900px) {
  .roulette-shell {
    height: 480px;
    min-height: 480px;
  }

  .title {
    font-size: 1.8em;
  }
}

@media only screen and (max-width: 700px) {
  .container {
    padding: 20px 10px;
  }

  .roulette-shell {
    height: 450px;
    min-height: 450px;
  }

  .hit-zone {
    width: 28%;
  }
}

@media only screen and (max-width: 500px) {
  .roulette-shell {
    height: 420px;
    min-height: 420px;
    border-radius: 22px;
  }

  .hit-zone {
    width: 32%;
  }

  .description {
    font-size: 0.88em;
  }
}
</style>
