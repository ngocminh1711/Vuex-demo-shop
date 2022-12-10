<template>
  <div id="create-new-product-form">
    <v-dialog transition="dialog-top-transition" max-width="600">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="teal darken-4" style="color: #FFFF" v-bind="attrs" v-on="on">Create New Product</v-btn>
      </template>
      <template v-slot:default="dialog">
        <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
        <v-card>
          <v-toolbar class=" teal darken-4 text-center"  dark
            >Create New Product Form</v-toolbar
          >
          <v-container>
           
              <v-row>
                <v-text-field class="text-field" 
                  v-model="newProduct.name" 
                  label="Name Product"
                  :rules="nameRules"
                  required
                  >
                </v-text-field>
                <v-text-field
                  class="text-field"
                  type="number"
                  v-model="newProduct.price"
                  label="Price Product"
                  :rules="priceRules"
                  required
                >
                </v-text-field>
              </v-row>
              <v-row>
                <v-text-field
                  class="text-field"
                  type="number"
                  v-model="newProduct.amount"
                  label="amount Product"
                  :rules="amountRules"
                  required
                >
                </v-text-field>
                <v-text-field 
                  class="text-field" 
                  v-model="newProduct.image" 
                  label="Image Product"
                  :rules="imageRules"
                  required
                  >
                </v-text-field>
              </v-row>
              <v-row>
                <v-textarea 
                class="text-area" 
                v-model="newProduct.detail" 
                label="Detail"
                :rules="detailRules"
                required>
                </v-textarea>
              </v-row>
            
          </v-container>
            <v-card-actions class="card-actions d-flex justify-end">
            <v-btn text @click="dialog.value = false">Close</v-btn>
            <v-btn
            :disabled="!valid"
            class="teal darken-4"
            style="color: #FFFF"
            @click="dialog.value = false; createNewProduct(); validate()"
            >Submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
      </template>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "create-new-product-form",
  data() {
    return {
      newProduct: {
        name: "",
        price: "",
        amount: "",
        detail: "",
        image: "",
      },
      valid: true,
      nameRules: [
        v => !! v || 'Name is required',
        v => (v && v.length >= 20 ) || 'Name must be greater than 20 characters',
      ],
      priceRules: [
        v => !!v || 'Price is required',
      ]
      ,
      amountRules: [
        v => !!v || 'Amount is required',
      ]
      ,
      detailRules: [
        v => !!v || 'Detail is required',
        v => (v && v.length >= 20) || 'Name must be greater than 20 characters',
      ]
      ,
      imageRules: [
        v => !!v || 'Image is required',
      ]
      ,
    };
  },
  methods: {
    createNewProduct() {
        let data = this.newProduct;
      this.$store.dispatch("createNewProduct", data);
      this.$alert(
          "Tạo mới sản phẩm thành công.",
          "Create successfully",
          "success"
        ).then(() => console.log("Closed"));
    },
    validate() {
      this.$ref.form.validate();
    }
  },
  filters: {
    formatNumber(number) {
      return number?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    }
  }
};
</script>

<style scoped>
#create-new-product-form {
  margin-bottom: 20px;
}
.text-field {
  position: relative;
  margin: 10px;
}
.text-area {
  position: relative;
  margin: 10px;
}
.card-actions {
    display: flex;
}
.create-btn {
    display: inline;
}
.close-btn {
    display: inline;
}
</style>
