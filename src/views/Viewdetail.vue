<template>
    <div class="Viewdetail">
        <div
            v-for="(item, index) in list"
            :key="item.id"
            :class="`slide-${index +1}`"
        >
            <a :href="`${item.url}`" target="_blank">View detail</a>
        </div>
    </div>
</template>
<style lang="scss">
    .Viewdetail {
        display:flex; flex-direction: column; justify-content:space-evenly; align-items:center; padding:30% 0; height:100%;
        & > div {
            a {
                position:relative; font-size:30px; line-height:40px; font-weight:400; color:rgba(0,0,0,.59);
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
</style>
<script>
export default {
    name : 'Viewdetail',
    data() {
        return {
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
                }
            ]
        }
    }
}
</script>

