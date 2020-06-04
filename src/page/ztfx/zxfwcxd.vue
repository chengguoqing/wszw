<!--在线服务成效度-->
<template>
    <div class="row fdgfdyuxert">
        <div class="col">
            <div class="row">
                <div class="nbl br khjhcrrttyx">
                    <div class="pd kjhnmcrert row ab">
                        <div class="col">
                            <span class="jhnxder yj"></span>
                            <span class="ls fz16">市级行政许可事项办理跑动次数情况分析</span>
                        </div>
                    </div>
                    <div class="jjncdrtyerert pr" v-if="isxsd">
                        <shengs :data="sjzwfwpt" v-if="isxsd" :show="true" class="crfttyydser"></shengs>
                        <div class="jjhhddrtyyur" v-if="isxsd">
                            <ul>
                                <li>
                                    <p class="jjhnxddrt aa"></p>
                                    <p class="cf fz12 mt5">办事跑动次数极少</p>
                                </li>
                                <li>
                                    <p class="jjhnxddrt ab"></p>
                                    <p class="cf fz12 mt5">办事跑动次数极少</p>
                                </li>
                                <li>
                                    <p class="jjhnxddrt ac"></p>
                                    <p class="cf fz12 mt5">办事跑动次数极少</p>
                                </li>
                                <li>
                                    <p class="jjhnxddrt ad"></p>
                                    <p class="cf fz12 mt5">办事跑动次数极少</p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div class="ddrrttsewrt ml10">
                    <div class="nbl br">
                        <div class="pd kjhnmcrert row ab">
                            <div class="col">
                                <span class="jhnxder yj"></span>
                                <span class="ls fz16">市级行政许可事项办理跑动次数情况分析</span>
                            </div>
                        </div>
                        <div class="kjdrerttyyu cen pt30">
                            <div class="kjjjdert">
                                <img src="../../assets/img/dfdsfdfb.png" class="jjjsdrtx">
                                <p class="mt10 fz14 ls">个人用户</p>
                            </div>
                            <div class="kjjjdert">
                                <span class="cf fz14 mt10 f_b">注册用户</span>
                                <p class="mt10 fz18 ls">1.66亿</p>
                            </div>
                            <div class="kjjjdert">
                                <span class="cf fz14 mt10 f_b">实名用户</span>
                                <p class="mt10 fz18 ls">1.66亿</p>
                            </div>

                            <div class="kjjjdert">
                                <img src="../../assets/img/dfdsfdfb.png" class="jjjsdrtx">
                                <p class="mt10 fz14 ls">企业用户</p>
                            </div>
                            <div class="kjjjdert">
                                <span class="cf fz14 mt10 f_b">注册用户</span>
                                <p class="mt10 fz18 ye">1.66亿</p>
                            </div>
                            <div class="kjjjdert">
                                <span class="cf fz14 mt10 f_b">实名用户</span>
                                <p class="mt10 fz18 ye">1.66亿</p>
                            </div>

                        </div>
                    </div>
                    <div class="nbl br mt10">
                        <div class="pd kjhnmcrert row ab">
                            <div class="col">
                                <span class="jhnxder yj"></span>
                                <span class="ls fz16">市级政府服务平台搜索功能用户体验分析</span>
                            </div>
                        </div>
                        <div class="kjjsdrrtert pd pm10">
                            <sjzfxgqdfbqk v-if="isxsdb" :dataset="jhggdb" :zohjhbdf="zohjhbdf" :baioti="baioti"></sjzfxgqdfbqk>

                        </div>

                    </div>
                </div>

            </div>

            <el-row :gutter="10" class="mt10">
                <el-col :span="12">
                    <div class="nbl br ">
                        <div class="pd kjhnmcrert row ab">
                            <div class="col">
                                <span class="jhnxder yj"></span>
                                <span class="ls fz16">市级行政许可事项即办件占比分析</span>
                            </div>
                        </div>
                        <div class="kkjmcrrrtty pr">
                            <tukkjsd :hjgdffd="hjgdffd" v-if="isxsdb"></tukkjsd>
                            <p class="ls fz12 kkddrrtyy">即办件占比</p>
                        </div>
                    </div>
                </el-col>
                  <el-col :span="12">
                    <div class="nbl br ">
                        <div class="pd kjhnmcrert row ab">
                            <div class="col">
                                <span class="jhnxder yj"></span>
                                <span class="ls fz16">市级行政许可事项办理期限压缩情况分析</span>
                            </div>
                        </div>
                        <div class="kkjmcrrrtty pr">
                            <tukkjsd :hjgdffd="hjgdffd" v-if="isxsdb"></tukkjsd>
                            <p class="ls fz12 kkddrrtyy">承若时限压缩比例</p>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="ml10  dtyysertty">
            <left :tableData="tableData" :tableDatb="tableDatb" title="服务方式完备度"></left>
        </div>
    </div>
</template>
<script>
    import left from "@/components/ztfx/left"
    import shengs from "@/components/index/shengs"
    import sjzfxgqdfbqk from "@/components/ztfx/sjzfxgqdfbqk"
    import tukkjsd from "@/components/ztfx/tukkjsd"
    export default {
        data() {
            return {
                isxsd: false,
                jindus: "",
                isxsdb: false,
                jhggdb: "",
                tableData: '',
                tableDatb: '',
                hjgdffd: '',
                zohjhbdf: ['>8个', '6-7个', '4-5个', '2-3个', '0-1个'],
                baioti: ['符合要求的地区数量', '占比']
            }
        },
        components: {
            shengs,
            left,
            sjzfxgqdfbqk,
            tukkjsd
        },
        methods: {
            async getsjzwfwpt() {
                let res = await this.get('getsjzwfwpt', {})
                this.sjzwfwpt = res.data.sjzwfwpt
                this.jindus = res.data
                this.isxsd = true
            },
            async getfwsxfgdindex() {
                let res = await this.get('getfwsxfgdindex', {})
                this.jhggdb = res.data.hjgdffc
                this.hjgdffd = res.data.hjgdffd
                this.isxsdb = true
            },
            async getpaiming() {
                let res = await this.get('getfswbdph', {})
                this.iuuderxeert = true
                this.tableData = res.data.sjzf
                this.tableDatb = res.data.sjbm
            },
        },
        mounted() {
            this.getsjzwfwpt()
            this.getfwsxfgdindex()
            this.getpaiming()
        },
    }

</script>
<style scoped>
    .fdgfdyuxert {
        width: 1436px !important;
    }

    .khjhcrrttyx {
        width: 580px;
    }

    .jjncdrtyerert {
        height: 555px
    }

    .jjhhddrtyyur {
        width: 120px;
        height: 260px;
        position: absolute;
        left: 20px;
        bottom: 0px;
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
        margin-bottom: 5px;
    }

    .jjhnxddrt {
        width: 100%;
        height: 20px;
    }

    .jjhnxddrt.aa {
        background: linear-gradient(to right, #FAF414, #18222F);
    }

    .jjhnxddrt.ab {
        background: linear-gradient(to right, #F7A301, #1F202C);
    }

    .jjhnxddrt.ac {
        background: linear-gradient(to right, #A3740C, #24222A);
    }

    .jjhnxddrt.ad {
        background: linear-gradient(to right, #C5503E, #2F1B37);
    }

    .crfttyydser {
        position: relative;
        left: 80px;
    }

    .ddrrttsewrt {
        width: 430px;
    }

    .kjdrerttyyu {
        height: 234px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
    }

    .jjjsdrtx {
        width: 30px;
        height: 30px;
    }

    .kjjsdrrtert {
        height: 275px;
    }

    .dstyuseert {
        width: 390px;
    }

    .kkjmcrrrtty {
        height: 250px
    }
    .kkddrrtyy{
        position: absolute;
        left: 70px;
        bottom: 30px;
    }

</style>
