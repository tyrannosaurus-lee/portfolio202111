<template>
  <div class="Careers">
    <h2>Careers</h2>
    <div class="careers-container">
      <div class="accordion-con">
        <div
          class="accordion-area"
          v-for="(item, index) in list"
          @click="openItem(item)"
          v-bind:key="index"
        >
          <div
            class="accordion-tit"
            :class="{'active' : item.isActive}"
          >
            <div class="career-drawer_trigger">
              <div class="career-drawer_line1"></div>
              <div class="career-drawer_line2"></div>
            </div>
            {{item.title}}
          </div>
          <div
            class="accordion-text"
            v-on:enter="enter" v-on:leave="leave"
          >
            {{item.content}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  .Careers {
    position:relative; margin:0 auto; padding:14vh 14% 250px; max-width:calc(1240px + 28%); background-color:#ececec;
    h2 {position:absolute; top:14vh; left:60px; font-size:16px; font-weight:600;}
    .careers-container {text-align:left; }
  }
  .accordion-area {
    position:relative;
    border-top:1px solid rgba(0,0,0,.2);
    .accordion-tit {
      padding:50px 30px 50px 55px; font-size:24px; line-height:36px;
      cursor:pointer;
      .career-drawer_trigger {
        position:absolute; top:60px; left:15px; width:16px; height:16px;
        div {
          position:absolute; top:0; right:0; bottom:0; left:0;
          margin:auto; width:100%; height:2px;
          background-color: #000;
        }
        .career-drawer_line1 {}
        .career-drawer_line2 {
          transition: transform .5s,opacity .5s;
          transform:rotate(90deg);
        }
      }
      & + .accordion-text {
        overflow:hidden;  padding:0 55px; height:0;
        font-size:14px; line-height:18px;
        transition-duration: 0.3s;
        transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      }
      &.active + .accordion-text {
        padding:30px 55px 60px; height:auto;

        transition-duration: 0.3s;
        transition-timing-function: ease-in;
      }
      &.active {
        .career-drawer_line2 {transform:rotate(0deg) scaleX(0); opacity:0;}
      }
    }
  &:last-child {border-bottom:1px solid rgba(0,0,0,.2);}
  }

</style>
<script>
export default {
  name: 'Careers',
  data() {
    return {
      list: [
        {
          id: 1,
          title:'JTBC & JTBC STUDIOS',
          content: 'JTBC(pc, mobile web), JTBC2, JTBC4, JTBC mediacomm, JTBC news (pc, mobile web, app:web view), Hey News, JTBC 5th, Mixnine vote, JTBC NOW promotion, JoongAng Group Family Point, JTBC2, JTBC news app newshome, Baeksangawards, Goldendisc',
          isActive: false
        },{
          id: 2,
          title:'Hey Korean',
          content: 'Single to Mingle (web &amp; mobile web), HeyKorean, HeyKorean customer service center(flexible site)',
          isActive: false
        },{
          id: 3,
          title:'Waplez',
          content: 'hyunjinst, blueTech Solution, bolak, SoongSil University Artificial Interlligence Laboratory, Standardmedia, CBNU IUCF, Hizen, E-journal, Danielprayer, ShinaTNC, Ahnsanggyu Honey',
          isActive: false
        },{
          id: 4,
          title:'Cornerstone Interactive',
          content: 'T’station, ksNet, Pizzahut, Jaseng Hospital of Korean Medicine, UL Korea, Woori Asset Management, Samsung Yepp, SogangLIfeCare, Biofood',
          isActive: false
        }
      ]
    }
  },
  methods: {
    openItem(item){
      item.isActive =! item.isActive
    },
    setClass(item){
      if (item.isActive == true ) {
        return 'active'
      }
      return
    },
    enter(){
      const accordionText = document.querySelectorAll('.accordion-text');// eslint-disable-line no-unused-vars
      accordionText.style.height = "auto"
    },
    leave(){
      const accordionText = document.querySelectorAll('.accordion-text');// eslint-disable-line no-unused-vars
      let height = accordionText.clientHeight + "px" // eslint-disable-line no-unused-vars
      accordionText.style.height = "0px"
      setTimeout(() => {
          accordionText.style.height = height
      }, 0)
    }
  }
}
</script>
