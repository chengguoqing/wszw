<template>
<div >
    <van-nav-bar
                 class="lvdh"
        title="我的课程"
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
                  <van-tab  title="已约课程">
                   
                    
                    
                    
                      <section class="use_case bgff mt10" v-for="sd in 10">
            <van-row class="pd fz15 pt10 pm10">
                <van-col span="12">普通冰球1:1</van-col>
                <van-col span="12" class="ls tr">待消费</van-col>
            </van-row>
            <section class="pd btm pr10 pt10 pm10">
                    <p class="ssd_eeer z6 fz12">
授课教练：  张小小<br>
上课时间：  2019-02-17 11:30-12:30<br>
课程价格：  160.00元<br>
入园凭证：  WX181119000001820

                </p>
                
                <p class="cen mt10">
            <img src="../assets/img/erweima.jpg" class="sd_kjj_der">
            </p>
    
            </section>
            
        </section>
        
                    
                    
                    
                </van-tab>
               
                 <van-tab  title="已上课程">
                          <section class="use_case bgff mt10" v-for="sd in 10">
            <van-row class="pd fz15 pt10 pm10">
                <van-col span="12">普通冰球1:1</van-col>
                <van-col span="12" class="ls tr">待消费</van-col>
            </van-row>
            <section class="pd btm pr10 pt10 pm10 pr">
                <van-button type="default" class="sd_ddert">评价</van-button>
                    <p class="ssd_eeer z6 fz12">
授课教练：    张小小<br>
上课时间：    2019-02-17 11:30-12:30<br>
课程价格：    160.00元<br>
入园凭证：    WX181119000001820<br>
检票时间：    2019-02-17 11:20:20



                </p>
                
              
    
            </section>
            
        </section>
        
                     
                     
                </van-tab>
                
                
              
            </van-tabs>
            
            
        </section>
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
<style>

</style>
<style scoped>
    .sd_ddert{
        color: #fe7c18;
        border: 1px solid #fe7c18;
        position: absolute;
        right: 10px;
        top: 20px;
       
        height: 30px;
        line-height: 30px;
    }

</style>
