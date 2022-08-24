<template>
    <div class="make">
       <TopImg :text="text" :textBox="textBox"></TopImg>
        <div class="contentmake">
            <p class="activetwo op">昇達科技致力於創新研發高效率、高可靠度的微波/毫米波元件與天線，持續與國際知名電信設備商進行協同開發，每年投入研發經費達總營業額5%，並投入超過50名研發工程師進行各項前瞻性研發計畫。搭配各種先進研發設備與產品設計資料庫，業界領先3D模擬軟體，可滿足客戶客製化與快速產品設計需求。</p>
            <h2 class="activetwo">
                高技術創新的研發團隊<br/>Hi-Tech Innovative R&D Team
            </h2>
            <p class="activetwo smallspan ">
                <span>-近20名十年以上開發經驗資深人員所組成</span>
                <span>-聚焦前瞻技術研究開發</span>
                <span>-具有快速導入量產能力</span>
                <span>-航太等級設計審查流程</span>
                <span>-完整產品設計資料庫</span>
                <span>-獲得60個以上各國專利</span>

            </p>
            <ul class="oneItem">
                <li><img src="https://www.umt-tw.com/upload/User/images/00000003.jpg?v=20171214" alt=""></li>
                <li><img src="https://www.umt-tw.com/upload/User/images/02.jpg" alt=""></li>
                <li><img src="https://www.umt-tw.com/upload/User/images/03.jpg" alt=""></li>
            </ul>
             <h2 class="activetwo">
                先進研發設備<br/>Advanced R&D Equipment
            </h2>
            <p class="activetwo smallspan ">
                <span>-毫米波天線暗房實驗室</span>
                <span>-桌上型緊湊場反射面測試設備</span>
                <span>-微波與毫米波向量網路分析儀(VNA)</span>
                <span>-頻譜分析儀</span>
                <span>-訊號產生器</span>
                <span>-互調失真測試儀</span>

            </p>
            <ul class="twoItem">
                <li><img src="https://www.umt-tw.com/upload/User/images/01(3)(1).jpg" alt=""></li>
            </ul>
            <h2 class="activetwo">
                業界領先3D模擬軟體<br/>State-of-art 3D Simulation Software
            </h2>
            <p class="activetwo smallspan ">
                <span>-業界標準3D電磁模擬工具(FEM有限元素分析與FDTD有限時域差分法)</span>
                <span>-多線程平行計算</span>
                <span>-專屬GPU加速</span>
                <span>-電磁和熱流協同模擬</span>
                <span>-不同演算法混和模擬與驗證</span>

            </p>
            <h2 class="activetwo">
                廣泛材料/後處理設計經驗<br/>
Extensive Material/Post-processing Design Experience
            </h2>
            <p class="activetwo smallspan ">
                <span>-航太/軍用後處理經驗</span>
                <span>-塑料電鍍與加工設計經驗</span>
                <span>-多重鍍層(鍍金/鍍銀/鍍鎳/鉻酸等)搭配加工設計經驗</span>

            </p>
            <ul class="threeItem">
                <li><img src="https://www.umt-tw.com/upload/User/images/about002.jpg" alt=""></li>
            </ul>
               <h2 class="activetwo">
                高技術創新的研發團隊<br/>Hi-Tech Innovative R&D Team
            </h2>
            <p class="activetwo smallspan ">
                <span>-近20名十年以上開發經驗資深人員所組成</span>
                <span>-聚焦前瞻技術研究開發</span>
                <span>-具有快速導入量產能力</span>
                <span>-航太等級設計審查流程</span>
                <span>-完整產品設計資料庫</span>
                <span>-獲得60個以上各國專利</span>

            </p>
             <ul class="oneItem">
                <li><img src="https://www.umt-tw.com/upload/User/images/21.jpg" alt=""></li>
                <li><img src="https://www.umt-tw.com/upload/User/images/22.jpg" alt=""></li>
                <li><img src="https://www.umt-tw.com/upload/User/images/23.jpg" alt=""></li>
            </ul>
            <Botsearch></Botsearch>
        </div>


    </div>
</template>

<script>
import Botsearch from '@/components/Botsearch.vue';
export default {
    name: "make",
    data() {
        return {
            text: "研發技術",
            textBox: "研發與專業製造"
        };
    },
    components: { Botsearch }
}
</script>

<style scoped>
.make{
    font-size: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
}
.op{
    margin-bottom: 50px!important;
}
.activetwo{
    margin: 0 auto;
    width: 40%;
}
.contentmake{
    font-size: 1.2em;
    color: #666666;
    line-height: 40px;
}.contentmake h2{
    margin-top: 20px;
    font-weight: 400;
    text-align: center;
}
.smallspan{
    margin: 30px auto;
    
}
.smallspan span{
    display: block;

}
.oneItem{
    overflow: hidden;
    margin-top: 60px;
    width: 100%;
    display: flex;
}
.oneItem li{
    flex: 1;
}
.oneItem li img{
    width: 100%;
}
.twoItem{
    width: 100%;
}
.twoItem img{
    width: 100%;
}
.threeItem{
    width: 100%;
}
.threeItem img{
    width: 100%;
}



@media(max-width:1500px){
   .activetwo{
    width: 80%;
    
 }
}
@media(max-width:1000px){
 
}
@media(max-width:800px){
    
}

</style>