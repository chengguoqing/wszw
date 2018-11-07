<!--办理会员-->
<template>
	<div class="pl20 pr20 pt20 pm10">
        <p class="fz20 z3">会员权益</p>
	<section class="fz13 z6 mt10">
    --享有一周内能阅读任意2篇料事，会员卡会为您
节省99.99元。
    </section>
        
        <section class="fz13 z6 mt10">
--享有一月内能阅读任意8篇料事，会员卡会为您
节省199.99元。
    </section>
        
        
        <section class="fz13 z6 mt10">
   --享有每天内能阅读任意2篇料事，会员卡会为您
节省299.99元。
    </section>
       
        <van-row class="mt40" gutter="10">
            <van-col span="8" v-for="sd in sd_dfg">
                <section class="sd_jh_dert yj4 cen" :class="sd.cls" @click="df_dfgd(sd)">
                    <p class="fz16 z3">{{sd.name}}</p>
                    <p class="fz14 red">
                    <span class="fz18">{{sd.num}}</span>元
                    </p>
                </section>
            </van-col>
           
        </van-row>
        
        
        <section class="mt20">
       <section class="sd_h_der yj4 mt10 pd fz16  pr" :class="sd.cls" v-for="sd in sd_ddf" @click="sdfer(sd)">
                        <img src="../assets/img/dfd_a.png" class="sd_deert cz aa">  
                          <img src="../assets/img/success.png" class="sd_deert cz ab"> 
                        <span class="cz ml10">{{sd.name}}</span>
                      <van-tag type="danger" class="dsfdsttx" v-if="sd.id==0">充值</van-tag>
                </section>
        </section>
      
          <section class="mt20 w100">
                   <van-button type="danger"  class="dfer_deert w100" >立即充值</van-button>
        </section>

	</div>
</template>
<script>
    export default {
        data() {
            return {
                sd_dfg: [{
                    name: "包周",
                    num: "499",
                    cls: "act"
                }, {
                    name: "包月",
                    num: "599",
                    cls: ""
                }, {
                    name: "包年",
                    num: "49999",
                    cls: ""
                }],
                sd_ddf: [{
                    name: "余额支付(2345.00）",
                    cls: "act",
                    id: 0
                }, {
                    name: "微信支付",
                    cls: "",
                    id: 1
                }]
            }
        },
        components: {

        },
        methods: {
            df_dfgd(sd) {
                this.sd_dfg.map(a => {
                    a.cls = ""
                })
                sd.cls = "act"
            },
            sdfer(sd) {
                this.sd_ddf.map(a => {
                    a.cls = ""
                })
                sd.cls = "act"
            }
        },
        mounted() {

        },
    }

</script>
<style scoped>
    .sd_jh_dert {
        height: 60px;
        padding-top: 8px;
        line-height: 1.4;
        border: 1px solid #E3E3E3
    }

    .sd_jh_dert.act {
        background: #FEE4E4;
        border: 1px solid #F58A8C
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
