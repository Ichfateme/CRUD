import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import SinglePage from "../views/SinglePage.vue"
import Edit from "../views/Edit.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/SinglePage/:id",
    name: "SinglePage",
    component: SinglePage,
  },
  {
    path: "/Edit/:id",
    name: "Edit",
    component: Edit,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
