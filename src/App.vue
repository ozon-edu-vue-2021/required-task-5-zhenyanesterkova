<template>
  <div id="app">
    <div class="linkContainer">
      <router-link to="/catalog" class="link">Каталог</router-link>
    </div>
    <div class="linkContainer">
      <router-link to="/basket" class="link">Корзина</router-link>
    </div>
    <div class="content"><router-view></router-view></div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  methods: {
    ...mapActions(["loadProducts"]),
  },
  created() {
    this.loadProducts();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #fff;
  padding: 24px;
  box-sizing: border-box;
  text-align: center;
}

* {
  box-sizing: border-box;
}
.linkContainer {
  display: inline-block;
  margin: 0 10px;
  font-size: 18px;
}
.link {
  color: rgb(184, 181, 181);
  text-decoration: none;
}
.link:hover {
  color: rgb(88, 88, 88);
}
.router-link-active {
  text-decoration-line: underline;
  color: rgb(88, 88, 88);
}
.content {
  margin: 30px 0;
}
</style>
