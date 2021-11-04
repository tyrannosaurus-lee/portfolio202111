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
                <div class="visual2"></div>
                <div class="visual3"></div>
              </div>
            </div>
            <div class="project-detail">project-detail1</div>
          </swiper-slide>
          <swiper-slide class="slide-2"></swiper-slide>
          <swiper-slide class="slide-3"></swiper-slide>
          <swiper-slide class="slide-4"></swiper-slide>
          <swiper-slide class="slide-5"></swiper-slide>
          <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        </swiper>
        <!-- <div class="pagination-bg"></div> -->
        <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
          <swiper-slide class="slide-1"></swiper-slide>
          <swiper-slide class="slide-2"></swiper-slide>
          <swiper-slide class="slide-3"></swiper-slide>
          <swiper-slide class="slide-4"></swiper-slide>
          <swiper-slide class="slide-5"></swiper-slide>
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
  .eunhye-logo img {display:block; width:80%;}
  .works-con .gallery-top {width:56vw;}
  .gallery-thumbs  {
    position:fixed; right:0; bottom:0; left:0; width:100%; height:140px;
  }
  .gallery-thumbs  {padding:23px 0 22px;}
  .gallery-thumbs {
     background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1IDUiPjxwYXRoIGZpbGw9IiNjNmM2YzYiIGQ9Ik0yIDBoMXYxSDJ6Ii8+PC9zdmc+);
      background-position:50%;
      background-size:5px 5px;
  }
  .gallery-thumbs {
    .swiper-slide {
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
        background-image:url('https://images.ctfassets.net/hjjsa4gj5y9k/6Dfo15vhvDwwcaYRJFlkxF/3058adc4713b081d6ded6d836bbdb766/icon_zizai.svg');
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
        // loopedSlides: 5,
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        loop: true,
        // loopedSlides: 5,
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
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
