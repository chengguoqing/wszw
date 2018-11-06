<!--用户中心-->
<template>
	<div class=" pt10">
        <p class="sdf_jh_der"></p>
        <section class="bgff pr">
        <section class="pl5 pr5">
     <section class="yj4 dsf_user ">
                <img src="../assets/img/dfdf_a.jpg" class="yj user_icosr fl">
         <section class="ov pl10 pt5">
                <p class="cf fz18">微信昵称</p>
             <p class="fz14 cf">会员类型(2018-10-31)</p>
        </section>
    <p class="qc"></p>    
    </section>
        </section>
        
        
        <van-row class="pd mt5 fz16">
            <van-col span="16">   剩余金币 <span class="fz22">180</span> 个</van-col>
            <van-col span="8" class="tr">
                <span class="cz_deret" @click="hf('chongzhi')">充值</span>
            </van-col>
        </van-row>
        
	      <section class="sd_derttx mt15">
    
                <van-cell-group>
                    <van-cell is-link @click="hf('gmmx')">
                        <img src="../assets/img/shop.png" class="sd_dertx cz">
                        <span class="cz ml10 fz16">购买明细</span>
                    </van-cell>
                        <van-cell is-link @click="hf('zhmx')">
                        <img src="../assets/img/account.png" class="sd_dertx cz">
                        <span class="cz ml10 fz16">账户明细</span>
                    </van-cell>
                </van-cell-group>
              
        </section>
        
        
             <section class="sd_derttx ">
    
                <van-cell-group>
                    <van-cell is-link @click="hf('banlihuiyaun')">
                        <img src="../assets/img/member.png" class="sd_dertx cz">
                        <span class="cz ml10 fz16">办理会员</span>
                    </van-cell>
                        <van-cell is-link @click="hf('dingyue')">
                        <img src="../assets/img/subscription.png" class="sd_dertx cz">
                        <span class="cz ml10 fz16">订阅大神</span>
                    </van-cell>
                    
                       <van-cell is-link>
                        <img src="../assets/img/compile.png" class="sd_dertx cz">
                        <span class="cz ml10 fz16">用户上料</span>
                    </van-cell>
                </van-cell-group>
              
        </section>
</section>
        <section class="mt70 cen pr">
            <section class="bgff  dsf_deertx fz14">
                <img src="../assets/img/user_agreement.png" class="user_agreement cz">
                <span class="cz ml5">用户使用协议</span>
            </section>
        </section>
        
    	
   <dibu idxd="3"></dibu>
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
    .dsf_user{
        background: url(../assets/img/df_bgd.png);
        background-size: 100% 100%;
        height: 100px;
        padding-left: 20px;
        padding-top: 18px;
    }
    .user_icosr{
        width: 56px;
        height: 56px;
        overflow: hidden;
        border: 3px solid #fff
    }
    .cz_deret{
        background: #FED8D9;
        color: #ED4143;
        font-size: 15px;
        display: inline-block;
        width: 60px;
        height: 24px;
        line-height: 24px;
        border-radius: 20px;
        text-align: center
            
    }
    .sd_derttx{
        border-top: 10px solid #EEEEEE;
    }
    .sd_dertx{
        width: 20px;
        height: 20px;
    }
    .sdf_jh_der{
        position: fixed;
        left: 0px;
        width: 100%;
        height: 100%;
        background: #EEEEEE
    }
    .user_agreement{
        width: 16px;
        height: 16px;
    }
    .dsf_deertx{
        width: 145px;
        height: 36px;
        border: 1px solid #D6D6D6;
        border-radius: 20px;
        margin: auto;
        line-height: 36px;
    }
</style>
