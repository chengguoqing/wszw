<template>
<div >

    <van-nav-bar
        title="提交订单"
        left-text="返回"
        right-text="首页"
        left-arrow
        :z-index="9999"
        :fixed="true"
        @click-left="$router.back(-1)"
        @click-right="hf('')"
    />
    
         <section class="dx_body dx_sddertrs">
      
            <van-tabs title-active-color="#1E9FEE"  >
                  <van-tab  title="全部">
                   
                      <section class="mt10">
                        <section class="bgff pd pt10 pm10 btm" v-for="sd in 5" @click="hf('course_booking_details')">
    
                    <van-row gutter="">
                        <van-col span="20">
                            <p class="fz15 z3">T18020100000007</p>
                            <p class="fz13 sdf_jjh_Dert">
                游玩日期： 201-05-26<br>
                数       量： 1<br>
                总       价： 520



                            </p>
    
                        </van-col>
                        <van-col span="4">
                        <span class="ls fz14">待使用</span>
                        </van-col>
                    </van-row>
                    </section>
    
                    </section>
                      
                </van-tab>
                <van-tab  title="待付款">
                   <section class="mt10">
                        <section class="bgff pd pt10 pm10 btm" v-for="sd in 5"  @click="hf('course_booking_details')">
    
                    <van-row gutter="">
                        <van-col span="20">
                            <p class="fz15 z3">T18020100000007</p>
                            <p class="fz13 sdf_jjh_Dert">
                游玩日期： 201-05-26<br>
                数       量： 1<br>
                总       价： 520



                            </p>
    
                        </van-col>
                        <van-col span="4">
                        <span class="ls fz14">待付款</span>
                        </van-col>
                    </van-row>
                    </section>
    
                    </section>
                      
                </van-tab>
                <van-tab  title="待使用">
                    <section class="mt10">
                        <section class="bgff pd pt10 pm10 btm" v-for="sd in 5"  @click="hf('course_booking_details')">
    
                    <van-row gutter="">
                        <van-col span="20">
                            <p class="fz15 z3">T18020100000007</p>
                            <p class="fz13 sdf_jjh_Dert">
                游玩日期： 201-05-26<br>
                数       量： 1<br>
                总       价： 520



                            </p>
    
                        </van-col>
                        <van-col span="4">
                        <span class="ls fz14">待使用</span>
                        </van-col>
                    </van-row>
                    </section>
    
                    </section>
                      
                      
                </van-tab>
                
    </van-tabs>
             
             
      
        </section>

    <dibu idx="1"></dibu>
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
    .sdf_jjh_Dert{
        line-height: 1.6;
        margin-top: 10px;
    }

</style>
