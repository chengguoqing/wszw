<template>
    <div>
        <div class="row">
            <div class="jhgsdleft">
                <div class="paimingnjhnjd nbl pr">
                    <div class="pd kjhnmcrert row">
                        <div class="col">
                            <span class="jhnxder yj"></span>
                            <span class="ls fz16">总体排名前十名</span>
                        </div>
                        <div>
                            <span class="ls dsftyxrt">更多
                                <img class="cz" src="../assets/img/gengduo.png"></span>
                        </div>
                    </div>

                    <div class="jjhbnnxert">
                        <el-table :data="tableData" style="width: 100%" highlight-current-row>

                            <el-table-column prop="" label="总体排名">
                                <template slot-scope="scope">
                                    <span class="fz14">
                                        {{scope.$index+1}} <img src="../assets/img/dsfdsa.png" class=" fgfdtyer">
                                    </span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="" label="总体排名">
                                <template>
                                    <span class="fz14">太原</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="" label="总体排名">
                                <template>
                                    <span class="ye fz14">95.43</span>
                                </template>
                            </el-table-column>
                        </el-table>

                    </div>


                </div>

                <div class="paimingnjhnjd nbl pr ab">
                    <div class="pd kjhnmcrert row">
                        <div class="col">
                            <span class="jhnxder yj"></span>
                            <span class="ls fz16">指标分析</span>
                        </div>

                    </div>
                    <div class="sdrrttgsweteret">
                        <zbfx></zbfx>
                    </div>
                </div>

            </div>
            <div class="ml20 col">
                <div class="row">
                    <div class="dfdrtyset nbl pr ac">
                        <div class="pd kjhnmcrert row ab">
                            <div class="col">
                                <span class="jhnxder yj"></span>
                                <span class="ls fz16">地区情况</span>
                            </div>
                            <div>
                                <span class="ls dsftyxrt ml10" :class="sd.cls" v-for="sd in kjhhsd" @click="jjndrrtt(sd)">
                                   <i class="iconfont cz" :class="[sd.icon,sd.size]"></i> {{sd.name}}
                                </span>
                            </div>
                        </div>

                        <div class="jjbnncrtty">
                            <shengs></shengs>
                        </div>
                    </div>


                    <div class="col ml20">
                        <div class="jjddrttyw nbl pr ac ov">
                            <div class="pd kjhnmcrert row ab">
                                <div class="col">
                                    <span class="jhnxder yj"></span>
                                    <span class="ls fz16">总体概况</span>
                                </div>
                            </div>
                            <div class="gehhsger pt20">
                                <div class="kjhdrertty cen">
                                    <img src="../assets/img/dfdsfdfa.png">
                                    <p class="fz12 cf mt10">省级政务服务平台</p>
                                    <p class="ye fz16 cen">32</p>
                                </div>
                                <div class="kjhdrertty cen">
                                    <img src="../assets/img/dfdsfdfb.png">
                                    <p class="fz12 cf mt10">进驻部门数量</p>
                                    <p class="ye fz16 cen">1481</p>
                                </div>

                                <div class="kjhdrertty cen">
                                    <img src="../assets/img/dfdsfdfc.png">
                                    <p class="fz14 cf mt10">行政权力事项</p>
                                    <p class="ye fz16 cen">109876</p>
                                </div>

                                <div class="kjhdrertty cen">
                                    <img src="../assets/img/dfdsfdfc.png">
                                    <p class="fz14 cf mt10">依申请事项</p>
                                    <p class="ye fz16 cen">43297</p>
                                </div>


                                <div class="kjhdrertty cen">
                                    <img src="../assets/img/dfdsfdfd.png">
                                    <p class="fz14 cf mt10">办理时限压缩</p>
                                    <p class="ye fz16 cen">30.70%</p>
                                </div>

                                <div class="kjhdrertty cen">
                                    <img src="../assets/img/dfdsfdfe.png">
                                    <p class="fz14 cf mt10">证照信息</p>
                                    <p class="ye fz16 cen">8.79亿</p>
                                </div>

                            </div>
                            <div class="pd">
                                <p class="cf jjhhdf fz14">企业使命用户<span class="ls">3548万</span> 
                                    <span class="ml20">
                                    个人实名用户 <span class="ls">1.45亿</span>
                                    </span>
                                </p>
                            </div>

                        </div>
                        <div class="mt20 dftyurert">
                            <div class="jjhbhdsdrrt">
                                <p class="cf fz15 dfgfdyuue">地区对比</p>
                                <p class="fsdgdtyy">
                                <img src="../assets/img/dsfdsfa.png">
                                </p>
                            </div>
                            <div class="jjhbhdsdrrt">
                                <p class="cf fz15 dfgfdyuue ab">指标对比</p>
                                <p class="fsdgdtyy">
                                <img src="../assets/img/dsfdsfb.png">
                                </p>
                            </div>
                            
                            
                            <div class="jjhbhdsdrrt">
                                <p class="cf fz15 dfgfdyuue ac">多维度对比</p>
                                <p class="fsdgdtyy">
                                <img src="../assets/img/dsfdsfc.png">
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" dfrtyxert nbl pr ac ov">
                    <div class="pd kjhnmcrert row ab">
                        <div class="col">
                            <span class="jhnxder yj"></span>
                            <span class="ls fz16">数据分析</span>
                        </div>
 <div>
                                <span class="ls dsftyxrt ml10" :class="sd.cls" v-for="sd in shujusd" @click="jjndrrtter(sd)">
                                   <i class="iconfont cz" :class="[sd.icon,sd.size]"></i> {{sd.name}}
                                </span>
                            </div>
                    </div>

                    <div class="kjhdrerty">
                        <sjfx></sjfx>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import shengs from "@/components/index/shengs"
    import zbfx from "@/components/index/zbfx"
    import sjfx from "@/components/index/sjfx"
    export default {
        data() {
            return {
                tableData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1],
                kjhhsd:[{
                    name:'服务能力',
                    cls:'',
                    icon:'iconkujialeqiyezhan_fuwunengli',
                    size:'fz16'
                },{
                    cls:'act',
                    name:'集约化程度',
                    icon:'iconfenxiang',
                    size:'fz12'
                }],
                shujusd:[{
                    name:'总体排行',
                    cls:'',
                    icon:'iconmn_paiming_fill',
                    size:'fz16'
                },{
                    cls:'act',
                    name:'权力事项',
                    icon:'iconyichulishixiang',
                    size:'fz12'
                },{
                    cls:'act',
                    name:'依申请事项',
                    icon:'iconkaohejilu',
                    size:'fz12'
                },{
                    cls:'act',
                    name:'公共服务事项',
                    icon:'iconfuwu',
                    size:'fz12'
                },{
                    cls:'act',
                    name:'进驻部门',
                    icon:'iconjiagouguanli',
                    size:'fz12'
                },{
                    cls:'act',
                    name:'指南要素',
                    icon:'iconzhinanzhen',
                    size:'fz12'
                }]
            }
        },
        components: {
            shengs,
            zbfx,
            sjfx
        },
        methods: {
            jjndrrtt(sd){
                this.kjhhsd.map(a=>{
                    a.cls='act'
                })
                sd.cls=''
            },
             jjndrrtter(sd){
                this.shujusd.map(a=>{
                    a.cls='act'
                })
                sd.cls=''
            }
        },
        mounted() {

        },
    }

</script>
<style scoped>
    .gehhsger {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
    }

    .kjhdrertty {
        padding-top: 24px;
        padding-bottom: 24px
    }

    .dftyurert {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 10px;
        grid-row-gap: 0px;
    }
    .jjhhdf{
        background: #03245A;
        padding: 5px 10px
    }
</style>
