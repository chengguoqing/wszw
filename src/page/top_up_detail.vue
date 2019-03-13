<!--充值中心-->
<template>
<div >

        <van-nav-bar
            title="储值卡账单"
            left-text="返回"
            right-text="首页"
            left-arrow
            :z-index="9999"
            :fixed="true"
            @click-left="$router.back(-1)"
            @click-right="hf('')"
        />
        
            <section class="dx_body">
          
                    <section class="box pd bgff pt10 pm10">
    <section class="box_a tl fz14 z9">
    今天 <i class="f_i donw_der"></i>
    </section>
             <section class="box_a tr z9 fz14">
        全部交易类型 <i class="f_i donw_der"></i>
    </section>              
                    </section>
                <section class="pd bghs pt10 pm10 fz14">
    
            充值：￥1000 <span class="ml20">消费：￥800</span>
        </section>
                
                <van-cell-group>
                    <van-cell >
                <i class="f_i sd_msde fl"></i>
                        <section class="ov pl10">
                <van-row gutter="">
                    <van-col span="18">
                        <p class="dian fz16 mt2">购买高级冰球射门一对</p>
                        <p class="z6 fz14">今天  05:36</p>
                    </van-col>
                    <van-col span="6" class="tr fz16">-450.00</van-col>
                </van-row>
                            
                            
                            
                </section>
                        
    </van-cell> 
                          <van-cell v-for="sd in 10" >
                <i class="f_i sd_msde fl"></i>
                        <section class="ov pl10">
                <van-row gutter="">
                    <van-col span="18">
                        <p class="dian fz16 mt2">购买高级冰球射门一对</p>
                        <p class="z6 fz14">今天  05:36</p>
                    </van-col>
                    <van-col span="6" class="tr fz16 ye">+450.00</van-col>
                </van-row>
                            
                            
                            
                </section>
                        
    </van-cell> 
                </van-cell-group>
                
                
            </section>
 <dibu idx="0"></dibu>
</div>
</template>
<script>
    import dibu from "../components/dibu"
    export default {
        data() {
            return {

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
<style scoped>
    .donw_der{
        width: 9px;
        height: 11px;
        background-position: -125px -161px;
    }

    .sd_msde{
        width: 50px;
        height: 50px;
        background-position: -182px -131px;
    }
</style>
