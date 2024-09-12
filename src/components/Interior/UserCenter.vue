<template>
    <div class="BOX">
    
        <!-- 左边导航栏 -->
        <div class="navigation-BigBox">
    
    
        
        <!-- 菜单栏 -->
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            @open="handleOpen"
            @close="handleClose">
    
            <el-menu-item>
                <el-icon><home /></el-icon>
                <span style="font-size: 20px; color: greenyellow;">ATN</span>
            </el-menu-item>
          
    
            <el-menu-item>
                <el-icon></el-icon>
                <span>111</span>
            </el-menu-item>
    
            
    
            <!-- 第一部分  -->
            <el-sub-menu index="1">
    
            
                <template #title>
                    <el-icon><location/> </el-icon>
                    <span>仪表盘</span>
                </template>
        
                <el-menu-item-group>
                    <template #title><span>Group One</span></template>
                    <el-menu-item index="1-1">item one</el-menu-item>
                    <el-menu-item index="1-2">item two</el-menu-item>
                </el-menu-item-group>
        
                <el-menu-item-group title="Group Two">
                    <el-menu-item index="1-3">item three</el-menu-item>
                </el-menu-item-group>
        
                <el-sub-menu index="1-4">
                    <template #title><span>item four</span></template>
                    <el-menu-item index="1-4-1">item one</el-menu-item>
                </el-sub-menu>
    
            </el-sub-menu>
    
            <el-menu-item index="2">
                <el-icon><icon-menu /></el-icon>
                <template #title>Navigator Two</template>
            </el-menu-item>
    
            
    
            <el-menu-item index="3" disabled>
                <el-icon><document /></el-icon>
                <template #title>Navigator Three</template>
            </el-menu-item>
    
            <el-menu-item index="4">
                <el-icon><setting /></el-icon>
                <template #title>Navigator Four</template>
            </el-menu-item>
    
        </el-menu>
    
    
    
    
        </div>
    
    
    
    
        <!-- 右侧功能页 -->
        <div class="Function-BigBox">
    
            <!-- 顶部信息栏 -->
            <div class="Function-navigation-Box">
                
                    <!-- 控制器 -->
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
    
    
    
    .navigation-BigBox{
        width: auto;
        height: 98vh;
        background: blue;
        margin-top: auto;
        margin-left: 1%;
        margin-bottom: auto;
    
        .el-menu-vertical-demo:not(.el-menu--collapse) {
            width: 200px;
            min-height: 97vh;
        
        }
    
        .el-menu-vertical-demo {
        &.el-menu--collapse {
          height: 98vh; // 设置折叠后的高度
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