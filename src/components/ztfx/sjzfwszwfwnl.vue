<template>
    <div class="dfdgyyue h100">
        <tubiao :shuju="shuju" v-if="ssddf"></tubiao>

    </div>
</template>
<script>
    import tubiao from "@/components/tubiao"
    export default {
        props: ['dataset', "ty"],
        data() {
            return {
                ssddf: false,
                shuju: {
                    legend: {
                        bottom: 0,
                        textStyle: { //设置字体颜色
                            color: '#fff'
                        }
                    },
                    grid: {
                        left: '0%',
                        right: '0%',
                        bottom: '10%',
                        containLabel: true
                    },
                    tooltip: {},
                    textStyle: { //设置字体颜色
                        color: '#fff'
                    },
                    color: ["#E3BB4B", "#F46E6D", "#7174D4"],
                    dataset: this.dataset,
                    xAxis: {
                        type: 'category',
                        axisLine: { //最外面的边框颜色
                            lineStyle: {
                                color: "#4F5564"
                            }
                        }
                    },
                    yAxis: {

                        axisLine: { //最外面的边框颜色
                            lineStyle: {
                                color: "#4F5564"
                            }
                        },
                        splitLine: { //隐藏图标的线
                            show: false
                        }
                    },
                    series: [{
                            type: 'bar',
                            label: {
                                show: true,
                                position: 'top'
                            },
                        },
                        {
                            type: 'bar',
                            label: {
                                show: true,
                                position: 'top'
                            },
                        },
                        {
                            type: 'bar',
                            label: {
                                show: true,
                                position: 'top'
                            },
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
            let hhgder = [{
                    type: 'bar',
                    label: {
                        show: true,
                        position: 'top'
                    },
                },
                {
                    type: 'bar',
                    label: {
                        show: true,
                        position: 'top'
                    },
                },
                {
                    type: 'bar',
                    label: {
                        show: true,
                        position: 'top'
                    },
                }
            ]
            if (this.ty == 1) {
                this.shuju.series = [{
                        type: 'bar',
                        label: {
                            show: true,
                            position: 'top'
                        },
                    },
                    {
                        type: 'bar',
                        label: {
                            show: true,
                            position: 'top'
                        },
                    }
                ]
            }
            if (this.ty == 2) {
                this.shuju.series = hhgder
            }
            if (this.ty == 3) {
                this.dataset.qgpj.map(a => {
                    hhgder.push(a)
                })
                this.shuju.series = hhgder
                this.shuju.legend.bottom = -10
            }
            if (this.ty == 4) {
                this.shuju.color= ["#E7495A", "#F5B324", "#7ED321","#4C90E2"]
                hhgder.map(a=>{
                    delete  a["label"]
                })
                hhgder.push({
                    type: 'bar'
                })
                this.shuju.series = hhgder
            }
            this.ssddf = true
        },
    }

</script>
<style scoped>
    .dfdgyyue {
        margin: auto;
    }

</style>
