<template>
    <div>

        <div class="paimingnjhnjd nbl pr ba">
            <div class="pd kjhnmcrert row ">
                <div class="col">
                    <span class="jhnxder yj"></span>
                    <span class="ls fz16">{{title}}排名</span>
                </div>
            </div>
            <div class="jjhbnnxert mt10">
                <el-row class="dfsgdyryued ba" :gutter="5">
                    <el-col :span="12">
                        <el-table :data="tableData" highlight-current-row>
                            <el-table-column prop="" label="排名" width="55">
                                <template slot-scope="scope">
                                    <span class="fz14">
                                        {{scope.$index+1}}

                                        <img src="@/assets/img/dsfdsa.png" class=" fgfdtyer" v-if="scope.row.type==1">
                                        <span class="cf fz16" v-if="scope.row.type==2">-</span>
                                        <img src="@/assets/img/dsfdsb.png" class=" fgfdtyer" v-if="scope.row.type==3">
                                    </span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="name" label="市级政府" width="70">
                            </el-table-column>
                            <el-table-column prop="" label="指数" width="50">
                                <template slot-scope="scope">
                                    <span class="ye fz14">{{scope.row.value}}</span>
                                </template>
                            </el-table-column>
                        </el-table>

                    </el-col>
                    <el-col :span="12">
                        <el-table :data="tableDatb" highlight-current-row>
                            <el-table-column prop="" label="排名" width="55">
                                <template slot-scope="scope">
                                    <span class="fz14">
                                        {{scope.$index+1}}

                                        <img src="@/assets/img/dsfdsa.png" class=" fgfdtyer" v-if="scope.row.type==1">
                                        <span class="cf fz16" v-if="scope.row.type==2">-</span>
                                        <img src="@/assets/img/dsfdsb.png" class=" fgfdtyer" v-if="scope.row.type==3">
                                    </span>
                                </template>
                            </el-table-column>
                            <el-table-column label="市级部门" width="70">
                                <template slot-scope="scope">
                                    <div class="dian">{{scope.row.name}}</div>
                                </template>
                            </el-table-column>
                            <el-table-column prop="" label="指数" width="50">
                                <template slot-scope="scope">
                                    <span class="ye fz14">{{scope.row.value}}</span>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-col>
                </el-row>

                <ul class="mt10 dfgdfyuxe cen mt30">
                    <li class="fz14 cf nbl br yj4 mt15" v-for="sd in caidan">
                        <span class="yj jhddfrtt cz"></span>
                        {{sd.name}}
                    </li>
                </ul>

            </div>


        </div>


    </div>
</template>
<script>
    export default {
        props: ['tableData', 'tableDatb','title'],
        data() {
            return {
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

        },
        methods: {

        },
        mounted() {

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

</style>
