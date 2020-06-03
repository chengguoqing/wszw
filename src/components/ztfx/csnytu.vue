<template>
    <div class="dfdgyyue h100">
        <tubiao :shuju="shuju" v-if="ssddf"></tubiao>

    </div>
</template>
<script>
    import tubiao from "@/components/tubiao"
    export default {
        data() {
            return {
                ssddf:false,
                shuju: {
                    tooltip: {},
                    legend: {
                        bottom: 0,
                          textStyle: { //设置字体颜色
                            color: '#fff'
                        },
                        data: ['2018', '2017', '2016']
                    },
                     color:["#ED0103","#3B61BF","#E8ED56"], //设置颜色
                    radar: {
                        // shape: 'circle',
                        name: {
                            textStyle: {
                                color: '#fff',
                                fontSize:"15"
                            }
                        },
                        radius: 90,
                        indicator: [{
                                
                                max: 100
                            },
                            {
                                max: 100
                            },
                            {
                                max: 100
                            },
                            {
                                max: 100
                            },
                            {
                                max: 100
                            }
                        ]
                    },
                    series: [{
                        name: '',
                        type: 'radar',
                        // areaStyle: {normal: {}},
                        data: [ ]
                    }]
                }
            }
        },
        components: {
            tubiao
        },
        methods: {
            async jjhsdd(){
               let res =  await this.get("getzhibiao")
                this.shuju.series[0].data=res.data
                this.ssddf = true
            }
        },
        mounted() {
            this.jjhsdd()
        },
    }

</script>
<style scoped>
    .dfdgyyue{
        margin: auto;
    }

</style>
