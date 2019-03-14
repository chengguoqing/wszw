<!--课程评价-->
<template>
<div >

    <van-nav-bar
        title="课程评价"
        left-text="返回"
        right-text="首页"
        left-arrow
        :z-index="9999"
        :fixed="true"
        @click-left="$router.back(-1)"
        @click-right="hf('')"
    />
    
        <section class="dx_body">
      <section class="bgff pd pt15 pm30">
          
      <section class="box fz14 cen ">
            <section class="box_a sdf_jj_edrt pr10 pl10" v-for="(sd,idx) in pf_sd" @click="idx_s=idx">
               {{sd.name}}
            <p class="mt5">
                <span v-if="idx==idx_s">
            <i class="van-icon van-icon-star   ye fz18" v-for="sd in sd.num" ></i>
                </span>
                <span  v-else>
           <i class="van-icon van-icon-star-o z9  fz18 " v-for="sd in sd.num"></i>
                </span>



    </p>
            </section>
          
          
                
          
    
        </section>
          
          
        <section class="yj4 sd_jh_Dert pr">
            <i class="f_i bianji_sd"></i>
                <textarea placeholder="亲，教练授课感觉怎么样？服务满意吗？写个评价吧~~" rows="8"></textarea>
        </section>  
          
    </section>
            
        </section>
    
    <section class="mt40 pd">
        <van-button type="danger" class="fz16 w100 fz16 bgye">提交</van-button>
    </section>

</div>
</template>
<script>
    export default {
        data() {
            return {
                idx_s: 0,
                pf_sd: [{
                    name: "差",
                    num: 1
                }, {
                    name: "一般",
                    num: 2
                }, {
                    name: "还不错",
                    num: 3
                }, {
                    name: "很满意",
                    num: 4
                }, {
                    name: "强烈推荐",
                    num: 5
                }]
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
    .sdf_jj_edrt {
        white-space: nowrap;
    }

    .sd_jh_Dert {
        border: 1px solid #E9E9E9;
        min-height: 150px;
        background: #FAFAFA;
        margin-top: 10px;
        padding: 10px;
        padding-left: 45px
    }

    .sd_jh_Dert textarea {
        width: 100%;
        height: 100%;
        border: 0px;
        background: #FAFAFA;
        font-size: 14px;
    }

    .bianji_sd {
        width: 22px;
        height: 23px;
        background-position: -200px -273px;
        position: absolute;
        left: 10px;
        top: 15px;
    }

</style>
