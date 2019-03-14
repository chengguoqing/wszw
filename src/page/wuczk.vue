<!--05 我的_储值卡_数据-->
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
    
        <section class="dx_body">
      <section class="pr mt80"> 
<p class="cen dsf_jh_der">
        <img src="../assets/img/wucjojh.png" class="wd_hj_derx">
    </p>
          
          <p class="pd mt60">
        <van-button type="danger" class="bgye w100" @click="hf('my_stored_value_card')">办理储值卡</van-button>
        </p>
    </section>
            
            
        </section>
    
    
    <p class="dd_j_Derer"></p>

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
    .wd_hj_derx{
        width: 177px;
    }
    .dd_j_Derer{
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: #f5f5f5;
    }

</style>
