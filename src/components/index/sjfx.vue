<template>
    <div class="w100 h100">
        <tubiao :shuju="shuju"></tubiao>

    </div>
</template>
<script>
    import tubiao from "@/components/tubiao"
    export default {
        data() {
            return {
                shuju: {
                    legend: {
                        right: 30,
                        top:10,
                        textStyle: { //设置字体颜色
                            color: '#fff',
                            fontSize:12
                        },
                        data: ['2018年排名', '2017年排名', '2016年排名', '2015年排名']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['太原', '大同', '朔州', '阳泉', '长治', '忻州', '吕梁', '晋中', '临汾', '运城', '晋城']
                    },
                    textStyle: {
                        color: '#fff',
                        fontSize: "15"
                    },
                    yAxis: {
                        type: 'value',

                        maxInterval: 10, //每个刻度最大为5
                        max: 40,
                    },
                    series: [{
                        name: '2018年排名',
                        data: [30, 24, 30, 20, 10, 30, 16, 20, 30, 30, 26],
                        type: 'line',
                        smooth: true
                    }, {
                        name: '2017年排名',
                        data: [10, 24, 30, 20, 10, 30, 6, 20, 10, 30, 26],
                        type: 'line',
                        smooth: true
                    }, {
                        name: '2016年排名',
                        data: [40, 24, 30, 20, 10, 30, 16, 20, 10, 30, 26],
                        type: 'line'
                    }, {
                        name: '2015年排名',
                        data: [10, 24, 30, 20, 10, 30, 36, 20, 10, 30, 26],
                        type: 'line',
                        smooth: true
                    }]
                }
            }
        },
        components: {
            tubiao
        },
        methods: {

        },
        mounted() {

        },
    }

</script>
<style scoped>
    .dfdgyyue {
        margin: auto;
    }

</style>
