<!--自动喷淋系统-->
<template>
    <div>
        <div class="asdd_dert">
            <div class="dsfdsfd_deert cf">
                <div class="dsf_kj_deert">
                    <div class="dsfdf_jh_dr">
                        <p class="dsfdf_deer cen">
                            <span class="yj dfdsfdsfse"> <i class="f_i ssdf_dert"></i></span>
                        </p>
                        <p class="dsfdsf_der">
                            0
                        </p>
                        <p class="sdfdf_deer">
                            今日报警
                        </p>
                                <span class="dsfdsf_se"></span>
<span class="dsfdsf_se ab"></span>
<span class="dsfdsf_se ac"></span>
<span class="dsfdsf_se ad"></span>
                    </div>
                    <div class="dsfdf_jh_dr">
                        <p class="dsfdf_deer cen">
                            <span class="yj dfdsfdsfse "> <i class="f_i ssdf_dert ab"></i></span>
                        </p>
                        <p class="dsfdsf_der">
                            0
                        </p>
                        <p class="sdfdf_deer">
                            今日故障
                        </p>
                        <span class="dsfdsf_se"></span>
<span class="dsfdsf_se ab"></span>
<span class="dsfdsf_se ac"></span>
<span class="dsfdsf_se ad"></span>
                    </div>
                    <div class="dsfdf_jh_dr">
                        <p class="dsfdf_deer cen">
                            <span class="yj dfdsfdsfse "> <i class="f_i ssdf_dert ac"></i></span>
                        </p>
                        <p class="dsfdsf_der">
                            0
                        </p>
                        <p class="sdfdf_deer">
                            今日反馈
                        </p>
                        <span class="dsfdsf_se"></span>
<span class="dsfdsf_se ab"></span>
<span class="dsfdsf_se ac"></span>
<span class="dsfdsf_se ad"></span>
                    </div>
                    <div class="dsfdf_jh_dr">
                        <p class="dsfdf_deer cen">
                            <span class="yj dfdsfdsfse "> <i class="f_i ssdf_dert ad"></i></span>
                        </p>
                        <p class="dsfdsf_der">
                            0
                        </p>
                        <p class="sdfdf_deer">
                            今日屏蔽
                        </p>
                        <span class="dsfdsf_se"></span>
<span class="dsfdsf_se ab"></span>
<span class="dsfdsf_se ac"></span>
<span class="dsfdsf_se ad"></span>
                    </div>
                    <div class="dsfdf_jh_dr">
                        <p class="dsfdf_deer cen">
                            <span class="yj dfdsfdsfse "> <i class="f_i ssdf_dert ae"></i></span>
                        </p>
                        <p class="dsfdsf_der">
                            0
                        </p>
                        <p class="sdfdf_deer">
                            今日警示
                        </p>
                        <span class="dsfdsf_se"></span>
<span class="dsfdsf_se ab"></span>
<span class="dsfdsf_se ac"></span>
<span class="dsfdsf_se ad"></span>
                    </div>
                </div>
                <div class="asdd_derterrtt mt10 dsfd_der pr dsfdsf_deert">
                    <div class=" ">
                        <p class="cf fz16">
                            告警等级统计
                        </p>
                        <div class="cen dsf_deeret">
                            <img src="../assets/img/nomsg.png" class="cz">
                        </div>
                        
                    </div>
                    <div class=" ">
                        <p class="cf fz16">
                            告警处理情况统计
                        </p>

                        <div class="cen dsf_deeret">
                            <img src="../assets/img/nomsg.png" class="cz">
                        </div>
                        
                    </div>
                    
                    <span class="dsfdsf_se"></span>
<span class="dsfdsf_se ab"></span>
<span class="dsfdsf_se ac"></span>
<span class="dsfdsf_se ad"></span>
                </div>
            </div>
            <div class="dsfdsfd_deert cf dsfd_der ab pr">
                <p class="cf fz16">
                    设备报警次数排名
                </p>
                <el-row class="ssdfd mt10 pl10">
                    <el-col :span="8">排名</el-col>
                    <el-col :span="6">次数</el-col>
                    <el-col :span="10">设备编号</el-col>
                </el-row>
                <div class="cen dsf_deeret ab">
                    <img src="../assets/img/nomsg.png" class="cz">
                </div>
                
                 <span class="dsfdsf_se"></span>
<span class="dsfdsf_se ab"></span>
<span class="dsfdsf_se ac"></span>
<span class="dsfdsf_se ad"></span>
            </div>

            <div>
                <div class="dsfdsfd_deert cf dsfd_der ac">
                    <p class="cf fz16">
                        故障与故障趋势分析
                    </p>
                    <div class="cen dsf_deeret ac">
                        <img src="../assets/img/nomsg.png" class="cz">
                    </div>
                </div>
                <div class="dsfdsfd_deert cf dsfd_der ac mt10">
                    <p class="cf fz16">
                        报警故障统计
                    </p>
                    <div class="cen dsf_deeret ac">
                        <img src="../assets/img/nomsg.png" class="cz">
                    </div>
                </div>
            </div>
        </div>

        <div class="mt10 dsfdf_jjdr">
            <el-row class="pd pt10 pm10 dsfdf_eerrdeer">
                <el-col :span="12">自动喷淋系统</el-col>
                <el-col :span="12" class='tr'>
                    <el-button type="primary" size="mini">编辑</el-button>
                </el-col>
            </el-row>
            <div class="cen df_deertde">
                <img src="../assets/img/tup.png" class="cz">
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {

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
    .asdd_dert {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 10px;
    }

    .asdd_derterrtt {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 10px;
    }

    .dsf_kj_deert {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 10px;
    }

    .dsfdf_jh_dr {
        height: 130px;
        background: #182249;
        border: 1px solid #3D79E4;
        border-radius: 10px;
        border-radius: 10px;
        padding-top: 6px;
        position: relative;
    }

    .dsfdf_deer {
        height: 44px;
        line-height: 44px;
    }

    .ssdf_dert {
        width: 19px;
        height: 19px;
        background-position: -26px -55px;

    }

    .dfdsfdsfse {
        background-color: #1E2F60;
        border-radius: 50%;
        width: 30px;
        text-align: center;
        line-height: 30px;
        height: 30px;
        display: inline-block;
    }

    .dsfdsf_der {
        font-size: 36px;
        color: #5E82B5;
        text-align: center;
    }

    .sdfdf_deer {
        font-size: 18px;
        color: #FFFFFF;
        letter-spacing: 0.74px;
        text-align: center;
    }

    .ssdf_dert.ab {
        background-position: -70px -55px;
    }

    .ssdf_dert.ac {
        background-position: -115px -55px;
    }

    .ssdf_dert.ad {
        background-position: -160px -55px;
    }

    .ssdf_dert.ae {
        background-position: -206px -56px;
    }





    .dsfd_der {
        background: #182249;
        border: 1px solid #3D79E4;
        border-radius: 10px;
        border-radius: 10px;
        height: 230px;
        padding: 10px;
    }

    .dsf_deeret {
        line-height: 210px;
        overflow: hidden
    }

    .ssdfd {
        font-size: 14px;
        color: #6186B9;
        letter-spacing: 0.1px;
    }

    .dsfd_der.ab {
        height: 370px;
    }

    .dsf_deeret.ab {
        line-height: 320px;
    }

    .dsfdsfd_deert.ac {
        height: 180px;
    }

    .dsf_deeret.ac {
        line-height: 140px;
    }

    .dsfdf_jjdr {
        background: #182249;
        border: 1px solid #3D79E4;
        border-radius: 10px;
        border-radius: 10px;
        height: 450px;
        overflow: hidden
    }

    .dsfdf_eerrdeer {
        background: #1E3160;
        color: #fff;
    }
    .df_deertde{
        line-height: 440px;
    }

</style>
