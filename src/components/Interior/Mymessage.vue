<template>
  <div class="Box">
    
    <!-- 左边导航栏 -->
    <div class="navigation-BigBox-e">

        <!-- 菜单栏 -->
        <el-menu
            default-active="5-2"
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
    <div class="Functions-BigBox">

        <!-- 顶部信息栏 -->
        <div class="Function-navigations-Box">
                
            <div class="Function-navigation-left-box">
                <!-- 左侧控制器 -->
                <el-radio-group v-model="isCollapse" style="width:90px; margin-left: 1%;; margin-top:auto; margin-bottom: auto;">
                    <el-radio-button :value="false" style="width: 20px; margin-right: 26px;"><el-icon ><View /></el-icon></el-radio-button>
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
            
            
            <!-- 功能块区域 -->
            <div class="user-message-box">
                

                <div class="user-message-content-box">
                    
                    <el-table :data="tableData" style="width: 100%">
                        <el-table-column prop="date" label="时间" width="180" />
                        <el-table-column prop="name" label="标题" width="180" />
                        <el-table-column prop="address" label="内容" />
                        
                        <el-table-column label="操作" width="180">
                            <template #default="scope">
                                <el-button type="primary" size="mini" @click="handleView(scope.row)">查看</el-button>
                                <el-button type="danger" size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                            </template>
                        </el-table-column>
                    
                    </el-table>

                </div>

            </div>
            

            <!-- 功能块区域 -->

            

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
    Message
} from '@element-plus/icons-vue'
import router from '../router';
import { ElMessageBox  } from 'element-plus';
    
    
    // 记录是否折叠
    const isCollapse = ref(false)
    
    const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }
    const handleClose = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }
    
    let NavigationTitle = ref('我的信息')
    
    
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

    const tableData =ref( [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    ])

    
    /**
     * 查看详情
     *
     * @param row 表格行数据
     * @returns 无返回值
     */ 
    const handleView = (row) => {
        
        // 弹出对话框
        ElMessageBox({
        title: '查看详情',
        message: `时间: ${row.date}<br/>标题: ${row.name}<br/>内容: ${row.address}`,
        dangerouslyUseHTMLString: true,
        showConfirmButton: true,
        confirmButtonText: '关闭'
        });
        
    };

const handleDelete = (index, row) => {
    ElMessageBox.confirm('确认删除这条信息吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(() => {
        tableData.value.splice(index, 1);
    }).catch(() => {
        // 取消删除
    });
};



</script>


<style lang="scss" scoped>

    @import url('../CSS/Mymessage.scss');

</style>