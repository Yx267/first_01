<template>
  <div class="floor">
   <!-- 公司简介、电话号码、地址 -->
    <div class="floorcen active">
        <ul class="floorleft">
            <li>
                <h3>關於昇達</h3>
                <a href="#">公司简介</a>
                <a href="#">大事纪</a>
                <a href="#">联络我们</a>
            </li>
              <li>
                <h3>關於昇達</h3>
                <a href="#">公司简介</a>
                <a href="#">大事纪</a>
                <a href="#">联络我们</a>
            </li>
              <li>
                <h3>關於昇達</h3>
                <a href="#">公司简介</a>
                <a href="#">大事纪</a>
                <a href="#">联络我们</a>
            </li>
              <li>
                <h3>關於昇達</h3>
                <a href="#">公司简介</a>
                <a href="#">大事纪</a>
                <a href="#">联络我们</a>
            </li>
              <li>
                <h3>關於昇達</h3>
                <a href="#">公司简介</a>
                <a href="#">大事纪</a>
                <a href="#">联络我们</a>
            </li>
              <li>
                <h3>關於昇達</h3>
                <a href="#">公司简介</a>
                <a href="#">大事纪</a>
                <a href="#">联络我们</a>
            </li>
        </ul>
        <ul class="floorright">
            <li>
                昇達科技<img src="../img/xinfeng.png" alt="">
            </li>
            <li style="font-size:30px">
                +886-2-2452-5533
            </li>
            <li style="font-size:14px">
                FAX：+886-2-2452-7722
            </li>
            <li style="font-size:14px">
                基隆市206七堵區工建路1號(六堵科技園區)
            </li>
        </ul>
    </div>
    <div class="fbot active">
        <p>Copyright © Universal Microwave Technology, Inc. All Rights Reserved.</p>
        <p class="a" style="color:#8db4ca">Designed by Maya Web Design</p>
    </div>
  </div>
</template>

<script>
export default {
    name:'Foorl'

    
}
</script>

<style scoped>
.floor{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #0171b0;
}
.floorcen{
    justify-content: space-between;
    display: flex;
}
.floorleft{
        margin-top: 85px;
    display: flex;
    justify-content: space-between;
    width: 70%;
}
.floorleft li{
    color: #fff;
    height: 40px;
    line-height: 40px;
    display: flex;
    width: 120px;
    text-align: center;
    font-size: 16px;
    flex-direction: column;
}
.floorleft li h3{
    border-bottom: 1px solid #fff;
}
.floorleft li a{
    display: block;
    font-size: 14px;
    color: #cad8e0;
}
.floorright{
    margin-top: 85px;
    color: #fff;
    font-size: 20px;
    display: flex;
    height: 200px;
    flex-direction: column;
}
.floorright li{
    cursor: pointer;
    margin-bottom: 10px;
}
.floorright li img{
    width: 20px;
    margin: 5px 0 0 10px;
}
.fbot{
    border-top: 1px solid #aaa;
    height: 100px;
    display: flex;
    justify-content: space-between;
    color: #fff;
}
.fbot p{
    margin-top: 20px;
    
}
@media (max-width:1200px){
    .floorleft{
        width: 100%;
    }
    .floorleft li{
        width: 150px;
        height: 100%;
    }
    .floorright{
        margin-top: 50px;
    }
    .floorcen{
        flex-direction: column;
    }
    .fbot{
        flex-direction: column;
        line-height: 10px;
        height: 80px;
        justify-content: space-around;
        font-size: 12px!important;
    }
    .a{
        text-align: right;

    }
    .fbot p{
    margin-top: 10px;
    
}
    
}
@media (max-width:750px){
    .floorleft{
        width: 100%;
        flex-wrap: wrap;
    }
    .floorcen{
        flex-direction: column;
    }
}
</style>