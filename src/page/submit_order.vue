<template>
<div >
<van-nav-bar
    title="提交订单"
    left-text="返回"
    right-text="首页"
    left-arrow
    :z-index="9999"
    :fixed="true"
    @click-left="$router.back(-1)"
    @click-right="hf('')"
/>

        <section class="dx_body pd">
            
            <section class="yj4 ov mt10">
                    <p class="bghs pd pt10 pm10 fz16">使用日期</p>
                
                <section class="bgff  pt10 pm10 pd">
                    <van-row gutter="5">
                        <van-col span="6" v-for="(sd,idx) in siu_df" >
                            <section class="fz12 sdf_jj_d yj4 " :class="idx==idx_s?'act':''" @click="idx_s=idx">
                                <p class="ls">{{sd.name}}</p>
                                <p class="red fz14">{{sd.jiage}}</p>
                                <i class="f_i gouxuan_er"></i>
                                </section>
                        </van-col>
                        <van-col span="6" >
                            <section  class="fz12 sdf_jj_d yj4 ls ab" @click="idx_s=3;show_er=true">
                               更多日期  <van-icon name="arrow" />
                                </section>
                        </van-col>
                    </van-row>
                </section>
                
            </section>
            
            
        <section class="yj4 bgff pd pt10 pm10 mt10">
                <van-row>
                    <van-col span="16">
                            <p class="fz16 z3 dian">单次滑冰卡（90分钟）</p>
                        <p class="ls fz12 mt5">最早可订明日票  有条件退  无需取票</p>
                        <p class="z9 fz14 mt5">新品    购票须知 >
                    </p>
                    </van-col>
                    <van-col span="8">
                            <p class="fz20 red tr"><span class="fz14">￥</span>45.00</p>
    <section class="tr mt10">
    <van-stepper v-model="value" />
        </section>
                    </van-col>
                </van-row>
                
        </section>
            
            
                <section class="yj4 ov mt10">
                    <p class="bghs pd pt10 pm10 fz16">使用日期</p>
                <section class="">
    
            <van-cell-group>
                <van-cell title="场次" is-link >
               全天场(09:30-16:30)     
    </van-cell>
            </van-cell-group>
                </section>
                    
    </section>
    
        </section>
    
    
    
     <van-row class="btm sdf_kj_dert ">
                <van-col span="16" class="red">
        <span class="sd_jjh_der"><span class="z3">总额：</span> ￥ <span class="fz24">75</span> </span>
    </van-col>
                <van-col span="8">
                <van-button class="lijiyuding w100" @click="hf('pay_order')">立即预订</van-button>
                </van-col>
            </van-row>
    
    <van-popup v-model="show_er" position="bottom" > 
        <van-datetime-picker
  v-model="currentDate"
  type="datetime"
        @cancel="show_er=fasle"
    @confirm="querenx"
/>
        
    </van-popup>
    
</div>
</template>
<script>
    export default {
        data() {
            return {
                idx_s: 0,
                value: "",
                show_er: false,
                currentDate: new Date(),
                siu_df: [{
                    name: "今天 05-27",
                    jiage: "￥100"
                }, {
                    name: "明天 05-28",
                    jiage: "￥90"
                }, {
                    name: "05-29 周三",
                    jiage: "￥90"
                }]
            }
        },
        components: {

        },
        methods: {
            querenx(e) {
                this.show_er = false
                console.log(this.time_c(e));
            }
        },
        mounted() {

        },
    }

</script>
<style scoped>
    .sdf_jj_d {
        text-align: center;
        border: 1px solid #CCCCCC;
        padding-top: 5px;
        padding-bottom: 5px;
        position: relative
    }

    .sdf_jj_d.ab {
        padding-top: 14px;
        padding-bottom: 14px;
    }



    .gouxuan_er {
        width: 21px;
        height: 23px;
        background-position: -190px -91px;
        position: absolute;
        right: -1px;
        bottom: -1px;
        display: none
    }

    .sdf_jj_d.act {
        border-color: #009DDC
    }

    .sdf_jj_d.act .gouxuan_er {
        display: block
    }

    .sdf_kj_dert {
        position: fixed;
        left: 0px;
        width: 100%;
        bottom: 0px;
        z-index: 100;
        background: #fff;
    }

</style>
