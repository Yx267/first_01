<template>
  <div class="box">
    <div class="banner">
        <img src="https://www.umt-tw.com/upload/About/F_201709291348jCWMQz45.JPG" alt="">
        <div class="smallbanner">{{text}}</div>
       </div>
       <!-- 小面包屑 -->
       <div class="cake">
        <span class="blue">Home/</span><span class="blue">{{textBox}}/</span><span>{{text}}</span>
       </div>
  </div>
</template>

<script>
export default {
name:'TopImg',
props:['text','textBox']
}
</script>

<style>
.box{
    font-size: 100%;
    width: 100%;
}
.banner{
    position: relative;
    top:0;
    width: 100%;
}
.banner img{
    width: 100%;
}
.banner .smallbanner{
    position: absolute;
    top: 0;
    right: 20%;
    color: #fff;
    font-size: 3em;
    box-sizing: border-box;
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    align-self: start;
    align-items: flex-end;
    width: 24%;
    height: 56%;
    background-color: #0171b0;
}

/* 面包屑 */
.cake{
    box-sizing: border-box;
    width: 100%;
    font-size: 1em;
    padding: 20px;
    padding-right: 18%;
    text-align: right;
    background-color: #fff;
}
.cake span{
    margin-right: 4px;
    cursor: pointer;

}
.blue{
    color: #0171b0;
}
@media(max-width:1500px){
    .banner .smallbanner{
        height: 20%;
        font-size: 1.8em;

    }
}
@media(max-width:1000px){
    .banner .smallbanner{
        position: absolute;
        top: 0;
        right: 10%;
        height: 18%;
        font-size: 1.4em;
            padding: 10px;

    }
    .cake{
    padding-right: 12%;

    }
    .IdarBox{
        align-items: center;
        flex-direction: column;
    }
    .Idarleft{
        width: 100%;
    }
    .Idarright{
        width: 80%;
    }
    .introBan{
        flex-direction: column;
    }
    .intoeLeft{
        display: none;
    }
}
@media(max-width:800px){
    .banner .smallbanner{
        position: absolute;
        top: 0;
        right: 10%;
        height: 16%;
        font-size: 1.0em;
    }
    .cake{
    padding-right: 10%;

    }
}
</style>