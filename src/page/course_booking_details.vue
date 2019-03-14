<!--订单详情-->
<template>
<div >
    <van-nav-bar
        title="订单详情"
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
            <van-icon name="clock-o"  class="cf fz26 cz  "/>
                <span class="cf fz16 cz ml10">待使用</span>
                
                </section>
            
            <section class="bgff  pd pt10 pm10">
    
                <p class="fz14">
                订单总额：<span class="red">￥560.00</span>
                </p>
                   <p class=" pd pt10 bgff   sdf_jkj_dert"> 
            <van-button type="info"   class="w100" plain @click="hf('cancellation_order')">申请取消</van-button>
        </p>
                
                
            </section>
            
            <section class="mt10 bgff ">
                <p class="pt10 pm10 pd fz15">
                    冰球基础课1:1
                </p>
                
                <section class="pd btm pd pt10 pm10">
                    <van-row gutter="">
                        <van-col span="5" class="fz13">上课时间：</van-col>
                        <van-col span="19">
                <p class="fz13 sdf_dd_Der">
                  2018-05-30 11:25-12:32   <br>  
                  2018-05-30 11:25-12:32 <br>  
                  2018-05-30 11:25-12:32 <br>  

            </p>
                    </van-col>
                    </van-row>
                  

 




                    
                        <van-row gutter="" class="mt5">
                        <van-col span="5" class="fz13">  购买份数：</van-col>
                        <van-col span="19">
                <p class="fz13 sdf_dd_Der">
                   ￥160x3

            </p>
                    </van-col>
                    </van-row>
                    
                    
                    
                    
                     <van-row gutter="" class="mt5">
                        <van-col span="5" class="fz13">可用数量：</van-col>
                        <van-col span="19">
                <p class="fz13 sdf_dd_Der">
                 
 3
            </p>
                    </van-col>
                    </van-row>
                    
                    
                     <van-row gutter="" class="mt5">
                        <van-col span="5" class="fz13">授课教练： </van-col>
                        <van-col span="19">
                <p class="fz13 sdf_dd_Der">
                 
 张晓晓

            </p>
                    </van-col>
                    </van-row>
                    
                    
                     <van-row gutter="" class="mt5">
                        <van-col span="5" class="fz13">使用方法：  </van-col>
                        <van-col span="19">
                <p class="fz13 sdf_dd_Der">
                 凭以下二维码检票入场

            </p>
                    </van-col>
                    </van-row>
                    
                    
                    
                        
                </section>
                
                
                <section class="pd pm10">
                
                    <section class="yj4 bghs pd pt10 pm10 fz13 sdf_jh_sdert" v-for="(sd,idx) in sd_sddf">
    入园凭证： WX181119000001820<br>

                        <span v-if="!sd.cls"  @click="sd.cls=true">    <van-icon name="qr" class="ls fz16 cz"/> <span class="cz ml5 ls">查看二维码</span></span>

                        <p class="sd_jjh_der"></p>
                        <span class="sd_erjjh_De">{{idx+1}}</span>
                        <p class="cen mt20 sdf_h_Derr" v-if="sd.cls" >
                        <img src="../assets/img/erweima.jpg" class="sd_j_dfdf"  >
                    </p>
                       
                        
                </section>
                    
                    
                    
              
                    
                    
                    
                   
        
                </section>
                
                
        </section>
            
            
                <section class="mt10 bgff ">
                <p class="pt10 pm10 pd fz15">
                    订单信息
                </p>
                    <section class="btm pd pt10 pm10 df_kjrt_D z9" >
   <span class="z3 mr5"> 订单编号</span>     TN19036522226320<br>

<span  class="z3 mr5">下单时间  </span>   2019-05-25  10:05:23


                    </section>
                    
    </section>
        </section>
    


</div>
</template>
<script>
    export default {
        data() {
            return {
                sd_sddf:[
                    {
                        cls:""
                    }, {
                        cls:""
                    }, {
                        cls:""
                    }
                ]
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
    .sdf_dd_Der{
        line-height: 1.7
    }
    .sdf_jh_sdert{
        position: relative;
        line-height: 1.5;
        overflow: hidden;
        margin-bottom: 10px;
    }
    .sd_jjh_der{
        background: #E6EBED;
        width: 60px;
        height: 60px;
        position: absolute;
        right: -30px;
        top: -30px;
        transform: rotate(45deg)
    }
    .sd_erjjh_De{
        position: absolute;
        right: 7px;
        top: 5px;
    }
    .sd_j_dfdf{
        width: 130px;
        height: 130px;
    }
    .df_kjrt_D{
        line-height: 1.6;
        font-size: 13px;
        line-height: 1.6
    }
  

</style>
