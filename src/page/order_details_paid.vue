<!--订单_订单明细_待付款-->
<template>
<div >

    <van-nav-bar
        title="订单明细"
        left-text="返回"
        right-text="首页"
        left-arrow
        :z-index="9999"
        :fixed="true"
        @click-left="$router.back(-1)"
        @click-right="hf('')"
    />
    
        <section class="dx_body">
      
            <section class="pd pt10 pm10 sdf_jjh_deer">
            <van-icon name="clock-o"  class="cf fz26 cz fl mt10"/>
                <section class="ov pl10">
                    <p class="cf fz16">待付款</p>
                    <p class="fz12 cf mt2">
                        库存有限，请尽快完成付款
                        </p>
                </section>
                
                <p class="qc"></p>
                
                
                </section>
            
            <van-row gutter="" class="bgff pd pt10 pm10">
                <van-col span="14">
                        <p class="fz13  z3">剩余支付时间 03:26</p>
                    
                    <p class="fz13  z3 mt10">订单总额： <span class="red">￥560.00</span>
                    </p>
                </van-col>
                <van-col span="10" class="tr pt10">
    
                    <van-button type="danger" class="bgye" size="small" @click="hf('pay_order')">继续支付</van-button>
                </van-col>
            </van-row>
            
            <p class="sd_j_sdd pd pt10 bgff  pm20 sdf_jkj_dert"> 
            <van-button type="info"   class="w100" plain @click="hf('cancellation_order')">申请取消</van-button>
        </p>
            
            <section class="mt10 bgff">
        <p class="pd pt10 pm10 fz15"> 单次滑冰卡（90分钟）</p>
                <section class="btm sdf_jh_sdf pd pt10 pm10">
   <span>使用日期：  2018-05-30 至 2019-05-30 </span><br>

  <span> 购买份数：  ￥100 X  5 份</span><br>

   <span>使用方法：  凭二维码检票进场</span>


    
                </section>
    </section>
            
            
            
            <section class="mt10 bgff">
        <p class="pd pt10 pm10 fz15"> 订单信息</p>
                <section class="btm sdf_jh_sdf pd pt10 pm10">
   <span>
订单编号：  TN19036522226320 </span><br>

  <span> 
下单时间：  2019-05-25  10:05:23</span>



    
                </section>
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


    .sdf_jh_sdf{
        font-size: 13px;
        line-height: 1.8;
        color: #666
    }

</style>
