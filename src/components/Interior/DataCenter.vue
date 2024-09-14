<template>
<div class="BOX">

    <!-- 左边导航栏 -->
    <div class="navigation-BigBox-e">
        <!-- 菜单栏 -->
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            @open="handleOpen"
            @close="handleClose">
            
            <!-- 标题 -->
            <el-menu-item style:hover="">
                <el-icon>
                <img :src="logoUrl" style="width: 30px;height: 30px">
                </el-icon>
                <span style="font-size: 20px; color: greenyellow;">ATN</span>
             </el-menu-item>

            <el-menu-item index="1">
                <el-icon><Operation /></el-icon>
                <template #title>仪表盘</template>
            </el-menu-item>

            <el-menu-item index="2">
                <el-icon><Message /></el-icon>
                <template #title>交易信息</template>
            </el-menu-item>

            <el-sub-menu index="3">
                <template #title>
                    <el-icon><location/> </el-icon>
                    <span>交易</span>
                </template>

                <el-menu-item-group>
                    <el-menu-item index="3-1">交易中心</el-menu-item>
                    <el-menu-item index="3-2">订单管理</el-menu-item>
                    <el-menu-item index="3-3">发布订单</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>

            <el-menu-item index="4">
                <el-icon><Message /></el-icon>
                <template #title>我的财务</template>
            </el-menu-item>


            
            <el-sub-menu index="5">
                <template #title>
                    <el-icon><location/> </el-icon>
                    <span>用户</span>
                </template>

                <el-menu-item-group>
                    <el-menu-item index="5-1">个人中心</el-menu-item>
                    <el-menu-item index="5-2">我的信息</el-menu-item>
                    <el-menu-item index="5-3">商品溯源</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
            
        </el-menu>

    </div>




    <!-- 右侧功能页 -->
    <div class="Function-BigBox">

        <!-- 顶部信息栏 -->
        <div class="Function-navigation-Box">
            
        <!-- 左侧控制器 -->
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
            <el-radio-button :value="false">expand</el-radio-button>
            <el-radio-button :value="true">collapse</el-radio-button>
        </el-radio-group>


        </div>

        <!-- 中部功能区 -->
        <div class="Function-centent-box">
            

        </div>



    </div>



</div>
</template>


<script lang="ts" setup>
import logoUrl from '@/assets/logo_small.png'
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'


// 记录是否折叠
const isCollapse = ref(true)


const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

</script>


<style lang="scss">

.BOX{
    width: 100%;
    height: 100%;
    display: flex;
}



.navigation-BigBox-e{
    width: auto;
    height: 98vh;
    margin-top: auto;
    margin-left: 1%;
    margin-bottom: auto;
    background: none;


    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 98vh;
        border-radius: 5px;
        box-shadow: 
        /* 右上角阴影 */
            5px 5px 15px 0px rgba(0, 0, 0, 0.1),
        /* 右下角阴影 */
            -5px -5px 15px 0px rgba(0, 0, 0, 0.1);

    }

    .el-menu-vertical-demo {
    &.el-menu--collapse {
      height: 98vh; // 设置折叠后的高度
      border-radius: 5px;
      box-shadow: 
        /* 右上角阴影 */
            5px 5px 15px 0px rgba(0, 0, 0, 0.1),
        /* 右下角阴影 */
            -5px -5px 15px 0px rgba(0, 0, 0, 0.1);
    }
  }

  .el-menu-vertical-demo{
    &.el-menu--collapse{
        margin-top: 1%;

    }
  }


}


.Function-BigBox{
    width: 96%;
    height: 98vh;
    background: greenyellow;
    margin-left: 1%;

    // 顶部导航
    .Function-navigation-Box{
        width: 100%;
        height: 5%;
        background: darkmagenta;


    }


    .Function-centent-box{
        width: 98%;
        height: 93%;
        background: hotpink;
        margin-top: 1%;
        margin-bottom: auto;
        margin-left: auto;
        margin-right: auto;
    }


}



</style>