<template>
 	<div >
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>商品分类</el-breadcrumb-item>
    </el-breadcrumb>
        
        
        <section class="btm mt10 pt20">
            
              <el-row :gutter="20">
      <el-col :span="8"> 
         &nbsp;
    </el-col>
      
       <el-col :span="16" class="tr"> 
               <el-button type="primary" @click="form_d.type=1;dialogVisible=true">添加分类</el-button>
    </el-col>
      
      
  </el-row>
            
             
            
           
            
            <section>
        <el-table class="mt20"   v-loading="loading" :data="tableData" style="width: 100%" highlight-current-row border>
            <el-table-column  type="index" label="序号"  width="100"></el-table-column>
            <el-table-column prop="name" label="名称名称" ></el-table-column>
            <el-table-column label="添加时间" >
     
    <template slot-scope="scope">
       <span v-html="time_d(scope.row.addtime)"></span>
</template>
</el-table-column>
<el-table-column label="操作">
    <template slot-scope="scope"> 
    <el-button type="text" size="small" @click="bianji_e(scope.row)">编辑</el-button> 
  <el-button type="text" size="small" @click="del_user('shopp/fenlei',scope.row.id)">删除</el-button> 

                  
        						</template>
</el-table-column>
</el-table>
<div class="block cen mt20">
    <el-pagination @current-change="handleCurrentChange" layout="total, prev, pager, next" :total="total">
    </el-pagination>
</div>

</section>


</section>




<el-dialog class="sddf_drrt" title="添加分类" :visible.sync="dialogVisible" width="500px">


    <el-form class="mt10">

        <el-form-item>
            <el-input placeholder="分类名称" v-model="form_d.name"></el-input>
        </el-form-item>


    </el-form>

    <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="add_user">确 定</el-button>
  </span>

</el-dialog>



</div>
</template>

<script>
    import {
        playlistMixin
    } from "@/biaoge.js"

  
    export default {
        data() {
            return {
                dialogVisible: false,
                name_dx: "",
                form_d: {
                    name: "",
                    type: 1
                }
            }
        },
        components: {

        },
        mixins: [playlistMixin], //注册mixins
        methods: {
            sousuode() {
                this.getuser("shopp/get_sp", {
                    name: this.name_dx
                })
            },
            add_user() {
                if (!this.form_d.name) {
                    this.$message.error('请输入分类名称');
                    return
                }

                this.post("shopp/fenlei", this.form_d)

                this.dialogVisible = false
                setTimeout(a => {
                    this.getuser("shopp/fenlei", {
                        type: 3
                    })
                }, 500);
            },
            bianji_e(e) {
                this.form_d = e
                this.form_d.type = 2
                this.dialogVisible = true
            }
        },
        mounted() {
            this.getuser("shopp/fenlei", {
                type: 3
            })
        },
    }

</script>
<style scoped>
    .sd_jh_dert ul li:hover {
        cursor: pointer;
        background: #f8f8f8
    }

</style>
