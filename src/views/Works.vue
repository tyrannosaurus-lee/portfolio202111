<template>
  <div class="Works">
    <div class="works-con">
      <div class="eunhye-logo">
        <img src="~@/assets/img/common/logo_eunhye.png" alt="">
      </div>
      <div class="transition-container">
        <!-- 상단 갤러리 -->
        <div class="gallery-top">
          <div 
            v-for="(item, index) in list"
            :key="item.id"
            :class="[`project-tit slide-${index +1}`]"
          >
            <div v-if="index === reallyIndex">
              <div class="visual-con">
                <div class="visual-area">
                  <div class="visual1"></div>
                  <div class="visual2">
                    <!-- <img :src="`${item.image}`" alt=""> -->
                    <img :src="`${list[index].image}`" alt="">
                  </div>
                  <div class="visual3">
                    <a :href="`${item.url}`" target="_blank">{{item.name}}<br><span style="font-size:14px">{{ reallyIndex }}번째 슬라이드</span></a>
                  </div>
                </div>
              </div>
              <div class="project-detail">
                <div class="slider-counter">
                  <span class="label">No.</span>
                  <span class="now">{{index + 1}}</span>
                  <span class="all">{{list.length}}</span>
                </div>
                <div class="project-name"><p>{{item.name}}</p></div>
                <div class="project-info">
                  <span class="period">{{item.period}}</span>
                  <span class="device">{{item.device}}</span>
                </div>
                <div class="project-shortcut">
                  <a :href="`${item.url}`" target="_blank">View detail</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- //상단 갤러리 -->
      </div>
    </div>
    <!-- 하단 아이콘 슬라이드 -->
    <swiper 
      class="swiper" 
      :options="swiperOption" 
      @click-slide="clickSlide"
    >
      <swiper-slide
        v-for="(item, index) in list"
        :key="index"
        :class="`slide-${index + 1}`"
      >
        <img :src="`${item.icon}`" alt="">
      </swiper-slide>
    </swiper>
    <!-- // 하단 아이콘 슬라이드 -->
  </div>
</template>

<style lang="scss">
.Works,
.works-con {position:relative; height:100%;}
.works-con {display:flex; align-items:center; justify-content:space-between; -webkit-box-pack:justify; padding:124px 6vw 219px;}
  .transition-container {
    width:66%; height: 100%;
  }
  .eunhye-logo {display:flex; flex-grow: 1;align-items:center; justify-content:space-between; -webkit-box-pack:justify; width:28vw; z-index:9999;}
  .eunhye-logo img {display:block; width:70%;}
  .swiper-container:after {
    position:absolute; top:-25px; right:0; left:0; width:100%; height:12px; font-size:11px; color:rgba(0,0,0,.45); text-align:center; content:"Please select icon";
    animation:navigation 6s cubic-bezier(.77,0,.175,1) infinite;
    animation-duration: 6s;
    animation-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;
    animation-name: navigation;
  }
  .gallery-top {
    position:relative; width:100%; height:42vw; max-height:100%;
      
      .project-tit {
        position:absolute; width:100%; height:100%;
        & > div {position:relative; height:100%; background-color:#ececec;}
      }
      // 상단 비주얼 좌측
      .visual-con {
        position:relative; float:left;
        width:50%; height:100%;
        .visual-area {
          position:relative;margin:0 auto;padding:2vw; max-width:370px; height:100%;
          .visual1 {position:absolute; top:0; right:0; bottom:0; left:0; width:100%; /* height:100%; */}
          .visual2 {
            position:absolute; top:0; right:0; bottom:0; left:0; width:100%; /* height:100%; */
            transform:rotate(10deg);
            img {width:100%;}
          }
          .visual3 {
            position:relative; height:100%;
            font-size:3vw; line-height:normal; font-weight:700;
            background:#ececec;
            display:flex; justify-content: space-around; align-items: center;
            // box-shadow:44px 44px 66px rgb(0 0 0 / 20%);
            a {color:#000;}
          }
        }
      }
      // //상단 비주얼 좌측

      // 상단 비주얼 우측
      .project-detail {
        position:relative; float:right;
        display:flex; height:100%; -webkit-box-pack:end; justify-content:flex-end; flex-direction:column; justify-content:center;
        width:50%; max-height:100%;
        .slider-counter {
          overflow:hidden; display:flex; -webkit-box-pack:end; justify-content:flex-end; font-size:10px;font-weight:600;
          .label {margin-right:6px;}
          .now {}
          .all {
            opacity:.25;
            &:before {display:inline-block; content:""; margin:0 5px; width:22px; height:1px; background:#000;}
          }
        }
        .project-name {
          overflow:hidden; display:flex; -webkit-box-align:center; align-items:center; justify-content:right; height:10.2vw;
          font-weight:400; font-size:3vw; line-height:1; letter-spacing:-1px; color:#000;
          transform-origin: center right;
        }
        .project-info {
          font-size:10px; font-weight:400; color:#6b6b6b; text-align:right;
          .period {position:relative; padding-right:15px;}
          .period:after {position:absolute; right:0; top:0; bottom:0; content:" ・ ";}
          .device {}
        }
        .project-shortcut {
          padding-top:30px; text-align:right;
          a {
            position:relative; font-size:13px; font-weight:400; color:rgba(0,0,0,.59);
          }
          &:hover a:after {
            position:absolute; content:" "; bottom:-5px; right:0; left:0;
            display:block; height:1px; background-color:rgba(0,0,0,.59);
            animation: view-detail .5s
          }
          @keyframes view-detail {
            from { width: 0 }
            to   { width: 100% }
          }
        }
      }
      // //상단 비주얼 우측
    }

    // 현재 슬라이드
    /*
    .swiper-slide-active {
      .visual-con {
        .visual1,
        div.visual2 { opacity:1;}
      }
      .project-detail {
        .slider-counter {
          .now {
            transform:scale(1) rotate(0) translateY(0);
          }
        }
        .project-name {
          p {transform:scale(1) rotate(0) translateY(0);}
        }
        .project-info {}
        .project-shortcut {
          a {}
        }
      }
    }
    */
    // 이전 슬라이드
    /*
    .swiper-slide-prev {
      .visual-con {
        .visual-area {
          div.visual2 {
            transition:transform .5s cubic-bezier(.55,.055,.675,.19);
            transform:scale(.8) rotate(-20deg) translateY(-130vh); opacity:1;
          }
        }
      }
      .project-detail {
        .slider-counter {
          .now {
            transition:transform .5s cubic-bezier(.55,.055,.675,.19);
            transform:scale(.8) rotate(-20deg) translateY(-100vh); opacity:1;
          }
        }
        .project-name p {
          transition:transform .5s cubic-bezier(.55,.055,.675,.19);
          transform:scale(.3) rotate(70deg) translateY(-100vh);
        }
        .project-info {}
        .project-shortcut {
          a {}
        }
      }
    }*/
    // 다음 슬라이드
    /*
    .swiper-slide-next {
      .visual-con {
        .visual-area {
          div.visual2 {
            transition:transform .5s cubic-bezier(.55,.055,.675,.19);
            transform:scale(.8) rotate(-20deg) translateY(-100vh); opacity:1;
          }
        }
      }
      .project-detail {
        .slider-counter {
          .now {
             transform:scale(.8) rotate(0) translateY(1vh);
          }
        }
        .project-name p {
            transform:scale(.2) rotate(-13deg) translateY(15vh);
        }
        .project-info {}
        .project-shortcut {
          a {}
        }
      }
      */
    // .slide-1 .visual1 {background-color:rgb(250, 250, 250);}
    // .slide-2 .visual1 {background-color:rgb(7, 120, 143);}
    // .slide-3 .visual1 {background-color:rgb(2, 59, 142);}
    // .slide-4 .visual1 {background-color:rgb(240, 139, 113);}
    // .slide-5 .visual1 {background-color:rgb(232, 211, 31);}
    // .slide-6 .visual1 {background-color:rgb(0, 0, 0);}
    // .slide-7 .visual1 {background-color:rgb(204, 204, 204);}
    // .slide-8 .visual1 {background-color:rgb(249, 205, 22);}
    // .slide-9 .visual1 {background-color:rgb(239, 132, 145);}
    // .slide-10 .visual1 {background-color:rgb(239, 132, 145);}
    // .slide-11 .visual1 {background-color:rgb(239, 132, 145);}
    // .slide-12 .visual1 {background-color:rgb(239, 132, 145);}
    // .slide-13 .visual1 {background-color:rgb(239, 132, 145);}
    // .slide-14 .visual1 {background-color:rgb(204, 204, 204);}
    // .slide-15 .visual1 {background-color:rgb(249, 205, 22);}


  /* 하단 섬네일 슬라이드 */
  .swiper-container {
    overflow:visible; position:fixed; right:0; bottom:0; left:0; width:100%; height:140px;
    padding:23px 0 22px;
    background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1IDUiPjxwYXRoIGZpbGw9IiNjNmM2YzYiIGQ9Ik0yIDBoMXYxSDJ6Ii8+PC9zdmc+);
    background-position:50%;
    background-size:5px 5px;
    &:before {position:absolute; right:0; left:0; top:-5px; content:""; margin:auto; width:1px; height:25px; background:#b6b6b6;}
    .swiper-slide {
      margin-left:0; cursor:pointer;
      background-size:95px;
      background-position:center;
      background-repeat:no-repeat;
      background-color:transparent;
      opacity:0.4;
      &.swiper-slide-active {
        opacity: 1;
      }
      img {width:100%;}
    }
    &.gallery-top {
      height: 100%;
      width: 100%;
    }
    &.gallery-thumbs {
      height: 20%;
      box-sizing: border-box;
      // padding: $gap 0;
    }
    &.gallery-thumbs .swiper-slide {
      width: 25%;
      height: 100%;
      opacity: 0.4;
    }
    
  }
@media (max-width: 750px) {
  #nav {top:70px;}
  .eunhye-logo {position:fixed; top:5px; left:-6px; width:200px;}
  .transition-container {width:100%;}

  .gallery-top {
    height:100%;
    .visual-con {
      width:100%;
      .visual-area {
        width:80%; max-width: unset;
        .visual3 {
          font-size:8vw;
          // box-shadow:30px 30px 44px rgb(0 0 0 / 20%);
        }
      }
    }
    .project-detail {display: none;}
  }
  .swiper-container {
    .swiper-slide {
      img {width:auto; height:100%;}
    }
  }
}
</style>
<script>
// https://github.surmon.me/vue-awesome-swiper/
// option : https://negabaro.github.io/archive/vue-awesome-swiper-option
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'Works',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 10,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        initialSlide: 0,
        breakpoints: {
          768: {
            slidesPerView: 10,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 4,
            spaceBetween: 10
          }
        }
      },
      list: [
        {
            id: 1,
            name: 'HeyNews',
            device: 'Responsive Web',
            period: '2020.5 ~ 2020.10',
            image: require('@/assets/img/works/bg01.jpg'),
            icon: 'https://images.ctfassets.net/hjjsa4gj5y9k/4BEz6b2G7oQebnFJQW1tVr/e370619112d1346f2b8e15cb6454c8f0/icon_lips_1c.svg',
            url: 'https://hey.news.co.kr'
        },
        {
            id: 2,
            name: 'JTBC New App',
            device: 'APP (web view)',
            period: '2020.8 ~ 2020.10',
            image: require('@/assets/img/works/bg02.jpg'),
            icon: 'https://images.ctfassets.net/hjjsa4gj5y9k/5ceBjjwAHT8kHuy5AE1v7p/c3457c290ce485c23ff84e2552ac736b/icon_pksha_1c.svg',
            url: 'https://play.google.com/store/apps/details?id=com.jtbc.news&hl=ko'
        },
        {
            id: 3,
            name: '날씨가좋으면 찾아가겠어요',
            device: 'Responsive Web',
            period: '2020.02',
            image: require('@/assets/img/works/bg03.jpg'),
            icon: 'https://images.ctfassets.net/hjjsa4gj5y9k/5ctVSV4padnYHQNKX1UPjq/29ecb698e21a6dd6b238cad499c71432/polca_1C.svg',
            url: 'http://eunhye106.cafe24.com/event/weather/event.html'
        },
        {
            id: 4,
            name: 'Golden Disc',
            device: 'pc, mobile web',
            period: '2019.12',
            image: require('@/assets/img/works/bg04.jpg'),
            icon: 'https://images.ctfassets.net/hjjsa4gj5y9k/JiVBlurI1tR5VJey1p0st/619d6aaddd8161b8c1937a181c277f03/icon_akewaka.svg',
            url: 'http://www.goldendisc.co.kr/kr/'
        },
        {
            id: 5,
            name: '백상예술대상',
            device: 'pc, mobile web',
            period: '2019. 04',
            image: require('@/assets/img/works/bg05.jpg'),
            icon: require('@/assets/img/works/works_icon05.png'),
            url: 'https://www.baeksangawards.co.kr/'
        },
        {
            id: 6,
            name: 'JTBC 5th Event',
            device: 'pc, mobile web',
            period: '2021.05',
            image: require('@/assets/img/works/bg06.jpg'),
            icon: 'https://images.ctfassets.net/hjjsa4gj5y9k/70ZExw3p6Ex3mnllvqi5dI/d7ed50be73f8b1e90137ef4bde55543f/icon_gmb.svg',
            url: 'http://eunhye106.cafe24.com/jtbc_5th/'
        },
        {
            id: 7,
            name: 'JTBC 아는형님 200회 출석 체크 이벤트',
            device: 'pc, mobile web',
            period: '2022.05',
            image: require('@/assets/img/works/bg07.jpg'),
            icon: 'https://images.ctfassets.net/hjjsa4gj5y9k/7dbe9pIaCBw7xeyKT9UBHK/b20f1d6baa6a8e5262da045353536330/icon_abc.svg',
            url: 'http://eunhye106.cafe24.com/event/knowingbrother/brother_mv_event.html'
        },{
            id: 8,
            name: 'JTBC beautyinside 바뀐그림찾기',
            device: 'pc, mobile web',
            period: '2023.05',
            image: require('@/assets/img/works/bg08.jpg'),
            icon: 'https://images.ctfassets.net/hjjsa4gj5y9k/5TT5Zse3x5p7kOv9sCuzVA/a00fddcc4649ab933128a792a2381ea4/icon_alu.svg',
            url: 'http://eunhye106.cafe24.com/event/beautyinside/beautyinside_event.html'
        },{
            id: 9,
            name: 'JTBC2',
            device: 'pc, mobile web',
            period: '2024.05',
            image: require('@/assets/img/works/bg09.jpg'),
            icon: 'https://images.ctfassets.net/hjjsa4gj5y9k/6Dfo15vhvDwwcaYRJFlkxF/3058adc4713b081d6ded6d836bbdb766/icon_zizai.svg',
            url: 'https://jtbc2.joins.com/'
        },{
            id: 10,
            name: 'JTBC 히든싱어 레전드 편 투표',
            device: 'pc, mobile web',
            period: '2025.05',
            image: require('@/assets/img/works/bg10.jpg'),
            icon: 'https://images.ctfassets.net/hjjsa4gj5y9k/5ceBjjwAHT8kHuy5AE1v7p/c3457c290ce485c23ff84e2552ac736b/icon_pksha_1c.svg',
            url: 'http://eunhye106.cafe24.com/event/hiddensinger5/legend_event.html'
        },{
            id: 11,
            name: '중앙패밀리포인트',
            device: 'pc, mobile web',
            period: '',
            image: require('@/assets/img/works/bg11.jpg'),
            icon: 'https://images.ctfassets.net/hjjsa4gj5y9k/5ctVSV4padnYHQNKX1UPjq/29ecb698e21a6dd6b238cad499c71432/polca_1C.svg',
            url: 'https://eunhye106.cafe24.com/family_point/family_point01.html'
        },{
            id: 12,
            name: 'JTBC 일단 뜨겁게 청소하라',
            device: 'pc, mobile web',
            period: '',
            image: require('@/assets/img/works/bg12.jpg'),
            icon: require('@/assets/img/works/works_icon12.png'),
            url: 'http://eunhye106.cafe24.com/event/hotclean/event.html'
        },{
            id: 13,
            name: 'JTBC Now Promotion',
            device: 'pc, mobile web',
            period: '',
            image: require('@/assets/img/works/bg13.jpg'),
            icon: 'https://images.ctfassets.net/hjjsa4gj5y9k/6Dfo15vhvDwwcaYRJFlkxF/3058adc4713b081d6ded6d836bbdb766/icon_zizai.svg',
            url: 'http://eunhye106.cafe24.com/jtbc_now/jtbc_now3.html'
        },{
            id: 14,
            name: 'JTBC worldwide',
            device: 'pc, mobile web',
            period: '',
            image: require('@/assets/img/works/bg14.jpg'),
            icon: require('@/assets/img/works/works_icon14.png'),
            url: 'http://www.jtbcworldwide.com'
        },{
            id: 15,
            name: 'JTBC Mixnine vote',
            device: 'pc, mobile web',
            period: '',
            image: require('@/assets/img/works/bg15.jpg'),
            icon: require('@/assets/img/works/works_icon15.png'),
            url: 'http://eunhye106.cafe24.com/mixnine/index.html'
        }
      ],
      reallyIndex : 0
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
    
  },
  methods: {
    clickSlide(index, reallyIndex){
      console.log('index : ' + index + ' : reallyIndex : ' + reallyIndex);
      this.reallyIndex = reallyIndex;
    },
  }
}
</script>
