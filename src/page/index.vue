<template>
<div >

   <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">零配件管理</el-breadcrumb-item>
  <el-breadcrumb-item>新增机型</el-breadcrumb-item>
</el-breadcrumb>
    
    <section class="br pt10 pm10 pd br mt20 yj4">
        <p class="bghs fz14 pt10 pm10 pd">
            机型信息
        </p>
        <section class="sd_df_er pt40">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"  class="demo-ruleForm">
            <el-form-item label="机型ID"  prop="ji_id">
                          <el-input  placeholder="" v-model="ruleForm.ji_id" ></el-input>
             </el-form-item> 
            <el-form-item label="机型名称"  prop="ji_name">
                          <el-input  placeholder="" v-model="ruleForm.ji_name" ></el-input>
             </el-form-item> 
            <el-form-item label="机型描述"  prop="ji_ms">
                          <el-input  placeholder="年份，机型，产地等信息" v-model="ruleForm.ji_ms" ></el-input>
             </el-form-item> 
            
            <el-form-item label="零配件列表"  prop="">
                <section class="f_b">
    
       
                         <section class="dsf_dd_ert mb10" v-for="sd in ruleForm.ji_list ">
                                <el-input  placeholder="只能输入件号" ></el-input>
                        </section>
                         </section>
                
                <span class="ls ml10 fg_jh_dertt sz" @click="ssd_sd">+继续添加件号</span>
                
              
                <p class="qc"></p>
                
                <p class="mt40">
       <el-button type="primary"  @click="submitForm">提交</el-button>
    </p>
             </el-form-item> 
    </el-form>
          
        </section>
    
    </section>

</div>
</template>
<script>
    export default {
        data() {
            return {
                ruleForm: {
                    ji_id: "",
                    ji_name: "",
                    ji_ms: "",
                    ji_list: [{}]
                },
                rules: {
                    ji_id: [{
                        required: true,
                        message: '请输入机型ID',
                        trigger: 'blur'
                    }],
                    ji_name: [{
                        required: true,
                        message: '请输入机型名称',
                        trigger: 'blur'
                    }],
                    ji_ms: [{
                        required: true,
                        message: '请输入机型描述',
                        trigger: 'blur'
                    }],
                }
            }
        },
        components: {

        },
        methods: {
            submitForm(formName) {
                this.$refs.ruleForm.validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            ssd_sd(){
                this.ruleForm.ji_list.push({})
            }
        },
        mounted() {

        },
    }

</script>
<style scoped>
    .dsf_dd_ert {
        width: 200px;
    }

    .fg_jh_dertt {
        border: 1px solid #e0e0e0;
        border-radius: 4px;
        padding: 5px 10px;
    }

</style>
