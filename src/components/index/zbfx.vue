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
                        bottom: 20,
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
                                name: '服务方式\n完备度',
                                max: 100
                            },
                            {
                                name: '在线服务\n成效度',
                                max: 100
                            },
                            {
                                name: '在线办理\n成熟度',
                                max: 100
                            },
                            {
                                name: '办事指南\n准确度',
                                max: 100
                            },
                            {
                                name: '服务事项\n覆盖度',
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
