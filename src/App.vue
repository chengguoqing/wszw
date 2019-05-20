<template>
  <div id="app">
   
<el-container>
  <el-header class="sd_df_der">
        <img class="sd_jhj_d" src="https://www.kxhtml.com/console/images/logo.svg?v=201708221756">
    </el-header>
  <el-container  class="sd_deet">
    <el-aside width="200px">
    	<div class="sd_jh_der">
            <section class="cen pm20">
                <img :src="$store.state.user_info.touxiang" class="usd_deert">
                <p class="cen cf fz14 mt10">
            {{$store.state.user_info.user_name}}
                </p>
            </section>
            
            
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
    <i class="el-icon-menu"></i>
    <span slot="title">首页</span>
  </el-menu-item>
                
                
                
                       <el-submenu index="/shopp">
    <template slot="title">
      <i class="el-icon-menu"></i>
      <span slot="title">商品</span>
    </template>

    <el-menu-item-group>
     <el-menu-item index="/shopp/sp_list">商品列表</el-menu-item>
    </el-menu-item-group>
  <el-menu-item-group>
     <el-menu-item index="/shopp/sp_fl">商品分类</el-menu-item>
    </el-menu-item-group>

</el-submenu>


        
                
                

       <el-menu-item index="/wenzhang">
    <i class="el-icon-menu"></i>
    <span slot="title">文章列表</span>
  </el-menu-item>   

   
                 <el-menu-item index="/dianpu">
    <i class="el-icon-menu"></i>
    <span slot="title">店铺信息</span>
  </el-menu-item>  
                    
                 <el-menu-item index="/user_msg">
    <i class="el-icon-menu"></i>
    <span slot="title">用户管理</span>
  </el-menu-item>          
 

    
    </el-menu>




	   <ul class="sd_deeett">
           <li  @click="out_back">
              退出登录
                
            </li>
        </ul>


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
