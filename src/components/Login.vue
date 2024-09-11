<template>
    <div class="BOX">

        <!-- 左侧卡片 -->
        <div class="Login-Tipcard-box">
            <div class="Login-Tipcard-box-text">
                    <span class="Login-Tipcard-box-text-atn">AgriTech Nexus</span>
            </div>
        </div>

        <!-- 右侧登录卡片  -->
        <div class="Login-from-box">
            <div class="Login-card">


                <!-- 标题 -->
                <div class="Login-from-title-box">
                    <span class="Login-from-title-text">账号登录</span>
                    <span class="Login-from-title-hint">使用邮箱和密码登录</span>                    
                </div>

                <!-- 注册提示框 -->
                <div class="SignUp-hint-box">
                    <span class="SignUp-hint-text">还没有账号？</span> <a href="#" class="SignUp-a">立即注册</a>
                </div>


                <!-- 登录框 -->
                <div class="Login-from-text-box">
                    
                    <form action="/submit_form" method="post" class="Login-from">
               
                        <label for="email" class="Login-from-text">邮箱:</label>
                        <div class="Login-from-input-box"> 
                            <input type="email" id="email" class="Login-from-email" placeholder="请输入邮箱" v-model="users.email">
                        </div>
                       
                        <label for="password" class="Login-from-text">密码:</label>
                        <div class="Login-from-input-box">
                            <input type="password" id="password" class="Login-from-password" placeholder="请输入密码" v-model="users.password">
                        </div>

                    <a href="#" class="Login-from-forget-password">忘记密码？</a>
                    
                    <el-button type="submit"  class="Login-button"  @click="getUser" plain >登录</el-button>
                    
                    </form>
                </div>



            </div>
        </div>



    </div>
</template>


<script setup>
import { ref } from 'vue';

let users = ref({
    email:"",
    password:""
})

function getUser() {
    console.log(users.value)

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

                    .Login-from-forget-password{
                        text-decoration: none;
                        color:aqua ;
                        font-size: 14px;
                        margin-top: 2%;
                        margin-bottom: 1%;
                    }
                
                    .Login-button{
                        margin-top:5% ;
                        width: 100%;
                        font-size: 15px;
                        background: #13C2C2;
                    }
                
                }
            }




        }
    }





</style>