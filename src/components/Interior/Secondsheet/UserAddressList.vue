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
                        <li class="navigation-option"  @click="GoSec(1)">个人资料</li>
                        <li class="navigation-option active"  @click="GoSec(2)">收货地址</li>
                        <li class="navigation-option" >商品管理</li>
                        <li class="navigation-option" >收藏店家</li>
                        <li class="navigation-option" >我的收藏</li>
                        <li class="navigation-option" @click="GoHome()" >返回主页</li>
                    </ul>
                </div>

            </div>

            <!-- 中间内容 -->
            <div class="user-about-box">

                <div class="user-address-top">
                    <div class="user-address-top-title">
                        <span>我的收货地址</span>
                    </div>

                    <div class="user-address-addbutton">
                        <el-button plain @click="dialogFormVisible = true" >添加地址</el-button>
                    </div>


                    <!-- 对话框区域 -->
                    <el-dialog v-model="dialogFormVisible" title="新增地址" width="500">
                      
                        <!-- 表单 -->
                        <el-form :model="form">

                            <el-form-item label="收款人" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off" />
                            </el-form-item>

                            <el-form-item label="电话/手机" :label-width="formLabelWidth">
                                <el-input v-model="form.phone"  />
                            </el-form-item>
                            
                            <el-form-item label="所在地区" :label-width="formLabelWidth">
                                <el-cascader
                                :options="options"
                                v-model="form.address"
                                placeholder="请选择所在地区"
                                />
                            </el-form-item>

                            <el-form-item label="详细地址" :label-width="formLabelWidth">
                                <el-input v-model="form.detailedaddress"  />
                            </el-form-item>
                            
                            <el-form-item label="邮编" :label-width="formLabelWidth">
                                <el-input v-model="form.postcode"  />
                            </el-form-item>

                        </el-form>


                        <!-- 按钮 -->
                        <template #footer>
                            <div class="dialog-footer">
                                <el-button @click="dialogFormVisible = false">取消</el-button>
                                
                                <el-button type="primary" @click="AddAddress()">
                                确认
                                </el-button>
                                
                            </div>
                        </template>

                    </el-dialog>


                </div>

                <div class="user-address-list-box">

                    <div class="user-address-list">

                        <el-table :data="tableData" :row-style="{ height: '75px' }"  :header-row-style="{ height: '50px' }" class="user-address-table">
                            <el-table-column  prop="name" label="收货人" width="100" />
                            <el-table-column  prop="phone" label="电话/手机" width="150" />
                            <el-table-column  prop="address" label="所在地区" width="270" />
                            <el-table-column  prop="detailedaddress" label="详细地址" />
                            <el-table-column  prop="postcode" label="邮编" />
                            <el-table-column  prop="operate" label="操作">
                                <span>修改</span>
                                <span style="margin-left: 15px;">删除</span>
                            </el-table-column>
                        </el-table>

                    </div>
                </div>


                
            </div>
        </div>
    </div>
</template>


<script lang="ts" setup >

import UserImage from "../../static/pic10.jpg"
import router from "@/components/router";
import { reactive,ref } from 'vue'

// 数据区域

const tableData = [
  {
    name: '冰糖',
    phone: '13737290667',
    address: '广西壮族自治区 来宾市 武宣县武宣镇',
    detailedaddress: "大学西路169号",
    postcode: '100000',
    operate: '编辑',
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
]


const dialogTableVisible = ref(false)
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'


// 新增地址存储的数据
const form = reactive({
  name: '',
  phone: '',
  address: '',
  detailedaddress: '',
  postcode: ''
})


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


// 方法区域

function GoHome(){
    router.push({path:"/datacente"})
}

function GoSec(event){
    
    switch(event){
        case 1:
            router.push({path:"/userupdate"})
            break;
        case 2:
            break;
    }
    
}


    // 新增地址
    function AddAddress(){
        const emptyFields = Object.keys(form).filter((key) => !form[key])

        
        if(emptyFields.length){
            alert(`请输入${emptyFields.join('、')}`)
            return
        }else{
            alert('新增成功')
            //  后端接口 


            console.log(form)

            dialogFormVisible.value = false
        }
    
    }



</script>


<style lang="scss" scoped>
@import url('../../CSS/Secondsheetcss/UserAddressList.scss');


</style>

