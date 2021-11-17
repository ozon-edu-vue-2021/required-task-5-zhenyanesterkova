<template>
  <div class="catalog">
    <div v-for="product in products" :key="product.id" class="catalogItem">
      <img class="productImg" :src="product.img" alt="Фото товара" />

      <h5 class="productTitle">{{ product.dish }}</h5>
      <p class="productPrice">{{ product.price }}</p>
      <button class="productBuy" @click="addProdactInBasket(product)">
        В корзину
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      products: "getProducts",
    }),
  },
  methods: {
    ...mapActions(["addToBasketAction"]),
    addProdactInBasket(product) {
      this.addToBasketAction(product);
    },
  },
};
</script>
<style scoped>
.catalog {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.catalogItem {
  width: 250px;
  box-shadow: 0 0 10px 1px rgba(198, 191, 191);
  margin: 20px 10px;
}
.productImg {
  width: 100%;
}
.productBuy {
  margin-bottom: 20px;
  border: none;
  padding: 5px 15px;
  font-size: 16px;
  box-shadow: 0 0 5px 1px #e2e2e2;
  background-color: white;
  border-radius: 15px;
  cursor: pointer;
}
.productBuy:hover {
  background-color: rgb(184, 181, 181, 0.3);
  box-shadow: none;
}
.productBuy:active {
  background-color: rgb(88, 88, 88, 0.4);
}
</style>