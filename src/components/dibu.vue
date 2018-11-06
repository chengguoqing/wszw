<template>
	<div class="cen bgff dsf_derttx">
	<van-tabbar class="bgff dsf_deert">

          <van-tabbar-item @click="hf('')">
 
              <img src="../assets/img/ddf_bb_a.png" class="sd_dfert" v-if="idxd==1">
                  <img src="../assets/img/ddf_ba_a.png" class="sd_dfert" v-else>
                 <span :class="idxd==1?'red':''">自定义</span>
    </van-tabbar-item>
        
  <van-tabbar-item @click="hf('dasheng')">
 <img src="../assets/img/ddf_bb_b.png" class="sd_dfert"  v-if="idxd==2">
 <img src="../assets/img/ddf_ba_b.png" class="sd_dfert"  v-else>
                 <span :class="idxd==2?'red':''">大神</span>
    </van-tabbar-item>
        
        
         <van-tabbar-item  @click="hf('user_center')">
 <img src="../assets/img/ddf_bb_c.png" class="sd_dfert"  v-if="idxd==3">
 <img src="../assets/img/ddf_ba_c.png" class="sd_dfert"  v-else>
                 <span :class="idxd==3?'red':''">会员中心</span>
    </van-tabbar-item>
</van-tabbar>

	</div>
</template>
<script>
    export default {
        props: {
            idxd: ""
        },
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
    .sd_dfert {
        display: block;
        margin: auto;
        margin-bottom: 4px;
        width: 23px;
        height: 23px;
    }
    .dsf_deert{
        z-index: 21000 !important
    }
</style>
