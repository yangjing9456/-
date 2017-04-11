<template>
    <div class="root">
           <header>
               <h1 @click="back()"><</h1>
               <h1>发现</h1>
           </header>
         
         <!--<section>-->
           <section class="section1">
            <div class="kuai" v-for="item in header" :name="item" key="itemheader">
                <div class="zi">
                    <div>
                        {{item.title}}
                    </div>
                      <div>
                        asasas
                    </div>
                </div>
                <div class="tu">
                    <img :src="'https://fuss10.elemecdn.com/' + item.main_pic_hash + '.jpeg'" alt="">
                </div>
            </div>
             
             </section>
             <!--</section>-->


             <img src="../assets/bg.png" alt="" id="bg">
            <div class="main_header">
             <main>
                 <div class="zhong">
                      <img src="../assets/闹钟.svg" alt="">
                 <span>限时好礼</span>
                 </div>
                 <span>小积分换豪礼</span>
             </main>

             <!--循环————————————————————————————————————-->
             <div v-for="list in footer" :name="footer" key="itemfooter">
                 <figure class="fig1">
                 <figcaption class="duihuan">{{list.corner_marker}}</figcaption>
                <img :src="'https://fuss10.elemecdn.com/' + list.image_hash +'.jpeg'" alt="" class="hongbao">
                <figcaption class="biaoti">{{list.title}}</figcaption>
             <span class="jifen">{{list.points_required}}积分</span>
             &nbsp;&nbsp;&nbsp;
             <del class="del">{{list.original_price}}</del>
             </figure>
             </div>    
             <div class="clear"></div>
             <div class="more">查看更多></div>
             </div>

             
    </div>
</template>

<script>
    export default {
        name: "find",
        data() {
            return {
                header: [],
                footer: []
            }
        },
        methods: {
            getHeader() {
                this.$http.get("ele/member/v1/discover?platform=2&block_index=0")
                    .then(function(res) {
                        // console.log(res.body);
                        this.status = "success";
                        this.header = res.body;
                        // console.log(header[0])
                    })
            },
            getfooter() {
                this.$http.get("ele/member/gifts/suggest")
                    .then(function(res) {
                        // console.log(res.body[0]);
                        this.status = "success";
                        this.footer = res.body;
                        // console.log(this.footer);
                    })
            },
            back() {
                history.back()
            }
        },
        created() {
            this.getHeader();
            this.getfooter()
        }
    }
</script>

<style scoped>
    header {
        width: 100%;
        height: 80px;
        background-color: rgb(0, 150, 255);
    }
    
    header h1:nth-of-type(1) {
        padding-left: 5px;
        color: white;
        font-size: 1.8rem;
        float: left;
        margin: 0;
        line-height: 80px;
    }
    
    header h1:nth-of-type(2) {
        padding-left: 5px;
        color: white;
        font-size: 1.8rem;
        text-align: center;
        margin: 0 auto;
        line-height: 80px;
    }
    
    .daohang {
        width: 100%;
        height: 200px;
        background-color: yellowgreen;
    }
    
    .section1 {
        display: flex;
        justify-content: space-around;
    }
    
    .kuai {
        width: 50%;
        height: 120px;
        border: 1px solid red;
        display: inline-block;
        margin: 0px;
    }
    
    .kuai .zi {
        line-height: 50px;
        padding-left: 10px;
        float: left;
    }
    
    .kuai .tu {
        border: 1px solid green;
        width: 60px;
        height: 60px;
        float: right;
        margin-top: 30px;
        margin-right: 10px;
        border-radius: 50%;
    }
    
    #bg {
        width: 100%;
        height: 120px;
    }
    
    .main_header {
        width: 100%;
        height: 500px;
        background-color: white;
        margin-top: 5px;
    }
    
    main {
        width: 200px;
        height: 120px;
        margin-left: 45%;
    }
    
    .zhong img {
        margin: 0 auto;
        width: 40px;
        height: 40px;
    }
    
    .zhong span {
        font-weight: bold;
        font-size: 1.3rem;
    }
    
    main span:nth-last-of-type(2) {
        color: gray;
    }
    
    .fig1 {
        float: left;
    }
    
    .fig1 img {
        width: 150px;
        height: 150px;
        /*border: 1px solid yellowgreen;*/
        /*background-color: red;*/
    }
    
    .duihuan {
        background-color: rgb(65, 61, 60);
        color: white;
        text-align: center;
        width: 80px;
    }
    
    .biaoti {
        font-size: 1.3rem;
    }
    
    .jifen {
        color: rgb(255, 96, 0);
        display: inline-block;
        width: 70px;
        text-overflow: ellipsis;
    }
    
    .del {
        color: gray;
    }
    
    .clear {
        clear: both;
    }
    
    .more {
        width: 120px;
        height: 60px;
        color: gray;
        font-size: 1.2rem;
        margin: 0 auto;
    }
</style>