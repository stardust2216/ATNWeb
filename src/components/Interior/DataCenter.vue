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
                <el-menu-item >
                    <el-icon>
                    <img :src="logoUrl" style="width: 30px;height: 30px">
                    </el-icon>
                    <span style="font-size: 20px; color: greenyellow;">ATN</span>
                 </el-menu-item>
    
                <el-menu-item index="1"  @click="getelment(1)">
                    <el-icon><Operation /></el-icon>
                    <template #title>仪表盘</template>
                </el-menu-item>
    
                <el-menu-item index="2" @click="getelment(2)">
                    <el-icon><Message /></el-icon>
                    <template #title>交易信息</template>
                </el-menu-item>
    
                <el-sub-menu index="3">
                    <template #title>
                        <el-icon><location/></el-icon>
                        <span>交易</span>
                    </template>
    
                    <el-menu-item-group>
                        <el-menu-item index="3-1" @click="getelment(31)">交易中心</el-menu-item>
                        <el-menu-item index="3-2" @click="getelment(32)">订单管理</el-menu-item>
                        <el-menu-item index="3-3" @click="getelment(33)">发布订单</el-menu-item>
                    </el-menu-item-group>
                </el-sub-menu>
    
                <el-menu-item index="4" @click="getelment(4)">
                    <el-icon><Message /></el-icon>
                    <template #title>我的财务</template>
                </el-menu-item>
    
                <el-sub-menu index="5">
                    <template #title>
                        <el-icon><location/> </el-icon>
                        <span>用户</span>
                    </template>
    
                    <el-menu-item-group>
                        <el-menu-item index="5-1" @click="getelment(51)">个人中心</el-menu-item>
                        <el-menu-item index="5-2" @click="getelment(52)">我的信息</el-menu-item>
                        <el-menu-item index="5-3" @click="getelment(53)">商品溯源</el-menu-item>
                    </el-menu-item-group>
                </el-sub-menu>
                
            </el-menu>
    
        </div>
    
    
    
    
        <!-- 右侧功能页 -->
        <div class="Function-BigBox">
    
            <!-- 顶部信息栏 -->
            <div class="Function-navigations-Box">
                    
                <div class="Function-navigation-left-box">
                    <!-- 左侧控制器 -->
                    <el-radio-group v-model="isCollapse" style="width:90px; margin-left: 1%;; margin-top:auto; margin-bottom: auto;">
                        <el-radio-button :value="false" style="width: 20px; margin-right: 27px;"><el-icon ><View /></el-icon></el-radio-button>
                        <el-radio-button :value="true" style="width: 20px;"><el-icon><Hide /></el-icon></el-radio-button>
                    </el-radio-group>
    
                    <span class="Function-navigation-left-title" >{{NavigationTitle}}</span>
                </div>
    
                <!-- 右侧信息栏 -->
                <div class="Function-navigation-right-box">
                    
                    <div class="Function-navigation-right-message-box">
                        <el-icon size="24" style="width: auto;height: 100%; margin-top: auto; margin-bottom: auto;margin-right: 10px;"><Bell/></el-icon>
                    </div>
    
                    <div class="Function-navigation-right-user">
                        <span class="Function-navigation-right-user-T">2</span>
                        <span class="Function-navigation-right-user-text">2061825936</span>
                    </div>
    
                </div>
    
            </div>
    
    
            <!-- 中部功能区 -->
            <div class="Function-centents-box">
                
                



                
    
            </div>
    
    
    
        </div>
    
    
    
    </div>
    </template>
    
    
    <script lang="ts" setup>
    import logoUrl from '../static/logo_small.png'
    import { ref } from 'vue'
    import {
      Document,
      Menu as IconMenu,
      Location,
      Setting,
    } from '@element-plus/icons-vue'
    import router from '../router';
    
    
    
    // 记录是否折叠
    const isCollapse = ref(false)
    
    const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }
    const handleClose = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }
    
    let NavigationTitle = ref('仪表盘')
    
    
    // 导航栏跳转
    function getelment( Event) {
      
        switch (Event) {
            case 1:
                console.log('仪表盘')
                NavigationTitle.value = '仪表盘'
                // 跳转接口
                router.push({path:"/datacente"})
                break;
            case 2:
                console.log('交易信息')
                NavigationTitle.value = '交易信息'
                break;
            case 31:
                console.log('交易中心')
                NavigationTitle.value = '交易中心'
    
                break;
            case 32:
                console.log('订单管理')
                NavigationTitle.value = '订单管理'
                break;
            case 33:
                console.log('发布订单')
                NavigationTitle.value = '发布订单'
                router.push({path:"/addgoods"})
                break;
            case 4:
                console.log('我的财务')
                NavigationTitle.value = '我的财务'
                break;
            case 51:
                console.log('个人中心')
                NavigationTitle.value = '个人中心'
                router.push({path:"/usercenter"})
                break;
            case 52:
                console.log('我的信息')
                NavigationTitle.value = '我的信息'
                break;
            case 53:
                console.log('商品溯源')
                NavigationTitle.value = '商品溯源'
                break;
        }
    }
    
    
    
    
    </script>
    
    
    <style lang="scss" scoped>
    
    .BOX{
        width: 100%;
        height: 100%;
        display: flex;
    }
    
    
    .navigation-BigBox-e{
        width: auto;
        height: 98vh;
        margin-top: auto;
        margin-left: 10px;
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
        margin-left: 10px;
    
        // 顶部导航
        .Function-navigations-Box{
            width: 100%;
            height: 4%;
            display: flex;
            
            .Function-navigation-left-box{
                width: 50%;
                height: 100%;
                display: flex;
    
                .Function-navigation-left-title{
                    width: 50%;
                    height: auto;
                    font-size: 20px;
                    margin-left: 10px;
                    margin-top: auto;
                    margin-bottom: auto;
    
                }
    
            }
    
            .Function-navigation-right-box{
                width: 50%;
                display: flex;
                justify-content: flex-end;
    
    
                .Function-navigation-right-user{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    padding: 4px;
                    border-radius: 30px;
                    background-color: #f2f2f2;
                    box-shadow: inset 0 0 5px 0 rgba(0, 0, 0, .05);
                    margin-right: 12px;

                    .Function-navigation-right-user-T{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-weight: 700;
                        font-size: 16px;
                        color: #bc3aaf;
                        line-height: 1;
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                        background-color: #fff;
                        filter: drop-shadow(0 0 4px rgba(0, 0, 0, .08));
                    }
    
                    .Function-navigation-right-user-text{
                        font-weight: 700;
                        font-size: 16px;
                        margin: 0;
                        line-height: 1;
                        margin-right: 10px;
                        margin-left: 10px;
                    }
                }
            }
        }
    

        // 内容
        .Function-centents-box{
            width: 99%;
            height: 95%;
            background: hotpink;
            margin-top: 10px;
            margin-bottom: auto;
            margin-left: 5px;















        }
    
    
    }
    
    
    
    </style>