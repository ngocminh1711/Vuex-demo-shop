<template>
  <v-container>
    <v-row>
      <v-col cols="3"> </v-col>
      <v-col cols="6" style="margin-top: 20px; padding-bottom: 0px">
        <v-row>
          <v-col cols="6" >
            <div class="name-customer-text">
              <h5>Tên người nhận : {{ getOrder.firstName }} {{ getOrder.lastName }}</h5>
            </div>
          </v-col>
          <v-col cols="6" style="padding-bottom: 0px">
            <div class="date-text" style="padding-bottom: 0px">
              <p>{{ getOrder.date | dateCreateBill }}</p>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col rols="3" style="padding-top: 0px; padding-bottom: 0px">
            <div class="address-text">
              <p>
                {{ getOrder.addressCustomer }}
              </p>
            </div>
          </v-col>
          <v-col style="padding-top: 0px; padding-bottom: 0px">
            <div class="bill-text">
              <p>Hóa đơn #{{ getOrder._id }}</p>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" style="padding-top: 0px; font-size: 12px">
            <p>phone: {{ getOrder.phonenumber }}</p>
          </v-col>
        </v-row>
        <h1>Hóa Đơn</h1>
        <template>
          <v-data-table
            dense
            :headers="headers"
            :items="getOrder.products"
            item-key="name"
            class="elevation-1"
            hide-default-footer
          ></v-data-table>
        </template>
      </v-col>
      <v-col cols="3"></v-col>
    </v-row>
    <v-row>
      <v-col cols="3"> </v-col>
      <v-col cols="6">
        <div class="total-price-text">
          <h3>Tổng tiền: VND {{ getOrder.totalMoney | formatPrice }}</h3>
        </div>
      </v-col>
      <v-col cols="3"></v-col>
    </v-row>
    <v-row>
      <v-col cols="3"></v-col>
      <v-col cols="6">
        <v-row>
          <v-col cols="10"></v-col>
          <v-col cols="2">
            <v-btn @click="navigateHomepage" class="teal darken-4" style="color: #FFFF">
          <v-icon>
            fa-solid fa-angle-left
          </v-icon>
        </v-btn>
          </v-col>
          
        </v-row>
        
        
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import router from "../../router/index.js"

export default {
  name: "bill-detail",
  data: () => ({
    headers: [
      {
        text: "Tên sản phẩm",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Số lượng", value: "quantity" },
      { text: "Giá", value: "price" },
    ],

  }),
  methods: {
    handleOrder() {
      this.$store.dispatch("getOrder");
    },
    navigateHomepage() {
      router.push('/')
    }
  },
  mounted() {
    this.handleOrder();
    this.getOrder;
  },
  filters: {
    formatPrice(productPrice) {
      return productPrice?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    },
    formatDate(dateCreateBill) {
      return dateCreateBill?.toDateString();
    }
  },
  computed: {
    ...mapGetters(["getOrder"]),
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
.total-price-text {
  float: right;
  margin-right: 50px;
}
.bill-text {
  padding-top: 0px;
  float: right;
  font-size: 11px;
}
.date-text {
  float: right;
  padding-bottom: 0px;
  font-size: 11px;
}
.address-text {
  font-size: 12px;
  padding-top: 0px;
}
.name-customer-text {
}
</style>
>
