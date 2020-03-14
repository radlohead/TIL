import Vue from "vue";
import Router from "vue-router";
import ProductList from "@/components/ProductList";
import { CreateListComponentV2 } from "@/components/hoc/CreateListComponentV2";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "ProductList",
      component: ProductList
    },
    {
      path: "/v2",
      component: CreateListComponentV2("CreateListComponentV2")
    },
    {
      path: "/v3",
      component: CreateListComponentV2("CreateListComponentV3")
    }
  ]
});
