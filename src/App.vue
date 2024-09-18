<script setup>


</script>

<template>
    <!-- 路由的显示入口 -->
    <router-view></router-view>

    


</template>

<style scoped>
    #app {
    height: 100vh; /* 使用视口高度单位 */
    width: 100vw; /* 如果需要，也可以设置宽度占满视口 */
    overflow: hidden; /* 隐藏溢出的内容 */
}

body{
    margin: 0 !important;
}


</style>