
<template>
<div >

    <section class="user_top_ed pd pt10 pm10 pr">
    
        <i class="f_i shezhi_de"></i>
        <img src="../assets/img/banner.jpg" class="yj user_sdd_er fl">
        <section class="ov sdf_jjh_der">
                <p class="cf fz18 mt15"><span>胡一天</span></p>
            <p class="cf fz14 mt5">
           <span> <i class="f_i huangguahgd"></i>
                <span  class="ml10">VIP会员</span></span>
            </p>
        </section>
        
        <p class="qc"></p>
    <p class="fz12 sdf_sdSd cf">
        查看并完善个人信息 >
    </p>
        
    </section>
    
    <van-cell-group>
        <van-cell title="我的课程" is-link to="my_courses">
            <p slot="icon" class="sd_jjh_Dert">
            <i class="f_i dsf_sdfxz" ></i>
        </p>
    </van-cell>
         <van-cell title="我的会员卡" is-link to="my_membership_card">
            <p slot="icon" class="sd_jjh_Dert">
            <i class="f_i dsf_sdfxz ab" ></i>
        </p>
    </van-cell>
         <van-cell title="我的储值卡" is-link to="wuczk">
            <p slot="icon" class="sd_jjh_Dert">
            <i class="f_i dsf_sdfxz ac" ></i>
        </p>
    </van-cell>
         <van-cell title="我的评价" is-link to="course_evaluation">
            <p slot="icon" class="sd_jjh_Dert">
            <i class="f_i dsf_sdfxz ad" ></i>
        </p>
    </van-cell>
         <van-cell title="储值卡账单明细" is-link>
            <p slot="icon" class="sd_jjh_Dert">
            <i class="f_i dsf_sdfxz ae" ></i>
        </p>
    </van-cell>
         
    </van-cell-group>
    
    
    <dibu idx="2"></dibu>
</div>
</template>
<script>
    import dibu from "../components/dibu"
    export default {
        data() {
            return {

            }
        },
        components: {
            dibu
        },
        methods: {

        },
        mounted() {

        },
    }

</script>
<style scoped>
    .user_top_ed{
        height: 150px;
        background: #1E9FEE;
        padding-top: 35px !important;
    }
    .user_sdd_er{
        width: 79px;
        height: 79px;
        overflow: hidden;
        border: 2px solid #fff;
    }
    .huangguahgd{
        width: 30px;
        height: 30px;
        transform: scale(0.9);
        background-position: -176px -205px;
        margin-left: -2px;
    }
    .sdf_jjh_der{
        padding-left: 15px
    }
    .shezhi_de{
        width: 23px;
        height: 25px;
        background-position: -129px -211px;
        position: absolute;
        right: 15px;
        top: 20px;
        transform: scale(0.9);
       
    }
    .sdf_sdSd{
        line-height: 31px;
        text-align: center;
        background: #1D92DB;
        border: 1px solid #64BDF3;
        border-top-left-radius: 20px;
         border-bottom-left-radius: 20px;
        position: absolute;
        right: 0px;
        bottom: 20px;
        padding-left: 20px;
        padding-right: 10px;
    }
    .dsf_sdfxz{
        width: 21px;
        height: 25px;
        background-position: -237px -212px;
    }
    .sd_jjh_Dert{
        width: 30px;
    }
    .dsf_sdfxz.ab{
        width: 23px;
        height: 21px;
        background-position: -274px -216px;
    }
        .dsf_sdfxz.ac{
        width: 23px;
        height: 19px;
            background-position: -313px -217px;
    }
        .dsf_sdfxz.ad{
        width: 22px;
            height: 23px;
            background-position: -14px -274px;
    }
        .dsf_sdfxz.ae{
        width: 23px;
            height: 24px;
            background-position: -61px -272px;
    }
</style>
