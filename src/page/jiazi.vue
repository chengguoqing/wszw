<!-- 总体排名-->
<template>
  <div class="row">
            <div class="jhgsdleft">
                <div class="paimingnjhnjd nbl pr">
                    <div class="pd kjhnmcrert row ">
                        <div class="col">
                            <span class="jhnxder yj"></span>
                            <span class="ls fz16">总体排名前十名</span>
                        </div>
                        <div>
                            <span class="ls dsftyxrt" @click="isskjjd=true">更多
                                <img class="cz" src="@/assets/img/gengduo.png"></span>
                        </div>
                    </div>

                    <div class="jjhbnnxert mt10">
                  111
                    </div>


                </div>

                <div class="paimingnjhnjd nbl pr ab">
                    <div class="pd kjhnmcrert row">
                        <div class="col">
                            <span class="jhnxder yj"></span>
                            <span class="ls fz16">指标分析</span>
                        </div>

                    </div>
                    <div class="sdrrttgsweteret">
                       222
                    </div>
                </div>

            </div>
            <div class="ml20 col" >
                <div class="row">
                    <div class="dfdrtyset nbl pr ac">
                        <div class="pd kjhnmcrert row ab">
                            <div class="col">
                                <span class="jhnxder yj"></span>
                                <span class="ls fz16">地区情况</span>
                            </div>
                        </div>

                        <div class="jjbnncrtty">
                          3333
                        </div>
                    </div>


                    <div class="col ml20">
                        <div class="jjddrttyw nbl pr ac ov">
                       444
                        </div>
                    </div>
                </div>
                <div class=" dfrtyxert nbl pr ac ov">
                    <div class="pd kjhnmcrert row ab">
                        <div class="col">
                            <span class="jhnxder yj"></span>
                            <span class="ls fz16">数据分析</span>
                        </div>
 <div>
                                <span class="ls dsftyxrt ml10" :class="sd.cls" v-for="sd in shujusd" >
                                   <i class="iconfont cz" :class="[sd.icon,sd.size]"></i> {{sd.name}}
                                </span>
                            </div>
                    </div>

                    <div class="kjhdrerty">
                       
                    </div>

                </div>
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


</style>
