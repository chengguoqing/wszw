<template>
	<div >
<button @click="dsf_eert">fsdd</button>

	</div>
</template>
<script>
    import VueSocketio from 'vue-socket.io';
    import socketio from 'socket.io-client';

    export default {
        data() {
            return {
                socket:""
            }
        },
        components: {

        },
        methods: {
            dsf_eert(){
                this.socket.emit('addUser', "dfds_eert");
            }
        },
        mounted() {
            this.socket = socketio('http://127.0.0.1:8360')
             this.socket.on('opend', function(data) {
                console.log('opend:', data);
            });
        },
    }

</script>
<style scoped>


</style>
