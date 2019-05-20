<template>


    <div>
            <div class="denglu_erert">
           
     <vue-particles color="#dedede"   :linesWidth="3"   :lineOpacity="0.5" class="bg_fdert"></vue-particles>  
    </div>
    
        <section class="denglu_ert">
        <p class="fz18 z3">用户登录</p>
        
          <el-form   class="mt20">
               <el-form-item  class="fz16 z3">
    <el-input placeholder="请输入用户名"  auto-focus="true" v-model="user_name" ></el-input>
                
  </el-form-item>
              
               <el-form-item class="fz16 z3">
      <el-input placeholder="请输入密码" type="password" v-model="user_paw" ></el-input>
  </el-form-item>
                
              
              
           <el-form-item class="fz16 z3 mt40 pr">
               <section class="sd_kj_drrtty pr" v-if="is_pudf">
                   <i class="el-icon-close sz sdf_dsdfrt sz" @click="is_pudf=false"></i>
                   <p class="fz14 z6 dsf_eertx" v-html="msg"></p>
     <slide-verify :l="42"
            :r="10"
            :w="290"
            :h="155"
            slider-text="向右滑动"
            @success="onSuccess"
            @fail="onFail"
            @refresh="onRefresh"
            ></slide-verify>
                   <span class="sd_jh_eert"></span>
                   
        </section>
                <el-button type="primary" class="fz16 w100" @click="dengertt">登录</el-button>
    </el-form-item>
               
              
               
    </el-form>
        
    </section>

</div>


</template>
<script>
    export default {
        middleware: 'notAuthenticated',
        data() {
            return {
                user_name: "",
                user_paw: "",
                is_pudf: false,
                msg: '拖动下方滑块完成拼图',
            }
        },
        components: {

        },
        methods: {
            onSuccess() {
                this.msg = '完美滑动成功！'
                setTimeout(a => {
                    this.postLogin()
                }, 500);
                setTimeout(a=>{
                    this.is_pudf=false
                }, 1000);
            },
            onFail() {
                this.msg = '<span class="red">请控制拼图块对齐缺口</span>'
            },
            onRefresh() {
                this.msg = '拖动下方滑块完成拼图'
            },
            dengertt() {
                if (!this.user_name) {
                    this.$message.error('请输入用户名！');
                    return
                }
                if (!this.user_paw) {
                    this.$message.error('请输入密码！');
                    return
                }
                this.is_pudf = true
            },
            async postLogin() {
                let th = this
                if (!this.user_name) {
                    this.$message.error('请输入用户名！');
                    return
                }
                if (!this.user_paw) {
                    this.$message.error('请输入密码！');
                    return
                }
                var data_e = await this.post("admin/loadin", {
                    user_name: this.user_name,
                    user_paw: this.user_paw
                })
                data_e=data_e.data
                this.$cookies.set("user_id", data_e.id)
                this.$cookies.set("user_info", data_e)
                this.$store.state.user_info = data_e
                var tz_sd = th.$route.query.redirect
                if (tz_sd == "/" || !tz_sd) {
                    tz_sd = ""
                }
                th.hf(tz_sd)
            }
        }
    }

</script>
<style>
    <style>.denglu_ert .el-input__inner {
        font-size: 16px;
        color: #333;
        background: rgba(255, 255, 255, 0.5) !important
    }

    input:-webkit-autofill {
        background-color: rgba(255, 255, 255, 0.5) !important;
        background-image: none;
        color: #000;
    }

    .slide-verify-slider {
        width: 290px !important;
        margin-top: 0 !important;
    }

    .slide-verify-refresh-icon {
        right: 18px !important;
    }

</style>

<style scoped>
    .sz{
        cursor: pointer
    }
    .sdf_dsdfrt{
        position: absolute;
        right: 10px;
        font-size: 18px;
    }
    .dsf_eertx {
        line-height: 1;
        margin-bottom: 10px;
    }
    .sd_jh_eert{
        width: 10px;
        height: 10px;
        background: #fff;
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        bottom: -5px;
        transform: rotate(45deg)
    }
    .denglu_erert {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: url("../assets/img/871d198.jpg") center center;
        background-size: cover;
    }

    .denglu_ert {
        width: 350px;
        height: 280px;
        background: rgba(255, 255, 255, 0.6);
        position: fixed;
        left: 0px;
        top: 0px;
        right: 0px;
        bottom: 0px;
        margin: auto;
        border-radius: 4px;
        padding: 20px;
    }

    .sd_kj_drrtty {
        position: absolute;
        left: 0px;
        width: 100%;
        bottom: 50px;
        background: #fff;
        padding: 10px;
    }

</style>
