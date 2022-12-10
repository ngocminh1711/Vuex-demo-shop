<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="6" md="4">
          <img  width="110%" height="auto" :src="getProduct.image" />
        </v-col>

        <v-col class="info-text" cols="12" md="8">
          <h2>{{ getProduct.name }}</h2>
          <h5>{{ getProduct.detail }}</h5>
          <!-- Icon Line -->
          <div class="icon-line">
            <v-row>
              <v-col class="d-flex justify-start" cols="3">
                <v-icon color="teal darken-4"> fa-regular fa-leaf </v-icon>
                <v-icon color="teal darken-4"> fa-regular fa-leaf </v-icon>
                <v-icon color="teal darken-4"> fa-regular fa-leaf </v-icon>
                <v-icon color="teal darken-4"> fa-regular fa-leaf </v-icon>
                <v-icon color="teal darken-4"> fa-regular fa-leaf </v-icon>
              </v-col>
              <v-col class="d-flex justify-start" cols="2">
                <v-icon color="red darken-3"> fa-regular fa-heart </v-icon>
              </v-col>
              <v-col class="d-flex justify-start" cols="2">
                <v-icon>fa-brands fa-facebook</v-icon>
              </v-col>
            </v-row>
          </div>
          <hr />

          <v-container style="padding-left: 0px">
            <div class="d-flex justify-space-around">
              <div>
                <v-icon>fa-solid fa-bullseye</v-icon>
                <span>Chăm sóc da</span>
              </div>
              <div>
                <v-icon class="">fa-thin fa-spinner</v-icon> <span>Dưỡng Sáng</span>
              </div>
              <div>
                <v-icon>fa-regular fa-heart</v-icon>
                <span>Dưỡng ẩm</span>
              </div>
              <div>
                <v-icon class="">fa-regular fa-eye</v-icon>
                Cho mọi loại da
              </div>
              <div></div>
            </div>
          </v-container>
          <hr />
          <v-container class="d-flex" style="padding-left: 0px">
            <div>
              <h3>Số lượng</h3>
            </div>
            <v-card style="height: 36px; margin-left: 15px" class="d-flex">
              <v-btn class="cart-btn" @click="decrementQuantity"> - </v-btn>
              <input v-model="product.quantity" type="number" class="input-cart" />
              <v-btn class="cart-btn" @click="incrementQuantity"> + </v-btn>
            </v-card>
            <v-spacer></v-spacer>
            <div>
              <h1>
                VND
                {{
                  cart.totalPrice == 0 ? getProduct.price : cart.totalPrice | formatPrice
                }}
              </h1>
            </div>
          </v-container>
          <v-container>
            <v-btn style="width: 100%" color="teal darken-4" @click="addToCart">
              <div style="color: #ffff">
                <v-icon color="white"> fa-thin fa-cart-plus </v-icon> Thêm vào giỏ hàng
              </div>
            </v-btn>
          </v-container>
          <hr />
          <h4>Lưu ý sử dụng:</h4>
          <p>1. Ngưng sử dụng sản phẩm khi thấy da có dấu hiệu bất thường.</p>
          <p>2. Đóng nắp sản phẩm sau khi dùng.</p>
          <p>3. Dùng sản phẩm ngay sau khi mở nắp.</p>
          <h4>Số lô & Hạn sử dụng:</h4>
          <p>Thông tin được in trên bao bì sản phẩm</p>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "product-detail",
  data() {
    return {
      product: {
        id: "",
        name: "",
        price: 0,
        amount: 0,
        detail: "",
        image: "",
        quantity: 1,
      },
      cart: {
        products: [],
        totalPrice: 0,
      },
    };
  },
  methods: {
    getProductID() {
      let idProduct = this.$route.params.id;
      this.$store.dispatch("getProductById", idProduct);
    },
    incrementQuantity() {
      this.product.quantity++;
      this.cart.totalPrice = this.product.quantity * this.getProduct.price;
    },
    decrementQuantity() {
      if (this.product.quantity > 1) {
        this.product.quantity--;
        this.cart.totalPrice = this.product.quantity * this.getProduct.price;
      }
    },
    addToCart() {
      this.product = {
        ...this.product,
        id: this.getProduct._id,
        name: this.getProduct.name,
        price: this.getProduct.price,
        amount: this.getProduct.amount,
        detail: this.getProduct.detail,
        image: this.getProduct.image,
      };
      this.$store.dispatch("addToCart", this.product);
      this.$alert(
          "Thêm mới sản phẩm thành công.",
          "Add Product successfully",
          "success"
        ).then(() => console.log("Closed"));
    },
  },
  computed: {
    ...mapGetters(["getProduct"]),
  },
  filters: {
    formatPrice(productPrice) {
      return productPrice?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    },
  },
  mounted() {
    this.getProductID();
  },
};
</script>

<style scoped>
.info-text {
  padding-left: 100px;
}
.icon-line {
  margin-top: 10px;
  display: flex;
  flex-wrap: nowrap;
  text-align: center;
}
.icon-heart {
  margin-left: 20px;
}
hr {
  margin-top: 10px;
  margin-bottom: 10px;
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
</style>
