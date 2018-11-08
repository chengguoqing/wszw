<template>
<div >
发光飞碟个
dsfdsfd
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
            this.test_der

            this.post("msg_e", {
                name: "程国庆",
                age: 26
            }, function(data) {
                console.log(data);
            })
        },
    }

</script>
<style scoped>


</style>
