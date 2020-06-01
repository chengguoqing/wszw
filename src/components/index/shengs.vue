<template>
    <div class="kjnjdrertt">
        <tubiao :shuju="shuju" type="1"></tubiao>
    </div>
</template>
<script>
    import tubiao from "@/components/tubiao"
    export default {
        props: ['data'],
        data() {
            return {
                shuju: {
                    visualMap: {
                        left: 'right',
                        textStyle: { //设置字体颜色
                            color: '#fff'
                        },
                        min: 0,
                        max: 100,
                        text: ['非常高', '低'],
                        realtime: false,
                        calculable: true,
                        inRange: {
                            color: ['#FFF008', '#FFA800', '#A57100', '#C6513E']
                        }
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{b}:{c}'
                    },
                    series: [{
                        type: 'map',
                        mapType: 'HK', // 自定义扩展图表类型
                        label: {
                            show: true,
                            color: "#fff"
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
console.log(this.data);
        },
    }

</script>
<style scoped>
    .kjnjdrertt {
        height: 100%;
        width: 100%;
    }

</style>
