import Vue from "vue"
import Vuex from "vuex"
import img1 from "../assets/images/6123150777.webp"
import img2 from "../assets/images/6126039472.webp"
import img3 from "../assets/images/6126040354.webp"
import img4 from "../assets/images/6128597660.webp"
import img5 from "../assets/images/6134992334.webp"
import img6 from "../assets/images/6136170572.webp"
import img7 from "../assets/images/6136172483.webp"
import img8 from "../assets/images/6140906765.webp"
import img9 from "../assets/images/6142673815.webp"
import img10 from "../assets/images/6142681673.webp"
import img11 from "../assets/images/6142683276.webp"
import img12 from "../assets/images/6148226736.webp"


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[],
    basket:[],
    countOfProductInBasket:0,
  },
  actions: {
    async loadProducts(ctx) {
      const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];
      const res = await fetch("https://random-data-api.com/api/food/random_food?size=30");
      const products = await res.json();
      products.forEach(product => {
        product.price = Math.round(Math.random()*1000);
        product.img = images[Math.floor(Math.random()*12)];
      });
      ctx.commit("updateProducts", products);
    },
    addToBasketAction(ctx, productInBasket){
      ctx.commit("addToBasket", productInBasket);
    },
    deleteFromBasketAction(ctx, productInBasket) {
      ctx.commit("deleteFromBasket", productInBasket);
    }
  },
  getters: {
    getProducts(state){
      return state.products;
    },
    getBasket(state){
      return state.basket;
    },
    getBasketCount(state){
      return state.countOfProductInBasket;
    },
    basketPriceSum(state){
        return state.basket.reduce(function (sum, current) {
          let currentSum = current.price * current.count;
          return (sum + currentSum);
        }, 0);
    }
  },
  mutations: {
    updateProducts(state, products){
      state.products = products;
    },
    addToBasket(state, basketItem) {
      let index = state.basket.indexOf(basketItem, 0);
      if (index >= 0) {
        state.basket[index].count = state.basket[index].count + 1;
      } else {
        basketItem.count = 1;
        state.basket.push(basketItem);
      }
      state.countOfProductInBasket = state.countOfProductInBasket+1;
    },
    deleteFromBasket(state, basketItem) {
      const index = state.basket.indexOf(basketItem, 0);
      if (index !== -1) {
        state.basket.splice(index, 1);
      }
    },
  }
})

