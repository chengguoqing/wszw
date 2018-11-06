<!--购买明细-->
<template>
	<div >
	
        <van-row class="pd pt10 pm5 bbm" v-for="sd in 20">
            <van-col span="16">
                <section class="dian">
                    <p class="fz12 z9">我是火神</p>
                    <p class="mt5 fz16">球料标题</p>
                </section>
            </van-col>
            <van-col span="8">
     <section class="dian tr">
                    <p class="fz12 z9">2018年10月31日</p>
                    <p class="mt5 fz16 red">￥<span class="fz22">9.02</span></p>
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
