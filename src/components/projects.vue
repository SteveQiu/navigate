<template>
  <div class="container">
    <component
      :is="site.disabled ? 'div' : 'a'"
      v-for="site in sites"
      :key="site.env"
      class="project-card"
      :class="{ disabled: site.disabled }"
      :href="site.disabled ? null : site.link"
      :target="site.disabled ? null : '_blank'"
      :rel="site.disabled ? null : 'noopener noreferrer'"
      :aria-disabled="site.disabled ? 'true' : null"
    >
      <div class="title">{{ site.env }}</div>
      <div class="description">{{ site.content }}</div>
      <div class="status">{{ site.disabled ? 'Unavailable' : 'Live site' }}</div>
    </component>
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
          content: 'Internal workplace projects and enterprise application development.',
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
    };
  },
};
</script>

<style lang="less" scoped>
.container {
  padding: 50px 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  min-height: calc(100vh - 60px);
}
.project-card {
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 320px;
  border: 2px solid #484848;
  border-radius: 12px;
  text-decoration: none;
  color: #484848;
  background: white;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
}
.project-card.disabled {
  cursor: not-allowed;
  opacity: 0.55;
  transform: none;
  box-shadow: none;
}
.title {
  padding: 24px 16px 0;
  font-size: 1.8em;
  font-weight: bold;
  text-align: center;
}
.description {
  padding: 18px 16px;
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
  padding: 12px 16px 24px;
  font-size: 0.9em;
  text-align: center;
  color: #555;
}
</style>
