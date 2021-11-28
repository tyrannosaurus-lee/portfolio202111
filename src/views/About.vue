<template>
  <div class="about">
    <p class="skills">
      Vue.js, Vanilla JS, jQuery, Typescript<br>
      Gulp, Bootstrap, SCSS, css3,<br>
      Jira, Confluence, Gitblit, Mac OS Cross browsing, photoshop
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
    .skills {padding:100px 0 300px;font-size:18px; line-height:1.5;}
    .me {width:360px;}
  }
</style>