<!--办事治安案与权力清单关联度-->
<template>
    <div class="h100">
        <tubiao :shuju="shuju" ref="dftyyusre"></tubiao>

    </div>
</template>
<script>
    import tubiao from "@/components/tubiao"
    export default {
        data() {
            return {
                shuju: {
                    textStyle: { //设置字体颜色
                        fontSize: 12,
                        color: '#fff'
                    },
                    series: [{
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: true,
                        color: ['#9BFFFD', '#F5B324'],

                        label: {
                            show: false
                        },
                        data: [{
                                value: 78,
                                name: '25\n78.13%'
                            },
                            {
                                value: 21,
                                name: '7\n21.88%'
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


</style>
