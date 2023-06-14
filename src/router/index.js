import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Manage from "@/views/Manage.vue";

const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
  },
  {
    name: "about",
    path: "/about",
    component: About,
  },
  {
    name: "manage",
    // alias: "manage",
    path: "/manage-music",
    component: Manage,
    beforeEnter: (to, from, next) => {
      next();
    },
  },
  {
    path: "/manage",
    redirect: { name: "manage " },
  },
  {
    path: "/:catchAll(.*)*",
    redirect: { name: "home" },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkEactActiveClass: "text-yellow",
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
