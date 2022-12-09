<template>
  <div>
    <v-btn target="_blank" text-color="black" @click="navigateCartDetail">
      <v-icon>fa-sharp fa-solid fa-cart-plus</v-icon>
      <p class="cart-quantity">{{ getCart.products.length }}</p>
    </v-btn>
  </div>
</template>

<script>
import router from "../../router/index.js";
import { mapGetters } from "vuex";

export default {
  name: "cart-button",
  computed: {
    ...mapGetters(["getCart"]),
  },
  methods: {
    navigateCartDetail() {
      router.push("/cart-detail");
    },
  },
};
</script>

<style scoped>
.cart-quantity {
  vertical-align: text-top;
  border-radius: 5px;
  background-color: darkgreen;
}
</style>
