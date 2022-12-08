<template>
  <div id="create-new-product-form">
    <v-dialog transition="dialog-top-transition" max-width="600">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="success" v-bind="attrs" v-on="on">Create New Product</v-btn>
      </template>
      <template v-slot:default="dialog">
        <v-card>
          <v-toolbar class="text-center" color="success" dark
            >Create New Product Form</v-toolbar
          >
          <v-container>
            <v-form>
              <v-row>
                <v-text-field class="text-field" v-model="newProduct.name" label="Name Product">
                </v-text-field>
                <v-text-field
                  class="text-field"
                  type="number"
                  v-model="newProduct.price"
                  label="Price Product"
                >
                </v-text-field>
              </v-row>
              <v-row>
                <v-text-field
                  class="text-field"
                  type="number"
                  v-model="newProduct.amount"
                  label="amount Product"
                >
                </v-text-field>
                <v-text-field class="text-field" v-model="newProduct.image" label="Image Product">
                </v-text-field>
              </v-row>
              <v-row>
                <v-textarea class="text-area" v-model="newProduct.detail" label="Detail">
                </v-textarea>
              </v-row>
            </v-form>
          </v-container>
            <v-card-actions class="card-actions d-flex justify-end">
            <v-btn text @click="dialog.value = false">Close</v-btn>
            <v-btn 
            color="success" 
            @click="dialog.value = false; createNewProduct()"
            >Create</v-btn>
          </v-card-actions>
        </v-card>
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
    };
  },
  methods: {
    createNewProduct() {
        let data = this.newProduct;
      this.$store.dispatch("createNewProduct", data);
    },
  },
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
