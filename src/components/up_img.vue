<!--上传图片-->
<template>
	<div class="sd_uo_et">
	<el-tabs v-model="activeName" >
         <el-tab-pane name="my_img" label="我的图片" >
        <section class="modal-body">
            <section class="sd_j_dert pt20">
                   <el-upload
                              class="fl mr15"
action="/comm/tukuimg"
  list-type="picture-card"
  name="image"
  :on-success="handleAvatarSuccess"                 
                           >
  <i class="el-icon-plus"></i>
</el-upload>
                <section class="pr add_img_dr fl yj4" :class="sd.cls"  v-for="sd in imageUrl" @click="sd_sdff(sd)">
                      <img :src="sd.path">
                     <img src="../assets/img/check.png" class="gou_deeet">
                </section>
            </section>
        </section>
  
             
             <div class="block cen mt20">
    <el-pagination :page-size="14" @current-change="handleCurrentChange" layout="total, prev, pager, next" :total="total">
    </el-pagination>
</div>
    </el-tab-pane>
  

        
        
   
  </el-tabs>

        
    <div  class="dialog-footer tr">
  
    <el-button @click="$emit('close_s')">取 消</el-button>
    <el-button type="primary" @click="quers_d">确 定</el-button>
  </div>
	</div>
</template>
<script>
    export default {
        props: {
            is_d: false //是否多选
        },
        data() {
            return {
                activeName: 'my_img',
                dialogImageUrl: '',
                dialogVisible: false,
                xz_url: "", //选中的图片
                imageUrl: [], //我的图片库
                sd_sdf: [],
                ids_ssf: [],
                page: 1

            }
        },
        components: {

        },
        methods: {
            handleCurrentChange(val) { //分页点击
                this.page = val
                this.get_img()
            },
            quers_d() { //确定按钮触发
                if (!this.is_d) { //单选
                    this.imageUrl.map(a => {
                        if (a.cls) {
                            this.xz_url = a.path
                        }
                    })
                    this.$emit('queding', this.xz_url)
                } else { //多选
                    var sd_drr = []
                    this.imageUrl.map(a => {
                        if (a.cls) {
                            sd_drr.push(a.path)
                        }
                    })
                    this.$emit('queding', sd_drr)
                }
            },
            sd_swerdff(sd) {
                console.log(sd);
                this.ids_ssf.map(a => {
                    a.cls = ""
                })
                sd.cls = "act"
            },
            sdf_drtyc(sd) {
                this.sd_sdf.map(a => {
                    a.cls = ""
                })
                sd.cls = "act"
                this.ids_ssf = sd.url_list
            },
            handleAvatarSuccess(res, file) {
                let sd_df = {}
                sd_df.cls = ""
                sd_df.path = res.data.url
                this.get_img()
                //                this.imageUrl.unshift(sd_df)
            },
            sd_sdff(sd) {
                if (!this.is_d) {
                    this.imageUrl.map(a => {
                        a.cls = ""
                    })
                    sd.cls = "act"
                } else {
                    sd.cls ? sd.cls = '' : sd.cls = 'act'
                }

            },
            async get_img() {
                var sd_der_er = await this.post("comm/get_imgku", {
                        page: this.page,
                        yema: 14
                    }, true),
                    sd_der = sd_der_er.data
                this.total = sd_der_er.count
                sd_der.map(a => {
                    a.cls = ""
                })
                this.imageUrl = sd_der
            }
        },
        mounted() {
            this.get_img()
        },
    }

</script>
<style>
    .sd_j_dert .el-upload-list__item.is-success {
        display: none
    }

    .sd_uo_et .el-tabs__header {
        margin-bottom: 0 !important
    }

</style>
<style scoped>
    .add_img_dr {
        width: 150px;
        height: 150px;
        background-color: #f3f4f5;
        cursor: pointer;
        margin-right: 15px;
        margin-bottom: 10px;
        float: left;
    }

    .add_img_dr img {
        width: 100%;
        height: 100%;
    }

    .modal-body {}

    .sd_j_dert {
        height: 500px;
        overflow: auto
    }

    .gou_deeet {
        width: 20px !important;
        height: 20px !important;
        position: absolute;
        right: -10px;
        top: -10px;
        display: none
    }

    .mr15 {
        margin-right: 15px;
    }

    .add_img_dr.act .gou_deeet {
        display: block
    }

    .df_sddffg.act {
        color: #409EFF
    }

    .imgs {
        width: 150px;
        height: 150px;
        cursor: pointer;
        margin-right: 15px;
        position: relative;
        margin-bottom: 40px;
        float: left;
    }

    .img-wrap {
        width: 150px;
        height: 150px;
    }

    .text-center {
        text-align: center !important;
    }

    .img-wrap.act .gou_deeet {
        display: block;
        top: 15px
    }

</style>
