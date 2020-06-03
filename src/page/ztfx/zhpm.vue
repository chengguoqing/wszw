<!--综合排名-->
<template>
    <div class="dfgdfryue">
        <div class="yj4 br nbl jhjhfrftty row pl20 pr20">
            <span class="fz18 cf">年度选择</span>
            <div class="col tr">
                <span v-for="sd in dsfdsgty" class="cf ml20 fz14">{{sd}}</span>
            </div>
        </div>
        <div class="br mt30 nbl">
            <el-table :data="tableData" style="width: 100%" class=" ">
                <el-table-column  label="总体排名">
                <template slot-scope="scope">
                        {{scope.$index+1}}
                     <img src="@/assets/img/dsfdsa.png" class=" fgfdtyer" v-if="scope.row.type==1">
                                        <span class="cf fz16" v-if="scope.row.type==2">-</span>
                                         <img src="@/assets/img/dsfdsb.png" class=" fgfdtyer" v-if="scope.row.type==3">
                </template>
            </el-table-column>
                <el-table-column prop="jhhsdsda" label="市级政府"></el-table-column>
                <el-table-column prop="jhhsdsdb" label="总分"></el-table-column>
                <el-table-column label="服务方式完备度">
                    <el-table-column prop="jhhsdsdc" label="指数" width="120">
                    </el-table-column>
                    <el-table-column prop="jhhsdsdd" label="排名">
                    </el-table-column>
                </el-table-column>
                <el-table-column label="服务事项覆盖度">
                    <el-table-column prop="jhhsdsde" label="指数">
                    </el-table-column>
                    <el-table-column prop="jhhsdsdf" label="排名">
                    </el-table-column>
                </el-table-column>

                <el-table-column label="办事指南准确度">
                    <el-table-column prop="jhhsdsdg" label="指数">
                    </el-table-column>
                    <el-table-column prop="jhhsdsdh" label="排名">
                    </el-table-column>
                </el-table-column>

                <el-table-column label="在线办理成熟度">
                    <el-table-column prop="jhhsdsdi" label="指数">
                    </el-table-column>
                    <el-table-column prop="jhhsdsdj" label="排名">
                    </el-table-column>
                </el-table-column>


                <el-table-column label="在线服务成效度">
                    <el-table-column prop="jhhsdsdk" label="指数">
                    </el-table-column>
                    <el-table-column prop="jhhsdsdq" label="排名">
                    </el-table-column>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                dsfdsgty: ['服务方式完备度', '服务事项覆盖度', '办事指南准确度', '在线办理成熟度', '在线服务成效度'],
                tableData: []

            }
        },
        components: {

        },
        methods: {
            async getzhpm() {
                let res = await this.get('getzhpm', {})
                this.tableData = res.data
                console.log(this.tableData);
            }
        },
        mounted() {
            this.getzhpm()
        },
    }

</script>
<style scoped>
    .jhjhfrftty {
        line-height: 60px;
        height: 60px;
    }

</style>
