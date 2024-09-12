<template>
    <div class="BOX">

        <!-- 左侧卡片 -->
        <div class="Login-Tipcard-box">
            <div class="Login-Tipcard-box-text">
                    <span class="Login-Tipcard-box-text-atn">ATN</span>
            </div>
        </div>

        <!-- 右侧登录卡片  -->
        <div class="Login-from-box">
            <div class="Login-card">


                <!-- 标题 -->
                <div class="Login-from-title-box">
                    <span class="Login-from-title-text">账号注册</span>
                    <span class="Login-from-title-hint">使用邮箱注册</span>                                     
                </div>

                <!-- 注册提示框 -->
                <div class="SignUp-hint-box">
                    <span class="SignUp-hint-text">已有账号？</span> <router-link to="/" class="SignUp-a">立即登录</router-link>
                </div>


                <!-- 登录框 -->
                <div class="Login-from-text-box">
                    
                    <form action="/submit_form" method="post" class="Login-from">
               
                        <label for="email" class="Login-from-text">邮箱:</label>
                        <div class="Login-from-input-box"> 
                            <input type="email" id="email" class="Login-from-email" placeholder="请输入邮箱" v-model="users.email">
                        </div>
                       
                        <!-- 密码登录 -->
                        <div  class="Login-passwd">  <!--  控制密码和验证码显示 -->
                            <label for="password" class="Login-from-text">密码:</label>
                            <div class="Login-from-input-box">
                                <input type="password" id="password" class="Login-from-password" placeholder="请输入密码" v-model="users.password">
                            </div>
                        </div>

                        <div  class="Login-passwd">  <!--  控制密码和验证码显示 -->
                            <label for="confirmpassword" class="Login-from-text">确认密码:</label>
                            <div class="Login-from-input-box">
                                <input type="password" id="confirmpassword" class="Login-from-password" placeholder="请确认密码" v-model="users.confirmpassword">
                            </div>
                        </div>


                       
                        <!-- 服务条款 -->
                        <div class="confirmserver-box">
                            <input type="checkbox" id="checkBox" name="terms" value="agreed" class="confirmserver-input" v-model="users.confirmserver"  >
                            <label for="checkBox1" class="confirmserver-label">我已同意</label>      
                            <a href="#" class="Login-from-forget-password" >服务条款</a>
                        </div>    

                        <el-button type="submit"  class="Login-button"  @click="getUser" plain >注册</el-button>
                    
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';
import router from '../router';
import axios from 'axios';

// 接收并暂时存储用户信息
let users = ref({
    email:"",
    password:"",
    confirmpassword:"",
    confirmserver:false

})


// 后端接口






// 注册按钮
function getUser() {
    console.log(users);
    if (users.value.password == users.value.confirmpassword) {
        if(users.value.confirmserver){ 

            // 提示框后期改进
            alert("注册成功")
            router.push("/")

        }else{
            alert("请勾选同意服务条款")
        }
    } else if(users.value.confirmpassword == '') {
        alert("请输入确认密码")
    }else {
        alert("两次密码输入不一致")
    }
    
}


</script>



<style lang="scss">
    .BOX{
        width: 100%;
        height: 100%;
        display: flex;
    }

    .Login-Tipcard-box {
        width: 27%;
        height: 97vh;
        background: aqua;
        border-radius: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 10px;
        margin-right: 10px;

        .Login-Tipcard-box-text {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            .Login-Tipcard-box-text-atn {
                font-size: 25px;
                color: #FFFFFF;
                
            }
        }
    }


    .Login-from-box{
        width: 73%;
        height: 97vh;
        display: flex;
        justify-content: center;
        align-items: center;

        .Login-card{
            width: 60%;
            height: 50%;
           
            
            // 标题卡卡片
            .Login-from-title-box{
                width: 100%;
                height: 9%;
                display: flex;
                background:#FFFFFF;
                margin-bottom: 2%;
            
                .Login-from-title-text{
                    font-size: 30px;
                    margin-right: 2%;
                    margin-top: auto;
                    margin-bottom: auto;
                }

                .Login-from-title-hint{
                    font-size: 15px;
                    color: #7D7D7D;
                   margin-top: auto;
                   margin-bottom: 1%;
                }
            }


            // 注册提示框
            .SignUp-hint-box{
                width: 100%;
                height: 6%;
                background: #FFFFFF;
                margin-top: 2%;
                display: flex;

                .SignUp-hint-text{
                    font-size: 14px;
                    margin-top: auto;
                    margin-bottom: auto;
                    color: #b8b4b4;
                }

                .SignUp-a{
                    text-decoration: none;
                    color:aqua ;
                    font-size: 14px;
                    margin-bottom: auto;
                    margin-top: auto;
                }

            }


            // 登录框
            .Login-from-text-box{
                width: 100%;
                height: 85%;
                margin-top: 1%;

                .Login-from{
                    display: flex;
                    flex-direction: column;
                
                    .Login-from-text{
                        font-size: 20px;
                        margin-top: 4%;
                        margin-bottom: 2%;
                    }

                    .Login-passwd{
                        margin-top: 4%;
                    }

                    .Login-from-input-box{
                        width: 100%;
                        height: 3.5vh;
                        border: #b9b9b9 1px solid;
                        border-radius: 5px;
                        display: flex;
                        margin-top: 2% ;

                        .Login-from-email{
                            border: none; 
                            padding: 0;
                            margin: 0; 
                            width: auto;
                            outline: none;
                            height: 95%;
                            width: 100%;
                            font-size: 16px;
                            background: fixed;
                            margin-left: 2%;
                            color:#323232;
                        }
                        
                        .Login-from-password{
                            border: none; 
                            padding: 0;
                            margin: 0; 
                            width: auto;
                            outline: none ;
                            height: 95%;
                            width: 100%;
                            font-size: 16px;
                            background: fixed;
                            margin-left: 2%;
                            color:#323232;
                        }

                    }

                   
                    // 注册按钮
                    .Login-button{
                        margin-top:5% ;
                        width: 100%;
                        font-size: 15px;
                        background: #13C2C2;
                    }
                
                    // 服务条款
                    .confirmserver-box{
                        display: flex;
                        margin-top: 2%;

                        .confirmserver-input{
                            
                        }

                        .confirmserver-label{
                            margin-top: auto;
                            margin-bottom: auto;
                            font-size: 14px;
                            color:#b8b4b4;
                        }

                        .Login-from-forget-password{
                            text-decoration: none;
                            color:aqua ;
                            margin-top: auto;
                            margin-bottom: auto;
                            font-size: 14px;
                            margin-left: 1%;
                         }

                    }




                }
            }

        }
    }


</style>