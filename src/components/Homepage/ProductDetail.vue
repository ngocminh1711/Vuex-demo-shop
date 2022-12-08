<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="6" md="4">
          <img :src="getProduct.image" />
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
          <hr/>
        </v-col>
        <v-col> </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "product-detail",
  methods: {
    getProductID() {
      let idProduct = this.$route.params.id;
      this.$store.dispatch("getProductById", idProduct);
    },
  },
  computed: {
    ...mapGetters(["getProduct"]),
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
</style>
