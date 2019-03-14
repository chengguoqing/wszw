<!--注册会员-->
<template>
<div class="Sd_dertc">

<van-nav-bar
    title="注册会员"
    left-text="返回"
    right-text="首页"
    left-arrow
    :z-index="9999"
    :fixed="true"
    @click-left="$router.back(-1)"
    @click-right="hf('')"
/>

    <section class="dx_body">
  
            <van-cell-group> 
                <van-field
                    clearable
                    label="会员姓名"
                    placeholder="请输入姓名">
                    
                    <i class="f_i user_icon_er" slot="left-icon"></i>
    </van-field>
                
                
                <div  class="van-cell van-field">
                    <div class="van-field__left-icon">
                        <i  class="f_i user_icon_er ab"></i>
                    </div>
                    <div class="van-cell__title van-field__label">
                        <span>性      别</span>
                    </div>
                    <div class="van-cell__value">
                        <div class="van-field__body sdfg_d_Derrtt">
                          <van-radio-group v-model="sex_se">
                              <van-radio name="1" class="f_b">男</van-radio>
                               <van-radio name="2" class="f_b ml20">女</van-radio>
                            </van-radio-group>
                    </div>
                    </div>
                </div>
                
              <section  @click="show_er=true" class="bbm">
                  <van-field
    placeholder="请选择出生日期"
    label="出生日期"
    right-icon="arrow"
    left-icon="time_eer f_i"
                             v-model="time_sd" 
    disabled
  />
     </section>      
                
                
  <van-field
       clearable
    placeholder="请输入联系人姓名"
    label="联系人"
   left-icon="time_eer ab f_i"
    
  />
   <van-field
       clearable
    placeholder="请输入手机号码"
    label="手机号码"
   left-icon="time_eer ac f_i"
    
  />           
    
     <van-field
       clearable
    placeholder="请输入验证码"
    label="验证码"
   left-icon="time_eer ad f_i"
    
  >
         
         
            <van-button slot="button" size="small" type="info" plain>发送验证码</van-button>
    </van-field>
    
    </van-cell-group>
        
        
        <p class="pd mt40">
    
        <van-button type="danger" class="w100 bgye fz16">提交</van-button>
        </p>
        
       <van-popup v-model="show_er" position="bottom" > 
                                   <van-datetime-picker
           v-model="currentDate"
           type="date"
                                   @cancel="show_er=fasle"
                   @confirm="gou_sd"
   />
                                   
                   </van-popup>
                   
     
        
    </section>
</div>
</template>
<script>
    export default {
        data() {
            return {
                sex_se: "1",
                currentDate: new Date(),
                show_er: false,
                time_sd:""
            }
        },
        components: {

        },
        methods: {
            gou_sd(e){
                this.show_er=false
                this.time_sd=this.time_c(e)
            }
        },
        mounted() {

        },
    }

</script>
<style>
    .sdfg_d_Derrtt .f_b.van-radio {
        padding-top: 10px;
    }

    .Sd_dertc .van-field__left-icon {
        width: 22px;
    }

    .van-icon-time_eer {
        width: 18px;
        height: 19px;
        background-position: -332px -163px;
        position: relative;
        top: 2px;
    }

    .van-icon-time_eer.ab {
        width: 16px;
        height: 17px;
        background-position: -14px -219px;
    }

    .van-icon-time_eer.ac {
        width: 12px;
        height: 18px;
        background-position: -49px -218px;
    }

    .van-icon-time_eer.ad {
        width: 18px;
        height: 18px;
        background-position: -88px -217px;
    }

</style>
<style scoped>
    .user_icon_er {
        width: 19px;
        height: 19px;
        background-position: -259px -163px
    }

    .user_icon_er.ab {
        width: 21px;
        height: 19px;
        background-position: -295px -163px;
    }

    .sdfg_d_Derrtt {
        height: 22px;
    }

</style>
