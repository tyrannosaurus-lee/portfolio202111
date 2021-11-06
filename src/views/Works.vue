<template>
  <div class="Works">
    <div class="works-con">
      <div class="transition-container">
        <div class="eunhye-logo">
          <img src="~@/assets/img/common/logo_eunhye.png" alt="">
        </div>
        <swiper
          class="swiper gallery-top"
          :options="swiperOptionTop"
          ref="swiperTop"
        >
          <swiper-slide class="slide-1">
            <div class="project-tit">
              <div class="visual-con">
                <div class="visual1"></div>
                <div class="visual2">
                  <img src="~@/assets/img/works/bg01.jpg" alt="헤이뉴스">
                </div>
                <div class="visual3">Hey.News</div>
              </div>
            </div>
            <div class="project-detail">project-detail1</div>
          </swiper-slide>
          <swiper-slide class="slide-2">
            <div class="project-tit">
              <div class="visual-con">
                <div class="visual1"></div>
                <div class="visual2">
                  <img src="~@/assets/img/works/bg02.jpg" alt="JTBC 뉴스앱 웹뷰">
                </div>
                <div class="visual3">JTBC NEWS App</div>
              </div>
            </div>
            <div class="project-detail">project-detail2</div>
          </swiper-slide>
          <swiper-slide class="slide-3">
            <div class="project-tit">
              <div class="visual-con">
                <div class="visual1"></div>
                <div class="visual2">
                  <img src="~@/assets/img/works/bg03.jpg" alt="날씨가 좋으면 찾아가겠어요">
                </div>
                <div class="visual3">When The Weather Is Fine</div>
              </div>
            </div>
            <div class="project-detail">project-detail3</div>
          </swiper-slide>
          <swiper-slide class="slide-4">
            <div class="project-tit">
              <div class="visual-con">
                <div class="visual1"></div>
                <div class="visual2">
                  <img src="~@/assets/img/works/bg04.jpg" alt="골든디스크">
                </div>
                <div class="visual3">Golden Disc Awards</div>
              </div>
            </div>
            <div class="project-detail">project-detail4</div>
          </swiper-slide>
          <swiper-slide class="slide-5">
            <div class="project-tit">
              <div class="visual-con">
                <div class="visual1"></div>
                <div class="visual2">
                  <img src="~@/assets/img/works/bg05.jpg" alt="백상 예술대상">
                </div>
                <div class="visual3"></div>
              </div>
            </div>
            <div class="project-detail">Baeksang Arts Awards</div>
          </swiper-slide>
          <swiper-slide class="slide-6">
            <div class="project-tit">
              <div class="visual-con">
                <div class="visual1"></div>
                <div class="visual2">
                  <img src="~@/assets/img/works/bg06.jpg" alt="5주년 이벤트">
                </div>
                <div class="visual3"></div>
              </div>
            </div>
            <div class="project-detail">Baeksang Arts Awards</div>
          </swiper-slide>
          <swiper-slide class="slide-7">
            <div class="project-tit">
              <div class="visual-con">
                <div class="visual1"></div>
                <div class="visual2">
                  <img src="~@/assets/img/works/bg07.jpg" alt="아는형님 200회 출석 체크 이벤트">
                </div>
                <div class="visual3"></div>
              </div>
            </div>
            <div class="project-detail">Baeksang Arts Awards</div>
          </swiper-slide>
          <swiper-slide class="slide-8">
            <div class="project-tit">
              <div class="visual-con">
                <div class="visual1"></div>
                <div class="visual2">
                  <img src="~@/assets/img/works/bg08.jpg" alt="뷰티인사이드 바뀐그림찾기">
                </div>
                <div class="visual3">Beauty Inside 바뀐그림찾기</div>
              </div>
            </div>
            <div class="project-detail">Baeksang Arts Awards</div>
          </swiper-slide>
          <swiper-slide class="slide-9">
            <div class="project-tit">
              <div class="visual-con">
                <div class="visual1"></div>
                <div class="visual2">
                  <img src="~@/assets/img/works/bg09.jpg" alt="JTBC2">
                </div>
                <div class="visual3">JTBC2</div>
              </div>
            </div>
            <div class="project-detail">Baeksang Arts Awards</div>
          </swiper-slide>
          <swiper-slide class="slide-10">
            <div class="project-tit">
              <div class="visual-con">
                <div class="visual1"></div>
                <div class="visual2">
                  <img src="~@/assets/img/works/bg10.jpg" alt="히든싱어 레전드 편 투표">
                </div>
                <div class="visual3"></div>
              </div>
            </div>
            <div class="project-detail">Baeksang Arts Awards</div>
          </swiper-slide>
          <swiper-slide class="slide-11">
            <div class="project-tit">
              <div class="visual-con">
                <div class="visual1"></div>
                <div class="visual2">
                  <img src="~@/assets/img/works/bg11.jpg" alt="중앙패밀리포인트">
                </div>
                <div class="visual3"></div>
              </div>
            </div>
            <div class="project-detail">Baeksang Arts Awards</div>
          </swiper-slide>
          <swiper-slide class="slide-12">
            <div class="project-tit">
              <div class="visual-con">
                <div class="visual1"></div>
                <div class="visual2">
                  <img src="~@/assets/img/works/bg12.jpg" alt="일단 뜨겁게 청소하라">
                </div>
                <div class="visual3"></div>
              </div>
            </div>
            <div class="project-detail">Baeksang Arts Awards</div>
          </swiper-slide>
          <swiper-slide class="slide-13">
            <div class="project-tit">
              <div class="visual-con">
                <div class="visual1"></div>
                <div class="visual2">
                  <img src="~@/assets/img/works/bg13.jpg" alt="JTBC Now Promotion">
                </div>
                <div class="visual3">JTBC Now Promotion</div>
              </div>
            </div>
            <div class="project-detail">Baeksang Arts Awards</div>
          </swiper-slide>
          <swiper-slide class="slide-14">
            <div class="project-tit">
              <div class="visual-con">
                <div class="visual1"></div>
                <div class="visual2">
                  <img src="~@/assets/img/works/bg13.jpg" alt="JTBC Worldwide">
                </div>
                <div class="visual3">JTBC Worldwide</div>
              </div>
            </div>
            <div class="project-detail">JTBC Worldwide</div>
          </swiper-slide>
          <swiper-slide class="slide-15">
            <div class="project-tit">
              <div class="visual-con">
                <div class="visual1"></div>
                <div class="visual2">
                  <img src="~@/assets/img/works/bg15.jpg" alt="JTBC 믹스나인">
                </div>
                <div class="visual3">JTBC Mixnine vote</div>
              </div>
            </div>
            <div class="project-detail">JTBC Mixnine vote</div>
          </swiper-slide>
          <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        </swiper>
        <!-- <div class="pagination-bg"></div> -->
        <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
          <swiper-slide class="slide-1"></swiper-slide>
          <swiper-slide class="slide-2"></swiper-slide>
          <swiper-slide class="slide-3"></swiper-slide>
          <swiper-slide class="slide-4"></swiper-slide>
          <swiper-slide class="slide-5"></swiper-slide>
          <swiper-slide class="slide-6"></swiper-slide>
          <swiper-slide class="slide-7"></swiper-slide>
          <swiper-slide class="slide-8"></swiper-slide>
          <swiper-slide class="slide-9"></swiper-slide>
          <swiper-slide class="slide-10"></swiper-slide>
          <swiper-slide class="slide-11"></swiper-slide>
          <swiper-slide class="slide-12"></swiper-slide>
          <swiper-slide class="slide-13"></swiper-slide>
          <swiper-slide class="slide-14"></swiper-slide>
          <swiper-slide class="slide-15"></swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .transition-container {
    position:fixed; top:0; right:0; bottom:0; left:0; width:100%; height:100%;
    display:flex; align-items:center; padding:124px 6vw 219px;
  }
  .eunhye-logo {width:28vw; z-index:9999;}
  .eunhye-logo img {display:block; width:70%;}
  .swiper-container {overflow:visible;}
  .swiper-slide {background:#fff;}
  /* 상단 슬라이드 */
  .gallery-top {
    width:56vw;
    .project-tit {
      position:relative; width:28vw; height:42vw; max-height:100%;
      .visual-con {
        position:absolute; top:0; right:0; bottom:0; left:0;
        padding:2vw; height:100%;
        .visual1 {position:absolute; top:0; right:0; bottom:0; left:0; width:100%; height:100%; opacity:0;}
        .visual2 {
          position:absolute; top:0; right:0; bottom:0; left:0; width:100%; height:100%;
          transform:rotate(10deg); opacity:0;
          img {width:100%;}
        }
        .visual3 {font-weight:700;}
      }
    }
    .slide-1 .visual1 {background-color:rgb(250, 250, 250);}
    .slide-2 .visual1 {background-color:rgb(7, 120, 143);}
    .slide-3 .visual1 {background-color:rgb(2, 59, 142);}
    .slide-4 .visual1 {background-color:rgb(240, 139, 113);}
    .slide-5 .visual1 {background-color:rgb(232, 211, 31);}
    .slide-6 .visual1 {background-color:rgb(0, 0, 0);}
    .slide-7 .visual1 {background-color:rgb(204, 204, 204);}
    .slide-8 .visual1 {background-color:rgb(249, 205, 22);}
    .slide-9 .visual1 {background-color:rgb(239, 132, 145);}
    .slide-10 .visual1 {background-color:rgb(239, 132, 145);}
    .slide-11 .visual1 {background-color:rgb(239, 132, 145);}
    .slide-12 .visual1 {background-color:rgb(239, 132, 145);}
    .slide-13 .visual1 {background-color:rgb(239, 132, 145);}
    .slide-14 .visual1 {background-color:rgb(204, 204, 204);}
    .slide-15 .visual1 {background-color:rgb(249, 205, 22);}
    .swiper-slide-active {
      .visual-con {
        .visual1,
        div.visual2 { opacity:1;}
      }
    }
    .swiper-slide-prev {
      .visual-con {
        div.visual2 {
          transition:transform .5s cubic-bezier(.55,.055,.675,.19);
          transform:scale(.8) rotate(-20deg) translateY(-100vh); opacity:1;
        }
      }
    }
    .visual3 {
      position:relative; height:100%;
      background:#fff;
      display:flex; justify-content: space-around; align-items: center;
      span {
        position:absolute; top:0; right:0; bottom:0; left:0; width:100%; height:100%;

      }
    }
  }

  /* 하단 섬네일 슬라이드 */
  .gallery-thumbs {
    position:fixed; right:0; bottom:0; left:0; width:100%; height:140px;
    padding:23px 0 22px;
    background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1IDUiPjxwYXRoIGZpbGw9IiNjNmM2YzYiIGQ9Ik0yIDBoMXYxSDJ6Ii8+PC9zdmc+);
    background-position:50%;
    background-size:5px 5px;
    .swiper-slide {
      cursor:pointer;
      background-size:95px;
      background-position:center;
      background-repeat:no-repeat;
      &.slide-1 {
        background-image:url('https://images.ctfassets.net/hjjsa4gj5y9k/4BEz6b2G7oQebnFJQW1tVr/e370619112d1346f2b8e15cb6454c8f0/icon_lips_1c.svg');
      }
      &.slide-2 {
        background-image:url('https://images.ctfassets.net/hjjsa4gj5y9k/5ceBjjwAHT8kHuy5AE1v7p/c3457c290ce485c23ff84e2552ac736b/icon_pksha_1c.svg');
      }
      &.slide-3 {
        background-image:url('https://images.ctfassets.net/hjjsa4gj5y9k/5ctVSV4padnYHQNKX1UPjq/29ecb698e21a6dd6b238cad499c71432/polca_1C.svg');
      }
      &.slide-4 {
        background-image:url('https://images.ctfassets.net/hjjsa4gj5y9k/JiVBlurI1tR5VJey1p0st/619d6aaddd8161b8c1937a181c277f03/icon_akewaka.svg');
      }
      &.slide-5 {
        background-image:url('~@/assets/img/works/works_icon05.png');
      }
      &.slide-6 {
        background-image:url('https://images.ctfassets.net/hjjsa4gj5y9k/70ZExw3p6Ex3mnllvqi5dI/d7ed50be73f8b1e90137ef4bde55543f/icon_gmb.svg');
      }
      &.slide-7 {
        background-image:url('https://images.ctfassets.net/hjjsa4gj5y9k/7dbe9pIaCBw7xeyKT9UBHK/b20f1d6baa6a8e5262da045353536330/icon_abc.svg');
      }
      &.slide-8 {
        background-image:url('https://images.ctfassets.net/hjjsa4gj5y9k/5TT5Zse3x5p7kOv9sCuzVA/a00fddcc4649ab933128a792a2381ea4/icon_alu.svg');
      }
      &.slide-9 {
        background-image:url('https://images.ctfassets.net/hjjsa4gj5y9k/6Dfo15vhvDwwcaYRJFlkxF/3058adc4713b081d6ded6d836bbdb766/icon_zizai.svg');
      }
      &.slide-10 {
        background-image:url('');
      }
      &.slide-11 {
        background-image:url('');
      }
      &.slide-12 {
        background-image:url('~@/assets/img/works/works_icon12.png');
      }
      &.slide-14 {
        background-image:url('~@/assets/img/works/works_icon14.png');
      }
      &.slide-15 {
        background-image:url('~@/assets/img/works/works_icon15.png');
      }
    }
    &.gallery-top {
      height: 80%;
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
    &.gallery-thumbs .swiper-slide-active {
      opacity: 1;
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
      swiperOptionTop: {
        loop: true,
        loopedSlides: 8,
        spaceBetween: 10,
        effect: 'fade',
        lazy: true,
        speed: 2000,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 8,
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 10,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        speed: 2000,
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper
      const swiperThumbs = this.$refs.swiperThumbs.$swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  }
}
</script>
