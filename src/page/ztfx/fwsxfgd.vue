<!--服务事项覆盖度-->
<template>
    <div class="row kjhsderrtcr">
        <div class="jhgsdleft">
            <div class="paimingnjhnjd nbl pr">
                <div class="pd kjhnmcrert row ">
                    <div class="col">
                        <span class="jhnxder yj"></span>
                        <span class="ls fz16">办事指南发布数量</span>
                    </div>
                </div>

                <div class="jjhbnnxert mt10">
                    <el-row :gutter="10" class='pd dfgdfyyxr'>
                        <el-col :span="6" v-for="(sd,idx) in jhgdf">
                            <div class="kjjjdrtty" :class="idsd==idx?'act':''" @click="jjhhsdf(idx)">
                                <span class="pr dian"> {{sd}}</span>
                            </div>
                        </el-col>
                    </el-row>
                    <div class="kkjddrrtty">
                        <bsznfbsl v-if="isxsdc" :bszlfbsl="bszlfbsl" ref="dftyudsret"></bsznfbsl>
                    </div>
                </div>


            </div>

            <div class="paimingnjhnjd nbl pr ab">
                <div class="pd kjhnmcrert row  ac">
                    <div class="col row">
                        <span class="jhnxder yj"></span>
                        <span class="ls fz14 jhjhhdert col">理念办事指南发布数量排名前10名的地区数量占比分析</span>
                    </div>

                </div>
                <div class="sdrrttgsweteret">
                    <el-row :gutter="10">
                        <el-col :span="8" class="cen">
                            <div class="f_b pt10">
                                <el-progress type="circle" :percentage="25" width="90" stroke-width="16" :color="colors"></el-progress>
                                <p class="cen fz14 cf mt5">2017年</p>
                            </div>
                        </el-col>
                        <el-col :span="8" class="cen">
                            <div class="f_b pt10">
                                <el-progress type="circle" :percentage="25" width="90" stroke-width="16" :color="colors"></el-progress>
                                <p class="cen fz14 cf mt5">2018年</p>
                            </div>
                        </el-col>
                        <el-col :span="8" class="cen">
                            <div class="f_b pt10">
                                <el-progress type="circle" :percentage="25" width="90" stroke-width="16" :color="colors"></el-progress>
                                <p class="cen fz14 cf mt5">2019年</p>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>

        </div>
        <div class="ml10 col ">
            <el-row :gutter="10">
                <el-col :span="12" class="">
                    <div class="br nbl pr ac dgfdtyyseer">
                        <div class="pd kjhnmcrert row ab">
                            <div class="col">
                                <span class="jhnxder yj"></span>
                                <span class="ls fz16">历年行政权力累事项指南发布数量对比</span>
                            </div>
                        </div>

                        <div class="jhdsftyyu">
                            <div class="dftyseeret">
                                <sjzfwszwfwnl v-if="isxsdb" :dataset="dataset" ty="4"></sjzfwszwfwnl>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="12" class="">
                    <div class="br nbl pr ac dgfdtyyseer">
                        <div class="pd kjhnmcrert row ab">
                            <div class="col">
                                <span class="jhnxder yj"></span>
                                <span class="ls fz16">市级政府相关清单发布情况</span>
                            </div>
                        </div>

                        <div class="jhdsftyyu">
                            <div class="dftyseeret">
                                <sjzfxgqdfbqk v-if="isxsdb" :dataset="jhggdb"></sjzfxgqdfbqk>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>

            <div class="row dfdtyseertrt mt10">
                <div class="dfdrtyset nbl pr ac">
                    <div class="pd kjhnmcrert row ab">
                        <div class="col">
                            <span class="jhnxder yj"></span>
                            <span class="ls fz16">太原市办事指南要素数量分析</span>
                        </div>
                    </div>

                    <div class="jjbnncrtty">
                        <bsznfbslsu v-if="isxsdd" :bszlfbsl="dayyhse"></bsznfbslsu>
                    </div>
                </div>
            </div>
            <div class=" dfrtyxert nbl pr ac ov">
                <div class="pd kjhnmcrert row ab">
                    <div class="col">
                        <span class="jhnxder yj"></span>
                        <span class="ls fz16">历年办事指南发布数量对比</span>
                    </div>

                </div>

                <div class="kjhdrerty pt40">
                    <el-row :gutter="10">
                        <el-col :span="6" class="cen">
                            <div class="f_b pt10">
                                <el-progress type="dashboard" :percentage="40" width="130" stroke-width="16" :color="colors" :format="format"></el-progress>
                                <p class="cen fz14 cf mt5">2018年 平均值3378</p>
                            </div>
                        </el-col>
                         <el-col :span="6" class="cen">
                            <div class="f_b pt10">
                                <el-progress type="dashboard" :percentage="40" width="130" stroke-width="16" :color="colors" :format="format"></el-progress>
                                <p class="cen fz14 cf mt5">2017年 平均值3378</p>
                            </div>
                        </el-col>
                         <el-col :span="6" class="cen">
                            <div class="f_b pt10">
                                <el-progress type="dashboard" :percentage="40" width="130" stroke-width="16" :color="colors" :format="format"></el-progress>
                                <p class="cen fz14 cf mt5">2016年 平均值3378</p>
                            </div>
                        </el-col>
                         <el-col :span="6" class="cen">
                            <div class="f_b pt10">
                                <el-progress type="dashboard" :percentage="40" width="130" stroke-width="16" :color="colors" :format="format"></el-progress>
                                <p class="cen fz14 cf mt5">2015年 平均值3378</p>
                            </div>
                        </el-col>
                    </el-row>
                </div>

            </div>
        </div>


        <div class="col ml10 dtyysertty">
            <left :tableData="tableData" :tableDatb="tableDatb" title="服务事项覆盖度"></left>
        </div>
    </div>

    </div>
</template>
<script>
    import left from "@/components/ztfx/left"
    import bsznfbsl from "@/components/ztfx/bsznfbsl"
    import sjzfwszwfwnl from "@/components/ztfx/sjzfwszwfwnl"
    import sjzfxgqdfbqk from "@/components/ztfx/sjzfxgqdfbqk"
    import bsznfbslsu from "@/components/ztfx/bsznfbslsu"

    export default {
        data() {
            return {
                tableData: "",
                tableDatb: "",
                isxsdc: false,
                isxsdb: false,
                isxsdd: false,
                idsd: 0,
                jhgdf: ['行政权力事项', '依申请事项', '依职权事项', '公共服务事项'],
                colors: [{
                    color: '#4C90E2',
                    percentage: 20
                }]
            }
        },
        components: {
            bsznfbsl,
            left,
            sjzfwszwfwnl,
            sjzfxgqdfbqk,
            bsznfbslsu
        },
        methods: {
            format() {
                return 102030 
            },
            async getpaiming() {
                let res = await this.get('getfswbdph', {})
                this.tableData = res.data.sjzf
                this.tableDatb = res.data.sjbm
                this.res = res.data
            },
            async getztszjhdrt() {
                let res = await this.get('getfwsxfgd', {})
                console.log(res.data);
                this.bszlfbsl = res.data
                try {
                    this.$refs.dftyudsret.cxsd()
                } catch (e) {

                }
                this.isxsdc = true
            },
            async getfwsxfgdindex() {
                let res = await this.get('getfwsxfgdindex', {})
                this.bszlfbsl = res.data
                this.dataset = res.data.hjgdffa
                this.jhggdb = res.data.hjgdffb
                this.isxsdb = true
            },
            async getsxdata() {
                let res = await this.get('getsxdata', {})
                this.dayyhse = res.data
                this.isxsdd = true
            },

            jjhhsdf(idx) {
                this.idsd = idx
                this.getztszjhdrt()
            }
        },
        mounted() {
            this.getztszjhdrt()
            this.getpaiming()
            this.getfwsxfgdindex()
            this.getsxdata()
        },
    }

</script>
<style scoped>
    .kjhsderrtcr {
        width: 1437px !important
    }

    .jhgsdleft {
        width: 350px !important
    }

    .paimingnjhnjd {
        height: 690px
    }

    .kjjjdrtty {
        color: #286781;
        font-size: 12px;
        position: relative;
        text-align: center;
        cursor: pointer;
    }

    .kjjjdrtty:after {
        content: ' ';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: #153666;
        transform: skewX(-30deg);
        border: 1px solid #076DA5 !important
    }

    .kjjjdrtty span {
        position: relative;
        top: 1px;
        font-size: 12px;
        display: inline-block;
        transform: scale(0.9)
    }

    .jjhbnnxert {
        padding: 0px 10px
    }

    .kjjjdrtty:hover:after,
    .kjjjdrtty.act:after {
        border-color: #2FFFFF !important
    }

    .kjjjdrtty:hover span,
    .kjjjdrtty.act span {
        color: #2FFFFF !important
    }

    .kkjddrrtty {
        height: 615px;
    }

    .dfgdfyyxr {
        position: relative;
        z-index: 100;
        top: 10px;
    }

    .paimingnjhnjd.ab {
        height: 187px !important;
    }

    .sdrrttgsweteret {
        height: 144px
    }

    .dfdrtyset {
        height: 270px !important
    }

    .jjddrttyw {
        height: 900px !important
    }

    .dfdrtyset.ac {
        width: 100%;
    }

    .dfdtyseertrt {
        width: 685px !important
    }

    .dgfdtyyseer {
        width: 100%;
        height: 300px;
    }

    .jhdsftyyu {
        padding: 0px 20px;
        position: relative;
        bottom: 20px
    }

    .dftyseeret {

        height: 270px;
    }

    .jjbnncrtty {
        height: 232px !important
    }
    .dfrtyxert{
        height:295px;
        border-radius: 0
    }

</style>
