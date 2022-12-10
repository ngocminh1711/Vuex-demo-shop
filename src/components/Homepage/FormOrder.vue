<template>
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
          class="teal darken-4 buy-btn"
            dark
            v-bind="attrs"
            v-on="on"
          >
            Mua Tất Cả Sản Phẩm
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Thông Tin Mua Hàng</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="6"
                >
                  <v-text-field
                    label="Họ*"
                    required
                    v-model="firstname"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="6"
                >
                  <v-text-field
                    label="Tên"
                    hint="example of helper text only on focus"
                    v-model="lastname"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Email*"
                    required
                    v-model="email"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Địa chỉ*"
                    required
                    v-model="address"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Số Điện Thoại*"
                    type="number"
                    required
                    v-model="phonenumber"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              @click="dialog = false"
            >
              Close
            </v-btn>
            <v-btn
              style="color: #FFFF"
              class="teal darken-4"
              text
              @click="createOrder() ; dialog = false"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </template>

  <script>
import router from '../../router'
  export default {
    data: () => ({
      dialog: false,
      firstname: '',
      lastname: '',
      address: '',
      email: '',
      phonenumber: '',
    }),
    methods: {
      createOrder() {
        let userInfo = {
          firstname: this.firstname,
          lastname: this.lastname,
          address: this.address,
          email: this.email,
          phonenumber: this.phonenumber
        }
        let products = JSON.parse(localStorage.getItem('cart'))
        let data = {
          userInfo: userInfo,
          products: products
        }
        this.$store.dispatch("createOrder", data)
        router.push('/bill-detail')
      
      }
    }
  }
</script>

<style scoped>
.buy-btn{
    width: 568px;
  height: 67px;
}
</style>