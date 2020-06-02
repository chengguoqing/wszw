<template>
    <div>
        <div class="row">
            <div class="jhgsdleft">
                <div class="paimingnjhnjd nbl pr">
                    <div class="pd kjhnmcrert row ">
                        <div class="col">
                            <span class="jhnxder yj"></span>
                            <span class="ls fz16">总体排名前十名</span>
                        </div>
                        <div>
                            <span class="ls dsftyxrt" @click="isskjjd=true">更多
                                <img class="cz" src="../assets/img/gengduo.png"></span>
                        </div>
                    </div>

                    <div class="jjhbnnxert mt10">
                        <el-table :data="tableData" style="width: 100%" highlight-current-row>
                            <el-table-column prop="" label="总体排名">
                                <template slot-scope="scope">
                                    <span class="fz14">
                                        {{scope.$index+1}} 
                                        
                                        <img src="../assets/img/dsfdsa.png" class=" fgfdtyer" v-if="scope.row.type==1">
                                        <span class="cf fz16" v-if="scope.row.type==2">-</span>
                                         <img src="../assets/img/dsfdsb.png" class=" fgfdtyer" v-if="scope.row.type==3">
                                    </span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="name" label="市级政府">
                            </el-table-column>
                            <el-table-column prop="" label="总体排名">
                                <template slot-scope="scope">
                                    <span class="ye fz14">{{scope.row.value}}</span>
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
            <div class="ml20 col" >
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

                        <div class="jjbnncrtty" v-if="isxsd">
                            <shengs :data="tableData" v-if="isxsd"></shengs>
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
                                    <p class="ye fz16 cen fdgdfyy">{{zjdff.ztgsa}}</p>
                                </div>
                                <div class="kjhdrertty cen">
                                    <img src="../assets/img/dfdsfdfb.png">
                                    <p class="fz12 cf mt10">进驻部门数量</p>
                                    <p class="ye fz16 cen fdgdfyy">{{zjdff.ztgsb}}</p>
                                </div>

                                <div class="kjhdrertty cen">
                                    <img src="../assets/img/dfdsfdfc.png">
                                    <p class="fz14 cf mt10">行政权力事项</p>
                                    <p class="ye fz16 cen fdgdfyy">{{zjdff.ztgsc}}</p>
                                </div>

                                <div class="kjhdrertty cen">
                                    <img src="../assets/img/dfdsfdfc.png">
                                    <p class="fz14 cf mt10">依申请事项</p>
                                    <p class="ye fz16 cen fdgdfyy">{{zjdff.ztgsd}}</p>
                                </div>


                                <div class="kjhdrertty cen">
                                    <img src="../assets/img/dfdsfdfd.png">
                                    <p class="fz14 cf mt10">办理时限压缩</p>
                                    <p class="ye fz16 cen fdgdfyy">{{zjdff.ztgse}}</p>
                                </div>

                                <div class="kjhdrertty cen">
                                    <img src="../assets/img/dfdsfdfe.png">
                                    <p class="fz14 cf mt10">证照信息</p>
                                    <p class="ye fz16 cen fdgdfyy">{{zjdff.ztgsf}}</p>
                                </div>

                            </div>
                            <div class="pd">
                                <p class="cf jjhhdf fz14">企业实名用户<span class="ls">{{zjdff.ztgsg}}</span> 
                                    <span class="ml20">
                                    个人实名用户 <span class="ls">{{zjdff.ztgsh}}</span>
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
                        <sjfx :id="isddf" ref="sdrrtty"></sjfx>
                    </div>

                </div>
            </div>
        </div>

<paimingpup v-if="isskjjd" @close="isskjjd=false"></paimingpup>
    </div>
</template>
<script>
    import shengs from "@/components/index/shengs"
    import zbfx from "@/components/index/zbfx"
    import sjfx from "@/components/index/sjfx"
     import paimingpup from "@/components/index/paimingpup"
   
    export default {
        data() {
            return {
                
                isxsd:false,
                isskjjd:false,
                tableData: [],
                isddf:0,
                zjdff:"",
                kjhhsd:[{
                    name:'服务能力',
                    cls:'',
                    icon:'iconkujialeqiyezhan_fuwunengli',
                    size:'fz16'
                }],
                shujusd:[{
                    id:1,
                    name:'总体排行',
                    cls:'',
                    icon:'iconmn_paiming_fill',
                    size:'fz16'
                },{
                     id:2,
                    cls:'act',
                    name:'权力事项',
                    icon:'iconyichulishixiang',
                    size:'fz12'
                },{
                     id:3,
                    cls:'act',
                    name:'依申请事项',
                    icon:'iconkaohejilu',
                    size:'fz12'
                },{
                     id:4,
                    cls:'act',
                    name:'公共服务事项',
                    icon:'iconfuwu',
                    size:'fz12'
                },{
                     id:5,
                    cls:'act',
                    name:'进驻部门',
                    icon:'iconjiagouguanli',
                    size:'fz12'
                },{
                     id:6,
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
            sjfx,
            paimingpup
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
                this.$refs.sdrrtty.jjhsdd(sd.id)
                sd.cls=''
            },
           async getpaiming(){
                let res  = await this.get('getsxdata',{})
                this.tableData = res.data
               this.isxsd = true
            },
            async getztgs(){
                let res =  await this.get('getztgs')
                this.zjdff = res.data
            }
            
        },
        mounted() {
            this.getpaiming()
            this.getztgs()
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
        padding: 5px 10px;
        margin-top: 20px;
    }
</style>
