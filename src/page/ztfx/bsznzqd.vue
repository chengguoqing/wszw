<!--办事指南准确度-->
<template>
    <div class="row dfgdytyxtt">
        <div class="col">
            <div class="row">
                <div class="jhgsdleft">
                    <div class="paimingnjhnjd nbl pr">
                        <div class="pd kjhnmcrert row ">
                            <div class="col">
                                <span class="jhnxder yj"></span>
                                <span class="ls fz16">办事指南发布数量</span>
                            </div>

                        </div>

                        <div class=" mt10 dftyysrer">
                            <div v-for="(sd,idx) in uuhnsdf" :class="idx==1?'dsftysert':''">
                                <p class="mb5">
                                    <span class="nbl hhbgnsjert ls fz13 f_b">{{sd.title}}</span>
                                </p>
                                <span class="ml5 cf fz12 fl fbgdfyyuxert sz" :class="sf.nohs?'act':''" v-for="sf in sd.xiabiao">{{sf.name}}</span>
                                <p class="qc"></p>
                            </div>

                        </div>


                    </div>
                    <div class="br nbl jhhdcrrtyxe mt5 pt10">
                        <p class="ls fz14 cen">
                            <i class="el-icon-download"></i> 表格下载要素信息正确率分析
                        </p>
                        <el-row class="pd pt5">
                            <el-col :span="12">
                                <div class="row">
                                    <span class="cf fz14 cz mt15">样表</span>
                                    <div class="pl20">
                                        <p class="fz12 cf cen"><span class="dfrtyyuse">提供率 63.71%</span></p>
                                        <div class="kjhncdfrtty mt2">
                                            <p style="width:63.71%"></p>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <span class="cf fz14 cz mt15">空表</span>
                                    <div class="pl20">
                                        <p class="fz12 cf cen"><span class="dfrtyyuse">提供率 63.71%</span></p>
                                        <div class="kjhncdfrtty mt2 ab">
                                            <p style="width:63.71%"></p>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="row">
                                    <span class="cf fz14 cz mt15">&nbsp;</span>
                                    <div class="pl20">
                                        <p class="fz12 cf cen"><span class="dfrtyyuse">准确率 63.71%</span></p>
                                        <div class="kjhncdfrtty mt2">
                                            <p style="width:63.71%"></p>
                                        </div>
                                    </div>
                                </div>

                                <div class="row dfstyyus">
                                    <span class="cf fz14 cz mt15">&nbsp;</span>
                                    <div class="pl20">
                                        <p class="fz12 cf cen"><span class="dfrtyyuse">准确率 63.71%</span></p>
                                        <div class="kjhncdfrtty mt2 ab">
                                            <p style="width:63.71%"></p>
                                        </div>
                                    </div>
                                </div>


                            </el-col>
                        </el-row>
                    </div>


                    <div class="br nbl frrttyx mt5 ">

                        <el-row :gutter="20">
                            <el-col :span="13">
                                <div class="kjeertxer pr">
                                    <span class="cf jjhncdrtt fz12 cen">7 <br>21.88</span>
                                    <bsnechar></bsnechar>
                                    <span class="cf jjhncdrtt fz12 cen ab">25 <br>78.13</span>
                                </div>
                            </el-col>
                            <el-col :span="11" class="cf pt20 fz14">
                                办事指南与<br>权力清单<span class="ls sz">关联度</span>
                            </el-col>
                        </el-row>

                    </div>

                </div>
                <div class="ml10 col">
                    <div class="dfdrtyset nbl pr ac">
                        <div class="pd kjhnmcrert row ab">
                            <div class="col">
                                <span class="jhnxder yj"></span>
                                <span class="ls fz16">办理流程要素信息正确率分析</span>
                            </div>
                        </div>
                        <el-row :gutter="10" class="mt30">
                            <el-col :span="8" class="cen">
                                <div class="f_b pt10">
                                    <el-progress type="circle" :percentage="25" width="94" stroke-width="20" :color="colors"></el-progress>
                                    <p class="fz14 ls mt10 ">流程环节完备性</p>
                                    <p class="cen fz12 mt2 cf ">2018年超过平均占比</p>
                                    <p class="ye fz14 mt5">75.88%</p>
                                </div>
                            </el-col>
                            <el-col :span="8" class="cen">
                                <div class="f_b pt10">
                                    <el-progress type="circle" :percentage="25" width="94" stroke-width="20" :color="colors"></el-progress>
                                    <p class="fz14 ls mt10 ">流程内容详实性</p>
                                    <p class="cen fz12 mt2 cf ">2018年超过平均占比</p>
                                    <p class="ye fz14 mt5">75.88%</p>
                                </div>
                            </el-col>

                            <el-col :span="8" class="cen">
                                <div class="f_b pt10">
                                    <el-progress type="circle" :percentage="25" width="94" stroke-width="20" :color="colors"></el-progress>
                                    <p class="fz14 ls mt10 ">到办事现场次数</p>
                                    <p class="cen fz12 mt2 cf ">2018年超过平均占比</p>
                                    <p class="ye fz14 mt5">75.88%</p>
                                </div>
                            </el-col>

                        </el-row>
                    </div>

                    <div class="dfdrtyset nbl pr ac mt10">
                        <div class="pd kjhnmcrert row ab">
                            <div class="col">
                                <span class="jhnxder yj"></span>
                                <span class="ls fz16">办理流程要素信息正确率分析333{{iuuderxeert}}</span>
                            </div>
                        </div>
                        <el-row :gutter="10" class="mt30">
                            <el-col :span="8" class="cen">
                                <div class="f_b pt10">
                                    <el-progress type="circle" :percentage="25" width="94" stroke-width="20" :color="colors"></el-progress>
                                    <p class="fz14 ls mt10 ">流程环节完备性</p>
                                    <p class="cen fz12 mt2 cf ">2018年超过平均占比</p>
                                    <p class="ye fz14 mt5">75.88%</p>
                                </div>
                            </el-col>
                            <el-col :span="8" class="cen">
                                <div class="f_b pt10">
                                    <el-progress type="circle" :percentage="25" width="94" stroke-width="20" :color="colors"></el-progress>
                                    <p class="fz14 ls mt10 ">流程内容详实性</p>
                                    <p class="cen fz12 mt2 cf ">2018年超过平均占比</p>
                                    <p class="ye fz14 mt5">75.88%</p>
                                </div>
                            </el-col>

                            <el-col :span="8" class="cen">
                                <div class="f_b pt10">
                                    <el-progress type="circle" :percentage="25" width="94" stroke-width="20" :color="colors"></el-progress>
                                    <p class="fz14 ls mt10 ">到办事现场次数</p>
                                    <p class="cen fz12 mt2 cf ">2018年超过平均占比</p>
                                    <p class="ye fz14 mt5">75.88%</p>
                                </div>
                            </el-col>

                        </el-row>
                    </div>

                </div>
            </div>
            <div class="mt10 nbl br fgyuuseret">
                <div class="pd kjhnmcrert row ab">
                    <div class="col">
                        <span class="jhnxder yj"></span>
                        <span class="ls fz16">办事指南基本信息正确分析</span>
                    </div>
                </div>
                <div class="kmmcrrerty w100"> 
      <sjfx ref="sdrrtty"></sjfx>
                </div>
            </div>
        </div>
        <div class="ml10 dtyysertty" v-if="iuuderxeert">
            <left :tableData="tableData" :tableDatb="tableDatb" title="服务方式完备度"></left>
        </div>
    </div>
</template>
<script>
    import bsnechar from "@/components/ztfx/bsnechar"
    import left from "@/components/ztfx/left"
     import sjfx from "@/components/index/sjfx"
    export default {
        data() {
            return {

                iuuderxeert: false,
                uuhnsdf: [{
                        title: "基本信息",
                        tableData: "",
                        tableDatb: '',
                        xiabiao: [{
                            url: '',
                            name: "事项类型"
                        }, {
                            url: '',
                            name: "权力来源"
                        }, {
                            url: '',
                            name: "许可数量"
                        }, {
                            url: '',
                            name: "办件类型"
                        }, {
                            url: '',
                            name: "事项编码"
                        }, {
                            url: '',
                            name: "服务对象"
                        }, {
                            url: '',
                            name: "法定办结时"
                        }, {
                            url: '',
                            name: "办理地点"
                        }, {
                            url: '',
                            name: "办理时间"
                        }, {
                            url: '',
                            name: "联系电话"
                        }, {
                            url: '',
                            name: "监督电话"
                        }, {
                            url: '',
                            name: "电话准确性"
                        }, {
                            url: '',
                            name: "设定依据"
                        }, {
                            url: '',
                            nohs: true,
                            name: "中间机构或特殊环节"
                        }]
                    },
                    {
                        title: "收费信息",
                        xiabiao: [{
                            url: '',
                            name: "明确标识"
                        }, {
                            url: '',
                            name: "收费标准"
                        }, {
                            url: '',
                            name: "收费依据"
                        }]
                    },
                    {
                        title: "表格样表下载",
                        xiabiao: [{
                            url: '',
                            name: "空表下载服务"
                        }, {
                            url: '',
                            name: "样表下载服务"
                        }, {
                            url: '',
                            name: "空标准确性"
                        }, {
                            url: '',
                            name: "样表准确性"
                        }]
                    },
                    {
                        title: "办理流程",
                        xiabiao: [{
                            url: '',
                            name: "到办事现场次数"
                        }, {
                            url: '',
                            name: "流程环节完整性"
                        }, {
                            url: '',
                            name: "流程内容详实性"
                        }]
                    },
                    {
                        title: "申请材料",
                        xiabiao: [{
                            url: '',
                            name: "申请名称"
                        }, {
                            url: '',
                            name: "材料来源或出算单位"
                        }, {
                            url: '',
                            name: "数量要求"
                        }, {
                            url: '',
                            name: "接扫要求"
                        }]
                    }
                ]
            }
        },
        components: {
            bsnechar,
            left,
            sjfx
        },
        methods: {
            async getpaiming() {
                let res = await this.get('getfswbdph', {})
                this.iuuderxeert = true
                this.tableData = res.data.sjzf
                this.tableDatb = res.data.sjbm
            },
        },
        mounted() {
            this.getpaiming()
        },
    }

</script>
<style scoped>
    .dfgdytyxtt {
        width: 1436px
    }

    .jhgsdleft {
        width: 425px !important
    }

    .dftyysrer {
        padding: 0px 0px 0px 15px;
    }

    .paimingnjhnjd {
        height: 340px;
    }

    .hhbgnsjert {
        padding: 2px 15px;
        border: 1px solid #51E3C2
    }

    .fbgdfyyuxert {
        transform: scale(0.9);
        margin-bottom: 5px;
    }

    .fbgdfyyuxert.act {
        max-width: 60px;
    }

    .dsftysert {
        margin-top: -10px !important;
    }

    .jhhdcrrtyxe {
        height: 110px;
    }

    .kjhncdfrtty {
        width: 146px;
        height: 12px;
        position: relative;
        background: rgba(255, 255, 255, 0.5)
    }

    .dfrtyyuse {
        display: inline-block;
        transform: scale(0.9)
    }

    .kjhncdfrtty p {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        background: #E7495A
    }

    .kjhncdfrtty.ab p {
        background: #F5B324;
    }

    .dfstyyus {
        padding-top: 3px;
    }

    .frrttyx {
        height: 75px;
    }

    .kjeertxer {
        height: 75px;
    }

    .jjhncdrtt {
        position: absolute;
        top: 25px;
        left: 30px;
    }

    .jjhncdrtt.ab {
        left: inherit;
        right: 30px;
    }

    .dfdrtyset.ac {
        height: 263px !important
    }

    .dfsdyuerrty {
        height: 894px;
        width: 390px
    }
    .kmmcrrerty{
        height: 310px;
    }
    .fgyuuseret{
        width: 1027px !important
    }
</style>
