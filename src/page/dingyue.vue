<!--订阅-->
<template>
	<div class="pl20 pr20 pt20" >
	       <p class="fz12 z9 pm10">
    订阅大神--好处以及订阅规则订阅指定大神，可以实时收
到指定大神的推送
            </p>
        
    <section class="mt20" v-for="sd in sd_dfdd">
                <p class="fz16 z3">{{sd.title}}</p>
        
        <van-row gutter="10">
            <van-col span="6" v-for="sd in sd.data">
                    <section class="pr sdf_deert yj4 mt10 fz14 " :class="sd.cls" @click="df_dff(sd)">
                        {{sd.name}}
                        <img src="../assets/img/gouxuan.png" class="gousdfrtt">
                    </section>
            </van-col>
        </van-row>
        </section>

        
        
               <section class="cen mt30">
                <van-button type="danger"  class="dfer_deert">订阅</van-button>
            </section>
	</div>
</template>
<script>
    export default {
        data() {
            return {
                sd_dfdd:[{
                    title: "足球",
                    data: [{
                        name: "舰长",
                        cls: ""
                    },{
                        name: "舰长",
                        cls: ""
                    },{
                        name: "舰长",
                        cls: ""
                    },{
                        name: "舰长",
                        cls: ""
                    },{
                        name: "舰长",
                        cls: ""
                    },{
                        name: "舰长",
                        cls: ""
                    },{
                        name: "舰长",
                        cls: ""
                    },{
                        name: "舰长",
                        cls: ""
                    }]
                },{
                    title: "蓝球",
                    data: [{
                        name: "舰长",
                        cls: ""
                    },{
                        name: "舰长",
                        cls: ""
                    },{
                        name: "舰长",
                        cls: ""
                    },{
                        name: "舰长",
                        cls: ""
                    },{
                        name: "舰长",
                        cls: ""
                    },{
                        name: "舰长",
                        cls: ""
                    },{
                        name: "舰长",
                        cls: ""
                    },{
                        name: "舰长",
                        cls: ""
                    }]
                }]
            }
        },
        components: {

        },
        methods: {
            df_dff(sd){
                if(sd.cls){
                    sd.cls=""
                }else{
                     sd.cls="act"
                }
            }
        },
        mounted() {

        },
    }

</script>
<style scoped>
    .sdf_deert{
        border: 1px solid #EAEAEA;
        height: 36px;
        line-height: 36px;
        text-align: center;
    }
    .gousdfrtt{
        width: 16px;
        height: 16px;
        position: absolute;
        right: 0px;
        top: 0px;
        display: none
    }
    .sdf_deert.act  .gousdfrtt{
        display: block
    }
    .sdf_deert.act {
        background: #FEE4E4;
        border: 1px solid #FF3366;
        color: #FF3366
    }
    .dfer_deert{
        width: 150px
    }

</style>
