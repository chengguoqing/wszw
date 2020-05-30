<!--图标组件-->
<template>
     <div class="sdfdsf_eer" ref="dsfdf_er" ></div>
</template>
<script>
    import echarts from "echarts"
    import shanxi from "./shanxi.json"
    export default {
        props: ['shuju',"type"],
        data() {
            return {
                myChart:""
            }
        },
        components: {

        },
        methods: {
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                if(this.type == 1){
                    
                 echarts.registerMap('HK', shanxi);
                }
                let ssder = this.$refs.dsfdf_er
                this.myChart = echarts.init(ssder)
                // 绘制图表
                this.myChart.setOption(this.shuju);
            },
            setdsds(shuju){
               this.myChart.setOption(shuju)
            }
        },
        mounted() {
            this.drawLine()
        },
    }

</script>
<style scoped>
    .sdfdsf_eer{
        width: 100%;
        height: 100%
    }
</style>
