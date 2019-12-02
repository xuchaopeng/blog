import Vue from "vue";
import VueRouter from "vue-router";
import Main from "@/components/main";
import Home from "@/views/home";
import Archive from "@/views/archive";
import Tags from "@/views/tags";
import curTag from "@/views/curTag";
import Article from '@/views/article';
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Main,
    children: [
      {
        path: "",
        component: Home,
        name: "home"
      },
      {
        path: "/archive",
        component: Archive,
        name: "archive"
      },
      {
        path: "/tags",
        component: Tags,
        name: "tags"
      },
      {
        path:"/tag/:id",
        component:curTag,
        name:'curTag'
      },
      {
        path:"/a/:id",
        component:Article,
        name:'article'
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
