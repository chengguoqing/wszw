<!--充值-->
<template>
	<div class="pd">
	       <section class="pt10 fz12 z9">
            账户余额(元)
            </section>
        <p class="fz24 z3 mt2">197.00</p>
        <section class="btm mt10 pt10">
            <span class="fz16 z3">余额充值</span>
            <van-tag type="danger" class="ml10 fz12">1元=1金币</van-tag>
            
        </section>
        
        <van-row gutter="10">
            <van-col span="8" v-for="sd in chong_sd">
                <section class="sd_jh_der red cen mt10" :class="sd.cls" @click="sd_dff(sd)">
                    <section class="">
                        <span class="fz22">{{sd.jiner}}</span>
                        <span class="fz12">元</span>
                    </section>
                    <p class="fz12 mt5" v-html="sd.text"></p>
                </section>
            </van-col>
        </van-row>
        
        <section class="z9 fz12 z9 pt10">
    充值的金币 可以购买球料超市所有大神的料
        </section> 
        
        <section class="mt20">
                   <van-button type="danger"  class="dfer_deert w100" >立即充值</van-button>
        </section>
        
        
	</div>
</template>
<script>
    export default {
        data() {
            return {
                chong_sd:[
                        {
                            jiner:"88.00",
                            text:"88金币",
                            cls:"act"
                        }, {
                            jiner:"188.00",
                            text:"188金币+<br>送8金币",
                            cls:""
                        },{
                            jiner:"588.00",
                            text:"588金币+<br>送38金币",
                            cls:""
                        }, {
                            jiner:"888.00",
                            text:"888金币+<br>送88金币",
                            cls:""
                        }, {
                            jiner:"1888.00",
                            text:"1888金币+<br>送228金币",
                            cls:""
                        }, {
                            jiner:"3888.00",
                            text:"3888金币+<br>送588金币",
                            cls:""
                        }
                    
                ]
            }
        },
        components: {

        },
        methods: {
            sd_dff(sd){
                this.chong_sd.map(a=>{
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
    .sd_jh_der{
      min-height: 110px;
        height: 7rem;
        padding-top: 20%;
        border: 1px solid #ED4143
    }
    .sd_jh_der.act{
        background: #ED4143;
        color: #fff !important;
    }
    
     .dfer_deert{
        height: 40px;
        background: #ED4143;
        line-height: 40px;
        padding: 0px;
        font-size: 16px;
        border-radius: 20px;
    }

</style>
