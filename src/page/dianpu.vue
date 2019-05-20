<template>
	<div >
	
                
    <section class="  ">
             
                  
                  <el-form ref="form" :model="form" label-width="120px"  :rules="rules">
                      
                          <el-card shadow="never" class="" >
                         
                    <el-row :gutter="20">
                        <el-col :span="12">
    
     <section class="sd_jh_wer mt20">
                      
                                <el-form-item label="店铺logo" prop="logo">
            
                     
                     <section  class="avatar-uploader cz f_b br yj4 sz mb10" @click="dialogVisible=true" >
        
                         <img :src="form.logo" class="w100 h100 cz" v-if="form.logo">
                                 <i class="el-icon-plus avatar-uploader-icon df_deert" v-else></i>
            </section>


            </el-form-item>
                      
        <el-form-item label="店铺名称"  prop="name">
                <el-input placeholder="" v-model="form.name" ></el-input>
    </el-form-item>
             <el-form-item label="经营地址" prop="jydz">
                 <section class="pr sd_deerrty" :class="form.jydz?'act':''">
        <el-cascader
        ref="cascaderAddr"
  :options="options"
                     placeholder="" 
                     expand-trigger="hover"
    @change="handleItemChange"
   class="w100 pr"
></el-cascader>
                     <span class="sd_ddert">{{form.jydz}}</span>
                     </section>
             </el-form-item>
         
                    </section>
                            
                            
    
    </el-col>
                     <el-col :span="12">
      <section class="sd_jh_wer ">
               
                    <el-form-item label="联系人姓名" prop="lxr_name">
                <el-input  placeholder="" v-model="form.lxr_name" ></el-input>
    </el-form-item>
                <el-form-item label="联系人电话" prop="lxr_phone">
                <el-input  placeholder="" v-model="form.lxr_phone" ></el-input>
    </el-form-item>
          
          <el-form-item label="关于我们" prop="gywm">
                <el-input type="textarea" rows="5" placeholder="" v-model="form.gywm" ></el-input>
    </el-form-item>
                   
                    </section>
          
    
    </el-col>
                    </el-row>          
                              
     
                           
             <el-form-item label="详情地址" prop="jydz_text">
            <section class="sd_jh_wer pr120 pr">
                      <el-input placeholder="" v-model="form.jydz_text" ></el-input>
                    <el-button type="primary" class="ssdi_ert" @click="sez_sd">搜索地图</el-button>
           </section>
                                         
                 <div class="sd_dfrrttx"> 
                     
         <el-amap vid="amap"  :zoom="zoom" :center="center"  class="amap-demo" :plugin="plugin" :events="marker">
           <el-amap-marker :draggable="true"  vid="component-marker"  :position="center_er"  :events="marker_er"></el-amap-marker>
      </el-amap>
    </div>
                                         
    </el-form-item>
                                
                      
    </el-card>
                             
                  </el-form>
                    
                    <section class="pl40 mt20">    <el-button type="primary" plain @click="get_drert">保存</el-button></section>
                    
  
        
    </section>
        
       
     <el-dialog
         class="sddf_drrtimg"
       :visible.sync="dialogVisible"
       width="890px"
       >
       <up_img @close_s="dialogVisible=false" @queding="queding"  v-if="dialogVisible"></up_img>
     </el-dialog>
	</div>
</template>
<script>
    var sd_dre = ""
    import up_img from "../components/up_img"
    import {
        chengshi
    } from "@/chengshi.js"
    export default {
        data() {
            return {
                dialogVisible: false,
                visible: true,
                options: "",
                options2: [{
                    label: '江苏',
                    cities: []
                }, {
                    label: '浙江',
                    cities: []
                }],
                zoom: 15,
                center: [113.482178, 23.191308],
                center_er: [113.482178, 23.191308],
                plugin: [{
                    pName: 'ToolBar',
                }],
                marker: {
                    click(e) {
                        var sd_def = [e.lnglat.lng, e.lnglat.lat]
                        sd_dre.center_er = sd_def
                        sd_dre.sd_dff(e.lnglat)
                    }
                },
                marker_er: {
                    click(e) {
                        sd_dre.sd_dff(e.lnglat)
                    },
                    dragend(e) {
                        sd_dre.sd_dff(e.lnglat)
                    }
                },
                form: {
                    logo: "", //店铺logo
                    name: "", //店铺名称
                    jydz: "", //经营地址
                    jydz_text: "", //详细地址
                    lxr_name: "", //联系人姓名
                    lxr_phone: "", //联系人电话
                    gywm: "", //关于我们
                },
                rules: {
                    logo: [{
                        required: true,
                        message: '请上传logo',
                        trigger: 'blur'
                    }],
                    name: [{
                        required: true,
                        message: '请输入店铺名称',
                        trigger: 'blur'
                    }],
                    jydz: [{
                        required: true,
                        message: '请选择经营地址',
                        trigger: 'blur'
                    }],
                    jydz_text: [{
                        required: true,
                        message: '请输入详细地址',
                        trigger: 'blur'
                    }],
                    lxr_name: [{
                        required: true,
                        message: '请输入联系人姓名',
                        trigger: 'blur'
                    }],
                    lxr_phone: [{
                        required: true,
                        message: '请输入联系人电话',
                        trigger: 'blur'
                    }],
                    gywm: [{
                        required: true,
                        message: '请输入关于我们',
                        trigger: 'blur'
                    }],

                }


            }
        },
        components: {
            up_img
        },
        methods: {
            async sd_dff(e) {
                var der_rr = {}
                der_rr.location = e.lng + "," + e.lat
                var sd_dr = await this.post("comm/get_diz", der_rr)
                sd_dr = sd_dr.regeocode
                var addressComponent = sd_dr.addressComponent
                this.form.jydz = addressComponent.province + "/" + addressComponent.district + "/" + addressComponent.township;
                this.form.jydz_text = sd_dr.formatted_address.split(addressComponent.township)[1]
            },
            queding(data) {
                this.form.logo = data
                this.dialogVisible = false
            },
            handleItemChange(item) {
                this.form.jydz = this.$refs['cascaderAddr'].currentLabels.join("/")
                this.sez_sd()


            },
            async sez_sd() {
                var der_rr = encodeURI(this.form.jydz + this.form.jydz_text)
                var sd_dr = await this.post("comm/get_jwd", {
                    address: der_rr
                })
                var location = sd_dr.geocodes[0].location.split(",")
                this.center = location
                this.center_er = location
            },
            get_drert(e) {
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        this.form.type=2
                        this.post('shopp/info', this.form)
                    }
                });
            },
            async getinfo() {
                this.form = await this.post('shopp/info', {type:3,id:1},true)
                this.sez_sd()
            }

        },
        mounted() {
            this.options = chengshi
            sd_dre = this

            this.getinfo()



        },
    }

</script>
<style>
    .sd_deerrty input {
        /*        display: none*/
    }

    .sd_deerrty.act .el-cascader__label {
        display: none
    }

    .sd_ddert {
        position: absolute;
        left: 14px;

    }

    .sd_deerrty.act .el-input__inner {
        background: transparent !important;
    }

</style>
<style scoped>
    .avatar-uploader {
        width: 80px;
        height: 80px;
    }

    .sd_dfrrttx {
        height: 400px;
        margin-top: 10px;
    }

    .ssdi_ert {
        position: absolute;
        right: -10px;
    }

</style>
