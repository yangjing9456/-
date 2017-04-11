<template>
  <div id="app">
    <app-footer>首页</app-footer>
    <router-view></router-view>
  </div>
</template>

<script>
    import bus from './Bus.js';
    import AppFooter from './components/AppFooter';

    export default {
        name: 'app',
        data() {
            return {
                showMenu: false
            }
        },
        components: {
            "app-footer": AppFooter
        }
    }
</script>

<style>

</style>