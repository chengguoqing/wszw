<!--服务方式完备度-->
<template>
    <div class="row">
        <div class="jhgsdleft">
            <left :tableData="tableData" :tableDatb="tableDatb"></left>

        </div>
       
<div class="ml20 col">
            <div class="row">
                <div class="dfdrtyset nbl pr ac">
                    <div class="pd kjhnmcrert row ab">
                        <div class="col">
                            <span class="jhnxder yj"></span>
                            <span class="ls fz16">市级政务服务平台集约化程度</span>
                        </div>
                    </div>

                    <div class="jjbnncrtty pr">
                        <shengs :data="sjzwfwpt" v-if="isxsd" :show="true" class="crfttyydser"></shengs>
                        <div class="jjhhddrtyyur" v-if="isxsd">
                            <ul>
                                <li class="row">
                                    <span class="cf f_b jhjdsftys fz14 tr">{{jindus.hhgsdra}}%</span>
                                    <div class="col pl10">
                                        <div class="jjsrrrtyxe" :style="{width: jindus.hhgsdra +'%'}"></div>
                                        <p class="fz12 cf mt5">
                                            市县乡村五级服务体系
                                        </p>
                                    </div>
                                </li>
                                <li class="row">
                                    <span class="cf f_b jhjdsftys fz14 tr">{{jindus.hhgsdrb}}%</span>
                                    <div class="col pl10">
                                        <div class="jjsrrrtyxe" :style="{width: jindus.hhgsdrb +'%'}"></div>
                                        <p class="fz12 cf mt5">
                                            市县乡四级服务体系
                                        </p>
                                    </div>
                                </li>
                                <li class="row">
                                    <span class="cf f_b jhjdsftys fz14 tr">{{jindus.hhgsdrc}}%</span>
                                    <div class="col pl10">
                                        <div class="jjsrrrtyxe" :style="{width: jindus.hhgsdrc +'%'}"></div>
                                        <p class="fz12 cf mt5">
                                            市县三级服务体系
                                        </p>
                                    </div>
                                </li>
                                <li class="row">
                                    <span class="cf f_b jhjdsftys fz14 tr">{{jindus.hhgsdrd}}%</span>
                                    <div class="col pl10">
                                        <div class="jjsrrrtyxe" :style="{width: jindus.hhgsdrd +'%'}"></div>
                                        <p class="fz12 cf mt5">
                                            市两级服务体系
                                        </p>
                                    </div>
                                </li>
                                <li class="row">
                                    <span class="cf f_b jhjdsftys fz14 tr">{{jindus.hhgsdre}}%</span>
                                    <div class="col pl10">
                                        <div class="jjsrrrtyxe" :style="{width: jindus.hhgsdre +'%'}"></div>
                                        <p class="fz12 cf mt5">
                                            本建设
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class=" dfrtyxert nbl pr ac ov nm">
                <div class="pd kjhnmcrert row ab">
                    <div class="col">
                        <span class="jhnxder yj"></span>
                        <span class="ls fz16">市本级部门进驻市级网上政务服务平台的数量分析</span>
                    </div>

                </div>
                <div class="kjhdrerty">
                    <el-row class="pt25" :gutter="20">
                        <el-col :span="8">
                            <div class="cen pt30">
                                <img src="../../assets/img/huwhe.png" class="cz">
                                <p class="mt10 fz16 ls fz16">市级政务服务平台<br>进一张网办所有事</p>
                            </div>
                        </el-col>
                        <el-col :span="16">
                            <ul class="kjnjdsftys">
                                <li class="row">
                                    <span class="sdsftyxe yj4 ls">地市级</span>
                                    <div class="cf gfyuuert ml10 ">
                                        <i class="el-icon-caret-right ye fz16 "></i>
                                        <span class="fz16 ls ml10 b mr5">{{res.dfsgftya}}</span>
                                        <span>个地市政府</span>
                                    </div>
                                    <div class="cf gfyuuert ml10 ">
                                        <i class="el-icon-caret-right ye fz16 "></i>
                                        <span class="fz16 ls ml10 b mr5">{{res.dfsgftyb}}</span>
                                        <span>个市直部门</span>
                                    </div>
                                </li>


                                <li class="row">
                                    <span class="sdsftyxe yj4 ls">县市级</span>
                                    <div class="cf gfyuuert ml10 ">
                                        <i class="el-icon-caret-right ye fz16 "></i>
                                        <span class="fz16 ls ml10 b mr5">{{res.dfsgftyc}}</span>
                                        <span>个县级政府</span>
                                    </div>
                                    <div class="cf gfyuuert ml10 ">
                                        <i class="el-icon-caret-right ye fz16 "></i>
                                        <span class="fz16 ls ml10 b mr5">{{res.dfsgftyd}}</span>
                                        <span>个县直部门</span>
                                    </div>
                                </li>
                                <li class="row">
                                    <span class="sdsftyxe yj4 ls">乡镇级</span>
                                    <div class="cf gfyuuert ml10 ">
                                        <i class="el-icon-caret-right ye fz16 "></i>
                                        <span class="fz16 ls ml10 b mr5">{{res.dfsgftye}}</span>
                                        <span>个镇级</span>
                                    </div>

                                </li>

                                <li class="row">
                                    <span class="sdsftyxe yj4 ls">村居级</span>
                                    <div class="cf gfyuuert ml10 ">
                                        <i class="el-icon-caret-right ye fz16 "></i>
                                        <span class="fz16 ls ml10 b mr5">{{res.dfsgftyf}}</span>
                                        <span>个村居</span>
                                    </div>
                                </li>
                            </ul>

                        </el-col>
                    </el-row>

                </div>

            </div>
        </div>


        <div class="col ml20">
            <div class="jjddrttyw nbl pr ac ov ba">
                <div class="pd kjhnmcrert row ab">
                    <div class="col">
                        <span class="jhnxder yj"></span>
                        <span class="ls fz14">市级政府网上政务服务能力年度对比</span>
                    </div>
                </div>
                <div class="mjnjdfdtyser">
                    <sjzfwszwfwnl v-if="isxsdb" :dataset="dataset" ty="2"></sjzfwszwfwnl>
                </div>
            </div>

            <div class="jjddrttyw nbl pr ac ov bb mt15">
                <div class="pd kjhnmcrert row ab">
                    <div class="col">
                        <span class="jhnxder yj"></span>
                        <span class="ls fz14">政务服务界面统一入口</span>
                    </div>
                </div>
                    <el-row class="dfdstyryuus" v-if="isxsdb">
                        <el-col :span="12" class=" h100">
                        <zwfwjmturk :data="hjgdffb"></zwfwjmturk>
                        </el-col>
                        <el-col :span="12" class=" h100">
                        <zwfwjmturk  :data="hjgdffc"></zwfwjmturk>
                        </el-col>
                    </el-row>
                
            </div>

             <div class="jjddrttyw nbl pr ac ov bc mt15">
                <div class="pd kjhnmcrert row ab">
                    <div class="col">
                        <span class="jhnxder yj"></span>
                        <span class="ls fz14">市级政府实体政务服务大厅建设情况</span>
                    </div>
                </div>
                <div class="mjnjdfdtyser">
                    <sjzfwszwfwnl v-if="isxsdb" :dataset="datasetb" ty="1"></sjzfwszwfwnl>
                </div>
            </div>
        </div>
    </div>

    </div>
</template>
<script>
     import left from "@/components/ztfx/left"
    import shengs from "@/components/index/shengs"
    import sjzfwszwfwnl from "@/components/ztfx/sjzfwszwfwnl"
    import zwfwjmturk from "@/components/ztfx/zwfwjmturk"
    export default {
        data() {
            return {
                tableData: [],
                tableDatb: [],
                jindus: "",
                res: '',
                isxsd: false,
                isxsdb:false,
                caidan: [{
                    name: "总体排名",
                    url: ""
                }, {
                    name: "服务方式完备度",
                    url: ""
                }, {
                    name: "服务事项覆盖度",
                    url: ""
                }, {
                    name: "办事指南准确度",
                    url: ""
                }, {
                    name: "在线办理成熟度",
                    url: ""
                }, {
                    name: "在线服务成效度",
                    url: ""
                }]
            }
        },
        components: {
            shengs,
            sjzfwszwfwnl,
            zwfwjmturk,
            left
        },
        methods: {
            async getpaiming() {
                let res = await this.get('getfswbdph', {})
                this.tableData = res.data.sjzf
                this.tableDatb = res.data.sjbm
                this.res = res.data
                this.dataset = res.data.hjgdffa
                this.datasetb = res.data.hjgdffe
                this.hjgdffb = res.data.hjgdffb
                this.hjgdffc = res.data.hjgdffc
                 this.isxsdb = true
            },
            async getsjzwfwpt() {
                let res = await this.get('getsjzwfwpt', {})
                this.sjzwfwpt = res.data.sjzwfwpt
                this.jindus = res.data
                this.isxsd = true
            }
        },
        mounted() {
            this.getpaiming()
            this.getsjzwfwpt()
        },
    }

</script>
<style scoped>
   
 .jhgsdleft {
        width: 392px
    }

    .paimingnjhnjd.ba {
        height: 892px !important
    }

    .dfgdfyuxe li {
        line-height: 40px;
    }

    .jhddfrtt {
        width: 6px;
        display: inline-block;
        height: 6px;
        border: 1px solid #2FFFFF
    }

    .crfttyydser {
        position: relative;
        left: -80px
    }

    .jjhhddrtyyur {
        width: 210px;
        height: 260px;
        position: absolute;
        right: 20px;
        bottom: -40px;
    }

    .jhjdsftys {
        width: 50px;
        line-height: 20px;
    }

    .jjsrrrtyxe {
        width: 0%;
        height: 20px;
        background: #C6513E
    }

    .jjhhddrtyyur li {
        margin-bottom: 14px;
    }

    .jjhhddrtyyur li:nth-child(2) .jjsrrrtyxe {
        background: #8C400C
    }

    .jjhhddrtyyur li:nth-child(3) .jjsrrrtyxe {
        background: #A6760C
    }

    .jjhhddrtyyur li:nth-child(4) .jjsrrrtyxe {
        background: #FFF008
    }

    .jjhhddrtyyur li:nth-child(5) .jjsrrrtyxe {
        background: #FFFC8A
    }

    .dfdrtyset {
        width: 630px !important;
    }

    .sdsftyxe {
        background: #043475;
        display: inline-block;
        width: 61px;
        height: 25px;
        text-align: center;
        line-height: 27px;
    }

    .gfyuuert {
        line-height: 27px;
        width: 160px;
    }

    .kjnjdsftys li {
        margin-bottom: 20px;
    }

    .jjddrttyw.ba {
        height: 290px !important
    }

    .jjddrttyw.bb {
        border-radius: 0;
        height: 266px !important
    }
      .jjddrttyw.bc {
        height: 304px !important;
          border-radius: 0;
          border-bottom-right-radius: 40px
    }

    .mjnjdfdtyser {
        height: 250px;
        padding: 0px 20px
    }
    .dfdstyryuus{
        height: 230px;
        position: relative;
        top: -20px
    }
    .dfrtyxert.nm{
        border-radius: 0 
    }


</style>
