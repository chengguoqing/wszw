<template>
	<div >
	  
            <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item >用户管理</el-breadcrumb-item>
    </el-breadcrumb>	
         <section class="btm mt10 pt20">
  <el-row :gutter="20">
      <el-col :span="8"> 
          <el-input placeholder="请输入用户名"  class="input-with-select" v-model="user_name" >
    
    <el-button slot="append" icon="el-icon-search" @click="sousuode"></el-button>
  </el-input>
    </el-col>
      
       <el-col :span="16" class="tr"> 
               <el-button type="primary" @click="add_user_btn">添加管理员</el-button>
    </el-col>
      
       
  </el-row>
            
            
    <section class="mt10">
        <el-table border v-loading="loading" class="mt20" :data="tableData" style="width: 100%" highlight-current-row>
        					<el-table-column header-align="center" align="center"  type="index" label="序号" width="100" ></el-table-column>
        					<el-table-column header-align="center" align="center"  label="头像" >
    <template slot-scope="scope">
        <img :src="scope.row.touxiang" class="touxiang cz">
</template>

</el-table-column>
<el-table-column header-align="center" align="center" prop="user_name" label="账号"></el-table-column>
<el-table-column header-align="center" align="center" prop="user_paw" label="密码"></el-table-column>
<el-table-column header-align="center" align="center" label="等级">
    <template slot-scope="scope">
{{scope.row.dengji==1?'超级管理员':'普通管理员'}}
</template>
</el-table-column>
<el-table-column header-align="center" align="center" label="添加时间">


    <template slot-scope="scope">
       <span v-html="time_d(scope.row.addtime)"></span>
</template>

</el-table-column>
<el-table-column header-align="center" align="center" label="操作">
    <template slot-scope="scope">
        							<el-button type="text" size="small" @click="bj_sdfd(scope.row)" >编辑</el-button> 
                  <el-button type="text" size="small" @click=" del_user('admin/index',scope.row.id)">删除</el-button> 
        						</template>
</el-table-column>
</el-table>




<div class="block cen mt20">
    <el-pagination @current-change="handleCurrentChange" layout="total, prev, pager, next" :total="total">
    </el-pagination>
</div>



</section>


</section>

<el-dialog class="sddf_drrt" title="添加管理员" :visible.sync="dialogVisible" width="500px">


    <el-form>
        <el-form-item>

            <section class="avatar-uploader cz f_b br yj4 sz" @click="dialogVisible_er=true">
                <img v-if="form_d.touxiang" :src="form_d.touxiang" class="avatar cz">
                <i v-else class="el-icon-plus avatar-uploader-icon df_deert"></i>
            </section>
            <!--


<!--
            <el-upload name="image" class="avatar-uploader cz f_b" action="/comm/dxupimg" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                <img v-if="form_d.touxiang" :src="form_d.touxiang" class="avatar cz">
                <i v-else class="el-icon-plus avatar-uploader-icon df_deert"></i>
            </el-upload>
-->

            <span class="ml20">上传头像</span>

        </el-form-item>

        <el-form-item>
            <el-input placeholder="用户名" v-model="form_d.user_name"></el-input>
        </el-form-item>

        <el-form-item>
            <el-input placeholder="密码" v-model="form_d.user_paw"></el-input>
        </el-form-item>
        <el-form-item>
            <el-select v-model="form_d.dengji" placeholder="用户状态" class="w100">
                <el-option label="超级管理员" value="1" name="1"></el-option>
                <el-option label="普通管理员" value="2" name="2"></el-option>
            </el-select>
        </el-form-item>

    </el-form>

    <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="add_user">确 定</el-button>
  </span>

</el-dialog>



<el-dialog class="sddf_drrtimg" :visible.sync="dialogVisible_er" width="890px">
    <up_img @close_s="dialogVisible_er=false" @queding="queding"></up_img>
</el-dialog>


</div>
</template>
<script>
    import {
        playlistMixin
    } from "@/biaoge.js"

    import up_img from "../components/up_img"
    export default {
        data() {
            return {
                dialogVisible_er: false,
                s_ddeer: "",
                imageUrl: "",
                user_name: "",
                dialogVisible: false,
                form_d: {
                    touxiang: "",
                    user_name: "",
                    user_paw: "",
                    dengji: "",
                    addtime: ""
                }
            }
        },
        mixins: [playlistMixin], //注册mixins
        components: {
            up_img
        },
        methods: {

            queding(data) {
                this.dialogVisible_er = false
                this.form_d.touxiang = data
            },
            async add_user() { //添加管理员
                if (!this.form_d.touxiang) {
                    this.$message.error('请上传头像!');
                    return
                }
                if (!this.form_d.user_name) {
                    this.$message.error('请输入用户名!');
                    return
                }
                if (!this.form_d.user_paw) {
                    this.$message.error('请输入密码!');
                    return
                }
                if (!this.form_d.dengji) {
                    this.$message.error('请选择用户状态!');
                    return
                }
                this.form_d.addtime = new Date().getTime()
                if (this.form_d.id) { //有id是编辑状态 否则添加
                    this.form_d.type = 2

                } else { 
                    this.form_d.type = 1

                }
             

             var sd_dert=   await this.post("admin/index", this.form_d)
       
             if(sd_dert.code==-1){
                 return
             }
                setTimeout(a => {
                    this.page = 1
                    this.getuser("admin/index", {
                        type: 3
                    })
                    this.dialogVisible = false
                }, 1000);

            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isLt2M;
            },

            sousuode() {
                this.page = 1
                this.getuser("admin/index", {
                    page: 1,
                    type: 3,
                    user_name: this.user_name
                })
            },
            bj_sdfd(data) {
                this.dialogVisible = true
                this.form_d = data
                data.dengji += ''
            },
            add_user_btn() { //添加管理员按钮触发
                this.form_d = {
                    touxiang: "",
                    user_name: "",
                    user_paw: "",
                    dengji: "",
                    addtime: ""
                }
                this.dialogVisible = true
            },

        },
        mounted() {
            this.getuser("admin/index", {
                type: 3
            })
        },
    }

</script>
<style scoped>
    .touxiang {
        width: 45px;
        height: 45px;
    }

</style>
