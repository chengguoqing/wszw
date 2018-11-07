<template>
<div >
<p class="sdf_jhr_d"></p>
    <section class="pr">
<van-cell-group>
    <van-field
     
        
        label="标题"
        placeholder="请输入标题"
    />
<van-field
    
        clearable
        label="大神"
        icon="arrow"
        v-model="dasheng" 
          readonly   
        placeholder="选择感兴趣的大神"
           @click="show=true"
    /> 
    
   
        </van-cell-group>
    
    
     <van-cell-group class="mt10">
    <van-field
       
        type="textarea"
        label="内容"
        rows="4"
        v-model="neirong" 
        placeholder="输入内容"
    /> 
         
        <section class="pd pt5">
        <van-row gutter="5">
             <van-col span="4" v-for="(sd,idx) in tupian_sd">
             <section class="pr">
     <img :src="sd" class="w100 dsf_deert cz">   
                 <img src="../assets/img/close.png" class="close_dert " @click="guabn_d(idx)">
            </section>
            </van-col>
            <van-col span="4">
    
        <van-uploader :after-read="onRead">
<img src="../assets/img/add_img.png" class="w100 dsf_deert cz">
</van-uploader>
            </van-col>
        </van-row>    
        
            

    <p class="z9 fz12 tr pm5">{{neirong.length}}/10000</p>
        </section>
         
         </van-cell-group> 
        
       
        <van-cell-group class="mt10">
            <van-field
              
                clearable
                label="金额"
                placeholder="输入金额"
            />
        <van-field
               
                clearable
                label="时间"
                icon="arrow"
                   readonly   
                   v-model="time_drr" 
                    @click="show_er=true"
                placeholder="过期时间"
            /> 
            

       <van-cell  >
          
           <section>种类</section>
          <van-row gutter="20" class="mt5">
              <van-col span="12" v-for="sd in sd_df">
                <section class="sd_drer_ert" :class="sd.cls" @click="sddfgf(sd)">{{sd.name}}</section>
            </van-col>
           
          </van-row>
           
    </van-cell>

            
            
            
             <van-field
                clearable
                label="类型"
                icon="arrow"
                v-model="znajh_d"
                        readonly   
                     @click="show_san=true"
                placeholder="选择类型"
            /> 
            
                </van-cell-group>
        
        
        
         <section class="cen mt30">
                <van-button type="danger"  class="dfer_deert">生成</van-button>
            </section>
        
        
    </section>
    
    <van-popup v-model="show" position="bottom" > 
        <van-picker show-toolbar :columns="columns" value-key="name" @cancel="show=false"  @confirm="wancdrttx"/> 
    
    
    </van-popup>
    
    
    
        <van-popup v-model="show_er" position="bottom" > 
    <van-datetime-picker
  v-model="currentDate"
  type="datetime"
  :min-date="minDate"
  :max-date="maxDate"
     @confirm="wancdrttx_er"                    
                         @cancel="show_er=false" 
/>
    
    
    </van-popup>
    
    
    
        <van-popup v-model="show_san" position="bottom" > 
        <van-picker show-toolbar :columns="columns_er" value-key="name" @cancel="show_san=false"  @confirm="wancdrttx_san"/> 
    
    
    </van-popup>
           
</div>
</template>
<script>
    export default {
        data() {
            return {
                show: false,
                show_er: false,
                show_san: false,
                time_drr: "",
                columns: [{
                    name: "大神1"
                }, {
                    name: "大神2"
                }],
                dasheng: "",
                name: "",
                neirong: "",
                tupian_sd: [],
                sd_df: [{
                    name: "足球料",
                    cls: "act"
                }, {
                    name: "篮球料",
                    cls: ""
                }],

                columns_er: [{
                    name: "基础料"
                }, {
                    name: "料码"
                }, {
                    name: "战绩"
                }],
                znajh_d: "",
                minHour: 10,
                maxHour: 20,
                minDate: new Date(),
                maxDate: new Date(2019, 10, 1),
                currentDate: new Date()
            }
        },
        components: {

        },
        methods: {
            onRead(file) {
                this.tupian_sd.push(file.content)
            },
            guabn_d(idx) {
                this.tupian_sd.splice(idx, 1);
            },
            sddfgf(sd) {
                this.sd_df.map(a => {
                    a.cls = ""
                })
                sd.cls = "act"
            },
            wancdrttx(e) {
                this.dasheng = e.name
                this.show = false
            },
            wancdrttx_er(e) {

                this.time_drr = this.time_d(e)
                this.show_er = false

            },
            wancdrttx_san(e) {

                this.znajh_d = e.name
                this.show_san = false

            }
        },
        mounted() {},
    }

</script>
<style scoped>
    .sdf_jhr_d {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: #EEEEEE;
        z-index: 1
    }

    .dsf_deert {
        height: 56px;
    }

    .close_dert {
        width: 16px;
        position: absolute;
        right: -4px;
        top: -4px;
    }

    .sd_drer_ert {
        border-radius: 20px;
        height: 32px;
        line-height: 32px;
        color: #333333;
        border: 1px solid #E8E8E8;
        text-align: center;
        font-size: 14px;
    }

    .sd_drer_ert.act {
        background: #FEE4E4;
        color: #ED4143;
        border: 1px solid #ED4143
    }

    .dfer_deert {
        width: 150px;
    }

</style>
