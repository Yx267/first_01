<template>
  <div class="resource">
    <div class="bg">
    <img src="https://www.umt-tw.com/img/recruit/10.jpg?v=20180329" alt="">
    <div class="pimg">
        <img class="people" src="https://www.umt-tw.com/img/recruit/05.png" alt="">

    </div>
    <div class="button">
        <div class="buttomzz">
            <img src="https://www.umt-tw.com/img/recruit/104.png" alt="">
            <span>我們的職缺機會</span>
        </div>
       
    </div>
    </div>

  </div>
</template>

<script>
export default {
name:'resource'
}
</script>

<style scoped>
.resource{
    width: 100%;
}
.resource img{
    margin: 0;
    width: 100%;
}
.bg{
    position: relative;
    background: url('https://www.umt-tw.com/img/recruit/06.png')no-repeat 100% 100%;
    background-color: #54c1e8;
}
.buttomzz{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
.button{
    overflow: hidden;
    cursor: pointer;
    color: #fff;
    font-size: 1.5em;
    position: absolute;
    top: 65%;
    right: 20%;
    z-index: 9999;
    width: 200px;
    height: 100px;
    box-shadow: -3px 10px 0px -3px #986b00;
    border-radius: 10px;
    background-color: orange;
}
.button img{
    width: 90%;
    
}
.button:hover{
    box-shadow: none;

}
.button:hover .buttomzz{
    background: rgba(0, 0, 0, .5);

}

@media (max-width:1200px) {
    .people{
        display: none;
    }
    .pimg{
        width: 100%;
        height: 220px;
            background-color: #54c1e8;

    }
}
</style>