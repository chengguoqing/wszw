<!--政务服务界面统一入口-->
<template>
    <div class="dfdgyyue h100">
        <tubiao :shuju="shuju" v-if="ssddf"></tubiao>

    </div>
</template>
<script>
    import tubiao from "@/components/tubiao"
    export default {
        props: ["data"],
        data() {
            return {
                ssddf: false,
                shuju: {
                    tooltip: {
                        show: false,
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        bottom: 8,
                        textStyle: { //设置字体颜色
                            color: '#fff'
                        }
                    },
                    color: ['#E3BB4B', '#7174D4'],
                    series: [{
                        name: '政务服务界面统一入口',
                        type: 'pie',
                        radius: ['40%', '60%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: true
                        },
                        data: this.data
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
            this.ssddf = true
        },
    }

</script>
<style scoped>
    .dfdgyyue {
        margin: auto;
    }

</style>
