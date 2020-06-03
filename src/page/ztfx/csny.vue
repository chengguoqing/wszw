<!-- 城市内页-->
<template>
    <div class="row">
        <div class=" col">
            <div class="row">
                <div class="dfdrtyset nbl pr ac">
                    <div class="pd kjhnmcrert row ab">
                        <div class="col">
                            <span class="jhnxder yj"></span>
                            <span class="ls fz16">太原市年度排名</span>
                        </div>
                    </div>
                    <div class="jjhbnnxert">
                        <el-row :gutter="10">
                            <el-col :span="14">
                                <el-table :data="tableData" style="width: 100%" highlight-current-row>
                                    <el-table-column prop="jjdjfa" label="评估指南"></el-table-column>
                                    <el-table-column prop="jjdjfb" label="2018年排名"></el-table-column>
                                    <el-table-column prop="jjdjfc" label="2017年排名"></el-table-column>
                                    <el-table-column prop="jjdjfd" label="2016年排名"></el-table-column>
                                </el-table>
                            </el-col>
                            <el-col :span="10">
                                <div class="dsfdftyyxe">
                                    <csnytu></csnytu>
                                </div>
                            </el-col>
                        </el-row>
                    </div>

                    <el-row :gutter="10" class="mt20">
                        <el-col :span="8" class="cen">
                            <div class="f_b pt10">
                                <el-progress type="circle" :percentage="25" width="160" stroke-width="20" :color="colors"></el-progress>
                                <p class="cen fz14 cf mt5">即办件占比</p>
                            </div>
                        </el-col>
                        <el-col :span="8" class="cen">
                            <div class="f_b pt10">
                                <el-progress type="circle" :percentage="25" width="160" stroke-width="20" :color="colors"></el-progress>
                                <p class="cen fz14 cf mt5">时限压缩比例</p>
                            </div>
                        </el-col>
                        <el-col :span="8" class="cen">
                            <div class="f_b pt10">
                                <el-progress type="circle" :percentage="25" width="160" stroke-width="20" :color="colors"></el-progress>
                                <p class="cen fz14 cf mt5">跑动次数</p>
                            </div>
                        </el-col>
                    </el-row>

                </div>


                <div class="col ml20">
                    <div class="jjddrttyw nbl pr ac ov">
                        <div class="pd kjhnmcrert row ab">
                            <div class="col">
                                <span class="jhnxder yj"></span>
                                <span class="ls fz16">太原市整体情况</span>
                            </div>
                        </div>
                        <div class="pl20 pr20">
                            <ul class="fz14 dfgdyurt pt20">
                                <li class="row">
                                    <div class="col">
                                        <span class="ls">总排名</span> <span class="ml10 cf fz16">1</span>
                                    </div>
                                    <div class="col">
                                        <span class="ls">总得分</span> <span class="ml10 cf fz16">100</span>
                                    </div>
                                </li>
                                <li class="ls">
                                    能力水平：非常高
                                </li>
                                <li class="ls">
                                    n能力说：非常高
                                </li>
                                <li class="ls">
                                    上线时间：2012年10月19日
                                </li>
                                <li class="ls">
                                    集约程度：市、镇、乡、村五级
                                </li>
                            </ul>

                            <div class="gehhsgerder mt50">
                                <div class="row">
                                    <img src="../../assets/img/dfdsfdfb.png">
                                    <div class="col pl10">
                                        <p class="cf fz14">49个</p>
                                        <p class="fz12 z9 mt5">进驻部门</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <img src="../../assets/img/dfdsfdfa.png">
                                    <div class="col pl10">
                                        <p class="cf fz14">49个</p>
                                        <p class="fz12 z9 mt5">指南要素</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <img src="../../assets/img/dfdsfdfc.png">
                                    <div class="col pl10">
                                        <p class="cf fz14">49项</p>
                                        <p class="fz12 z9 mt5">依申请事项</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <img src="../../assets/img/dfdsfdfc.png">
                                    <div class="col pl10">
                                        <p class="cf fz14">49项</p>
                                        <p class="fz12 z9 mt5">权力事项</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div class=" dfrtyxert nbl pr ac ov">
                <div class="pd kjhnmcrert row ab">
                    <div class="col">
                        <span class="jhnxder yj"></span>
                        <span class="ls fz16">太原市办事指南准确分析</span>
                    </div>
                </div>

                <div class="kjhdrerty pt20">
                    <sjfx :id="isddf" ref="sdrrtty"></sjfx>
                </div>

            </div>
        </div>


        <div class="jhgsdleft ml20">
            <div class="paimingnjhnjd nbl pr">
                <div class="pd kjhnmcrert row ab">
                    <div class="col">
                        <span class="jhnxder yj"></span>
                        <span class="ls fz16">太原市指标指数得分</span>
                    </div>
                </div>

                <div class="jjhbnnxert">
                    <el-table :data="tableDatb" style="width: 100%" highlight-current-row>
                        <el-table-column prop="jjdjfa" label="评估指数" width="140">
                            <template>
                                服务方式完备度
                            </template>
                        </el-table-column>
                        <el-table-column prop="jjdjfb" label="得分">
                            <template>
                                94.63
                            </template>
                        </el-table-column>
                        <el-table-column prop="jjdjfc" label="排名">
                            <template>
                                1
                            </template>
                        </el-table-column>
                    </el-table>
                </div>



            </div>

        </div>
    </div>

    </div>
</template>
<script>
    import csnytu from "@/components/ztfx/csnytu"
    import sjfx from "@/components/index/sjfx"
    export default {
        data() {
            return {
                tableDatb:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                tableData: [{
                    jjdjfa: '总排名',
                    jjdjfb: 1,
                    jjdjfc: 1,
                    jjdjfd: 1
                }, {
                    jjdjfa: '总排名',
                    jjdjfb: 1,
                    jjdjfc: 1,
                    jjdjfd: 1
                }, {
                    jjdjfa: '总排名',
                    jjdjfb: 1,
                    jjdjfc: 1,
                    jjdjfd: 1
                }, {
                    jjdjfa: '总排名',
                    jjdjfb: 1,
                    jjdjfc: 1,
                    jjdjfd: 1
                }, {
                    jjdjfa: '总排名',
                    jjdjfb: 1,
                    jjdjfc: 1,
                    jjdjfd: 1
                }, {
                    jjdjfa: '总排名',
                    jjdjfb: 1,
                    jjdjfc: 1,
                    jjdjfd: 1
                }]
            }
        },
        components: {
            csnytu,
            sjfx
        },
        methods: {

        },
        mounted() {

        },
    }

</script>
<style scoped>
    .dfdrtyset {
        width: 660px;
        height: 548px;
    }

    .dsfdftyyxe {
        height: 210px
    }

    .jjddrttyw {
        width: 340px;
        height: 548px;
        border-radius: 0
    }

    .dfgdyurt {
        line-height: 44px;
    }

    .gehhsgerder {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 70px;
    }

    .dfrtyxert {
        border-radius: 0
    }

    .paimingnjhnjd {
        height: 827px;
        border-radius: 0;
        border-top-right-radius: 40px
    }

</style>
