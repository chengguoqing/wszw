<template>
<div >
    
    <van-button type="danger">危险按钮</van-button>
    
    <section class="pr dfg_rrert">
        <van-swipe :autoplay="3000" class="h100">
            <van-swipe-item v-for="sd in 5" class="h100">
                <img src="https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg" class="w100 h100">
            </van-swipe-item>
        </van-swipe>
    </section>
    
    <van-cell-group>
        <van-cell title="单元格" value="内容" />
        <van-cell title="单元格" is-link />
    </van-cell-group>
    <!--        data里添加  activeNames:[1]-->
    <van-collapse v-model="activeNames">
        <van-collapse-item title="有赞微商城" name="1">
            提供多样店铺模板，快速搭建网上商城
        </van-collapse-item>
             <van-collapse-item title="有赞微商城" name="2">
            提供多样店铺模板，快速搭建网上商城
        </van-collapse-item>
    </van-collapse>
    <!--        data里添加   checked: true-->
    <van-switch v-model="checked" />
    
    <van-tabs>
        <van-tab v-for="index in 8" :title="'选项 ' + index">
            内容 {{ index }}
        </van-tab>
    </van-tabs>
    
</div>
</template>
<script>
    export default {
        data() {
            return {
                activeNames:['1']
            }
        },
        components: {

        },
        methods: {

        },
        mounted() {
            this.get("home/index", {
                token: "v46LhBg76q29DtUiTIfu87CYKAHzFPE3shop_238"
            }, function() {

            })
        },
    }

</script>
<style scoped>
    .dfg_rrert{
        height: 200px;
        background: red
    }

</style>
