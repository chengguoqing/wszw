<!--账户明细-->
<!--购买明细-->
<template>
	<div >
	
        <van-row class="pd pt10 pm10 bbm" v-for="sd in 5">
            <van-col span="16">
                <section class="dian">
                      <p class="mt5 fz16">充值</p>
                    <p class="fz12 z9 mt5">2018年10月31日</p>
                  
                </section>
            </van-col>
            <van-col span="8">
     <section class="dian tr">
                    <p class="mt10 fz16 red">+￥<span class="fz22">9.02</span></p>
                </section>
            </van-col>
        </van-row>
          <van-row class="pd pt10 pm10 bbm" v-for="sd in 5">
            <van-col span="16">
                <section class="dian">
                      <p class="mt5 fz16">充值</p>
                    <p class="fz12 z9 mt5">2018年10月31日</p>
                  
                </section>
            </van-col>
            <van-col span="8">
     <section class="dian tr">
                    <p class="mt10 fz16 ye">-￥<span class="fz22">9.02</span></p>
                </section>
            </van-col>
        </van-row>

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


</style>
