<template>
<div class="Sd_jh_Dert">
  
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
               
            <p class="fz12">
                课程预约
            </p>
        </section>
        <section class="box_a" @click="ershow=true" >
            <p class="sad_topd">
     <i class="f_i dsfd_a ab"></i>
            </p>
               
            <p class="fz12">
                办理储值卡
            </p>
        </section>
    
        <section class="box_a">
            <p class="sad_topd">
     <i class="f_i dsfd_a ac"></i>
            </p>
               
            <p class="fz12">
                冰场简介
            </p>
        </section>
    
        <section class="box_a">
            <p class="sad_topd">
     <i class="f_i dsfd_a ad"></i>
            </p>
               
            <p class="fz12">
                教练介绍
            </p>
        </section>
    
    
    </section>
   
    <section class="mt10 bgff">
        <van-row class="pl10 pt10 pm10 btm" v-for="sd in 5">
            <van-col span="17">
                <p class="dian z3 fz16">单次滑冰卡（90分钟）</p>
                <p class="fz12 ls mt5">最早可订明日票  有条件退 无需取票</p>
                <p class="z9 fz13 mt5">新品    购票须知 >
                </p>
            </van-col>
            <van-col span="7" class="cen ye fz12 pt5">
                    ￥<span class="fz20">1080</span>
                <van-button class="Sd_deretx" @click="show_er=true">立即预订</van-button>
            </van-col>
        </van-row>
    
    </section>
    

    
    <van-popup v-model="show_er" position="bottom" > 
        <section class="pt10 pm10 dsf_jjh_dert cen pr">
            
            <span class="fz14">购买须知</span>
              <i class="f_i close_derr"  @click="show_er=false"></i>
           
            </section>
        
        <section class="btm pt10 pm10 fz16 pd">
            <span>单次滑冰卡</span>
        </section>
        <section class="pd pt10 pm10 sdf_jh_df  z6 btm fz12">
              <span class="z3 fz14">  预订说明</span> <br>
          <span>  预订时间：随买随用，预订成功后可立即使用</span><br>
  <span>使用期限：选择的使用日期当天有效</span>
        </section>
        
        
              <section class="pd pt10 pm10 sdf_jh_df  z6 btm fz12">
              <span class="z3 fz14">  费用说明</span> <br>
          <span>  单次滑冰卡1张</span>
        </section>
        
        
              <section class="pd pt10 pm10 sdf_jh_df  z6 btm fz12">
              <span class="z3 fz14">  使用说明</span> <br>
          <span>  无需取票，凭二维码直接验证入园</span><br>
  <span>开放时间：06:30-17:00（瘦西湖）</span>
        </section>
         
 
        
           <van-row class="btm sdf_kj_dert ">
                <van-col span="16" class="red">
        <span class="sd_jjh_der">￥ <span class="fz24">1080</span> <span class="fz12">起</span></span>
    </van-col>
                <van-col span="8">
                <van-button class="lijiyuding w100" @click="hf('submit_order')">立即预订</van-button>
                </van-col>
            </van-row>
        
    </van-popup>
    
    <dibu idx="0"></dibu>
    
    
    
    
    <van-dialog
  v-model="ershow"
   :showConfirmButton="false"
>
        
    <section class="bghs pt5 pm5 pr cen">
        <i class="f_i huangguang"></i>
        <span class="cz ml10 fz15">绑定会员</span>
       <van-icon name="cross" class="sd_dertx" @click="ershow=false"/>
    </section>
        
        <section class="btm pd pt20 pm20">
            <van-button type="warning" plain class="w100" @click="ershow=false;hf('binding_members')">线下已有会员，绑定会员</van-button>
              <van-button type="warning" class="w100 mt10" @click="ershow=false;hf('register_member')">注册会员</van-button>
        </section>
  
</van-dialog>
    
    
    
</div>
</template>
<script>
    import dibu from "../components/dibu"
    export default {
        data() {
            return {
                show_er:false,
                ershow:false
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
<style>
  .Sd_jh_Dert  .van-popup.van-popup--bottom{
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
      overflow: hidden;
    }
</style>
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
        margin-bottom: 5px;
    }
    .sad_topd i{
        transform: scale(0.85)
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

    .danci_der{
        padding-left: 10px;
    }
    .close_derr{
        width: 19px;
        height: 19px;
        background-position: -156px -95px;
        position: absolute;
        right: 10px;
        top: 10px;
        transform: scale(0.85)
    }
    .dsf_ddert{
        line-height: 23px;
        margin-top: 5px;
    }
    .huangguang{
        width: 33px;
        height: 27px;
        background-position: -247px -269px;
        transform: scale(0.8)
    }
    .sd_dertx{
        position: absolute;
        right: 10px;
        top: 10px;
    }
</style>
