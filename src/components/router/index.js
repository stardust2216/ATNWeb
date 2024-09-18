import { createRouter,createWebHashHistory } from "vue-router";
import SginUp from "../Login/SginUp.vue"
import SginIn from "../Login/SginIn.vue"
import DataCente from "../Interior/DataCenter.vue"
import UserCenter from "../Interior/UserCenter.vue"
<<<<<<< Updated upstream
import Mymoney from "../Interior/Mymoney.vue";
import Userupdate from "../Interior/Secondsheet/Userupdate.vue"
import UserAddressList from "../Interior/Secondsheet/UserAddressList.vue"
import AddGoods from "../Interior/AddGoods.vue"
import myturemoney from "../Interior/myturemoney.vue";

import AddGoods from "../Interior/AddGoods.vue";
import Mymessage  from "../Interior/Mymessage.vue";
=======
import Mymoney from "../Interior/Mymoney.vue"
import myturemoney from"../Interior/myturemoney.vue"
>>>>>>> Stashed changes



const routes = [
    {
        path:"/", //  通过什么路径去访问SginUp页面
        name:"SginUp",  //  给SginUp页面取个名字
        component:SginUp  //  把SginUp页面引入进来
    },{
        path:"/sginin",
        name:"SginIn",
        component:SginIn
    },{
        path:"/datacente",
        name:"DataCente",
        component:DataCente
    },{
        path:"/usercenter",
        name:"UserCenter",
        component:UserCenter,
        meta:{
            isLogin:true  //  设置登录拦截，如果用户未登录，则不能访问该页面
        }
    },{
        path:"/mymoney",
        name:"mymoney",
        component:Mymoney
    },{
<<<<<<< Updated upstream
        path:"/userupdate",
        name:"Userupdate",
        component:Userupdate
    },{
        path:"/useraddresslist",
        name:"UserAddressList",
        component:UserAddressList,
    },{
        path:"/addgoods",
        name:"AddGoods",
        component:AddGoods,
    },{
        path:"/myturemoney",
        name:"Myturemoney",
        component:myturemoney,
    },{
        path:"/mymessage",
        name:"Mymessage",
        component:Mymessage,
    },
=======
        path:"/myturemoney",
        name:"myturemoney",
        component:myturemoney
    }
>>>>>>> Stashed changes
]



const router = createRouter({
    // history:访问方式，默认是createWebHistory，访问路径带#号
    history: createWebHashHistory(),
    routes,
})

export default router;


