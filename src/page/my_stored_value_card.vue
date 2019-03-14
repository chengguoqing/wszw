<!--我的储值卡-->
<template>
<div class="bgff">
    
    <van-nav-bar
        title="我的储值卡"
        left-text="返回"
        right-text="首页"
        left-arrow
        :z-index="9999"
        :fixed="true"
        @click-left="$router.back(-1)"
        @click-right="hf('')"
    />
    
        <section class="dx_body cen">
      <p class="z9 mt20 fz14">卡号：3626599265400001</p>
            <img src="../assets/img/erweima.jpg" class="erweima_ser mt10">
            
            <p class="fz12 z3 mt10">账户余额（元）</p>
            <p class="fz14 ye mt10">
    ￥<span class="fz30">27150.00</span>
            </p>
            
        <section class="pd mt15">
                
            <van-row class="fz12  z9 sdf_jh_sd">
                <van-col span="12" class="br_dd_der">
                    本金
                    <p>
                ￥ <span class="fz20">150.00</span>
                    </p>
                </van-col>
                 <van-col span="12">
                    赠送金
                    <p>
                    ￥ <span class="fz20">150.00</span>
                    </p>
                </van-col>
            </van-row>
            
            <p class="mt20 pm20">
    
            <van-button type="danger" class="bgye fz16 w100 " @click="hf('store_recharge')">充值</van-button>
            </p>
    
        </section>
            
            
        </section>


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
<style scoped>

    .erweima_ser{
        width: 140px;
        height: 140px;
    }
    .sdf_jh_sd{
        line-height:1.5
    }
    .br_dd_der{
        border-right: 1px solid #DBDBDB
    }
</style>
