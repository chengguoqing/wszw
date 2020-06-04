<!--市级政府相关清单发布情况-->
<template>
    <div class="h100">
        <tubiao :shuju="shuju" ref="dftyyusre" v-if="ddjjjerr"></tubiao>


    </div>
</template>
<script>
    import tubiao from "@/components/tubiao"
    export default {
        props: ['dataset', 'zohjhbdf', 'baioti'],
        data() {
            return {
                ddjjjerr: false,
                shuju: {
                    tooltip: {},
                    textStyle: { //设置字体颜色
                        color: '#fff'
                    },
                    color: ['#4C90E2', '#51E3C2'],
                    legend: {
                        data: ['数量', '占比'],
                        bottom: 0,
                        textStyle: { //设置字体颜色
                            color: '#fff'
                        }
                    },
                    xAxis: [{
                        type: 'category',
                        data: ['权责清单', '公共服务', '跑动次数']
                    }],
                    grid: {
                        left: '0%',
                        right: '0%',
                        bottom: '10%',
                        containLabel: true
                    },
                    yAxis: [{
                            type: 'value',
                            splitLine: { //隐藏图标的线
                                show: false
                            }
                        },
                        {
                            type: 'value',
                            axisLabel: {
                                formatter: '{value} %'
                            },
                            splitLine: { //隐藏图标的线
                                show: false
                            }
                        }
                    ],
                    series: [{
                            name: '数量',
                            type: 'bar',
                            data: [1, 3, 5]
                        },
                        {
                            name: '占比',
                            type: 'line',
                            yAxisIndex: 1,
                            data: [2.0, 2.2, 3.3]
                        }
                    ]
                }
            }
        },
        components: {
            tubiao
        },
        methods: {

        },
        mounted() {
            if (this.zohjhbdf) {
                this.shuju.xAxis[0].data = this.zohjhbdf
            }
            if (this.baioti) {
                this.shuju.legend.data = this.baioti
                this.shuju.series[0].name = this.baioti[0]
                this.shuju.series[1].name = this.baioti[1]
            }


            this.shuju.series[0].data = this.dataset.jhggda
            this.shuju.series[1].data = this.dataset.jhggdb
            this.ddjjjerr = true
        },
    }

</script>
<style scoped>


</style>
