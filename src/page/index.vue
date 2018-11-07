<template>
<div >
    <van-notice-bar :scrollable="false">
  来“球料”聊球看吐槽，球界的段子都在这儿！
</van-notice-bar>
    <section class="pd pt20 pm10 fz17">
    最新战绩
    </section>
    <section class="pd">
      <van-row>
        <van-col span="8">
            <section class="sd_kh_der">
                <p class="cf fz18 ">战绩</p>
                <p class="fz12 cf mt2">2018.11.01</p>
                <p class="mt10">
                    <span class="xianq_ddr">详情</span>
                </p>
            </section>
        </van-col>
        <van-col span="8"> 
            <section class="sd_kh_der ab">
                <p class="cf fz18 ">战绩</p>
                <p class="fz12 cf mt2">2018.11.01</p>
                <p class="mt10">
                    <span class="xianq_ddr">详情</span>
                </p>
            </section>
    </van-col>
        <van-col span="8"> 
            <section class="sd_kh_der ac">
                <p class="cf fz18 ">战绩</p>
                <p class="fz12 cf mt2">2018.11.01</p>
                <p class="mt10">
                    <span class="xianq_ddr">详情</span>
                </p>
            </section>
    </van-col>
    </van-row>
    
    </section>
  
        <section class="pd pt15 pm10 fz17">
    最新球料
    </section>
   
    
    <van-row class="df_jh_der">
        <van-col span="12" v-for="sd in sjh_sd" >
                <section class="sd_jhjder" @click="sddff(sd)">
                    <span :class="sd.cls">{{sd.name}}</span>
                </section>
        </van-col>
     
    </van-row>
    
    
    
    <van-row class="pd pt10 pm10 bbm" v-for="sd in 2">
        <van-col span="17">
                <p class="dian fz18 z3  wr dian">史诗般的战斗机</p>
            <p class="dianer z9 fz12 mt10">料趣事，最多显示两行最多显示两行最多显示两行最多显示两行最多显示两行，每行字符数不超过15字，多出用的字...

        </p>
        </van-col>
        <van-col span="7">
           <p class="dian fz18   red cen dian">4.09元</p>
            <section>
                <section class="sd_jh_deert mt10" @click="hf('jiesuo')">
                    <img src="../assets/img/dsf_a.png" class="cz">
                    <span class="cz ml5">解锁按钮</span>
                </section>
            </section>
        </van-col>
    </van-row>
    
    
    
    <van-row class="pd pt10 pm10 bbm" v-for="sd in 2" >
        <van-col span="17" >
            <section @click="hf('xiangqing')">
                <p class="dian fz18 z3  wr dian">史诗般的战斗机</p>
            <p class="dianer z9 fz12 mt10">料趣事，最多显示两行最多显示两行最多显示两行最多显示两行最多显示两行，每行字符数不超过15字，多出用的字...

        </p>
                </section>
        </van-col>
        <van-col span="7">
               <section @click="hf('xiangqing')">
           <p class="dian fz18   red cen dian">4.09元</p>
            <section>
                <section class="sd_jh_deert mt10">
                    <img src="../assets/img/dsf_b.png" class="cz">
                    <span class="cz ml5">已解锁</span>
                </section>
            </section>
    </section>
        </van-col>
    </van-row>
    
    
    
    
      <van-row class="pd pt10 pm10 bbm" v-for="sd in 10">
        <van-col span="17" class="pr">
            <img src="../assets/img/yiguoqi.png" class="dsf_deert">
                <p class="dian fz18 z3  wr dian">史诗般的战斗机</p>
            <p class="dianer z9 fz12 mt10">料趣事，最多显示两行最多显示两行最多显示两行最多显示两行最多显示两行，每行字符数不超过15字，多出用的字...

        </p>
        </van-col>
        <van-col span="7">
           <p class="dian fz18   red cen dian">4.09元</p>
            <section>
                <section class="sd_jh_deert mt10" @click="hf('jiesuo')">
                    <img src="../assets/img/dsf_a.png" class="cz">
                    <span class="cz ml5">解锁按钮</span>
                </section>
            </section>
        </van-col>
    </van-row>
    
    
    <dibu idxd="1"></dibu>
    
</div>
</template>
<script>
    import dibu from "../components/dibu"
    export default {
        data() {
            return {
                sjh_sd: [{
                        name: "足球料",
                        cls: "act"
                    },
                    {
                        name: "篮球料",
                        cls: ""
                    }
                ]
            }
        },
        components: {
dibu
        },
        methods: {
            sddff(sd) {
                this.sjh_sd.map(a => {
                    a.cls = ""
                })
                sd.cls = "act"
            }
        },
        mounted() {

        },
    }

</script>
<style scoped>
    .sd_kh_der {
        text-align: center;
        background: url(../assets/img/sdf_a.png);
        height: 7.1rem;
        padding-top: 20%;
        min-height: 100px;
        background-size: 100% 100%;
    }

    .sd_kh_der.ab {
        background: url(../assets/img/sdf_b.png);
        background-size: 100% 100%;
    }

    .sd_kh_der.ac {
        background: url(../assets/img/sdf_c.png);
        background-size: 100% 100%;
    }

    .xianq_ddr {
        background: #fff;
        border-radius: 20px;
        font-size: 12px;
        color: #ED4143;
        padding: 2px 10px;
    }

    .df_jh_der {
        background: #FDECEC;
        text-align: center;
        position: sticky;
        top: -1px;
        left: 0;
        z-index: 1000
    }

    .sd_jhjder {
        line-height: 45px;
        font-size: 16px;
    }

    .sd_jhjder span {
        position: relative;
        display: inline-block
    }

    .sd_jhjder span.act {
        color: #ED4143
    }

    .sd_jhjder span.act:after {
        content: ' ';
        position: absolute;
        width: 38px;
        height: 4px;
        border-radius: 8px;
        left: 4px;
        bottom: 0px;
        background: #ED4143
    }
    .sd_jh_deert{
        width: 90px;
        font-size: 13px;
        color: #fff;
        text-align: center;
        margin: auto;
        border-radius: 20px;
        line-height: 27px;
        height: 27px;
        background: #ED4143
    }
    .sd_jh_deert img{
        width: 15px;
        position: relative;
        top: -1px;
    }
    .dsf_deert{
        width: 78px;
        height: 78px;
        position: absolute;
        right: 0px;
        top: 0px;
    }

</style>
