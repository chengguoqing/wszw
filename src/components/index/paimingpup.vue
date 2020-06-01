<template>
    <div class="kjndrertyty">

        <div class="kjjjnncrerty nbl">
            <p class="bgsedrrt" ></p>
            <i class="el-icon-close cf ddftyyuderr" @click="$emit('close')"></i>
            <div class="pr cf">
                <p class="fz16">请您选择地区，为您带来准确服务</p>
                <div class="mt20">
                    <span v-for="sd in diqu" class="fz14 dsfdstysx f_b sz" @click="$emit('close')">{{sd.sf}}</span>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                diqu: [{
                    id: 0,
                    sf: '北京'
                }, {
                    id: 0,
                    sf: '天津'
                }, {
                    id: 0,
                    sf: '河北'
                }, {
                    id: 0,
                    sf: '山西'
                }, {
                    id: 0,
                    sf: '内蒙古'
                }, {
                    id: 0,
                    sf: '辽宁'
                }, {
                    id: 0,
                    sf: '吉林'
                }, {
                    id: 0,
                    sf: '黑龙江'
                }, {
                    id: 0,
                    sf: '上海'
                }, {
                    id: 0,
                    sf: '江苏'
                }, {
                    id: 0,
                    sf: '浙江'
                }, {
                    id: 0,
                    sf: '安徽'
                }, {
                    id: 0,
                    sf: '福建'
                }, {
                    id: 0,
                    sf: '江西'
                }, {
                    id: 0,
                    sf: '山东'
                }, {
                    id: 0,
                    sf: '河南'
                }, {
                    id: 0,
                    sf: '湖北'
                }, {
                    id: 0,
                    sf: '湖南'
                }, {
                    id: 0,
                    sf: '广东'
                }, {
                    id: 0,
                    sf: '广西'
                }, {
                    id: 0,
                    sf: '海南'
                }, {
                    id: 0,
                    sf: '重庆'
                }, {
                    id: 0,
                    sf: '四川'
                }, {
                    id: 0,
                    sf: '贵州'
                }, {
                    id: 0,
                    sf: '云南'
                }, {
                    id: 0,
                    sf: '西藏'
                }, {
                    id: 0,
                    sf: '陕西'
                }, {
                    id: 0,
                    sf: '甘肃'
                }, {
                    id: 0,
                    sf: '青海'
                }, {
                    id: 0,
                    sf: '宁夏'
                }, {
                    id: 0,
                    sf: '新疆'
                }, {
                    id: 0,
                    sf: '新疆生产建设兵团'
                }]
            }
        },
        components: {

        },
        methods: {

        },
        mounted() {

        },
    }

</script>
<style scoped>
    .kjndrertyty {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        z-index: 1000
    }

    .kjjjnncrerty {
        width: 500px;
        height: 230px;
        padding: 20px;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        border: 1px solid #076DA5;
    }

    .bgsedrrt {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0.8;
        background: linear-gradient(to right, #053574, #041D47);
    }
    .dsfdstysx{
        margin-right: 20px;
        margin-bottom: 20px;
    }
    .dsfdstysx:hover{
        color: #076DA5
    }
    .ddftyyuderr{
        position: absolute;
        right: 16px;
        top: 16px;
        font-size: 20px;
        z-index: 1000;
        cursor: pointer;
    }

</style>
