<template>
  <v-container class="grey lighten-5" id="cart-detail">
    <v-card>
      <v-row
        class="cart-list-product"
        v-for="(product, index) in getCart.products"
        :key="index"
      >
        <v-col cols="4" style="postion: absolute">
          <img style="postion: absolute" :src="product.image" />
        </v-col>
        <v-col cols="8">
          <div>
            <p>{{ product.name }}</p>
            <v-btn @click="deleteProduct(index)" class="delete-btn">X</v-btn>
          </div>

          <v-card style="height: 36px; margin-left: 15px; width: 189px" class="d-flex">
            <v-btn class="cart-btn" @click="decrementQuantity(index)"> - </v-btn>
            <input type="number" v-model="product.quantity" class="input-cart" />
            <v-btn class="cart-btn" @click="incrementQuantity(index)"> + </v-btn>
          </v-card>
          <v-row>
            <v-col cols="8">
              <span></span>
            </v-col>
            <v-col cols="4">
              <h3>VND {{ (product.price * product.quantity) | formatPrice }}</h3>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row> </v-row>
    </v-card>
    <template>
      <v-container class="order-btn">
        <v-row>
          <v-col cols="5" style="text-align: right">
            <h2>Tổng số tiền:</h2>
          </v-col>
          <v-col cols="7" style="text-align: center">
            <h2>VND {{ getCart.totalPrice | formatPrice }}</h2>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
          <v-btn class="buy-btn teal darken-4" @click="buyProduct">Mua tất cả sản phẩm</v-btn>
        </v-row>
      </v-container>
    </template>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "cart-detail",
  methods: {
    deleteProduct(index) {
      this.$store.dispatch("deleteProductOnCart", index);
    },
    decrementQuantity(index) {
      this.$store.dispatch("decrementQuantity", index)
    },
    incrementQuantity(index) {
      this.$store.dispatch("incrementQuantity", index)
    },
    buyProducts() {

    }
  },
  computed: {
    ...mapGetters(["getCart"]),
  },
  filters: {
    formatPrice(productPrice) {
      return productPrice?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    },
  },
  created() {
    this.getCart;
  },
};
</script>

<style scoped>
#cart-detail {
  margin-top: 20px;
  margin-bottom: 20px;
}
.cart-list-product {
  height: 214px;
}
img {
  position: absolute;
  width: 244px;
  height: 191px;
}
.cart-btn {
  margin-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
  width: 10px;
  height: 20px;
}
.input-cart {
  width: 60px;
  text-align: center;
}
.order-btn {
  margin-top: 30px;
}
.buy-btn {
  width: 568px;
  height: 67px;
  color: white;
}
p {
  margin-right: 10px;
}
.delete-btn {
  float: right;
  margin-right: 10px;
}
</style>
