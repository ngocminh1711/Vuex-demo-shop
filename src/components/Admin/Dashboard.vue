<template>
  <v-container>
    <CreateNewProductForm />
    <v-data-table
      :headers="headers"
      :items="getAllProducts"
      sort-by="price"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-toolbar flat>
            <v-dialog v-model="dialog" max-width="500px">
              <!-- Edit Product  -->
              <v-card>
                <v-card-title>
                  <span class="text-h5">Edit Product</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.name"
                          label="Product name"
                          :rules="nameRules"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.price"
                          type="number"
                          label="Price"
                          :rules="priceRules"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          type="number"
                          v-model="editedItem.amount"
                          label="Amount"
                          :rules="amountRules"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          type="text"
                          v-model="editedItem.detail"
                          label="Detail"
                          :rules="detailRules"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.image"
                          label="Image"
                          :rules="imageRules"
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <!-- Modal Edit Button -->
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn text @click="close"> Cancel </v-btn>
                  <v-btn
                    color="teal darken-4"
                    style="color: #ffff"
                    :disabled="!valid"
                    @click="
                      save();
                      validate();
                    "
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </v-form>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import CreateNewProductForm from "./CreateNewProductForm.vue";

export default {
  name: "dash-board",
  components: {
    CreateNewProductForm,
  },
  data: () => ({
    dialog: false,
    dialogDelete: false,
    // info-validation
    valid: true,
    nameRules: [
      (v) => !!v || "Name Product is required",
      (v) => (v && v.length >= 20) || "Name product must be greater than 20 characters",
    ],
    priceRules: [(v) => !!v || "Price is required"],
    amountRules: [(v) => !!v || "Amount is required"],
    detailRules: [
      (v) => !!v || "Detail is required",
      (v) => (v && v.length >= 20) || "Name must be greater than 20 characters",
    ],
    imageRules: [(v) => !!v || "Image is required"],
    // Info data-table
    headers: [
      {
        text: "Name Product",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Price", value: "price" },
      { text: "Amount", value: "amount" },
      { text: "Detail", value: "detail", align: "start" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    products: [],
    editedIndex: -1,
    editedItem: {
      id: "",
      name: "",
      price: 0,
      amount: 0,
      detail: "",
      image: "",
    },
    defaultItem: {
      name: "",
      price: 0,
      amount: 0,
      detail: "",
      image: "",
    },
  }),

  computed: {
    getAllProducts() {
      return this.$store.state.products;
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
    this.getProducts();
  },

  methods: {
    getProducts() {
      this.$store.dispatch("getProducts");
    },
    initialize() {
      this.products = this.getAllProducts;
    },

    editItem(item) {
      this.editedIndex = this.getAllProducts.indexOf(item);
      (this.editedItem = {
        id: item._id,
        name: item.name,
        price: item.price,
        amount: item.amount,
        detail: item.detail,
        image: item.image,
      }),
        (this.dialog = true);
    },

    deleteItem(item) {
      this.$confirm("Do you want to delete this item.", "Delete item", "question", item)
        .then(() => {
          this.$store.dispatch("deleteProduct", item._id);
        })
        .catch(() => {
          console.log("OK not selected.");
        });
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      this.$store.dispatch("editProduct", this.editedItem);
      this.close();
      this.$alert(
        "Cập nhật sản phẩm thành công.",
        "Update successfully",
        "success"
      ).then(() => console.log("Closed"));
    },
    validate() {
      this.$ref.form.validate();
    },
  },
};
</script>

<style scoped></style>
