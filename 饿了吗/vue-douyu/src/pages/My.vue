<template>
    <div class="root">
            <header>        
                 <div class="title2">
                 我的
                </div>
             
             <div class="logo">
                 <span><img src="../assets/头像.svg" alt="" class="touxiang"></span>
                 <div>
                     <p class="zi">登录/注册</p>
                     <p class="denglu zi">
                         <img src="../assets/手机.svg" alt="" class="shouji">
                         登录后享受等多内容</p>
                 </div>
                  <div class="clear"></div>
             </div>
            </header>

           <main>
               <div class="title">
            <span class=""> 
                <img src="../assets/余额.svg" alt="" class="yue">
            </span>
            <p>余额</p>
            </div>
             <div class="title youhui">
                <span class="">
                    <img src="../assets/优惠.svg" alt="" class="yue">
                </span>
            <p>优惠</p>
        </div>
                <div class="title">
                    <span class="">
                        <img src="../assets/积分.svg" alt="" class="yue">
                    </span>
                <p>积分</p>
            </div>
           </main>

           <footer>
               <div>
                   <img src="../assets/订单.svg" alt="" class="foot">
                   <span class="dingdan">我的订单</span>
                   <span>></span>
               </div>
               <div>
                   <img src="../assets/积分.svg" alt="" class="foot">
                   <span class="dingdan">积分商城</span>
                   <span>></span>
               </div>
               <div>
                   <img src="../assets/皇冠.svg" alt="" class="foot">
                   <span class="dingdan">饿了么会员卡</span>
                   <span>></span>
               </div>
               <br>
               <div>
                   <img src="../assets/花.svg" alt="" class="foot">
                   <span class="dingdan">服务中心</span>
                   <span>></span>
               </div>
               <div>
                   <img src="../assets/饿了么.svg" alt="" class="foot">
                   <span class="dingdan">下载饿了么App</span>
                   <span>></span>
               </div>
               <div>
                   <img src="../assets/饿了么.svg" alt="" class="foot">
                   <span class="dingdan">下载饿了么App</span>
                   <span>></span>
               </div>
           </footer>
    </div>
</template>


<script>
    // import MyHeader from "../components/MyHeader"
    export default {
        name: "my"
    }
</script>

<style scoped>
    body {
        background-color: rgb(244, 244, 244)
    }
    *{
        box-sizing: border-box;
    }
    header {
        width: 100%;
        height: 220px;
        background-color: rgb(0, 150, 255);
    }
    
    .title {
        float: left;
        color: gray;
        margin: 0px;
        font-size: 1.3rem;
        padding-top: 10px;
    }
    
    .title2 {
        margin: 0 auto;
        text-align: center;
        color: white;
        font-size: 1.7rem;
        padding-top: 10px;
    }
    
    .zi {
        color: white;
    }
    
    .logo>span:nth-of-type(1) {
        float: left;
        /*border: 1px solid red;*/
        background-color: white;
        border-radius: 50%;
        height: 95px;
        width: 95px;
    }
    
    .shouji {
        width: 30px;
        height: 30px;
    }
    
    .touxiang {
        width: 90px;
        height: 90px;
    }
    
    .logo>div {
        /*color: white;*/
        font-size: 1.8rem;
    }
    
    .logo>span:nth-of-type(2) {
        float: right;
    }
    
    .clear {
        clear: both;
    }
    
    .denglu {
        font-size: 1.3rem;
    }
    
    main {
        height: 120px;
        background-color: white;
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid gray;
    }
    
    .youhui {
        border-left: 1px solid grey;
        border-right: 1px solid grey;
    }
    
    main>div {
        width: 33.3%;
        /*background-color: white;*/
        text-align: center;
        z-index: 1000;
    }
    
    .yue {
        width: 40px;
        height: 40px;
    }
    
    .foot {
        width: 30px;
        height: 30px;
        /*border: 1px solid red;*/
        margin-top: 10px;
        margin-left: 10px;
    }
    
    footer div {
        width: 100%;
        height: 70px;
        border: 1px solid lightgray;
        line-height: 50px;
    }
    
    .dingdan {
        font-size: 1.3rem;
    }
    
    footer div span:nth-of-type(2) {
        float: right;
    }
</style>