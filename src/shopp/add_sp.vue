<!--添加商品-->
<template>
	<div class="dsf_deertt">
	<el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/shopp/sp_list' }">商品</el-breadcrumb-item>
  <el-breadcrumb-item>添加商品</el-breadcrumb-item>
</el-breadcrumb>
<section class="btm mt10 pt20">
    
<!--
    <section class="sd_jh_derrt"> 
    <el-steps :active="active" finish-status="success">
  <el-step title="编辑基本信息"></el-step>
  <el-step title="编辑商品详情"></el-step>
        <el-step title="完成"></el-step>
</el-steps>
        </section>
    
-->
     <el-form ref="form" :model="form" label-width="100px" :rules="rules">
    <el-card shadow="never" class="mt20" >
      <p class="fz16">基本信息</p>
     <section class="sd_jh_wer mt40">
        
       
            <el-form-item label="商品名" prop="name">
                <el-input placeholder="" v-model="form.name" ></el-input>
            </el-form-item>
         
              <el-form-item label="分享描述" prop="fxms">
                <el-input placeholder="" v-model="form.fxms"></el-input>
                  <section class="fz12 z9 hg_deet">
                    微信分享给好友时会显示，建议36个字以内<span class="ls sz" @click="dialogVisible_er=true;sd_ff=1">查看示例</span>
                    </section>
            </el-form-item>
            
             <el-form-item label="商品图" prop="spt">
                 <el-form-item>
                     <section class="pr df_jh_dert mb10" v-for="(sd,idx) in form.spt">
    
                         <i class="el-icon-error ug_dertt ls sz" @click="close_ds(idx)"></i>
                         <img :src="sd" class="w100 h100">
                    </section>
                     
                     <section  class="avatar-uploader cz f_b br yj4 sz mb10" @click="dialogVisible=true" >

                <i class="el-icon-plus avatar-uploader-icon df_deert"></i>
            </section>

           <p class="fz12 z9 hg_deet">
        建议尺寸：800*800像素，你可以拖拽图片调整顺序，最多上传15张
    </p>

        </el-form-item>
            </el-form-item>
         
         
              <el-form-item label="价格-库存" prop="jiage">
               <el-row >
                   <el-col :span="8">
                       <el-input placeholder="请输入价格" class="w100" v-model="form.jiage" ></el-input>
                    </el-col>
                <el-col :span="8" class="pl20"> <el-input placeholder="请输入库存" class="w100"  v-model="form.kucun" ></el-input></el-col>
                  <el-col :span="8" class="pl20"> <el-input placeholder="请输入运费价格" class="w100"  v-model="form.yunfei" ></el-input></el-col>  
               </el-row>
                  
            </el-form-item>
         </section>
         
            <el-form-item label="商品规格">

                  

                <section class="br pd fz12 pm10" v-if="sku.length>0">
             
                    <section v-for="(sd,ide) in sku">
                <section class="pt10 pm10">
                    规格名：  <span class="ghuiu_eer f_b pr">  
                    <el-input placeholder="请输入" v-model="sd.k" ></el-input>
                    <i class="el-icon-circle-close close_eert" @click="del_guigexm(ide)"></i>
                    </span>
                    <span class="ls ml20" v-if="ide==0"><el-checkbox v-model="checked_khj_d" class="ls">添加规格图片</el-checkbox></span>
                </section>
                <section>
                    <span class="fl">规格值：</span> 
                    <div class="ghuiu_eer f_b ab mr10 pr fl mb10"  v-for="(sf,idx) in sd.v">  
                    <el-input placeholder="请输入" v-model="sf.name"></el-input>
                        <i class="el-icon-circle-close close_eert" @click="del_guz(sd.v,idx)"></i>
                        <section v-if="ide==0&&checked_khj_d" class="sd_jh_dertx pr" @click="dialogVisible_er_san=true;naum_sd=idx">
                            <span class="sd_jh_derder"></span>
                            <section class="sd_jh_dff cz_w">
                                <img :src="sf.fmt" v-if="sf.fmt">
                               <i class="el-icon-plus avatar-uploader-icon mt10 " v-else></i>
                                
                            </section>
                        </section>
                        
                    </div>
                    
                    <span class="ls sz fl" @click="gui_dsd(sd.v)">添加规格值</span>
                    <p class="qc"></p>
                </section>    
                    </section>
</section>
                
                 <el-button type="primary" class="mt10" @click="add_guigexm">添加规格项目</el-button>
                
                <p class="z9 fz12">如有颜色、尺码等多种规格，请添加商品规格</p>
            </el-form-item>
                
     <el-form-item label="规格明细"  v-if="sku.length>0">
         <section class="box cdgfsd_hjh_der" v-if="sku[0].v.length>0">
             
            <section class="box_a" v-for="(sd,idx) in sku" v-if="sd.v.length>0">
                <p class="title_d">{{sd.k||'&nbsp;'}}</p>
                
                <section v-if="sku.length==1">
                    
                <ul class="sd_df_rt">
                    <li v-for="sd in sd.v" class="cz_w w100">
                        <span class="cz_a">{{sd.name||'&nbsp;'}}</span>
                    </li>
                </ul>    
                
                    
               
                
                </section>
                
                <section v-if="sku.length==2">
                    
                <ul class="sd_df_rt" v-if="idx==0">
                    <li v-for="sd in sd.v" :style="{height:(sku[idx+1].v.length)*42+'px'}" class="cz_w w100">
                        <span class="cz_a">{{sd.name||'&nbsp;'}}</span>
                    </li>
                </ul>    
                <section  v-if="idx==1">
                <ul class="sd_df_rt" v-for="sp in sku[idx-1].v.length">
                        <li v-for="sd in sd.v" v-html="sd.name||'&nbsp;'"></li>
                 </ul> 
                </section>
                    
                <section  v-if="idx==2">
                <ul class="sd_df_rt" v-for="sp in sku[idx-1].v.length">
                        <li v-for="sd in sd.v" v-html="sd.name||'&nbsp;'"></li>
                 </ul> 
                </section>
                
                </section>
                <section v-if="sku.length>2">
                <ul class="sd_df_rt" v-if="idx==0">
                    <li v-for="sd in sd.v" :style="{height:((sku[idx+1].v.length)*42)*sku[idx+2].v.length+'px'}" class="cz_w w100">
                        <span class="cz_a">{{sd.name||'&nbsp;'}}</span>
                    </li>
                </ul>    
                <section  v-if="idx==1">
                <ul class="sd_df_rt" v-for="sp in sku[idx-1].v.length">
                        <li v-for="sd in sd.v" :style="{height:(sku[idx+1].v.length)*42+'px'}"   class="cz_w w100">
    <span class="cz_a">{{sd.name||'&nbsp;'}}</span>
    </li>
                 </ul> 
                </section>
                    
                <section  v-if="idx==2">
                <ul class="sd_df_rt" v-for="sp in ( sku[idx-1].v.length* sku[idx-2].v.length)">
                        <li v-for="sd in sd.v" v-html="sd.name||'&nbsp;'"></li>
                 </ul> 
                </section>
                
                </section>
                
            </section>
             
            
             <section class="box_a" >
                    <p class="title_d">价格</p>
                 
                    <ul class="sd_df_rt">
                        <li v-for="sd in sd_drtyx" class="DSf_dreet">   
                            <el-input placeholder="" v-model="sd.jiage" ></el-input>
                </li>
                        
    </ul>
             </section>
             
               <section class="box_a" >
                    <p class="title_d">库存</p>
                 
                    <ul class="sd_df_rt">
                        <li v-for="sd in sd_drtyx" class="DSf_dreet">   
                            <el-input placeholder="" v-model="sd.kucun" ></el-input>
                </li>
                        
    </ul>
             </section>
              <section class="box_a" >
                    <p class="title_d">成本价</p>
                 
                    <ul class="sd_df_rt">
                        <li v-for="sd in sd_drtyx" class="DSf_dreet">   
                            <el-input placeholder="" v-model="sd.cbjia" ></el-input>
                </li>
                        
    </ul>
             </section>
                  <section class="box_a" >
                    <p class="title_d">销量</p>
                 
                    <ul class="sd_df_rt">
                        <li v-for="sd in sd_drtyx" class="DSf_dreet">   
                          {{sd.xiaoliang}}
                </li>
                        
    </ul>
             </section>
             
             

        </section>
         
  


</el-form-item>
   <section class="sd_jh_wer ">
<section @click="zedie_sz?zedie_sz=flase:zedie_sz=true" class="sz">
    <i class="el-icon-caret-bottom"></i>
    <span class="fz12 ls">
                {{zedie_sz?'折叠更多设置':'更多设置'}}
                </span>
</section>

<section class="mt20" v-if="zedie_sz">


    <el-form-item label="商品分类">
        <el-select v-model="form.lemu" placeholder="请选择所属行业类目" class="w100">
            <el-option :label="sd.name" :value="sd.id" v-for="sd in spfl"></el-option>
        </el-select>
        <p class="fz12 z9 hg_deet">
            商品分类及类目细项，<a class="ls sz" :href="base_url+'wenzhang?id=10'" target="view_window">点此查看</a>
        </p>
    </el-form-item>

    <el-form-item label="商品卖点">
        <el-input placeholder="" v-model="form.spmd"></el-input>
        <div class="fz12 z9 hg_deet">
            在商品详情页标题下面展示卖点信息，建议60字以内<span class="ls sz" @click="dialogVisible_er=true;sd_ff=2">查看示例</span>
        </div>
    </el-form-item>


</section>


    </section>



</el-card>

<el-card shadow="never" class="mt20">
    <p class="fz16">商品详情</p>
    <section class="sd_jh_wer mt40 ab">
        <fuwenben_n ref="fuwenben" :dx_text="form.xiqngqing"></fuwenben_n>

    </section>
</el-card>



</el-form>

<section class="cen mt40">

    <el-button type="primary" @click="submitForm">{{$route.query.id?'修改':'确定'}}</el-button>
    <el-button type="primary" plain class="ml30">取消</el-button>
</section>

</section>

<el-dialog class="sddf_drrtimg" :visible.sync="dialogVisible" width="890px">
    <up_img @close_s="dialogVisible=false" @queding="queding" :is_d="true" v-if="dialogVisible"></up_img>
</el-dialog>

        
        <el-dialog class="sddf_drrtimg" :visible.sync="dialogVisible_er_san" width="890px">
    <up_img @close_s="dialogVisible_er_san=false" @queding="queding_er" v-if="dialogVisible_er_san"></up_img>
</el-dialog>

<el-dialog class="sddf_drrt" title="查看示例" :visible.sync="dialogVisible_er" width="450px">

    <section v-if="sd_ff==1">
        <p class="z3 pt10 btm">将商品在微信分享给朋友时，该处填写的内容会展示在商品名称下面</p>
        <p class="cen">
            <img src="../assets/img/fenxiangms.png" class="ddsf_dert">
        </p>


    </section>
    <section v-if="sd_ff==2">

        <p class="z3 pt10 btm">填写的商品卖点，会在商品详情页的商品名称下面展示，最多展示2行</p>
        <p class="cen">
            <img src="../assets/img/3b864addaf47e79536de5f2dee5b5edc.png" class="ddsf_dert">
        </p>
    </section>



</el-dialog>


</div>
</template>
<script>
    import up_img from "../components/up_img"
    import fuwenben_n from "../components/fuwenben_n"
    export default {
        data() {
            return {
                active: 0,
                sd_ff: 1,
                dialogVisible: false,
                dialogVisible_er: false,
                checked_khj_d: false,
                dialogVisible_er_san: false,
                naum_sd: "",
                form: {
                    name: "", //商品名称
                    fxms: "", //分享描述
                    spt: [], //商品图片
                    jiage: "", //价格
                    kucun: "", //库存
                    yunfei: "", //运费
                    lemu: "", //商品类目
                    spmd: "", //商品卖点
                    xiqngqing: "", //商品详情
                    sd_drtyx: "",
                    sku: ""
                },
                zedie_sz: true,
                rules: {
                    name: [{
                        required: true,
                        message: '请输入商品名称',
                        trigger: 'blur'
                    }],
                    fxms: [{
                        required: true,
                        message: '请输入分享描述',
                        trigger: 'blur'
                    }],
                    spt: [{
                        required: true,
                        message: '请输入上传商品图片',
                        trigger: 'blur'
                    }],
                    jiage: [{
                        required: true,
                        message: '请输入产品价格',
                        trigger: 'blur'
                    }],

                },
                spfl: [], //商品分类
                sku: [], //sku
                sku_mx: [], //sku明细
                sd_drtyx: []
            }
        },
        components: {
            up_img,
            fuwenben_n
        },
        methods: {
            add_guigexm() { //添加规格项目
                if (this.sku.length >= 3) {
                    this.$message.error('最多支持 3 组规格!');
                    return
                }
                this.sku.push({
                    k: '', // skuKeyName：规格类目名称
                    v: []
                })




            },
            del_guigexm(idx) { //删除不规格项目
                this.sku.splice(idx, 1)
            },
            gui_dsd(sd) { //添加规格值
                try {
                    sd.push({
                        name: '',
                        fmt: ""
                    })
                } catch (e) {
                    console.log(sd);
                }

            },
            del_guz(sd, idx) { //删除规格值
                console.log(sd);
                sd.splice(idx, 1)
            },
            close_ds(idx) {
                this.form.spt.splice(idx, 1)
            },
            handleAvatarSuccess(res, file) {
                this.form.spt = res.data.url
            },
            queding(data) {
                console.log(data);
                this.dialogVisible = false
                data.map(a => {
                    this.form.spt.push(a)
                })
            },
            queding_er(data) {
                this.dialogVisible_er_san=false
                this.sku[0].v[this.naum_sd].fmt=data
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isLt2M;
            },
            submitForm(formName) {
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        var ddf_df = ""
                        this.form.spt = this.form.spt.join(",")
                        this.form.xiqngqing = this.$refs.fuwenben.getUEContent()
                        if (this.$route.query.id) {
                            this.form.type = 2
                        } else {
                            this.form.type = 1
                        }

                        this.form.sd_drtyx = JSON.stringify(this.sd_drtyx)

                        this.form.sku = JSON.stringify(this.sku)
                        console.log(this.form);
                        this.post('shopp/sp_list', this.form)
                        this.$router.back(-1)
                    }
                });
            },
            async getdate() {
                if (this.$route.query.id) {
                    var sd_der = await this.post("shopp/sp_list", {
                        id: this.$route.query.id,
                        type: 3
                    }, true)
                    sd_der.spt = sd_der.spt.split(",")


                    this.sd_drtyx = JSON.parse(sd_der.sd_drtyx)||[]

                    this.sku = JSON.parse(sd_der.sku)||[]

                    this.form = sd_der
                }

            },
            async spfl_ds() {
                this.spfl = await this.post("shopp/fenlei", {
                    type: 3,
                    page: 1
                })
                this.spfl = this.spfl.data
            }
        },
        mounted() {

            this.getdate()
            this.spfl_ds()
        },
        watch: {
            sku: {
                handler: function() {
                    var sd_dff = []
                    try{
                    if (this.sku.length == 1) {
                        this.sku[0].v.map((a, b) => {
                            var dsd_dff = {}
                            dsd_dff.sku_name = a.name
                            dsd_dff.xisnhi = a.name
                            try {
                                dsd_dff.jiage = this.sd_drtyx[b].jiage
                                dsd_dff.kucun = this.sd_drtyx[b].kucun
                                dsd_dff.xiaoliang = this.sd_drtyx[b].xiaoliang
                                dsd_dff.cbjia = this.sd_drtyx[b].cbjia
                            } catch (e) {
                                dsd_dff.jiage = 0
                                dsd_dff.kucun = 0
                                dsd_dff.xiaoliang = 0
                                dsd_dff.cbjia = 0
                            }




                            sd_dff.push(dsd_dff)
                        })
                        this.sd_drtyx = sd_dff
                    }
                    if (this.sku.length == 2) {
                        var sd_df = 0
                        this.sku[0].v.map((a, b) => {
                            this.sku[1].v.map((c, d) => {

                                var dsd_dff = {}
                                dsd_dff.sku_name = a.name + ";" + c.name
                                dsd_dff.xisnhi = c.name
                                try {
                                    dsd_dff.jiage = this.sd_drtyx[sd_df].jiage
                                    dsd_dff.kucun = this.sd_drtyx[sd_df].kucun
                                    dsd_dff.xiaoliang = this.sd_drtyx[sd_df].xiaoliang
                                    dsd_dff.cbjia = this.sd_drtyx[sd_df].cbjia
                                } catch (e) {
                                    dsd_dff.jiage = 0
                                    dsd_dff.kucun = 0
                                    dsd_dff.xiaoliang = 0
                                    dsd_dff.cbjia = 0
                                }
                                sd_df++
                                sd_dff.push(dsd_dff)
                            })
                        })
                        this.sd_drtyx = sd_dff
                    }
                    if (this.sku.length == 3) {
                        var sd_df = 0
                        this.sku[0].v.map((a, b) => {
                            this.sku[1].v.map((c, d) => {
                                this.sku[2].v.map((e, f) => {
                                    var dsd_dff = {}
                                    dsd_dff.sku_name = a.name + ";" + c.name + ";" + e.name
                                    dsd_dff.xisnhi = e.name
                                    try {
                                        dsd_dff.jiage = this.sd_drtyx[sd_df].jiage
                                        dsd_dff.kucun = this.sd_drtyx[sd_df].kucun
                                        dsd_dff.xiaoliang = this.sd_drtyx[sd_df].xiaoliang
                                        dsd_dff.cbjia = this.sd_drtyx[sd_df].cbjia
                                    } catch (e) {
                                        dsd_dff.jiage = 0
                                        dsd_dff.kucun = 0
                                        dsd_dff.xiaoliang = 0
                                        dsd_dff.cbjia = 0
                                    }
                                    sd_df++
                                    sd_dff.push(dsd_dff)
                                })

                            })
                        })
                        this.sd_drtyx = sd_dff
                    }
                        }catch(e){
                            
                        }

                },
                deep: true
            }
        }

    }

</script>
<style>
    .dsf_deertt {
        padding-bottom: 1000px;
    }

    .DSf_dreet input {
        text-align: center;
        width: 80px;
    }

</style>
<style scoped>
    .sd_jh_derrt {
        width: 700px;
        margin: auto;
        margin-top: 20px;
    }

    .ddsf_dert {
        width: 280px;
    }

    .df_jh_dert {
        width: 80px;
        height: 80px;
        border: 1px solid #e0e0e0;
        border-radius: 4px;
        float: left;
        margin-right: 20px;
    }

    .ug_dertt {
        font-size: 20px;
        position: absolute;
        right: -10px;
        top: -10px;
        display: none
    }

    .df_jh_dert:hover .ug_dertt {
        display: block
    }

    .ghuiu_eer {
        width: 100px;
    }

    .ghuiu_eer.ab {
        width: 120px;
    }


    .close_eert {
        position: absolute;
        right: -10px;
        top: -10px;
        color: #999;
        cursor: pointer;
        font-size: 20px;
        display: none
    }

    .ghuiu_eer:hover .close_eert {
        display: block
    }

    .cdgfsd_hjh_der {
        border-top: 1px solid #e0e0e0;
        border-left: 1px solid #e0e0e0;
        text-align: center;

    }

    .cdgfsd_hjh_der .title_d {
        border-bottom: 1px solid #e0e0e0;
        border-right: 1px solid #e0e0e0;
    }

    .cdgfsd_hjh_der ul li {
        border-bottom: 1px solid #e0e0e0;
        border-right: 1px solid #e0e0e0;
    }

    .sdsfdrt2 {
        height: 82px;
        line-height: 82px;
    }

    .sdsfdrt3 {
        height: 123px;
        line-height: 123px;
    }

    .sd_df_rt li {
        min-height: 41px;
        line-height: 41px;
    }

    .sd_jh_dertx {
        width: 100px;
        height: 100px;
        border: 1px solid #e0e0e0;
        background: #fff;
        perspective-origin: bottom;
        margin: auto;
        margin-top: 15px;
        border-radius: 4px;
    }

    .sd_jh_derder {
        width: 10px;
        height: 10px;
        border: 1px solid #e0e0e0;
        position: absolute;
        left: 0px;
        right: 0px;
        margin: auto;
        transform: rotate(45deg);
        top: -5px;
        background: #fff;
    }

    .sd_jh_dff {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        z-index: 100;
        background: #fff;
        text-align: center
    }
    .sd_jh_dff img{
        width: 100%;
        height: 100%;
    }

</style>
