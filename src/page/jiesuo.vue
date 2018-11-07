<!--解锁-->
<template>
	<div >
	       
        <section class="pl20 pr20 pt10 pm10 dsf_r_jh_der">
            <van-row>
                <van-col span="16" class="cf fz18">叫我专家</van-col>
                <van-col span="8" class="tr cf fz14">￥<span class="fz22">6.80</span></van-col>
            </van-row>
            <section class="cf fz12 mt10">
        球料的简介简单的介绍此篇料的大概，以吸引用户的眼球，使
得用户关注，满足用户的诉求 接着就会付钱了，哈哈哈哈哈哈
球料的简介简介简...
        </section>
                
        </section> 
        
        <section class="pl20 pr20 df_dertt"> 
                <section class="pl20 pr20 yj4 pt15 pm10 dsf_df_deert bgff">
                        <p class="fz16 z3 cen pm10">解锁方式</p>
                    
                    <section class="sd_h_der yj4 mt10 pd fz16  pr" :class="sd.cls" v-for="sd in sd_ddf" @click="sdfer(sd)">
                        <img src="../assets/img/dfd_a.png" class="sd_deert cz aa">  
                          <img src="../assets/img/success.png" class="sd_deert cz ab"> 
                        <span class="cz ml10">{{sd.name}}</span>
                      <van-tag type="danger" class="dsfdsttx" v-if="sd.id==0">充值</van-tag>
                </section>
                    
                    <p class="fz12 z9 mt10 cen">购买后可立即查看本推荐预测赛果及推荐理由</p>
                    
                    <section class="cen mt15">
                <van-button type="danger"  class="dfer_deert" @click="hf('chongzhi')">立即支付</van-button>
            </section>
                    
                </section>
                
        </section>
        
        
        
	</div>
</template>
<script>
    export default {
        data() {
            return {
                sd_ddf:[
                    {
                        name:"余额支付(2345.00）",
                        cls:"act",
                        id:0
                    }, {
                        name:"微信支付",
                        cls:"",
                        id:1
                    }
                ]
            }
        },
        components: {

        },
        methods: {
            sdfer(sd){
                this.sd_ddf.map(a=>{
                    a.cls=""
                })
                sd.cls="act"
            }
        },
        mounted() {

        },
    }

</script>
<style scoped>
    .dsf_r_jh_der{
        background: #ED494B;
        height: 220px;
        border-radius: 0px 0px 50% 50%/0 0px 20% 20% 
    }
    .dsf_df_deert{
           box-shadow: 0 1px 6px rgba(0,0,0,.1);
    }
    .df_dertt{
        margin-top: -110px;
    }
.dfer_deert {
    width: 150px;
    }
   
</style>
