<template>


    <section class="dibu_dsrr btm box cen">
        <section class="box_a">
                <p class="sd_dfd_Dxe">
                    <i class="f_i sd_sddf_d"></i>
                </p>
            <p class="fz12 mt2">首页</p>
        </section>
           <section class="box_a">
                <p class="sd_dfd_Dxe">
                    <i class="f_i sd_sddf_d ab"></i>
                </p>
            <p class="fz12 mt2">订单</p>
        </section>
           <section class="box_a">
                <p class="sd_dfd_Dxe">
                    <i class="f_i sd_sddf_d ac"></i>
                </p>
            <p class="fz12 mt2">我的</p>
        </section>
    </section>

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
    .dibu_dsrr{
        height: 45px;
        background: #fff;
        position: fixed;
        left: 0px;
        bottom: 0px;
        width: 100%;
    }
    .sd_dfd_Dxe{
        line-height: 24px;
        margin-top: 2px;
    }
    .sd_sddf_d{
        width: 23px;
        height: 22px;
        background-position: -18px -92px;
    }
    .sd_sddf_d.ab{
        width: 20px;
        height: 23px;
        background-position: -70px -91px;
    }
       .sd_sddf_d.ac{
        width: 25px;
        height: 22px;
        background-position: -107px -92px;
    }

</style>
