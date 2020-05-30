<template>
    <div id="app">
        <div class="cen">
            <div class="pr f_b">
                <img src="@/assets/img/top.png" class="">
                <p class="kkjjnnxrt">
                    <span>网上政务服务能力调查评估</span>
                </p>
            </div>
        </div>
        <div class="kijnncerrt mt20 pr">
            <div class="nbl jhghdeert yj4 ls">目录导航</div>
            <router-view v-wechat-title="$route.meta.title" />
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        components: {

        },
        methods: {

        },
        mounted() {

        },
    }

</script>


<style scope>
    .kijnncerrt{
        width: 1360px;
        min-width: 1360px;
        margin: auto;
    }
    .jhghdeert{
        border: 1px solid #0573AE;
        width: 104px;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        text-align: center;
        position: absolute;
        left: 0;
        top: -60px;
        cursor: pointer
    }
</style>
