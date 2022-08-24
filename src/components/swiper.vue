<template>
  <div class="div">
         <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img class="img" src="https://www.umt-tw.com/upload/Banner/F_201801311624EtmalV37.JPG" alt="">
            </div>
            <div class="swiper-slide">
                <img class="img" src="https://www.umt-tw.com/upload/Banner/F_201711151127blq3rQ96.JPG" alt="">
            </div>
            <div class="swiper-slide">
                <img class="img" src="https://www.umt-tw.com/upload/Banner/F_201801311624EtmalV37.JPG" alt="">
            </div>
            <div class="swiper-pagination"></div> 
        </div>
         </div>
         <ul class="divli">
            <li>創新研發，不斷精進</li>
            <li>唯一專利，領先業界</li>
            <li>品質一流，快速生產</li>
         </ul>
      </div>
</template>

<script>

export default {
name:'swiper',
methods:{
   
},
mounted(){
   var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        slidesPerView: 1,
	    speed: 2500, // 每次切换时长
        autoplay:3000,
        loop:true
    });
}
}
</script>

<style scoped>
.div{
    margin-top: -20px;
    width: 100%;
    height: 60%;
    background-color: pink;
}
.img{
    width: 100%;
    height: 100%;
}
.divli{
    display: flex;
    width: 100%;
    height: 60px;
    background-color: #dddddd;
}
.divli li{
    text-align: center;
    height: 100%;
    line-height: 60px;
    flex: 1;
}
.divli li:hover{
    background-color: #00bfff;
}

    .swiper-container {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

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
</style>