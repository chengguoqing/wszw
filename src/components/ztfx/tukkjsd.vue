<!--市级行政许可事项即办件占比分析-->
<template>
    <div class="h100">
        <tubiao :shuju="shuju" ref="dftyyusre" v-if="jhghsdf"></tubiao>

    </div>
</template>
<script>
    import tubiao from "@/components/tubiao"
    export default {
        props: ['hjgdffd'],
        data() {
            return {
                jhghsdf: false,
                shuju: {
                    tooltip: {
                        trigger: 'axis'
                    },
                    textStyle: { //设置字体颜色
                        fontSize: 12,
                        color: '#fff'
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '22%',
                        top: "10%",
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
                        type: 'value'
                    }],
                    visualMap: {
                        orient: 'horizontal',
                        left: 'center',
                        min: 0,
                        max: 5,
                        bottom:5,
                        textStyle: { //设置字体颜色
                            fontSize: 12,
                            color: '#fff'
                        },
                        text: ['>5%', '<1%', ],
                        dimension: 0,
                        inRange: {
                            color: ['#2DFFFB', '#E7495A']
                        }
                    },
                    series: [{
                        type: 'bar',
                        barWidth: '60%',
                        data: [1, 2, 3, 4, 5, 6]
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
            let hhsdfa =[],
                hhsdfb=[]
            this.hjgdffd.map(a => {
                hhsdfa.push(a.name)
                hhsdfb.push(a.value)
            })
            this.shuju.xAxis[0].data = hhsdfa
            this.shuju.series[0].data = hhsdfb
            this.jhghsdf = true
        },
    }

</script>
<style scoped>


</style>
