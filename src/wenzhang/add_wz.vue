<template>
	<div >
	<el-breadcrumb separator-class="el-icon-arrow-right">
	    <el-breadcrumb-item :to="{ path: 'wenzhang' }">文章管理</el-breadcrumb-item>
	    <el-breadcrumb-item>添加文章</el-breadcrumb-item>
	</el-breadcrumb>
        
    <section class="btm mt10 pt40">
                <section class="sd_jh_eett">
                <el-form ref="wenzhang" :model="form" label-width="100px" :rules="rules">
                    <el-form-item label="文章标题" prop="title">
                        <el-input placeholder="请输入文章标题" v-model="form.title" ></el-input>
                    </el-form-item>
                    
                    <el-form-item label="文章内容" prop="text">

                         <fuwenben_n ref="fuwenben" :dx_text="form.text"></fuwenben_n>
                     
<!--                               <quill-editor  v-model="form.text"  :options="editorOption" ></quill-editor>-->
                    </el-form-item>
                    
                    
                    <section class="cen mt40">
                <el-button type="primary"  @click="submitForm('ruleForm')">{{$route.query.id?'修改':'发布'}}文章</el-button>
                            <el-button type="primary" plain class="ml30" @click="hf('wenzhang')">返回上一页</el-button>
            </section>
                    
                </el-form> 
                    </section>
                     
    </section>

	</div>
</template>
<script>
    import fuwenben_n from "../components/fuwenben_n"
    export default {
        data() {
            return {
                form: {
                    title: "", //标题
                    text: "" //内容
                },
                wz_list: "",
                rules: {
                    title: [{
                        required: true,
                        message: '请输入标题',
                        trigger: 'blur'
                    }],
                }
            }
        },
        components: {
            fuwenben_n
        },
        methods: {
            async submitForm() {
                this.form.text = this.$refs.fuwenben.getUEContent()
                this.$refs.wenzhang.validate((valid) => {
                     this.form.fabiaoren= this.$cookies.get("user_info").user_name
                    if (valid) {
                        var sd_ds=""
                        if(this.$route.query.id){
                           
                            this.form.id=this.$route.query.id
                            this.form.type=2
                        }else{
                              this.form.type=1
                        }
                        
                        this.post("wenzhang/wzact", this.form)
                       setTimeout(a=>{
                            this.hf('wenzhang')
                       }, 2000);
                    }
                });
            },
            async getdate() {
                var sd_der = await this.post("wenzhang/wzact", {
                    id: this.$route.query.id,
                    type:3
                }, true)
                this.form.title = sd_der.title
                this.form.text = sd_der.text

            }
        },
        mounted() {
            this.getdate()
        },
    }

</script>
<style scoped>
    .sd_jh_eett {
        width: 900px;
    }

</style>
