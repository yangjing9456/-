<template>
<div class="root">
   <header>
    <span @click="getBlock()">商品</span>
    <span @click="getHidden()">评价</span>
   </header>
    <main>
        <aside>
           <p>dssdds</p>
           <p>sdsdds</p>
           <p>dsdsds</p>
           <p>sdsd</p>
           <p>dsdsds</p>
           <p>dssdds</p>
           <p>sdsdds</p>
           <p>dsdsds</p>
           <p>sdsd</p>
           <p>dsdsds</p>
        </aside>
    </main>
    <!--商品要隐藏的部分-->
    <section id="sP">
        <span class="rexiao">热销</span>
        <span class="like">大家喜欢</span>
        <div class="listt">
            <div class="kuai">
                 <img src="" alt="">
            </div>
           <div>
                <div class="menu">香辣鸡块</div>
                <span class="sell">月售xxx</span>
                <span class="sell">好评xxx</span>
               <br>
               <br>
                <div class="kuai2">
                    <span class="money">¥2</span>
                    <img id="add" src="../assets/添加.svg" alt="">
                </div>
           </div>
        </div>
    </section>
    <!--商品要隐藏的部分-->
    <!--+++++++++++++++++++++++++++萌萌哒的分割线+++++++++++++++++++++++++++++-->
    <!--评价隐藏部分-->
     <section id="pJ" class="xx">
        <div class="pJ_zh">
         <div class="zonghe">
            <div>4.8评分</div>
            <div>综合评价</div>
            <div>高于周边商家</div>
         </div>

         <div class="pT_fw">
             <div>
                 服务态度：<span>星星</span> <span>4.8</span>
             </div>
             <div>
                 菜品评价：<span>星星</span> <span>4.8</span>
             </div>
             <div>
                 送达时间：<span>4.8</span>
             </div>
         </div>
         <div>

         </div>
        </div>
    </section>
     <!--评价隐藏部分-->
     <div>
     <span class="xiangqing">配送快</span>
     <span class="xiangqing">服务好</span>
     </div>

     
    <footer>
        <div class="tu">
            <img src="../assets/购物车.svg" alt="">
        </div>
        <div class="peisong">
            <div class="peisong1">¥0</div>
            <div class="peisong2">配送费¥9</div>
        </div>
        <div class="jiesuan">
            去结算
        </div>
    </footer>
    
</div>
</template>

<script>
    export default {
        name: "appMore",
        methods: {
            getHidden(event) {
                // this.$("#sP").toggleClass("none")
                // 点击商品
                this.$("#sP").addClass("none")
                this.$("#pJ").removeClass("none")
            },
            getBlock() {
                // 点击评价
                this.$("#pJ").addClass("none")
                this.$("#sP").removeClass("none")
                this.$("#pJ").removeClass("xx")
            }
        },
    }
</script>

<style scoped>
    main {
        float: left;
        width: 120px;
        height: 250px;
        overflow-y: scroll;
        z-index: 1;
    }
    
    .none {
        display: none;
    }
    
    .xx {
        display: none;
    }
    
    header {
        height: 70px;
        border: 1px solid black;
        box-shadow: 1px 1px 1px black;
        display: flex;
        justify-content: space-around;
        line-height: 70px;
    }
    
    header span {
        font-size: 1.2rem;
    }
    
    #sP {
        height: 200px;
        overflow-y: scroll;
    }
    
    .clear {
        clear: both;
    }
    
    .rexiao {
        font-size: 1.5rem;
        color: gray;
        font-weight: 700;
    }
    
    .sell {
        font-size: 1.1rem;
        color: gray;
        font-weight: 300;
    }
    
    .menu {
        font-size: 1.4rem;
        font-weight: 600;
    }
    
    .money {
        color: rgb(255, 124, 0);
        font-size: 1.5rem;
        font-weight: bold;
    }
    
    .kuai img {
        float: left;
        width: 110px;
        height: 110px;
        border: 1px solid red;
    }
    
    .kuai2 span {
        vertical-align: text-bottom
    }
    
    #add {
        float: right;
        height: 25px;
        width: 25px;
    }
    
    footer {
        width: 100%;
        height: 80px;
        background-color: rgb(71, 71, 73);
        position: fixed;
        bottom: 0px;
    }
    
    .tu {
        float: left;
        /*border: 1px solid red;*/
        height: 90px;
        width: 90px;
        margin-left: 10px;
        margin-right: 10px;
        z-index: 1000;
        background-color: gray;
        /*box-shadow: -10px -10px 1px black;*/
        /*position: fixed;*/
        bottom: 15px;
        border-radius: 50%;
        position: relative;
        top: -30px;
    }
    
    .tu img {
        height: 70px;
        width: 70px;
        position: relative;
        left: 10px;
        bottom: -10px;
    }
    
    .peisong {
        float: left;
    }
    
    .peisong1 {
        color: white;
        height: 40px;
        font-size: 1.4rem;
    }
    
    .peisong2 {
        color: white;
        height: 40px;
        font-size: 1rem;
    }
    
    .jiesuan {
        width: 110px;
        height: 80px;
        line-height: 80px;
        background-color: gray;
        float: right;
        font-size: 1.5rem;
        color: white;
        text-align: center;
    }
    
    .pJ_zh {
        width: 100%;
        height: 150px;
        background-color: white;
        /*border-bottom: 1px solid black;*/
        z-index: 0;
    }
    
    .zonghe {
        width: 150px;
        height: 150px;
        float: left;
        /*border: 1px solid red;*/
        padding-left: 15px;
        padding-right: 35px;
        text-align: center;
    }
    
    .zonghe div:nth-of-type(1) {
        color: rgb(255, 102, 0);
        font-size: 2rem;
        font-weight: bold;
        padding-top: 25px;
    }
    
    .zonghe div:nth-of-type(2) {
        font-size: 1.1rem;
        padding-top: 5px;
        padding-bottom: 5px;
    }
    
    .zonghe div:nth-of-type(3) {
        font-size: 0.9rem;
        color: gray;
    }
    
    .pT_fw {
        line-height: 45px;
        font-size: 1.2rem;
        /*border: 1px solid green;*/
    }
    
    .pT_fw div {
        color: gray;
    }
    
    .pT_fw div span {
        color: rgb(255, 102, 0);
    }
    .xiangqing{
        display: inline-block;
        height: 50px;
        font-size: 1.4rem;
        line-height: 50px;
        border-radius: 5px;
        padding:5px;
        color:gray;
        background-color: rgb(235,245,255);
    }
    
</style>