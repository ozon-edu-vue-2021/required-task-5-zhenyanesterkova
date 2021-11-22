<template>
  <div class="basket">
    <div v-for="product in products" :key="product.id" class="basketItem">
      <img class="productImg" :src="product.img" alt="Фото товара" />

      <h5 class="productTitle">{{ product.dish }}</h5>
      <p class="productPrice">{{ product.price }} ₽</p>
      <p class="productCount">{{ product.count }} шт</p>
      <button class="productDelete" @click="deleteProdactFromBasket(product)">
        &#215;
      </button>
    </div>
    <div class="basketSum">Общая стоимость заказа: {{ BasketPriceSum }} ₽</div>
    <button class="arrange" @click="arrange">Оформить</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      products: "getBasket",
      BasketPriceSum: "basketPriceSum",
    }),
  },
  methods: {
    ...mapActions(["updateBasket", "deleteFromBasketAction"]),
    addProdactInBasket(product) {
      this.updateBasket(product);
    },
    deleteProdactFromBasket(product) {
      this.deleteFromBasketAction(product);
    },
    arrange() {
      let text = "";
      if (this.products.length === 0) {
        text = "Нет товаров в корзине \n";
      } else {
        this.products.forEach((product) => {
          text += `${product.dish} - ${product.price} ₽ \n`;
        });
        text += `Общая сумма товаров: ${this.BasketPriceSum} ₽`;
      }

      alert(`Список товаров: \n ${text}`);
    },
  },
};
</script>
<style scoped>
.basket {
  width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: end;
}
.basketItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  margin: 10px 0;
  text-align: left;
}
.productImg {
  height: 100%;
}
.productTitle {
  width: 40%;
}
.productPrice {
  width: 15%;
}
.basketSum {
  border-top: 1px solid #0000004d;
  padding: 10px;
}
.arrange {
  width: 130px;
  align-self: flex-end;
  margin-bottom: 20px;
  border: none;
  padding: 8px 15px;
  font-size: 16px;
  box-shadow: 0 0 5px 1px #e2e2e2;
  background-color: #000000a1;
  border-radius: 15px;
  cursor: pointer;
  color: #d8d8d8;
}
.arrange:hover {
  background-color: rgb(184, 181, 181);
  color: black;
}
.productDelete {
  background: none;
  border: none;
  font-size: 25px;
  cursor: pointer;
  color: rgb(184, 181, 181);
}
.productDelete:hover {
  color: black;
}
</style>