<!--取消订单-->
<template>
<div >

    <van-nav-bar
        title="取消订单"
        left-text="返回"
        right-text="首页"
        left-arrow
        :z-index="9999" 
        :fixed="true"
        @click-left="$router.back(-1)"
        @click-right="hf('')"
    />
    
        <section class="dx_body">
            <section class="pd pt10 pm10 sdf_kj_der fz13">
    经核实如果未使用且符合退改规则，退款将于2-15个工作日
退至您的支付账户
            </section>
            
            
            <section class="pd pt10 pm10 bgff">
            <van-row gutter="0" class="fz14">
                <van-col span="12" >
    订单实付：￥560.00
    </van-col>
           <van-col span="12" class="tr">
             
                    退款金额：
                    <span class="red">￥560.00</span>
    </van-col>
            </van-row>
                    
  
                <p class="fz14 mt10">
            退款明细
                </p>
                
                   <van-row class="btm mt10 pt10">
                    <van-col span="16">
                            <p class="fz16 z3 dian">单次滑冰卡（90分钟）</p>
                        <p class="ls fz12 mt5">退改规则 ></p>
                    </van-col>
                    <van-col span="8">
                           
    <section class="tr  mt5">
    <van-stepper v-model="value" />
        </section>
                    </van-col>
                </van-row>
                
                
                
    </section>
            
            <section class="bgff mt10">
                <p class="fz16 z3 pt10 pm10 pd ">取消原因</p>
                
                <section class="btm pt10 pd pm20 fz15">
                        <van-radio-group v-model="quxiaoyy">
                                     <van-radio name="1" class="mt10">行程不确定</van-radio>
                                     <van-radio name="2" class="mt10">价格原因</van-radio>
                             <van-radio name="3" class="mt10">需要更改出行日期</van-radio>
                             <van-radio name="4" class="mt10">评价不好</van-radio>
                             <van-radio name="5" class="mt10">其他原因</van-radio>
                             </van-radio-group>
        
                </section>
        </section>
            
            
        </section>
    
    <van-button class="bgye sdf_jjh_ert">申请取消</van-button>
</div>
</template>
<script>
    export default {
        data() {
            return {
                value: "",
                quxiaoyy: '1'
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
    .sdf_kj_der {
        background: #FCF1E8;
        line-height: 1.5;
        color: #fe7c18
    }

    .sdf_jjh_ert {
        position: fixed;
        left: 0px;
        bottom: 0px;
        width: 100%;
        z-index: 1000;
    }

</style>
