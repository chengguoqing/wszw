<template>
<div >
  
        <section class="pr banner_de">
            <van-swipe :autoplay="3000" class="h100">
                <van-swipe-item v-for="sd in 4" class="h100">
                    <img src="../assets/img/banner.jpg" class="w100 h100">
                </van-swipe-item>
            </van-swipe>
        </section>
    <section class="bgff sdf_jjh_der pd">
    
        <van-row>
            <van-col span="3"><i class="f_i laba_ser"></i></van-col>
            <van-col span="19" class="dian fz14">每天每个证件全网限购1张，见正不电路板文</van-col>
            <van-col span="2" class="tr">
                    <i class="f_i right_icon"></i>
            </van-col>
        </van-row>
    </section>
    
    <section class="pt10 pm10 bgff box cen btm">
        <section class="box_a">
            <p class="sad_topd">
     <i class="f_i dsfd_a"></i>
            </p>
               
            <p class="fz13">
                课程预约
            </p>
        </section>
        <section class="box_a">
            <p class="sad_topd">
     <i class="f_i dsfd_a ab"></i>
            </p>
               
            <p class="fz13">
                办理储值卡
            </p>
        </section>
    
        <section class="box_a">
            <p class="sad_topd">
     <i class="f_i dsfd_a ac"></i>
            </p>
               
            <p class="fz13">
                冰场简介
            </p>
        </section>
    
        <section class="box_a">
            <p class="sad_topd">
     <i class="f_i dsfd_a ad"></i>
            </p>
               
            <p class="fz13">
                教练介绍
            </p>
        </section>
    
    
    </section>
   
    <section class="mt10 bgff">
        <van-row class="pl10 pt10 pm10 btm" v-for="sd in 5">
            <van-col span="16">
                <p class="dian z3 fz16">单次滑冰卡（90分钟）</p>
                <p class="fz12 ls mt5">最早可订明日票  有条件退 无需取票</p>
                <p class="z9 fz13 mt5">新品    购票须知 >
                </p>
            </van-col>
            <van-col span="8" class="cen ye fz12 pt5">
                    ￥<span class="fz20">1080</span>
                <van-button class="Sd_deretx" @click="show_er=true">立即预订</van-button>
            </van-col>
        </van-row>
    
    </section>
    
    <section class="dibu_dsrr btm box cen">
        <section class="box_a">
                <p class="sd_dfd_Dxe">
                    <i class="f_i sd_sddf_d"></i>
                </p>
            <p class="fz12 mt2">首页</p>
        </section>
           <section class="box_a">
                <p class="sd_dfd_Dxe">
                    <i class="f_i sd_sddf_d ab"></i>
                </p>
            <p class="fz12 mt2">订单</p>
        </section>
           <section class="box_a">
                <p class="sd_dfd_Dxe">
                    <i class="f_i sd_sddf_d ac"></i>
                </p>
            <p class="fz12 mt2">我的</p>
        </section>
    </section>
    
    <van-popup v-model="show_er" position="bottom" > 
        <section class="pt10 pm10">
            <van-row>
                <van-col span="20"> <span class="danci_der">单次滑冰卡</span></van-col>
                <van-col span="4" class="tr pr10">  <i class="f_i close_derr"  @click="show_er=false"></i></van-col>
            </van-row>
           
            </section>
        
        <section class="btm pd pt10 pm10 fz14">
            <p class="z3">购票说明</p>
            <section class="z6 dsf_ddert">
        有效时间：有效期为356天
使用方法：线下取票，刷卡进场，请到现场客服中 心处取票检票过闸
退款说明：未检票之前均可退款，退款不收手续费，  一笔订单支持部分退款。已用不退款。
费用包含：金牌教练1：1五次卡一线
            </section>
            
         
        
        </section>
        
        
           <van-row class="btm sdf_kj_dert mt10">
                <van-col span="16" class="ye">
        <span class="sd_jjh_der">￥ <span class="fz24">1080</span> <span class="fz12">起</span></span>
    </van-col>
                <van-col span="8">
                <van-button class="lijiyuding w100">立即预订</van-button>
                </van-col>
            </van-row>
        
    </van-popup>
    
</div>
</template>
<script>
    export default {
        data() {
            return {
                show_er:false
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
    .banner_de{
        height: 140px;
    }
    .sdf_jjh_der{
        line-height: 50px;
    }

    .laba_ser{
        width: 30px;
        height: 20px;
        background-position: -14px -33px;
    }
    .right_icon{
        width: 10px;
        height: 18px;
        background-position: -65px -35px;
    }
    .sad_topd{
        height: 43px;
        line-height: 43px;
        margin-bottom: 10px;
    }
    .dsfd_a{
        width: 43px;
        height: 42px;
        background-position: -119px -12px;
        
    }
    .dsfd_a.ab{
        width: 45px;
        height: 43px;
        background-position: -183px -17px;
        position: relative;
        top: 4px;
    }
      .dsfd_a.ac{
        width: 43px;
        height: 42px;
        background-position: -256px -12px;
    }
       .dsfd_a.ad{
        width: 37px;
        height: 42px;
        background-position: -313px -12px;
    }
    .Sd_deretx{
        background: #fe7c18;
        color: #fff;
        width: 80px;
        height: 32px;
        line-height: 32px;
        border: 0px;
        margin-top: 5px;
        padding-left: 0px;
        padding-right: 0px;
        text-align: center;
    }
    .dibu_dsrr{
        height: 45px;
        background: #fff;
        position: fixed;
        left: 0px;
        bottom: 0px;
        width: 100%;
    }
    .sd_dfd_Dxe{
        line-height: 24px;
        margin-top: 2px;
    }
    .sd_sddf_d{
        width: 23px;
        height: 22px;
        background-position: -18px -92px;
    }
    .sd_sddf_d.ab{
        width: 20px;
        height: 23px;
        background-position: -70px -91px;
    }
       .sd_sddf_d.ac{
        width: 25px;
        height: 22px;
        background-position: -107px -92px;
    }
    .danci_der{
        border-left: 4px solid #009ddc;
        padding-left: 10px;
    }
    .close_derr{
        width: 19px;
        height: 19px;
        background-position: -156px -95px;
    }
    .dsf_ddert{
        line-height: 23px;
        margin-top: 5px;
    }
    .lijiyuding{
        background: #fe7c18;
        color: #fff;
        border: 0px;
    }
    .sdf_kj_dert{
        padding-left: 20px;
    line-height: 40px;
    }
    .sd_jjh_der{
        position: relative;
        top: 2px;
    }
</style>
