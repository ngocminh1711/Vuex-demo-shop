<template>
  <v-container>
    <h1>INNISFREE GỢI Ý CHO BẠN</h1>
    <div class="d-flex justify-space-center flex-wrap">
      <v-card class="card-item" max-width="250" v-for="product in getProducts" :key="product._id">
        <v-img
          class="white--text align-end"
          height="250px" 
          :src="product.image"
          style="cursor: pointer"
          @click="navigateDetailProduct(product._id)"
        >
        </v-img>
        <v-card-title>{{product.name | formatName}}</v-card-title>
        <v-card-text class="text--primary">
            <h2 style="display: inline">VND</h2>
          <h2 style="display: inline"> {{ product.price | formatPrice  }}</h2>
        </v-card-text>
        <v-btn @click="navigateDetailProduct(product._id)" class="teal darken-4"  width="100%">
          <span style="color:azure">Mua Hàng</span>
        </v-btn>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import router from "../../router/index.js"

export default {
  name: "product-card",
  computed: {
    ...mapGetters(["getProducts"]),
  },
  methods: {
    getAllProduct() {
      this.$store.dispatch("getProducts");
    },
    navigateDetailProduct(idProduct) {
      router.push({ path: `/detail/${idProduct}` })
    }
  },
  filters: {
    formatPrice(productPrice){
      return productPrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    },
    formatName(productName){
      return productName.substring(0, 24) + "...";
     }
    }
  ,
  mounted() {
    this.getAllProduct();
  },
};
</script>

<style scoped>
.card-item {
  
    margin-left: 39px;
    margin-top: 10px;
    margin-bottom: 10px;
}
h1 {
    margin-left: 39px;
}

</style>
