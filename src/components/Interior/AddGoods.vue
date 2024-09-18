<template>
    <div class="Box">
    
        <!-- 左边导航栏 -->
        <div class="navigation-BigBox-e">
  
            <!-- 菜单栏 -->
            <el-menu
                default-active="3-3"
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
                
                

                <div class="user-address-box">

                    <div class="user-address-form">
                        <el-form
                            ref="goodsRef"
                            style="max-width: 600px"
                            :model="goods"
                            status-icon
                            :rules="rules"
                            label-width="auto"
                            class="demo-ruleForm"
                        >
                        
                            <el-form-item label="产品名称" prop="name">
                                <el-input v-model="goods.name" type="test" autocomplete="off" />
                            </el-form-item>
                            
                            <el-form-item label="产品售价" prop="price">
                                <el-input v-model="goods.price" type="test" autocomplete="off"/>
                            </el-form-item>
                                
                            <el-form-item label="生产地" >
                                <el-cascader
                                :options="options"
                                v-model="goods.address"
                                placeholder="请选择所在地区"
                                />
                            </el-form-item>

    
                            <!-- 图片上传区域 -->

                            <el-form-item label="产品图片" prop="img">
                                <el-upload
                                    class="avatar-uploader"
                                    action="https://imgtbl.com/api/v1/upload"
                                    :show-file-list="false"
                                    :on-success="handleAvatarSuccess"
                                    :before-upload="beforeAvatarUpload"
                                >
                                    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                                    <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
                                </el-upload>
                            </el-form-item>

                            <!-- 图片上传区域 -->

                            <el-form-item label="产品数量" prop="num">
                                <el-input v-model="goods.num" type="number" min="0" autocomplete="off" />
                            </el-form-item>

                            <el-form-item label="产品描述" prop="desc">
                                <el-input v-model="goods.desc" type="textarea" autocomplete="off" />
                            </el-form-item>
                            
                            <!-- 提交按钮 -->
                             <div class="user-form-button-box">
                                <el-form-item >
                                    
                                    <el-button type="primary" @click="submitForm(goodsRef)">
                                    提交
                                    </el-button>

                                    <el-button class="user-form-button" @click="resetForm(goodsRef)">
                                    取消
                                    </el-button>

                                    <el-button class="user-form-button" @click="demo()">
                                    测试
                                    </el-button>

                                </el-form-item>
                            </div>
                            
                        </el-form>
                        
                    </div>

                </div>






                

            </div>
        </div>
    </div>
</template>
    
    
    <script lang="ts" setup>
    import logoUrl from '../static/logo_small.png'
    import UImage from '../static/pic10.jpg'
    import { reactive,ref, } from 'vue'
    import {
      Document,
      Menu as IconMenu,
      Location,
      Setting,
      Plus 
    } from '@element-plus/icons-vue'
    import router from '../router';
    import type { FormInstance, FormRules ,UploadProps } from 'element-plus'
    import { ElMessage } from 'element-plus';
    import axios from 'axios';
import { Header } from 'element-plus/es/components/table-v2/src/components';
    
// 数据区域

    
    

// 表单区域
    const goodsRef = ref<FormInstance>()

    const goods = reactive({
        name:"",
        price:"",
        address:"",
        img:"",
        num:"",
        desc:""
    })


    const validatename = (rule: any, value: any, callback: any) => {
        if (value === '') {
            callback(new Error('请输入商品名称'))
        } else {
            callback()
        }
    }

    const validateprice = (rule: any, value: any, callback: any) => {
        if (value === '') {
            callback(new Error('请输入商品价格'))
        } else {
            callback()
        }
    }

    const validateaddress = (rule: any, value: any, callback: any) => {
        if (value === '') {
            callback(new Error('请输入商品所在地'))
        } else {
            callback()
        }
    }

    const validatenum = (rule: any, value: any, callback: any) => {
        if (value === '') {
            callback(new Error('请输入商品数量'))
        } else {
            callback()
        }
    }


    const rules = reactive<FormRules<typeof goods>>({
    name: [{ validator: validatename, trigger: 'blur' }],
    price: [{ validator: validateprice, trigger: 'blur' }],
    address: [{ validator: validateaddress, trigger: 'blur' }],
    num: [{ validator: validatenum, trigger: 'blur' }],
    })

    const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
        console.log('submit!')
        console.log(goods)
        ElMessage({
            message: '提交成功',
            type: 'success',
        })
        } else {
        console.log('error submit!')
        }
    })
    }

    const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
    }


// 表单区域






    
    // 记录是否折叠
    const isCollapse = ref(false)
    
    const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }
    const handleClose = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }
    
    let NavigationTitle = ref('发布订单')
    
// 方法区域
    


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
    
    

    
 const options = [
  {
    value: '广东省',
    label: '广东省',
    children: [
      {
        value: '广州市',
        label: '广州市',
        children: [
          {
            value: '海珠区',
            label: '海珠区',
          },
        ],
      },
    ],
  },
  {
    value: '湖南省',
    label: '湖南省',
    children: [
      {
        value: '长沙市',
        label: '长沙市',
        children: [
          {
            value: '天心区',
            label: '天心区',
          },
        ],
      },
    ],
  },
  {
    value: '江苏省',
    label: '江苏省',
    children: [
      {
        value: '南京市',
        label: '南京市',
        children: [
          {
            value: '鼓楼区',
            label: '鼓楼区',
          },
        ],
      },
    ],
  },
  {
    value: '河北省',
    label: '河北省',
    children: [
      {
        value: '石家庄市',
        label: '石家庄市',
        children: [
          {
            value: '长安区',
            label: '长安区',
          },
        ],
      },
    ],
  },
  
]



            // // 图片上传功能

            // const imageUrl = ref('')

            // const handleAvatarSuccess: UploadProps['onSuccess'] = (
            // response,
            // uploadFile
            // ) => {
            // imageUrl.value = URL.createObjectURL(uploadFile.raw!)
            // }

            // const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
            // if (rawFile.type !== 'image/jpeg') {
            //     ElMessage.error('Avatar picture must be JPG format!')
            //     return false
            // } else if (rawFile.size / 1024 / 1024 > 2) {
            //     ElMessage.error('Avatar picture size can not exceed 2MB!')
            //     return false
            // }
            // return true
            // }




            // // 图片上传功能


            // function demo(){
            //     addimage()
            // }



            // // 后端接口
            // const addimage = () => {
            //     axios.post("https://imgtbl.com/api/v1/upload",{
            //     Header: {
            //         'Content-Type': 'multipart/form-data',
            //         'Authorization':'53|8AaIWi5L6BjthLha4Hz8l4WXPA6DB9crDisa4wTF',
            //         'Accept': 'application/json'
            //     },
            //     data: {
            //         "file":'../static/pic10.jpg',
            //     }  
            //     }).then((res) => {
            //         console.log(res)
            //     }).catch((err) => {
            //         console.log(err)
            //     }).finally()
            // }

const imageUrl = ref('');

const handleAvatarSuccess = (response, uploadFile) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw);
};

const beforeAvatarUpload = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('产品图片必须是JPG格式!');
    return false;
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('产品图片大小不能超过2MB!');
    return false;
  }
  return true;
};

const handleChange = (file, fileList) => {
  if (file.raw) {
    addImage(file.raw);
  }
};

const addImage = (file) => {
  const formData = new FormData();
  formData.append('file', file);

  axios.post("https://imgtbl.com/api/v1/upload", formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': '53|8AaIWi5L6BjthLha4Hz8l4WXPA6DB9crDisa4wTF',
      'Accept': 'application/json'
    }
  }).then((res) => {
    console.log(res);
    // 这里可以处理上传成功后的逻辑，比如更新imageUrl
  }).catch((err) => {
    console.log(err);
  });
};








</script>
    
    
<style lang="scss" scoped>
@import url("../CSS/AddGoods.scss");    
   
    
    
</style>