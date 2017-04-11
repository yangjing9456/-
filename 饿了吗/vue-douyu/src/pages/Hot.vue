<template>
    <div class="root">
   <header>
       <div>
           <span class="title1 title">
                <img src="../assets/地点.svg" alt="" id="place">
               {{message}}
               <img src="../assets/下拉.svg" alt="" id="xiala">
           </span>
            <span class="title2 title">
				<span class="weather weather1">{{weather.temperature}}℃</span>
				<span class="weather">{{weather.description}}</span>	   
               <img :src= "'https://fuss10.elemecdn.com/' + weather.image_hash + '.png'" alt="" id="tian">
           </span>
       </div>
       
       <div class="clearfix"></div>
       <div>
           <input type="text" placeholder="搜索商家，商品">    
               <ul class="ul-list">
                <li v-for="item in list" :word="item.word">
                    {{item.word}}
                </li>
               </ul>
       </div>
   </header>
    <app-table></app-table>
   
     <my-main></my-main>
	 
   </div>
</template>

<script>
    import MyMain from '../components/MyMain';
    import AppTable from "../components/AppTable"

    export default {
        name: "hot",
        data() {
            return {
                message: "",
                weather: "",
                list: [],
                leiBie: []
            }
        },
        components: {
            "my-main": MyMain,
            "app-table": AppTable
        },
        methods: {
            getAddress() {
                this.$http.get("ele/v2/pois/wtstbdt87jb")
                    .then(function(res) {
                        // console.log(res.body.name);
                        this.status = "success";
                        this.message = res.body.name
                    })
            },
            getWeather() {
                this.$http.get("ele/bgs/weather/current?latitude=31.96205&longitude=118.85778")
                    .then(function(res) {
                        // console.log(res.body.temperature)
                        // console.log(res.body)
                        // console.log(res.body.image_hash)
                        this.weather = res.body
                    })
            },
            getList() {
                this.$http.get("ele/shopping/v3/hot_search_words?latitude=31.96205&longitude=118.85778")
                    .then(function(res) {
                        // console.log(res.body[0])
                        this.list = res.body
                    })
            },
            getClass() {
                this.$http.get("ele/v2/index_entry?geohash=wtstbdt87jb&group_type=1&flags[]=F")
                    .then(function(res) {
                        // console.log(res.body[0].title)
                        // console.log(res.body[1].image_url)
                        this.leiBie = res.body
                    })
            },
            getDesc() {
                this.$http.get("ele/shopping/restaurants?latitude=31.96205&longitude=118.85778&keyword=&offset=20&limit=20&extras[]=activities&restaurant_category_ids[]=207")
                    .then(function(res) {
                        // console.log(res.body[0])
                    })
            }
        },
        created() {
            this.getAddress();
            this.getWeather();
            this.getList();
            this.getClass();
            this.getDesc()
        }
    }
</script>

<style scoped>
    .root {
        background-color: rgb(244, 244, 244);
    }
    
    header {
        width: 100%;
        height: 170px;
        line-height: 44px;
        background-color: rgb(0, 150, 255);
        /*margin-bottom: 10px;*/
    }
    
    .title1 {
        float: left;
        color: white;
        font-size: 2rem;
        margin-bottom: 10px;
        width: 650px;
    }
    
    .title2 {
        float: right;
        color: white;
        font-size: 1.5rem;
        margin-bottom: 10px;
    }
    
    .clearfix {
        clear: both;
    }
    
    #place {
        width: 30px;
        height: 30px;
        margin: 5px 5px 0px 5px;
    }
    
    #xiala {
        width: 20px;
        height: 20px;
        /*float: left;*/
    }
    
    input {
        height: 45px;
        width: 95%;
        border-radius: 25px;
        font-size: 1.3rem;
        color: lightgray;
        display: block;
        margin: 0 auto;
        text-align: center;
    }
    
    .weather {
        display: block;
        font-size: 0.9rem;
        height: 10px;
        margin-right: 45px;
    }
    
    .weather1 {
        padding-bottom: 5px;
    }
    
    #tian {
        width: 35px;
        height: 35px;
        float: right;
    }
    
    .ul-list {
        margin-top: -5px;
        width: 700px;
        height: 30px;
    }
    
    .ul-list>li {
        float: left;
        list-style: none;
        color: white;
        padding: 7px;
        font-size: 0.7rem;
    }
    
    @media screen and (max-width: 1200px) {
        .title {
            font-size: 1.2rem;
            margin-bottom: 10px;
        }
        .title1 {
            width: 300px;
            height: 40px;
            overflow: hidden;
        }
        .ul-list {
            width: 500px;
        }
    }
    
    @media screen and (max-width: 540px) {
        .title {
            font-size: 1rem;
            margin-bottom: 10px;
            margin: 0px;
        }
        .title1 {
            width: 200px;
            height: 40px;
            overflow: hidden;
        }
        header {
            height: 160px;
        }
        input {
            height: 45px
        }
        .ul-list {
            width: 400px;
            height: 60px;
            overflow: hidden;
        }
    }
    
    @media screen and (max-width: 450px) {
        .title {
            font-size: 0.9rem;
            margin-bottom: 10px;
            margin: 0px;
        }
        .title1 {
            width: 140px;
            height: 40px;
            overflow: hidden;
        }
        header {
            height: 130px;
        }
        input {
            height: 30px;
            font-size: 0.9rem
        }
    }
</style>