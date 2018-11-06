<!--大神-->
<template>
	<div class="pd" >
        
        <section class="sd_jh_deret pd pt20  mt10 yj4" v-for="sd in 10">
                <van-row>
                    <van-col span="16">
                        <p class="fz17 cf">料神</p>
                        <p class="dianer cf fz12 mt10">
            大神的相关简介的简介啊的牛逼轰轰的简介大神的相关简介的简介啊的牛逼轰轰的简介大神的相关简介的简介啊的牛逼轰轰的简介...
                    </p>
                        <section class="cf mt20">
                    <span class="fz26"> 0.01</span>
                            <span class="fz14">元</span>
                        </section>
                    </van-col>
                    <van-col span="8" class="cen">
                        <img src="../assets/img/qc_er.png" class="errrtxc mt5">
                    <p class="fz12 cf mt5">长按扫码 立即获取</p>
                    </van-col>
                </van-row>
        </section>
	
   <dibu idxd="2"></dibu>
	</div>
</template>
<script>
    import dibu from "../components/dibu"
    export default {
        data() {
            return {

            }
        },
        components: {
dibu
        },
        methods: {

        },
        mounted() {

        },
    }

</script>
<style scoped>
    .sd_jh_deret{
        height: 10.5rem;
        background: url(../assets/img/sdf_sde.png);
        background-size: 100% 100%;
        min-height: 140px;
        max-height: 160px;
    }
    .errrtxc{
        width: 85px;
        height: 85px;
    }
</style>
