<template>
    <div class="w100 h100">
        <tubiao :shuju="shuju" v-if="ssddf" ref="ddrrtty"></tubiao>

    </div>
</template>
<script>
    import tubiao from "@/components/tubiao"
    export default {
        props: ['id', "ytter","datsse"],
        data() {
            return {
                ssddf: false,
                shuju: {
                    legend: {
                        right: 30,
                        top: 10,
                        textStyle: { //设置字体颜色
                            color: '#fff',
                            fontSize: 12
                        },
                        data: []
                    },
                    tooltip: {
                        trigger: 'axis'
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
                        data: []
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
                    series: []
                }
            }
        },
        components: {
            tubiao
        },
        methods: {
            async jjhsdd(id) {
                let res = await this.get("getshujufenxi")
                res = res.data
                this.shuju.xAxis.data = res.cityList
                let dfgdfy = res.series
                let jjsde = []
                dfgdfy.map(a => {
                    a.type = 'line'
                    a.smooth = true
                    jjsde.push(a.name)

                })
                this.shuju.series = dfgdfy
                this.shuju.legend.data = jjsde

                this.ssddf = true
                this.$refs.ddrrtty.setdsds(this.shuju)
            }
        },
        mounted() {
            if (this.ytter) {
                let res = this.datsse
                res = res.data
                this.shuju.xAxis.data = res.cityList
                let dfgdfy = res.series
                let jjsde = []
                dfgdfy.map(a => {
                    a.type = 'line'
                    a.smooth = true
                    jjsde.push(a.name)

                })
                this.shuju.series = dfgdfy
                this.shuju.legend.data = jjsde

                this.ssddf = true
            } else {

                this.jjhsdd(this.id)
            }
        },
    }

</script>
<style scoped>
    .dfdgyyue {
        margin: auto;
    }

</style>
