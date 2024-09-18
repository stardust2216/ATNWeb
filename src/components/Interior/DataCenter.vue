<template>
    <div class="BOX">
    
        <!-- 左边导航栏 -->
        <div class="navigation-BigBox-a">
    
      
            <!-- 菜单栏 -->
            <el-menu
                default-active="1"
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
    
                <el-menu-item index="1"   @click="getelment(1)">
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
        <div class="Function-BigBox-e">
    
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
                
                <!-- 功能盒子 -->
                <div class="goods-data-box" >
                     

                    <!--  水果区域 -->
                    <div class="fruit-data-box">

                        <!-- 标题 -->
                        <div class="fruit-data-title">
                            <span>水果类</span>
                        </div>

                        <!-- 内容 -->
                        
                        <div class="fruit-data-content">

                            <!-- 模板 -->
                            <div class="fruit-data-content-box">
                                <div class="fruit-data-content-box-title">
                                    <span>柑橘</span>
                                </div>

                                <div class="fruit-data-content-box-text">
                                    <CitrusProductionData />
                                    <CitrusPriceData />
                                </div>
                            </div>
                            <!-- 模板 -->

                            <div class="fruit-data-content-box">
                                <div class="fruit-data-content-box-title">
                                    <span>苹果</span>
                                </div>

                                <div class="fruit-data-content-box-text">
                                    <span>价格：￥10</span>
                                </div>
                            </div>

                            <div class="fruit-data-content-box">
                                <div class="fruit-data-content-box-title">
                                    <span>苹果</span>
                                </div>

                                <div class="fruit-data-content-box-text">
                                    <span>价格：￥10</span>
                                </div>
                            </div>

                        </div>

                    </div>

                    

                    <!-- 蔬菜区域 -->
                    <div class="fruit-data-box">

                        <!-- 标题 -->
                        <div class="fruit-data-title">
                            <span>蔬菜类</span>
                        </div>

                        <!-- 内容 -->

                        <div class="fruit-data-content">

                            <!-- 模板 -->
                            <div class="fruit-data-content-box">
                                <div class="fruit-data-content-box-title">
                                    <span>苹果</span>
                                </div>

                                <div class="fruit-data-content-box-text">
                                    <span>价格：￥10</span>
                                </div>
                            </div>
                            <!-- 模板 -->

                            <div class="fruit-data-content-box">
                                <div class="fruit-data-content-box-title">
                                    <span>苹果</span>
                                </div>

                                <div class="fruit-data-content-box-text">
                                    <span>价格：￥10</span>
                                </div>
                            </div>

                            <div class="fruit-data-content-box">
                                <div class="fruit-data-content-box-title">
                                    <span>苹果</span>
                                </div>

                                <div class="fruit-data-content-box-text">
                                    <span>价格：￥10</span>
                                </div>
                            </div>

                        </div>

                    </div>



                    <!-- 其他区域 -->
                    <div class="fruit-data-box">

                        <!-- 标题 -->
                        <div class="fruit-data-title">
                            <span>其他农产品</span>
                        </div>

                        <!-- 内容 -->
                        <div class="fruit-data-content">

                            <!-- 模板 -->
                            <div class="fruit-data-content-box">
                                <div class="fruit-data-content-box-title">
                                    <span>苹果</span>
                                </div>

                                <div class="fruit-data-content-box-text">
                                    <span>价格：￥10</span>
                                </div>
                            </div>
                            <!-- 模板 -->

                            <div class="fruit-data-content-box">
                                <div class="fruit-data-content-box-title">
                                    <span>苹果</span>
                                </div>

                                <div class="fruit-data-content-box-text">
                                    <span>价格：￥10</span>
                                </div>
                            </div>

                            <div class="fruit-data-content-box">
                                <div class="fruit-data-content-box-title">
                                    <span>苹果</span>
                                </div>

                                <div class="fruit-data-content-box-text">
                                    <span>价格：￥10</span>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
    
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
    import CitrusProductionData from '../LineChartData/CitrusProductionData.vue'
    import CitrusPriceData from '../LineChartData/CitrusPriceData.vue';


    
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
                router.push({path:"/mymessage"})
                break;
            case 53:
                console.log('商品溯源')
                NavigationTitle.value = '商品溯源'
                break;
        }
    }
    
    
</script>
    
    
<style lang="scss" scoped>
    
    @import url('../CSS/DataCenter.scss');



    

</style>