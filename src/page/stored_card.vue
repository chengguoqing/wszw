<!--办理储值卡-->
<template>
<div >
    <van-nav-bar
        title="办理储值卡"
        left-text="返回"
        right-text="首页"
        left-arrow
        :z-index="9999"
        :fixed="true"
        @click-left="$router.back(-1)"
        @click-right="hf('')"
    />
    
        <section class="dx_body pd">
      
            <section class="mt10 yj4 ov">
                <p class="bghs pt10 pm10 fz16 pd">储值卡信息</p>
                <van-cell-group>
                    <van-cell title="卡类型"  value="请选择卡类型"  is-link />
                </van-cell-group>
            </section>
            
             <section class="mt10 yj4 ov">
                <p class="bghs pt10 pm10 fz16 pd">选择充值套餐</p>
                 <section class="pd bgff  pm10">
                 <van-row gutter="10">
                     <van-col span="8" v-for="(sd,idx) in sd_sdf">
                        <section class="sd_jh_SDd  yj4 fz20" :class="idx==ihgh_sd?'act':''" @click="ihgh_sd=idx">
                      <span class="fz14">￥</span>  {{sd.jiage}}<br>
                            <span class="fz14">{{sd.youhui}}</span>
                        </section>
                </van-col>
                 </van-row>
                     <p>
            <van-button type="default" class="w100 fz16 z9 mt20">自定义金额</van-button>
                </p>
                     
                     </section>
                 
    </section>
            
            
            
              <section class="mt10 yj4 ov">
                <p class="bghs pt10 pm10 fz16 pd">储值卡支付密码</p>
                  <van-cell-group>
                      <van-field
                          clearable
                          label="密码"
                          type="password"
                          placeholder="请输入用户名"
                      />
                      
                       <van-field
                          clearable
                          label="确认密码"
                          type="password"
                          placeholder="请再次输入密码"
                      />
                          </van-cell-group>
               
            </section>
            
            
        </section>
    

    <van-row class="btm sdf_kj_dert ab">
                <van-col span="16" class="red">
        <span class="sd_jjh_der"><span class="z3">总额：</span> ￥ <span class="fz24">75</span> </span>
    </van-col>
                <van-col span="8">
                <van-button class="lijiyuding w100" >立即支付</van-button>
                </van-col>
            </van-row>
</div>
</template>
<script>
    export default {
        data() {
            return {
                ihgh_sd:0,
                sd_sdf:[
                    {
                        jiage:"300",
                        youhui:"充300送30"
                    }, {
                        jiage:"800",
                        youhui:"充300送30"
                    }, {
                        jiage:"1000",
                        youhui:"充300送30"
                    }, {
                        jiage:"300",
                        youhui:"充300送30"
                    }, {
                        jiage:"800",
                        youhui:"充300送30"
                    }, {
                        jiage:"1000",
                        youhui:"充300送30"
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

</style>
