<template>
 	<div >
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/wenzhang' }">文章列表</el-breadcrumb-item>
    </el-breadcrumb>	
        <section class="btm mt10 pt20">
            <section class="tr">
          <el-button type="primary" @click="hf('add_wz')">添加文章</el-button>
     </section>
            
            <section>
        <el-table class="mt20"   v-loading="loading" :data="tableData" style="width: 100%" highlight-current-row border>
            <el-table-column  type="index" label="序号"  width="100"></el-table-column>
            <el-table-column prop="title" label="标题" ></el-table-column>
            <el-table-column prop="fabiaoren" label="发表人" ></el-table-column>
            <el-table-column label="添加时间" >
     
    <template slot-scope="scope">
       <span v-html="time_d(scope.row.addtime)"></span>
</template>
</el-table-column>
<el-table-column label="操作">
    <template slot-scope="scope">
   <a class="el-button el-button--text el-button--small fz12" :href="base_url+'wenzhang?id='+scope.row.id" target="view_window">浏览</a> 
    <el-button type="text" size="small" @click="hf('add_wz',{id:scope.row.id})">编辑</el-button> 
  <el-button type="text" size="small" @click="del_user('wenzhang/wzact',scope.row.id)">删除</el-button> 

                  
        						</template>
</el-table-column>
</el-table>
<div class="block cen mt20">
    <el-pagination @current-change="handleCurrentChange" layout="total, prev, pager, next" :total="total">
    </el-pagination>
</div>

</section>


<!--
            <section class="sd_jh_dert">
                
                <ul>
                <li class="pd pt10 pm10 bbm" v-for="sd in wz_list" @click="hf('add_wz',{id:sd.id})">
                    <p class="dian fz16 z3">{{sd.title}}</p>
                    <el-row :gutter="20" class="mt10">
                        <el-col :span="12" class="fz12 z9"><span v-html="time_d(sd.addtime)"></span></el-col>
                     <el-col :span="12" class="tr z9 fz12">
     <i class="el-icon-mouse"></i> {{sd.liulan}}
                    </el-col>
                    </el-row>
                </li>
            </ul>
                
            </section>
-->
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
            }
        },
        components: {

        },
        mixins: [playlistMixin], //注册mixins
        methods: {
        },
        mounted() {
            this.getuser("wenzhang/wzact",{type:3})
        },
    }

</script>
<style scoped>
    .sd_jh_dert ul li:hover {
        cursor: pointer;
        background: #f8f8f8
    }

</style>
