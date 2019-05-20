<template>
 	<div >
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item >商品列表</el-breadcrumb-item>
    </el-breadcrumb>
        
        
        <section class="btm mt10 pt20">
            
              <el-row :gutter="20">
      <el-col :span="8"> 
          <el-input placeholder="请输入商品名称"  class="input-with-select" v-model="name_dx" >
    
    <el-button slot="append" icon="el-icon-search" @click="sousuode"></el-button>
  </el-input>
    </el-col>
      
       <el-col :span="16" class="tr"> 
               <el-button type="primary" @click="hf('shopp/add_sp')">添加商品</el-button>
    </el-col>
      
      
  </el-row>
            
             
            
           
            
            <section>
        <el-table class="mt20"   v-loading="loading" :data="tableData" style="width: 100%" highlight-current-row border>
            <el-table-column  type="index" label="序号"  width="100"></el-table-column>
            <el-table-column prop="name" label="商品名称" ></el-table-column>
            <el-table-column prop="jiage" label="价格" ></el-table-column>
                  <el-table-column prop="kucun" label="库存" ></el-table-column>
                  <el-table-column  label="运费" >
             <template slot-scope="scope">
                <span class="red">￥ {{scope.row.yunfei==0?'免费':scope.row.yunfei}}</span>
                 </template>
        </el-table-column>
            
            
            <el-table-column label="添加时间" >
     
    <template slot-scope="scope">
       <span v-html="time_d(scope.row.addtime)"></span>
</template>
</el-table-column>
<el-table-column label="操作">
    <template slot-scope="scope"> 
    <el-button type="text" size="small" @click="hf('shopp/add_sp',{id:scope.row.id})">编辑</el-button> 
  <el-button type="text" size="small" @click="del_user('shopp/sp_list',scope.row.id)">删除</el-button> 

                  
        						</template>
</el-table-column>
</el-table>
<div class="block cen mt20">
    <el-pagination @current-change="handleCurrentChange" layout="total, prev, pager, next" :total="total">
    </el-pagination>
</div>

</section>


</section>

</div>
</template>
<script>
    import {
        playlistMixin
    } from "@/biaoge.js"
    export default {
        data() {
            return {
                name_dx: ""
            }
        },
        components: {

        },
        mixins: [playlistMixin], //注册mixins
        methods: {
            sousuode() {
                this.getuser("shopp/sp_list", {
                    name: this.name_dx,
                    type:3
                })
            }
        },
        mounted() {
            this.getuser("shopp/sp_list", {type:3})
        },
    }

</script>
<style scoped>
    .sd_jh_dert ul li:hover {
        cursor: pointer;
        background: #f8f8f8
    }

</style>
