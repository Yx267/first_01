<template>
  <div class="finance">
       <TopImg :text="text" :textBox="textBox"></TopImg>
       <div class="bigbox active">
         <ul class="financeli">
            <li class="blue">財務資訊</li>
            <li>股東專區</li>
            <li>公司治理</li>
            <li>企業社會責任</li>
            <li>利害關係人聯絡資訊</li>
        </ul>
        <!-- 内容 -->
        <div class="financeContent">
            <h1>財務資訊</h1>
            <ul>
                <li>
                    <a href="#">
                        <img src="https://www.umt-tw.com/img/in0_r1_c1.jpg" alt="">
                        <span>財務報告</span>
                    </a>
                </li>
                 <li>
                    <a href="#">
                        <img src="https://www.umt-tw.com/img/s1.png" alt="">
                        <span>營業額</span>
                    </a>
                </li>
                 <li>
                    <a href="#">
                        <img src="https://www.umt-tw.com/img/icon/01.png" alt="">
                        <span>營業淨利</span>
                    </a>
                </li>
            </ul>
        </div>
       </div>
       
  </div>
</template>

<script>
export default {
name:'finance',
data() {
    return {
        textBox: "投資人關係",
        text: "財務資訊"
    }
},
}
</script>

<style scoped>
.finance{
    width: 100%;
}
.financeli{
    display: flex;
    padding: 20px 0;
    border-top: 1px solid #aaa;
    border-bottom: 1px solid #aaa;
}
.blue{
    color:#0070c0 ;
}
.financeli li:nth-child(1) {
    margin: 0;
}
.financeli li{
    margin: 0 20px;
}

/* 内容 */
.financeContent{
    margin-bottom:140px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
}
.financeContent h1{
    font-weight: 400;
    margin:  80px;
}
.financeContent li{
    width: 14%;
}
.financeContent a{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.financeContent img{
    width: 100%;
    margin: 30px 0;
}
.financeContent ul {
    display: flex;
    justify-content: space-around;
}
.financeContent a span{
    display: block;
    width: 100%;
    text-align: center;
    padding: 20px 0;
    color: #333333;
    border-top: 1px solid #aaa;
}

</style>