<!--绑定会员-->
<template>
<div >
    <van-nav-bar
        title="绑定会员"
        left-text="返回"
        right-text="首页"
        left-arrow
        :z-index="9999"
        :fixed="true"
        @click-left="$router.back(-1)"
        @click-right="hf('')"
    />
    
        <section class="dx_body">
      
            
            
                        <van-cell-group class="mt10"> 
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
            
            
        </section>

      <p class="pd mt40">
    
        <van-button type="danger" class="w100 bgye fz16">提交</van-button>
        </p>
        
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
