<!--推荐商家列表-->
<template>
    <div class="root">
        <aside>
            点击向上
        </aside>
      <span id="shangjia">推荐商家</span>

        <router-link v-for="item in tuijian" :name="item" id='list' key="itemList" :to="'/details/'+item.id">
        <div>
            <div class="tu">
        <img :src= "'https://fuss10.elemecdn.com/' + item.image_path + '.jpeg'" alt="">
        <img :src= "'https://fuss10.elemecdn.com/' + item.image_path + '.png'" alt="">
            </div>       
            <div>
                <p id="myname">{{item.name}}</p>
                <span>  
                <i>1</i>
                <i>2</i>
                <i>3</i>
                <i>4</i>
                <i>5</i>
                <i id="pingfen" class="det">{{item.rating}}</i>
                </span>
                <span class="det">
                    月售{{item.recent_order_num}}单
                </span>
                <div>
                    <span class="det">¥{{item.float_minimum_order_amount}}起送/</span>
                    <span class="det">配送费¥{{item.float_delivery_fee}}</span>
                    <span class="right right1">{{item.order_lead_time}}分钟</span>
                    <span class="right det">{{item.distance | value}}km/</span>
                </div>
              
            </div>
             <!--<p>xxxxxxxxxxxxxx</p>-->

        </div>
       </router-link>
        
    </div>
</template>
<script>
    import placeholder from "../assets/placeholder.gif";
    import AppDetails from "../components/AppDetails"
    import jQuery from "jquery"
    // Vue.prototype.jQuery = jQuery
    // Vue.prototype.$ = jQuery
    export default {
        name: "myMain",
        data() {
            return {
                tuijian: [],
                isLoadingMore: false
            }
        },
        components: {
            "app-details": AppDetails
        },
        filters: {
            value: function(value) {
                return (value / 1000).toFixed(2);
            }
        },
        methods: {
            getSupport() {
                this.$http.get("ele/shopping/restaurants?latitude=31.96205&longitude=118.85778&offset=120&limit=20&extras[]=activities&terminal=h5")
                    .then(function(res) {
                        console.log(res.body)
                        this.status = "success";
                        this.tuijian = res.body
                    })
            },
            // 向下活动拉取数值
            didScroll() {
                var allHeight = this.$(document).scrollTop() + this.$(window).height();
                var bodyHeight = this.$(document).height();
                var asideheight = this.$(document).scrollTop();
                var aside = document.querySelector("aside");
                var aside_height = document.documentElement.scrollTop;

                if (allHeight >= bodyHeight - 10) {
                    if (!this.isLoadingMore) {
                        this.loadMore();
                        console.log('-----------------------')
                    }
                }
                if (aside_height > 900) {
                    aside.style.backgroundColor = "red"
                } else {
                    aside.style.backgroundColor = "yellow"
                }
                aside.onclick = function() {
                    document.documentElement.scrollTop = document.body.scrollTop = 0;
                    //    this.$(document).scrollTop(0)
                }

            },
            loadMore() {
                this.isLoadingMore = true
                this.$http.get("ele/shopping/restaurants?latitude=31.96205&longitude=118.85778&offset=120&limit=20&extras[]=activities&terminal=h5", {
                    params: {
                        offset: this.tuijian.length / 30
                    }
                }).then(function(res) {
                    if (this.status = "success") {
                        this.tuijian = this.tuijian.concat(res.body)
                        this.isLoadingMore = false
                    }
                }.bind(this), function(err) {
                    this.isLoadingMore = false
                }.bind(this))

            },
            // ***************************************************
        },
        created() {
            this.getSupport();
            window.onscroll = this.didScroll;
        }

    }
</script>

<style scoped>
    .root {
        width: 100%;
    }
    
    #list {
        padding-bottom: 8px;
        border-bottom: 1px solid lightcyan;
    }
    /*h2 {
        display: inline-block;
        float: left;
    }*/
    
    #myname {
        font-size: 1.2rem;
        font-weight: bold;
        /*margin: 0px;*/
    }
    
    #shangjia {
        display: inline-block;
        width: 100%;
        font-size: 1.5rem;
        font-weight: bold;
    }
    
    .det {
        font-size: 0.9rem;
        color: grey;
    }
    
    .tu {
        width: 85px;
        height: 85px;
        padding: 10px;
        /*border: 1px solid red;*/
        border-radius: 5px;
        float: left;
    }
    
    .tu img {
        width: 85px;
        height: 85px;
        border-radius: 5px;
    }
    
    i {
        font-style: normal;
    }
    
    #pingfen {
        color: red;
    }
    
    .right {
        float: right;
    }
    
    .right1 {
        color: rgb(0, 150, 255);
    }
    
    aside {
        width: 80px;
        height: 80px;
        border: 1px solid red;
        position: fixed;
        right: 0px;
        bottom: 80px;
        border-radius: 50%;
        line-height: 80px;
    }
</style>