<template>
    <div class="product">
        <TopImg :text="text" :textBox="textBox"></TopImg>
        <div class="active productItem">
            <div class="block">
                <div class="imgbox">
                <img src="https://www.umt-tw.com/upload/Product/F_201709281402pV9Mi257.JPG" alt="">

                </div>
                <div class="p">
                    <h2>Millimeter Wave 5G</h2>
                    <span>Wireless has been traditionally limited in its capacity due to bandwidth limitations. Technologies at the Millimeter Wave bands have nowadays taken advantage of new wireless regulations that are designed to enable ultra-high capacity transmission. UMT is one of the pioneers in developing cutting-edge technologies for Millimeter Wave up to 170GHz. As a leading provider of Millimeter Wave passive components, UMT offers a complete family of well-performed components that works seamlessly including diplexers, couplers, OMTs, housings and so on.</span>
                </div>
            </div>
            <div class="block">
                <div class="imgbox">
                <img src="https://www.umt-tw.com/upload/Product/F_201709281405c4GG2X36.JPG" alt="">

                </div>
                <div class="p">
                    <h2>Millimeter Wave 5G</h2>
                    <span>Wireless has been traditionally limited in its capacity due to bandwidth limitations. Technologies at the Millimeter Wave bands have nowadays taken advantage of new wireless regulations that are designed to enable ultra-high capacity transmission. UMT is one of the pioneers in developing cutting-edge technologies for Millimeter Wave up to 170GHz. As a leading provider of Millimeter Wave passive components, UMT offers a complete family of well-performed components that works seamlessly including diplexers, couplers, OMTs, housings and so on.</span>
                </div>
            </div>
            <div class="block">
                <div class="imgbox">
                <img src="https://www.umt-tw.com/upload/Product/F_201709281402kD0PrS33.JPG" alt="">

                </div>
                <div class="p">
                    <h2>Millimeter Wave 5G</h2>
                    <span>Wireless has been traditionally limited in its capacity due to bandwidth limitations. Technologies at the Millimeter Wave bands have nowadays taken advantage of new wireless regulations that are designed to enable ultra-high capacity transmission. UMT is one of the pioneers in developing cutting-edge technologies for Millimeter Wave up to 170GHz. As a leading provider of Millimeter Wave passive components, UMT offers a complete family of well-performed components that works seamlessly including diplexers, couplers, OMTs, housings and so on.</span>
                </div>
            </div>
            <div class="block">
                <div class="imgbox">
                <img src="https://www.umt-tw.com/upload/Product/F_2017092814065uod9U66.JPG" alt="">

                </div>
                <div class="p">
                    <h2>Millimeter Wave 5G</h2>
                    <span>Wireless has been traditionally limited in its capacity due to bandwidth limitations. Technologies at the Millimeter Wave bands have nowadays taken advantage of new wireless regulations that are designed to enable ultra-high capacity transmission. UMT is one of the pioneers in developing cutting-edge technologies for Millimeter Wave up to 170GHz. As a leading provider of Millimeter Wave passive components, UMT offers a complete family of well-performed components that works seamlessly including diplexers, couplers, OMTs, housings and so on.</span>
                </div>
            </div>
            <div class="block">
                <div class="imgbox">
                <img src="https://www.umt-tw.com/upload/Product/F_201709281404Jrm4RJ61.JPG" alt="">

                </div>
                <div class="p">
                    <h2>Millimeter Wave 5G</h2>
                    <span>Wireless has been traditionally limited in its capacity due to bandwidth limitations. Technologies at the Millimeter Wave bands have nowadays taken advantage of new wireless regulations that are designed to enable ultra-high capacity transmission. UMT is one of the pioneers in developing cutting-edge technologies for Millimeter Wave up to 170GHz. As a leading provider of Millimeter Wave passive components, UMT offers a complete family of well-performed components that works seamlessly including diplexers, couplers, OMTs, housings and so on.</span>
                </div>
            </div>
        </div>
        <Botsearch></Botsearch>
    </div>
</template>

<script>
export default {
    name: "product",
    data() {
        return {
            text: "產品介紹",
            textBox: ""
        };
    },
};
</script>

<style scoped>
.product{
    width: 100%;
}
.productItem{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.block{
    margin-top: 10px;
    font-weight: 200;
    width: 48%;
}
.block img{
    width: 100%;
    height: 100%;
    transition: all 1s;
}
.block .p:hover{
    
    cursor: pointer;
    color: #65b6df;
}
.block .p h2{
    margin: 20px 0;
    font-weight: 400!important;
}
.block .p span{
    width: 100%;
    display: -webkit-box;
    height: 80px;
    overflow: hidden;
    line-height: 26px;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
.imgbox{
    width: 100%;
    height: 64%;
    overflow: hidden;
}
.block img:hover{
transform: scale(1.1);
cursor: pointer;
}



</style>