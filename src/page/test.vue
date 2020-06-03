<template>
    <div>
        <el-alert title="为方便浏览设置此页面为主页" type="error">
        </el-alert>
        
   <el-menu class="mt20">
      <el-menu-item v-for="sd in routes" @click="hf(sd.name)" v-if="sd.meta.title">
        <i class="el-icon-setting"></i>
        <span slot="title">{{sd.meta.title}}</span>
      </el-menu-item>
    </el-menu>
    </div>
</template>
<script>
    import router from "@/router"
    export default {
        data() {
            return {
routes:[]
            }
        },
        components: {

        },
        methods: {

        },
        mounted() {
            this.routes = router.options.routes
        },
    }

</script>
<style scoped>


</style>
