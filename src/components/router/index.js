import { createRouter,createWebHashHistory } from "vue-router";
import SginUp from "../Login/SginUp.vue"
import SginIn from "../Login/SginIn.vue"
import DataCente from "../Interior/DataCenter.vue"
import UserCenter from "../Interior/UserCenter.vue"



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
    }
]



const router = createRouter({
    // history:访问方式，默认是createWebHistory，访问路径带#号
    history: createWebHashHistory(),
    routes,
})

export default router;


