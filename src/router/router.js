import Vue from "vue"
import Router from "vue-router"

import basket from "../components/basket.vue"
import catalog from "../components/catalog.vue"

Vue.use(Router);

const router = new Router ({
  routes: [
    {
      path: "/basket",
      component: basket
    },
    {
      path: "/catalog",
      component: catalog
    }
  ]
})

export default router;