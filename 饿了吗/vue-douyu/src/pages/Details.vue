<template>
    <div class="root">
       <app-details></app-details>
       <app-more></app-more>
    </div>
</template>

<script>
    import AppDetails from '../components/AppDetails';
    import AppMore from '../components/AppMore';

    export default {
        name: "details",
        data() {
            return {

            }
        },

        components: {
            "app-details": AppDetails,
            "app-more": AppMore,
        },
    }
</script>

<style scoped>
    body {
        background-color: rgb(238, 238, 238)
    }
</style>