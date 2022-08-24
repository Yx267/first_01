<template>
  <div class="search">
                <div class="active searchItem">
                    <div class="item1">產品快速搜尋</div>
                    <div class="item2">
                        <div class="block">
                            <span class="demonstration"></span>
                            <el-cascader class="blockitem" v-model="value" :options="options" @change="handleChange"></el-cascader>
                        </div>
                        <div class="block" >
                            <span class="demonstration"></span>
                            <el-cascader class="blockitem" :size="size"  v-model="value" :options="options" :props="{ expandTrigger: 'hover' }"
                                @change="handleChange"></el-cascader>
                        </div>
                    </div>
                    <div class="item3">
                        搜尋>
                    </div>
                </div>
            </div>
</template>

<script>
export default {
name:'Botsearch',
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
    }
}
</script>

<style scoped>
/* 搜索样式 */
.search {
    width: 100%;

    background-color: #e5f8ff;
}

.searchItem {
    height: 165px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.searchItem div {
    /* line-height: 165px; */
    font-size: 18px;
    color: rgb(50, 50, 50);
}
.blockitem{
    width: 470px!important;
    height: 50px;

    margin-right: 20px;
}
.item1{
    width: 180px;
    font-size: 1em!important;
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
@media (max-width: 1580px) {
    .search{
        display: none;
    }
   
}
</style>