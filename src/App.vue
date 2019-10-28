<template>
    <div id="app">

        <div class="dsfdf_eerr">

        </div>
        <div class="dsf_derrt row">
            <div class="ssdd_jder">
                
                <ul class="sdd_dertxs">
                    <li v-for="(sd,idx) in mejshd" :class="sd.cls" class="pr" @click="ssdff(sd,idx)">
                        <div class="ssd_deert">
                            <i class="el-icon-s-grid cf fz24 cz"></i>
                            <span class="cf fz16 cz ml10">{{sd.name}}</span>
                            <i class="el-icon-arrow-right cf  dsf_deer cz" v-if="sd.xiaji.length>0"></i>
                        </div>
                        <div class="ssdd_der" v-if="sd.xiaji.length>0&&sd.cls">
                            <p v-for="(sd,idx) in sd.xiaji" @click="ssdsfs(sd,idx)" :class="sd.cls">{{sd.name}}</p>
                        </div>
                    </li>
                </ul>
                <span class="dsfdsf_se"></span>
                <span class="dsfdsf_se ab"></span>
                <span class="dsfdsf_se ac"></span>
            </div>
            <div class="col pl10">
                <router-view v-wechat-title="$route.meta.title" />
            </div>


        </div>



    </div>
</template>

<script>
    export default {
        data() {
            return {
                mejshd: [{
                    cls: "act",
                    url: "",
                    xiaji: [],
                    name: "告警看板"
                }, {
                    cls: "",
                    url: "/",
                    xiaji: [{
                            name: "自动喷淋系统",
                            url: "zidongpeng",
                            cls: ""
                        },
                        {
                            name: "室内消防栓系统",
                            cls: ""
                        }
                    ],
                    name: "消防灭火系统"
                }, {
                    cls: "",
                    url: "",
                    xiaji: [],
                    name: "火灾报警预警系统"
                }, {
                    cls: "",
                    url: "",
                    xiaji: [],
                    name: "防火分区及疏散系统"
                }, {
                    cls: "",
                    url: "",
                    xiaji: [],
                    name: "消防台账管理系统"
                }]
            }
        },
        components: {

        },
        methods: {
            ssdff(sd, idx) {
                if (sd.xiaji.length <= 0) {
                    this.hf(sd.url)
                }
                this.mejshd.map(a => {
                    a.cls = ""
                })
                sd.cls = "act"

            },
            ssdsfs(sd, idx) {
                this.mejshd.map(a => {
                    a.xiaji.map(b => {
                        b.cls = ""
                    })
                })
                sd.cls = "act"
                this.hf(sd.url)
            }
        },
        mounted() {

        },
    }

</script>


<style scope>
    .dsfdf_eerr {
        height: 85px;
        background: url("./assets/img/header.png") center center;
    }

    .dsf_derrt {
        padding: 10px;
    }

    .ssdd_jder {
        width: 260px;
        background: #182249;
        border: 1px solid #3D79E4;
        border-radius: 10px;
      
/*        overflow: hidden;*/
        position: relative;
    }
    
    .sdd_dertxs{
          border-radius: 10px;
        overflow: hidden;
    }
    .sdd_dertxs li .ssd_deert {
        padding-left: 25px;
        padding-right: 25px;
        line-height: 70px;
        cursor: pointer;
    }

    .sdd_dertxs li.act,
    .sdd_dertxs li:hover {
        background-image: linear-gradient(270deg, #4A8AFF 0%, #475DFF 100%);
    }

    .dsf_deer {
        position: absolute;
        right: 10px;
        top: 25px;
    }

    .ssdd_der {
        padding-top: 10px;
        padding-bottom: 10px;
        background: #050D2D;
        padding-left: 60px;
        line-height: 50px;
        color: #CACBCF;
        font-size: 15px;
    }

    .ssdd_der p {
        cursor: pointer
    }

    .ssdd_der p:hover,
    .ssdd_der p.act {
        color: #4A8AFF;
    }

</style>
