<!-- 总体排名-->
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
                            <span class="ls fz16">服务能力分布</span>
                        </div>
                    </div>

                    <div class="jjbnncrtty" v-if="isxsd">
                        <shengs :data="tableDatas" v-if="isxsd"></shengs>
                    </div>
                </div>


                <div class="col ml20">
                    <div class="jjddrttyw nbl pr ac ov pk">
                        <div class="pd kjhnmcrert row ab">
                            <div class="col">
                                <span class="jhnxder yj"></span>
                                <span class="ls fz14">市级政府网上政务服务能力年度对比</span>
                            </div>
                        </div>
                        <div class="mjnjdfdtyser">
                            <sjzfwszwfwnl v-if="isxsdc" :dataset="dataset" ty="2"></sjzfwszwfwnl>
                        </div>
                    </div>
                    
                     <div class="jjddrttyw nbl pr ac ov pp mt15">
                        <div class="pd kjhnmcrert row ab">
                            <div class="col">
                                <span class="jhnxder yj"></span>
                                <span class="ls fz14">市级政府网上政务服务能力年度对比</span>
                            </div>
                        </div>
                        <div class="mjnjdfdtyser ab">
                            <sjzfwszwfwnl v-if="isxsdc" :dataset="datasetb" ty="3"></sjzfwszwfwnl>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            <div class=" dfrtyxert nbl pr ac ov">
                <div class="pd kjhnmcrert row ab">
                    <div class="col">
                        <span class="jhnxder yj"></span>
                        <span class="ls fz16">市级政府网上政务服务能力整体排名分析</span>
                    </div>
                </div>

                <div class="kjhdrerty">
                    <sjfx :ytter="true" :datsse="datsse" v-if="isxsdc"></sjfx>
                </div>

            </div>
        </div>
    </div>

    </div>
</template>
<script>
       import left from "@/components/ztfx/left"
    import shengs from "@/components/index/shengs"
    import sjfx from "@/components/index/sjfx"
     import sjzfwszwfwnl from "@/components/ztfx/sjzfwszwfwnl"
    export default {
        data() {
            return {
                tableData: [],
                tableDatb: [],
                tableDatas: [],
                isxsd: false,
                isxsdb: false,
                isxsdc: false
                
            }
        },
        components: {
            shengs,
            sjfx,
            sjzfwszwfwnl,
            left
        },
        methods: {
            async getpaiming() {
                let res = await this.get('getfswbdph', {})
                this.tableData = res.data.sjzf
                this.tableDatb = res.data.sjbm
                this.isxsdb = true
            },
            async getpaiminger() {
                let res = await this.get('getsxdata', {})
                this.tableDatas = res.data
                this.isxsd = true
            },
            async getztszjhdrt() {
                let res = await this.get('getztszjhdrt', {})
                this.datsse = res
                this.dataset = res.data.hjgdffa
                this.datasetb = res.data.hjgdffb
                this.isxsdc = true
            },
        },
        mounted() {
            this.getpaiming()
            this.getpaiminger()
            this.getztszjhdrt()
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
        width: 521px !important;
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
        height: 300px !important
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
        height: 235px;
        padding: 0px 10px
    }
    .mjnjdfdtyser.ab{
        height: 280px
    }

    .dfdstyryuus {
        height: 230px;
        position: relative;
        top: -20px
    }

    .dfrtyxert.nm {
        border-radius: 0
    }
    
    .jjddrttyw.pk{
        height: 276px !important
    }
    .jjddrttyw.pp{
         height: 326px !important
    }

</style>
