<template>
    <div class="Box">

        <div class="cententBox">

            <!-- 左侧导航栏 -->
            <div class="navigation-BigBox">
                <!-- 标题 -->
                <div class="navigation-title-box">
                    农科联结
                </div>

                <div class="navigation-box">
                    <!-- 块级元素 -->
                    <ul class="navigation-option-box">
                        <li class="navigation-option active" @click="GoSec(1)" >个人资料</li>
                        <li class="navigation-option" @click="GoSec(2)">收货地址</li>
                        <li class="navigation-option" >商品管理</li>
                        <li class="navigation-option" >收藏店家</li>
                        <li class="navigation-option" >我的收藏</li>
                        <li class="navigation-option" @click="GoHome()" >返回主页</li>
                    </ul>
                </div>

            </div>

            <!-- 中间内容 -->
            <div class="user-about-box">

                <div class="user-about-content-box">
                    
                    <div class="user-image-box">
                        <div class="user-image-text">
                            <span class="user-image-text-title">用户头像</span>
                        </div>
                        <img :src="UserImage" style="width: 180px; height: 180px;margin-left: 10px; transition: box-shadow 0.5s, color 0.5s; /* 平滑过渡效果 */" class="user-image" alt="">
                        <div class="user-image-username">
                            用户账户：stardust0019
                        </div>
                    </div>


                    <div class="user-about-text-box">

                        <div class="user-about-text-title">
                            <span>编写信息</span>
                        </div>

                        <div class="user-about-text-from">
                            <form action="">
                            
                                <!-- 输入框模板 -->
                                <div class="user-about-input-box">
                                    <span>用户账户:</span>
                                    <div class="user-about-input">
                                        <input class="user-about-input-text" type="text" placeholder="请输入你的用户名">
                                        <span style="font-size: 10px; letter-spacing: 1px;color: #d6d5d5; ">用户名作为用户主要识别一年只能修改一次</span>
                                    </div>
                                </div>

                                <div class="user-about-input-box">
                                    <span>用户昵称:</span>
                                    <div class="user-about-input">
                                        <input class="user-about-input-text" type="text" placeholder="请输入你的用户名">
                                    </div>
                                </div>
                            
                                <div class="user-about-input-box">
                                    <span>手机号:</span>
                                    <div class="user-about-input">
                                        <input class="user-about-input-text" type="text" placeholder="请输入你的联系电话">
                                    </div>
                                </div>

                                <div class="user-about-input-box">
                                    <span>性别:</span>
                                    <div class="user-about-input-sex">
                                        <input class="user-about-input-text-sex" type="radio" name="sex" >先生
                                        <input class="user-about-input-text-sex" type="radio" name="sex" >女士
                                    </div>
                                </div>

                                <div class="user-about-input-box">
                                    <el-button style="width: 120px;">提交</el-button>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts" setup >

import UserImage from "../../static/pic10.jpg"
import router from "@/components/router";




function GoHome(){
    router.push({path:"/datacente"})
}

function GoSec(event){
    
    switch(event){
        case 1:
            break;
        case 2:
            router.push({path:"/useraddresslist"})
            break;
    }
    
}



</script>


<style lang="scss" scoped>
@import url('../../CSS/Secondsheetcss/Userupdate.scss');


</style>

