<template>
    <div>

        <div class="asdd_dert">
            <div class="dsfd_der">
                <p class="cf fz16">
                    自动喷淋系统告警
                </p>
                <div class="cen dsf_deeret">
                    <img src="../assets/img/nomsg.png" class="cz">
                </div>
            </div>
           <div class="dsfd_der">
                <p class="cf fz16">
                    消防栓系统告警
                </p>
                <div class="cen dsf_deeret">
                    <img src="../assets/img/nomsg.png" class="cz">
                </div>
            </div>
            
            
            <div class="dsfd_der">
                <p class="cf fz16">
                    火灾自动报警系统
                </p>
                <div class="cen dsf_deeret">
                    <img src="../assets/img/nomsg.png" class="cz">
                </div>
            </div>
            
            
            <div class="dsfd_der">
                <p class="cf fz16">
                    可燃气体探测系统
                </p>
                <div class="cen dsf_deeret">
                    <img src="../assets/img/nomsg.png" class="cz">
                </div>
            </div>
        </div>
        
         <div class="dsfd_der mt10">
                <p class="cf fz16">
                    防火分区及疏散系统
                </p>
                <div class="cen dsf_deeret">
                    <img src="../assets/img/nomsg.png" class="cz">
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
    .asdd_dert {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 10px;
    }

    .dsfd_der {
        background: #182249;
        border: 1px solid #3D79E4;
        border-radius: 10px;
        border-radius: 10px;
        height: 270px;
        padding: 10px;
    }
    .dsf_deeret{
        line-height: 250px;
    }

</style>
