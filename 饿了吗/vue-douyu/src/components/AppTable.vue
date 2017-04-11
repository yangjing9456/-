<template>
    <div class="root">
        <!--<router-link v-for="item in table" :name="item" id='table' key="itemtable">-->
        <div class="tu" v-for="item in table" :name="item" id="table" key="itemtable">
            <img :src="'https://fuss10.elemecdn.com' + item.image_url" alt="">

            <br>
            <span>{{item.title}}</span>
        </div>
       <!--</router-link>-->
    </div>
    
</template>

<script>
    export default {
        name: "appTable",
        data() {
            return {
                table: "",
            }
        },
        methods: {
            getTable() {
                this.$http.get("ele/v2/index_entry?geohash=wtstbdt87jb&group_type=1&flags[]=F")
                    .then(function(res) {
                        // console.log(res.body);
                        this.status = "success";
                        this.table = res.body;
                        console.log(this.table);
                    })
            },
        },
        created() {
            this.getTable();
        }
    }
</script>

<style scoped>
    .root {
        width: 100%;
        /*height: 700px;*/
    }
    
    .root div {
        float: left;
    }
    
    .tu {
        width: 25%;
        height: 170px;
        margin-bottom: 12px;
    }
    
    .tu img {
        width: 90px;
        height: 90px;
        /*border: 1px solid red;*/
    }
    
    .tu {
        text-align: center;
    }
</style>