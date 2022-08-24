<template>
  <div class="intro">
    <!-- 顶部图片 -->
       <TopImg :text="text" :textBox="textBox"></TopImg>

       <!-- 介绍 -->
       <div class="introBan">
        <div class="intoeLeft"></div>
        <div class="active introconten">
           <div class="contentTop">
             <h2>關於昇達</h2>
            <p>昇達科技成立於1999年，創辦人為總經理吳東義博士，在微波/毫米波相關產業已有30年以上的經歷，主要產品為微波/毫米波等高頻被動通訊元件及天線，市場應用可概略分為無線回傳網路、衛星通訊、寬頻無線傳輸以及行動通訊基地台等，是台灣唯一微波/毫米波被動元件設計製造公司，更是全球在此領域之領導企業。
                昇達科技成立於1999年，創辦人為總經理吳東義博士，在微波/毫米波相關產業已有30年以上的經歷，主要產品為微波/毫米波等高頻被動通訊元件及天線，市場應用可概略分為無線回傳網路、衛星通訊、寬頻無線傳輸以及行動通訊基地台等，是台灣唯一微波/毫米波被動元件設計製造公司，更是全球在此領域之領導企業。
            </p>
            <p>昇達科技成立於1999年，創辦人為總經理吳東義博士，在微波/毫米波相關產業已有30年以上的經歷，主要產品為微波/毫米波等高頻被動通訊元件及天線，市場應用可概略分為無線回傳網路、衛星通訊、寬頻無線傳輸以及行動通訊基地台等，是台灣唯一微波/毫米波被動元件設計製造公司，更是全球在此領域之領導企業。
               
            </p>
            <p>昇達科技成立於1999年，創辦人為總經理吳東義博士，在微波/毫米波相關產業已有30年以上的經歷，主要產品為微波/毫米波等高頻被動通訊元件及天線，市場應用可概略分為無線回傳網路、衛星通訊、寬頻無線傳輸以及行動通訊基地台等，是台灣唯一微波/毫米波被動元件設計製造公司，更是全球在此領域之領導企業。
                市場應用可概略分為無線回傳網路、衛星通訊、寬頻無線傳輸以及行動通訊基地台等，是台灣唯一微波/毫米波被動元件設計製造公司，更是全球在此領域之領導企業。
            </p>
           </div>
           <div class="contentIdar">
            <h2>經營理念</h2>
            
           <div class="IdarBox">
             <ul class="Idarleft">
                    <li><div class="IdarleftTitle">穩健踏實</div>
                    <p>追求企業的永續經營，為客戶、員工及股東的長期權益而努力，力求三方面穩定而均衡的發展。</p>
                    </li>
                    <li><div class="IdarleftTitle">專注聚焦</div>
                    <p>專注於本業，不斷提高公司的競爭優勢，維持悠游於藍海的營運策略。</p>
                    </li>
                    <li><div class="IdarleftTitle">客戶滿意</div>
                    <p>以經營長期策略夥伴的理念，提供高品質的產品與完善的服務給客戶。</p>
                    </li>
                    <li><div class="IdarleftTitle">精益求精</div>
                    <p>不斷提升研發效率、製程穩定度與營運績效，配合客戶及市場需求，迎接挑戰與突破。</p>
                    </li>
                    <li><div class="IdarleftTitle">學習成長</div>
                    <p>致力於提供可持續學習的工作環境，使同仁養成不斷進修學習的習慣，讓努力自我精進者都能得到肯定，並持續地追求自我突破。</p>
                    </li>
            </ul>
            <div class="Idarright">
                <img src="https://www.umt-tw.com/img/demo/a1.jpg" alt="">
            </div>
           </div>

           </div>
        </div>
        <div class="intoeRight">
            <ul>
                <li>
                    <h4>公司全名</h4>
                    <p>昇達科技股份有限公司簡稱UMT</p>
                </li>
                 <li>
                    <h4>成立於</h4>
                    <p>1999年</p>
                </li>
                 <li>
                    <h4>經營團隊</h4>
                    <p class="dsz">
                        <span>董事長</span>
                        <span>陳淑敏</span>
                        <span>總經理</span>
                        <span>吳東義</span>
                        <span>執行副總</span>
                        <span>郭俊良</span>
                    </p>
                </li>
                 <li>
                    <h4>產品服務</h4>
                    <p>專精於微波/毫米波高頻被動通訊元件與天線之研發與製造</p>
                </li>
                 <li>
                    <h4>子公司</h4>
                    <p class="zi">
                        <span>
                            台灣-士誼科技
                        </span>
                          <span>
                            台灣-正通科技
                        </span>
                          <span>
                            中國-昆山昕芮特電子
                        </span>
                        </p>
                </li>
                 <li>
                    <h4>員工總數</h4>
                    <p>集團總人數750人</p>
                </li>
                <li>
                    <h4>股票代號</h4>
                    <p>3491</p>
                </li>
            </ul>
        </div>
        
       </div>

  </div>
</template>

<script>
export default {
    name:'intro',
data(){
    return{
        text:"公司簡介",
        textBox:"關於昇達"
    }
}
}
</script>

<style scoped>
.intro{
    font-size: 100%;
    width: 100%;
}
/* 介绍 */
.introBan{
    display: flex;
}
.intoeLeft,.intoeRight{
    flex: 1;
    background-color: #f6f6f6;

}
.introconten{
    display: flex;
    flex-direction: column;
    font-size: 1em;
    padding: 0 4%;
    box-sizing: border-box;
    text-align: center;
}
.introconten p{
    text-align: left;
    margin: 0 auto;
    line-height: 30px;
    margin-bottom: 40px;
    color: rgb(95, 95, 95);
}
.introconten h2{
    color: rgb(75, 75, 75);
    font-weight: 400;
    margin: 30px;
    box-sizing: border-box;
}
/* 经营理念 */
.contentIdar{
    display: flex;
    flex-direction: column;
}
.IdarBox{
    display: flex;
    justify-content: space-between;
}
.Idarleft li{
    margin-top: -20px;
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 90%;
}
.Idarleft li p{
    padding-left: 40px;
    box-sizing: border-box;
}
.Idarleft li .IdarleftTitle{
    background-color: #00a2d9;
    padding: 12px;
    width: 25%;
    margin-bottom: 10px;
    text-align: center;
}
.Idarright{
    width: 100%;
}
.Idarright img{
    width: 100%;
}

.intoeRight ul{
    padding: 0 14%;
    display: flex;
    flex-direction: column;
}
.intoeRight ul li{
    color: rgb(95, 95, 95);
    margin-top: 30px;
    font-size: 14px;
}
.intoeRight ul li h4{
    font-weight:400;
    color: #00a2d9;
}
.intoeRight ul li p{
    line-height: 34px;

}
.intoeRight ul li:nth-child(3)  p{
    width: 120px;
}
.dsz span{
    display: inline-block;
    margin-left: 5px;
}
.zi{
    display: flex;
    flex-direction: column;
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