<template>
    <div class="root">
       <div class="bottom">
            <div class="menu">
                    <router-link to="/">
                          <div class="title">
                            <!--span 的class放图标-->
                            <img src="../assets/饿了么.svg" alt="" class="img1">
                            <p>外卖</p>
                         </div>
                    </router-link>

                    <!--<router-link to="/find">
                        <div class="title">-->
                            <router-link to="/find">
                            <div class="title">
                                  <img src="../assets/发现.svg" alt="" class="img1">
                           <p>发现</p>
                           </div>

                    </router-link>
                    <router-link to="/category">
                            <div class="title">
                                 <img src="../assets/订单.svg" alt="" class="img1">
                           <p>订单</p>
                        </div>
                    </router-link>
                    
                    <router-link to="/my">
                            <div class="title">
                                 <img src="../assets/我的.svg" alt="" class="img1">
                            </p>我的</p>
                             </div>
                    </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import bus from '../Bus.js';

    export default {
        name: "appFooter",

    }
</script>

<!--底部-->
<style scoped>
    .root {
        position: fixed;
        bottom: 0px;
        height: 80px;
        width: 100%;
        background-color: white;
        box-shadow: 1px 1px 8px black;
    }
    
    .menu {
        display: flex;
        justify-content: space-around
    }
    
    .title {
        color: gray;
        width: 250%;
        /*border: 1px solid black;*/
    }
    
    .img1 {
        width: 30px;
        height: 30px;
        margin: 0;
        padding: 0;
    }
    
    @media screen and (max-width: 1200px) {
        .root {
            height: 75px;
        }
        .title {
            font-size: 1rem;
        }
    }
    
    @media screen and (max-width: 540px) {
        .root {
            height: 65px;
        }
        .title {
            font-size: 0.8rem;
        }
    }
    
    @media screen and (max-width: 450px) {
        .root {
            height: 55px;
        }
        .title {
            font-size: 0.7rem;
        }
    }
    
    @media screen and (max-width: 300px) {
        .root {
            height: 45px;
        }
        .title {
            font-size: 0.6rem;
        }
    }
</style>