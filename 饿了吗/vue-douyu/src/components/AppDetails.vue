<template>
   <div class="root">
       <header>
           <h1 @click="back()"><</h1>

            <div id="header1">
                <div class="tu">
                    <img src="" alt="">
                </div>
                <div>
                    <div class="msg">
                        {{message.name}}
                    </div>
                    <div class="msg1">
                        <span>商家配送/{{message.order_lead_time}}分钟送达/{{message.piecewise_agent_fee.tips}}</span>
                        <div class="msg2">
                            <span>公告:{{message.promotion_info}}</span>
                            <span>></span>
                        </div>
                    </div>
                </div>
                <div id="header2">
                <span>{{message.name}}{{message.tips}}</span>
                <span>活动</span>
            </div>
            </div>       
            
       </header>
   
   </div>
</template>


<script>
    import bus from "../Bus.js";
    export default {
        name: "AppDetails",
        data() {
            return {
                message: "",
            }
        },
        methods: {
            getMessage() {
                this.$http.get("ele/shopping/restaurant/" + this.$route.params.shoppingid + "?extras[]=activities&extras[]=album&extras[]=license&extras[]=identification&extras[]=statistics&latitude=31.96205&longitude=118.85778")
                    .then(function(res) {
                        console.log(res.body);
                        this.status = "success";
                        this.message = res.body;
                    })
            },
            back() {
                history.back()
            },
        },
        created() {
            this.getMessage();

        }
    }
</script>

<style scoped>
    header {
        width: 100%;
        height: 200px;
        background-color: rgb(166, 45, 65);
    }
    
    .root>header>h1 {
        margin: 25px;
        color: white;
        margin-top: 0px;
    }
    
    #header1 {
        height: 180px;
    }
    
    .tu {
        float: left;
        width: 100px;
        height: 100px;
        border: 1px solid white;
        border-radius: 10px;
        margin: 0px 10px 0px 10px;
    }
    
    .clear {
        clear: both;
    }
    
    .msg {
        font-size: 2rem;
        font-weight: bold;
        color: white;
    }
    
    .msg1 {
        color: white;
        height: 60px;
    }
    
    .msg2 {
        color: white;
    }
    
    .msg2 span:nth-of-type(2) {
        float: right;
    }
    
    #header2 {
        margin-left: 25px;
        color: white;
    }
    
    #header2 span:nth-of-type(2) {
        float: right;
    }
</style>