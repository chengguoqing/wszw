<template> 
<div class="UE dsfg_deet">
    <!--这个地方的大小是可以自己控制的-->
    <div id="editor" style="width:100%;height:300px;">
    
    </div>
  </div>
</template>

<script>
    export default {
        name: 'ue',
        props: {
            dx_text: "",
            value: {
                type: String,
                default: "",

            }
        },
        data() {
            return {
                editor: null,
            };
        },
        mounted() {
            // 实例化editor编辑器
            this.editor = window.UE.getEditor("editor");
            //设置编辑器默认内容
            this.editor.addListener('ready', () => {

                setTimeout(a => {
                    this.editor.setContent(this.dx_text)
                }, 500);

            })
        },
        methods: {
            //获取编辑器中的内容
            getUEContent() {
                var sd_sdfr = this.editor.getContent()
                sd_sdfr = sd_sdfr.replace(/\<img/gi, '<img style="max-width:100%;height:auto;vertical-align: middle" ')
                return sd_sdfr
            }
        },
        destroyed() {
            // 将editor进行销毁

            this.editor.destroy();
        }

    }

</script>
<style>
    .dsfg_deet {
        line-height: 1.5 !important;
    }

    #editor {}

</style>
