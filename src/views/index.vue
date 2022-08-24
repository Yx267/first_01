<template>
    <div class="box">
        <swiper />
        <!-- 产品应用 -->
        <div class="product">
            <div class="producttext">
                <h1>產品應用</h1>
                <div class="hen"></div>
                <p>
                    本公司產品主要為高頻微波通訊元件，市場應用可概略分為<br />
                    網路基礎建設的點對(多)點系統、衛星通訊、行動通訊基地台以及寬頻無線傳輸
                </p>
            </div>
            <!-- 产品轮播图 -->
            <div class="productswiper">
                <div class="swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="img">
                                <img src="https://www.umt-tw.com/upload/Product/PHOTO/F_201802231439rqv7iF35.PNG"
                                    alt="" />
                                <p>Machinery Parts</p>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="img">
                                <img src="https://www.umt-tw.com/upload/Product/PHOTO/F_201802231439rqv7iF35.PNG"
                                    alt="" />
                                <p>Machinery Parts</p>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="img">
                                <img src="https://www.umt-tw.com/upload/Product/PHOTO/F_201802231439rqv7iF35.PNG"
                                    alt="" />
                                <p>Machinery Parts</p>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="img">
                                <img src="https://www.umt-tw.com/upload/Product/PHOTO/F_201802231439rqv7iF35.PNG"
                                    alt="" />
                                <p>Machinery Parts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 底部搜索模块 -->
            <Botsearch></Botsearch>
        </div>
    </div>
</template>

<script>
import swiper from "../components/swiper.vue";
export default {
    name: "index",
    data() {
        return {
            value: [],
            size:'200px',
            options: [
                {
                    value: "zhinan",
                    label: "Millimeter Wave & 5G",
                    children: [
                        {
                            value: "shejiyuanze",
                            label: "5G Interference Filter"
                        },
                        {
                            value: "daohang",
                            label: "Diplexer & Multiplexer"
                        },{
                            value: "daohang",
                            label: "Coupler"
                        },{
                            value: "daohang",
                            label: "OMT"
                        },{
                            value: "daohang",
                            label: "Circulator & Isolator"
                        },{
                            value: "daohang",
                            label: "Machinery Parts"
                        },
                    ],
                },
                {
                    value: "zujian",
                    label: "Satcom & LEO",
                    children: [
                        {
                            value: "basic",
                            label: "Multiplexer & Filter",
                        },
                        {
                            value: "form",
                            label: "OMT Assembly"
                        },
                        {
                            value: "data",
                            label: "Circulator & Isolator"
                        },
                        {
                            value: "notice",
                            label: "Machinery Parts",
                            
                        },
                        {
                            value: "navigation",
                            label: "Waveguide Components"
                        },
                        {
                            value: "others",
                            label: "5G Interference Filter"
                        },
                    ],
                },
                {
                    value: "ziyuan",
                    label: "Wireless Backhaul",
                    children: [
                        {
                            value: "axure",
                            label: "Diplexer & Multiplexer",
                        },
                        {
                            value: "sketch",
                            label: "Coupler",
                        },
                        {
                            value: "jiaohu",
                            label: "OMT",
                        }, {
                            value: "axure",
                            label: "Diplexer & Multiplexer",
                        },
                        {
                            value: "sketch",
                            label: "Coupler",
                        },
                        {
                            value: "jiaohu",
                            label: "OMT",
                        }
                    ],
                },
                 {
                    value: "ziyuan",
                    label: "Wireless Backhaul",
                    children: [
                        {
                            value: "axure",
                            label: "Diplexer & Multiplexer",
                        },
                        {
                            value: "sketch",
                            label: "Coupler",
                        },
                        {
                            value: "jiaohu",
                            label: "OMT",
                        }, {
                            value: "axure",
                            label: "Diplexer & Multiplexer",
                        },
                        {
                            value: "sketch",
                            label: "Coupler",
                        },
                        {
                            value: "jiaohu",
                            label: "OMT",
                        }
                    ],
                },
                 {
                    value: "ziyuan",
                    label: "Wireless Backhaul",
                    children: [
                        {
                            value: "axure",
                            label: "Diplexer & Multiplexer",
                        },
                        {
                            value: "sketch",
                            label: "Coupler",
                        },
                        {
                            value: "jiaohu",
                            label: "OMT",
                        }, {
                            value: "axure",
                            label: "Diplexer & Multiplexer",
                        },
                        {
                            value: "sketch",
                            label: "Coupler",
                        },
                        {
                            value: "jiaohu",
                            label: "OMT",
                        }
                    ],
                },
            ],
        };
    },
    methods: {
        handleChange(value) {
            console.log(value);
        },
    },
    components: {
        swiper,
    },
    mounted() {
        var swiper = new Swiper(".swiper", {
            slidesPerView: 4,
            loop: true,
            autoplay: 5000,
            speed: 2000,
            direction: getDirection(),

            on: {
                resize: function () {
                    swiper.changeDirection(getDirection());
                },
            },
        });

        function getDirection() {
            var windowWidth = window.innerWidth;
            var direction = window.innerWidth <= 760 ? "vertical" : "horizontal";

            return direction;
        }
    },
};
</script>

<style scoped>
.product {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.producttext {
    margin-top: 50px;
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.producttext h1 {
    font-weight: 400;
    height: 100px;
    line-height: 100px;
    background-color: #fff;
}

.producttext p {
    margin-top: 20px;
    line-height: 30px;
    width: 40%;
    color: #737373;
    text-align: center;
}

.hen {
    width: 60px;
    height: 1px;
    background-color: #00bfff;
}
.blockitem{
    width: 470px!important;
    height: 50px;

    margin-right: 20px;
}

.productswiper {
    overflow: hidden;
    box-sizing: border-box;
    height: 400px;
    width: 80%;
    margin: 0 auto;
}

.img {
    display: flex;
    font-weight: 400;
    align-items: center;
    color: #00bfff;
    flex-direction: column;
    justify-content: space-between;
}

.item1{
    font-size: 1.1em!important;
    display: flex;
    align-items: center;
}
.img img {
    /* margin: 0 auto; */
    width: 100%;
}
.item2{
    display: flex;
    align-items: center;
}
.item3{
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14%;
    height: 40px;
    color: #fff!important;
    font-size: 16px;
    background-color: #0070af;
}



/* 轮播图样式 */

.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}

@media (max-width: 1580px) {
    .search{
        display: none;
    }
   
}

</style>