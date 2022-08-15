<template>
  <div class="about">
    <p class="skills">
      Vue.js, Vanilla JS, Typescript, Gulp.js<br>
      unit-test(Jest),  Storybook, SonarQube<br>
      Jira, Confluence, Mac OS, Yona<br>
      Git(Bitbucket, github, gitlab)<br>
      jQuery, Bootstrap, SCSS, css3<br>
      Mac OS Cross browsing, photoshop, Adobe XD, Figma
    </p>
    <img class="me" src="~@/assets/img/common/its_me.gif" alt="">
    <!-- 스크롤 참고 : https://www.youtube.com/watch?v=L4YtP6likYI -->
  </div>
</template>
<style lang="scss">
  .about{
    margin:0 auto; padding:14vh 14%; max-width:calc(1240px + 28%);
    background-image:url('~@/assets/img/common/logo_eunhye.png');
    background-repeat: no-repeat;
    background-size:unset;
    background-position: center;
    background-attachment: fixed;
    .skills {padding:20px 0 250px;font-size:20px; line-height:1.8;}
    .me {width:360px;}
  }
</style>