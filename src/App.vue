<template>
    <div id="app">
        <div class="cen">
            <div class="pr f_b">
                <img src="@/assets/img/top.png" class="">
                <p class="kkjjnnxrt">
                    <span>网上政务服务能力调查评估</span>
                </p>
            </div>
        </div>
        <div class="kijnncerrt mt20 pr ">
            <div class="nbl jhghdeert yj4 ls" @click="dfrty">目录导航</div>
         <div class="meulistdf gd" :class="yidongf?'act':''">
            <div class="fz14  yj4 nbl jhhdfsdtyd" @click="fgdfyudrr">
                首页
            </div>
             
               <div class="fz14  yj4 nbl jhhdfsdtyd mt15" @click="fgdfyudrr">
                各地区情况
            </div>
             
            <div class="fz14  yj4 nbl jhhdfsdtyd mt15" @click="dfgdyys">
                整体分析 
                  <img src="@/assets/img/add.png" class="cz addinconhhddf" v-if="!ishjhhd">
                   <img src="@/assets/img/jain.png" class="cz addinconhhddf" v-else>
             </div>
             <ul class="cen ls fz14 kkjkjdsftyye" v-if="ishjhhd">
                <li  @click="fgdfyudrr">总体排名</li>
                 <li  @click="fgdfyudrr">服务放肆完备度</li>
                 <li  @click="fgdfyudrr">服务事项覆盖度</li>
                 <li @click="fgdfyudrr">办事指南准确度</li>
                 <li @click="fgdfyudrr">在线办理成熟度</li>
                 <li @click="fgdfyudrr">在线服务成效度</li>
            </ul>
             
               <div class="fz14  yj4 nbl jhhdfsdtyd mt15" @click="dfgdyysb">
                数据对比
                   <img src="@/assets/img/add.png" class="cz addinconhhddf" v-if="!ishjhhdb">
                   <img src="@/assets/img/jain.png" class="cz addinconhhddf" v-else>
            </div>
                 
        </div>
            
            <router-view v-wechat-title="$route.meta.title" />
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                ishjhhd:false,
                ishjhhdb:false,
                yidongf:false
            }
        },
        components: {

        },
        methods: {
            dfgdyys(){
                if (this.ishjhhd){
                    this.ishjhhd =false
                } else {
                    this.ishjhhd = true
                }
            },
              dfgdyysb(){
                if (this.ishjhhdb){
                    this.ishjhhdb =false
                } else {
                    this.ishjhhdb = true
                }
            },
            dfrty(e){
                this.yidongf = true
            },
            fgdfyudrr(){
                this.yidongf = false
            }
        },
        mounted() {

        },
    }

</script>


<style scope>
    .kijnncerrt{
        width: 1360px;
        min-width: 1360px;
        margin: auto;
    }
    .jhghdeert{
        border: 1px solid #0573AE;
        width: 104px;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        text-align: center;
        position: absolute;
        left: 0;
        top: -60px;
        cursor: pointer
    }
    .meulistdf{
        width: 175px;
        min-height: 140px;
        position: absolute;
        left: -440px;
        top: -40px;
        z-index: 100;
        background: rgba(6,99,153,0.8);
        padding: 36px 20px;
    }
    .meulistdf.act{
        left: -40px
    }
    .jhhdfsdtyd{
        border: 1px solid #076DA5;
        line-height: 34px;
        text-align: center;
        color: #2BF8F5;
        cursor: pointer
    }
    .addinconhhddf{
        width: 14px;
    }
    .kkjkjdsftyye li{
        padding-top: 5px;
        padding-bottom: 5px;
        border-bottom: 1px solid #116B80;
        position: relative
    }
    .kkjkjdsftyye li:after{
        content:  ' ';
        position: absolute;
        width: 6px;
        height: 6px;
        background:  #076DA5;
        left: 0;
        bottom: -3px;
        border-radius: 50%
    }
    .kkjkjdsftyye li:before{
        content:  ' ';
        position: absolute;
        width: 6px;
        height: 6px;
        background:  #076DA5;
        right: 0;
        bottom: -3px;
        border-radius: 50%
    }
    
    
    
    
    
    
    
    
    
</style>
