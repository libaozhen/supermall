import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = ()=>import("views/home/Home.vue");
const Category = ()=>import("views/category/Category.vue");
const Cart = ()=>import("views/cart/Cart.vue");
const Profile = ()=>import("views/profile/Profile.vue");



// 1、安装插件
Vue.use(VueRouter);

// 2、创建路由对象

const routes = [
  {
    path:"/",
    redirect:"/home"
  },
  {
    path:"/home",
    component:Home,
    meta:{
      title:"首页"
    }
  },
  {
    path:"/category",
    component:Category,
    meta:{
      title:"分类"
    }
  },
  {
    path:"/cart",
    component:Cart,
    meta:{
      title:"购物车"
    }
  },
  {
    path:"/profile",
    component:Profile,
    meta:{
      title:"我的"
    }
  }
];
const router = new VueRouter({
  routes,
  mode:'history'
});

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


//前置钩子（前置回调）
// router.beforeEach((to,from,next)=>{
//   // 如果存在嵌套则取不到title值，所以改为下边方式
//   // document.title =to.meta.title;
//   document.title =to.matched[0].meta.title;
//   console.log(to);

//   next();
// });

router.afterEach((to,from)=>{
    // 如果存在嵌套则取不到title值，所以改为下边方式
    // document.title =to.meta.title;
    document.title =to.matched[0].meta.title;
    // console.log(to);
});

export default router;
