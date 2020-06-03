<!--办事指南发布数量-->
<template>
    <div class="h100">
        <tubiao :shuju="shuju" ref="dftyyusre"></tubiao>

    </div>
</template>
<script>
    import tubiao from "@/components/tubiao"
    export default {
        props: ['bszlfbsl'],
        data() {
            return {
                jhghsdf: false,
                shuju: {
                    color: ['#E7495A'],
                       textStyle: { //设置字体颜色
                        color: '#fff'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: { // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '0%',
                          top: '10%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [{
                        type: 'category',
                        data: [],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }],
                    yAxis: [{
                        type: 'value',
                           splitLine: { //隐藏图标的线
                            show: false
                        },
                    }],
                    series: [{
                        name: 'value',
                        type: 'bar',
                        barWidth: '30%',
                        data: [10, 52, 200, 334, 390, 330, 220]
                    }]
                }
            }
        },
        components: {
            tubiao
        },
        methods: {
            cxsd() {
                let hhsdfa = [],
                    hhsdfb = []
                this.bszlfbsl.map(a => {
                    hhsdfa.push(a.name)
                    hhsdfb.push(a.value)
                })
                this.shuju.xAxis[0].data = hhsdfa
                this.shuju.series[0].data = hhsdfb
                this.$refs.dftyyusre.setdsds(this.shuju)
            }
        },
        mounted() {
            this.cxsd()
        },
    }

</script>
<style scoped>


</style>
