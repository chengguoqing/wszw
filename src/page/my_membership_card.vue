<!--我的会员卡-->
<template>
<div >
<van-nav-bar
    class="lvdh"
    title="我的会员卡"
    left-text="返回"
    right-text="首页"
    left-arrow
    :z-index="9999"
    :fixed="true"
    @click-left="$router.back(-1)"
    @click-right="hf('')"
/>

    <section class="dx_body">
    
        <section class="use_case bgff mb10" v-for="sd in 10">
            <van-row class="pd fz15 pt10 pm10">
                <van-col span="12">十五小时卡</van-col>
                <van-col span="12" class="ls tr">待消费</van-col>
            </van-row>
            <section class="pd btm pr10 pt10 pm10">
                    <p class="ssd_eeer z6 fz12">
    有效期：  2018-05-30至2019-05-30<br>
卡状态：  已售<br>
卡   号：  5002018053001<br>
总次数：  500<br>
剩余数：  500
                </p>
                
                <p class="cen ">
            <img src="../assets/img/erweima.jpg" class="sd_kjj_der">
            </p>
    
            </section>
            
        </section>
        
        
    </section>

</div>
</template>
<script>
    export default {
        data() {
            return {

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
    .ssd_eeer{
        line-height: 21px;
    }
    .sd_kjj_der{
        width: 130px;
    }

</style>
