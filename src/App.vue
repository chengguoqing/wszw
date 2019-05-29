<template>
  <div id="app">
   
<el-container>
  <el-header class="sd_df_der">
       <el-row :gutter="20">
           <el-col :span="12" class="fz14">紫光运营后台</el-col>
           <el-col :span="12" class="tr fz12">
    管理员:xx<span class="ls">[退出]</span>
    </el-col>
       </el-row>
    </el-header>
  <el-container  class="sd_deet">
    <el-aside width="200px">
    	<div class="sd_jh_der">
        
            
            
            <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#47484B"
      text-color="#fff"
        :router="true"
      active-text-color="#2464C8">
              
       <el-menu-item index="/">

    <span slot="title">零配件管理</span>
  </el-menu-item>
                
                
                
                       

         
                    
                 <el-menu-item index="/user_msg">

    <span slot="title">二手手机管理</span>
  </el-menu-item>          
 

    
    </el-menu>





	</div>
    </el-aside>
    <el-main>
        <router-view v-wechat-title="$route.meta.title"/>
    </el-main>
  </el-container>
</el-container>
      
    
  </div>
</template>

<script>
    export default {
        data() {
            return {
                left_mu: [{
                    name: "首页",
                    path: "",
                    bz:"1"
                }, {
                    name: "用户管理",
                    path: "user_msg",
                     bz:"2"
                }],
                moren_ds:" ",
                user_fo: ""
            }
        },
        components: {

        },
        methods: {
            out_back() { //退出登录
                this.$cookies.remove("user_id");
                this.hf('admin?redirect=' + this.$route.name)
                this.$message({
                    message: '退出登录成功',
                    type: 'success'
                });
            },
            handleOpen(e){
                console.log(2);
            },
            handleClose(e){
                
            }
        },
        mounted() {
        this.$store.state.user_info= this.$cookies.get("user_info")
        },
    }

</script>


<style>
    .sd_deet {
        height: 100vh;
    }

    .sd_jh_der {
        padding-top: 20px;
    }

    .sd_deeett li {
      line-height: 45px;
        font-size: 14px;
        color: #fff;
        padding-left: 25px;
    }

    .sd_jh_der li:hover,
    .sd_jh_der li.act {
        background: #2D2E30;
        color: #2464C8
    }

    .usd_deert {
        width: 70px;
        height: 70px;
        border-radius: 50%;
    }

</style>
