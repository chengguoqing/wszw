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
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    textStyle: { //设置字体颜色
                        color: '#fff'
                    },
                    color: "#E7495A",
                    xAxis: {
                        type: 'value',
                        splitLine: { //隐藏图标的线
                            show: false
                        },
                        boundaryGap: [0, 0.01]
                    },
                    yAxis: {
                        type: 'category',
                        data: []
                    },
                    series: [{
                        type: 'bar',
                        barWidth: '40%',
                        data: [9800, 3225, 3225, 3225, 3225, 3225]
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
                this.shuju.yAxis.data = hhsdfa
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
