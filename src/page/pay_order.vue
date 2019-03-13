<template>
<div class="sd_jhj_der">

        <van-nav-bar
            title="支付订单"
            left-text="返回"
            right-text="首页"
            left-arrow
            :z-index="9999"
            :fixed="true"
            @click-left="$router.back(-1)"
            @click-right="hf('')"
        />
        
            <section class="dx_body">
          
                <section class="pt10 bgff pm10 cen">
            <p class="z9 fz14">支付剩余时间  04:45</p>
                    <p class="ye fz28 mt5">
        <span class="fz16">￥</span> 91.80
                </p>
                     <p class="z9 fz14 mt2">单次滑冰卡（90分钟）</p>
    
            </section>
                
                <section class="mt10 bgff">
                    <p class="fz14 pt10 pm10 pd">请选择支付方式 </p>
                   
                    <van-cell-group>
                        <van-cell @click="is_zhi=0">
               <i class="f_i sd_jh_dr"></i> 
                            <span class="ml10">微信支付</span>
                          <i class="f_i gouix_dr" :class="is_zhi==0?'ab':''"></i>
    </van-cell>
                                 <van-cell  @click="is_zhi=1">
               <i class="f_i sd_jh_dr ab"></i> 
                            <span class="ml10">储值卡支付</span>
                          <i class="f_i gouix_dr " :class="is_zhi==1?'ab':''"></i>
    </van-cell>
                    </van-cell-group>
                    
    
                </section>
                
            </section>
    
    <p class="mt50 pd">
        <van-button type="danger" class="w100 bgye" @click="showKeyboard=true">确认支付</van-button>
    </p>

  
    
    <van-dialog
  v-model="showKeyboard"
:show-confirm-button="false"
>
 
      <section class="sd_kj_derrtt">
        <section class="pr fz16 cen bghs df_kj_dert">
            <van-icon name="cross" class="sd_jh_drrt fz18" @click="showKeyboard=false"/>
                请输入储值卡支付密码
        </section>
        
        <section class="bgff pt15 cen">
                 <span class="ye"> ￥ <span class="fz28 ye">360.00</span></span> 
            <p class="fz14 ">
                储值卡  wx1190214000003488
            </p>
            
            <section class="pm20">
                <van-password-input
                                    class="mt10"
  :value="value"
  @focus="showKeyboard = true"
/>
                
                
            </section>
        </section>
        </section>
</van-dialog>
    
    
    <van-number-keyboard
  :show="showKeyboard"
  @input="onInput"
  @delete="onDelete"
  @blur="showKeyboard = false"
/>
    
</div>
</template>
<script>
    export default {
        data() {
            return {
                is_zhi: 1, //支付方式  0微信  1储值
                show: false,
                value: "",
                showKeyboard: false
            }
        },
        components: {

        },
        methods: {
            onInput(key) {
                this.value = (this.value + key).slice(0, 6);
            },
            onDelete() {
                this.value = this.value.slice(0, this.value.length - 1);
            }
        },
        mounted() {

        },
    }

</script>
<style>
   .sd_jhj_der  .van-dialog{
         top: 36% !important;   
    }
</style>
<style scoped>
    .sd_jh_dr {
        width: 33px;
        height: 31px;
        background-position: -239px -83px;
        transform: scale(0.9)
    }

    .gouix_dr {
        width: 29px;
        height: 29px;
        background-position: -14px -128px;
        transform: scale(0.85);
        position: absolute;
        right: 0px;
    }

    .sd_jh_dr.ab {
        width: 33px;
        background-position: -292px -90px;
        position: relative;
        top: 2px;
    }

    .gouix_dr.ab {
        background-position: -69px -128px
    }

    .df_kj_dert {
        line-height: 42px;
    }

    .sd_jh_drrt {
        position: absolute;
        left: 10px;
        top: 10px;
    }
    .sd_kj_derrtt{
        position: relative;
    }

</style>
