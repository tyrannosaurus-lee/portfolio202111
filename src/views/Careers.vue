<template>
  <div class="Careers">
    <h2>Careers</h2>
    <div class="careers-container">
      <div class="accordion-con">
        <div class="accordion-area">
          <div 
            class="accordion-tit"
            v-on:click="accordion"
          >
            <div class="career-drawer_trigger">
              <div class="career-drawer_line1"></div>
              <div class="career-drawer_line2"></div>
            </div>
            JTBC &amp; JTBC STUDIOS
          </div>
          <div class="accordion-text">
            JTBC(pc, mobile web), JTBC2, JTBC4, JTBC mediacomm, JTBC news (pc, mobile web, app:web view)
            Hey News, JTBC 5th, Mixnine vote, JTBC NOW promotion, JoongAng Group Family Point, JTBC2, JTBC news app newshome, Baeksangawards, Goldendisc
          </div>
        </div>
        <div class="accordion-area">
          <div 
            class="accordion-tit"
            @click="accordion"
          >
            <div class="career-drawer_trigger">
              <div class="career-drawer_line1"></div>
              <div class="career-drawer_line2"></div>
            </div>
            Hey Korean
          </div>
          <div class="accordion-text">
            Single to Mingle (web &amp; mobile web), HeyKorean
            HeyKorean customer service center(flexible site) 
          </div>
        </div>
        <div class="accordion-area">
          <div 
            class="accordion-tit"
            @click="accordion"
          >
            <div class="career-drawer_trigger">
              <div class="career-drawer_line1"></div>
              <div class="career-drawer_line2"></div>
            </div>
            Waplez
          </div>
          <div class="accordion-text">
            hyunjinst, blueTech Solution, bolak, SoongSil University Artificial Interlligence Laboratory, 
            Standardmedia, CBNU IUCF, Hizen, E-journal, Danielprayer, ShinaTNC, Ahnsanggyu Honey 
          </div>
        </div>
        <div class="accordion-area">
          <div 
            class="accordion-tit"
            @click="accordion"
          >
            <div class="career-drawer_trigger">
              <div class="career-drawer_line1"></div>
              <div class="career-drawer_line2"></div>
            </div>
            Cornerstone Interactive
          </div>
          <div class="accordion-text">
            T’station, ksNet, Pizzahut, Jaseng Hospital of Korean Medicine, UL Korea, Woori Asset Management, Samsung Yepp 
            SogangLIfeCare, Biofood 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  .Careers {
    position:relative; margin:0 auto; padding:14vh 14% 0; max-width:calc(1240px + 28%);
    h2 {position:absolute; top:14vh; left:60px; font-size:16px; font-weight:600;}
    .careers-container {text-align:left;}
  }
  .accordion-area {
    position:relative; 
    .accordion-tit {
      padding:50px 0 50px 55px; font-size:24px;
      border-top:1px solid rgba(0,0,0,.2); border-bottom:1px solid rgba(0,0,0,.2);
      cursor:pointer;
      .career-drawer_trigger {
        position:absolute; top:60px; left:15px; width:16px; height:16px;
        div {
          position:absolute; top:0; right:0; bottom:0; left:0;
          margin:auto; width:100%; height:2px;
          background-color: #000;
        }
        .career-drawer_line1 {}
        .career-drawer_line2 {}
      }
      &.active + .accordion-text {
        display:block;
      }
    }
    .accordion-text {display:none;}
  }

</style>
<script>
export default {
  name: 'Careers',
  // computed: {
  //   accordion(){
  //     const accordionTitle = document.querySelectorAll('.accordion-tit');// eslint-disable-line no-unused-vars
  //   }
  // },
  methods: {
    accordion(){
      console.log(1);
      const accordionTitle = document.querySelectorAll('.accordion-tit');// eslint-disable-line no-unused-vars
      this.accordionTitle.classList.toggle('active');
      // https://codepen.io/xxdd13/pen/qKqNxo
      // https://codepen.io/enolic/pen/rrvyqK
      // for(let j=0; j<accordionTitle.length; j++){
        // accordionTitle.classList.remove('active');
        // accordionTitle[j].addEventListener('click', function(){
        //   this.classList.remove('active');
        // })
      // }
      for(let i=0; i<accordionTitle.length; i++){
        // if(accordionTitle.classList.contains('activen')){
        //   accordionTitle.classList.remove('active');
        // }
        // accordionTitle[i].addEventListener('click', function(){
        //   this.classList.toggle('active');
        // })
      }
      
    }
  }
}
</script>
