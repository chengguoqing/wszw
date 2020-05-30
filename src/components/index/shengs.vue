<template>
    <div class="kjnjdrertt">
        <tubiao :shuju="shuju" type="1"></tubiao>
    </div>
</template>
<script>
    import tubiao from "@/components/tubiao"
    export default {
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
                    series: [{
                        type: 'map',
                        mapType: 'HK', // 自定义扩展图表类型
                        label: {
                            show: false
                        },
                        data: [{
                                name: '大同市',
                                value: 0
                            },
                            {
                                name: '朔州市',
                                value: 10
                            },
                            {
                                name: '忻州市',
                                value: 20
                            },
                            {
                                name: '太原市',
                                value: 30
                            },
                            {
                                name: '吕梁市',
                                value: 40
                            },
                            {
                                name: '阳泉市',
                                value: 50
                            },
                            {
                                name: '晋中市',
                                value: 60
                            },
                            {
                                name: '临汾市',
                                value: 70
                            },
                            {
                                name: '长治市',
                                value: 80
                            },
                            {
                                name: '晋城市',
                                value: 90
                            },
                            {
                                name: '运城市',
                                value: 100
                            }
                        ]
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

        },
    }

</script>
<style scoped>
    .kjnjdrertt {
        height: 100%;
        width: 100%;
    }

</style>
