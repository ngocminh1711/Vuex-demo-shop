<template>
    <v-container>
      <v-data-table
        :headers="headers"
        :items="getOrders"
        sort-by="calories"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title class="order-title">Order Detail</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-dialog
          v-model="dialog"
          max-width="500px"
        >
            <template>
                <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="showProduct.name"
                      label="Dessert name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="showProduct.price"
                      label="Calories"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="showProduct.amount"
                      label="Fat (g)"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="showProduct.detail"
                      label="Carbs (g)"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="showProduct.id"
                      label="Protein (g)"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save(showProduct)"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
            </template>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">fa fa-eye </v-icon>
          <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
        </template>
      </v-data-table>
    </v-container>
</template>


<script>
import { mapGetters } from "vuex"

  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'First Name',
          align: 'start',
          sortable: false,
          value: 'firstName',
        },
        { text: 'Last Name', value: 'lastName' },
        { text: 'Address', value: 'addressCustomer' },
        { text: 'Phone Number', value: 'phonenumber' },
        { text: 'Date', value: 'date' },
        { text: 'Total Money', value: 'totalMoney'},
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      orders: [],
      editedIndex: -1,
      showProduct: {
        name: '',
        detail: '',
        id: '',
        image: '',
        amount: 0,
        quantity: 0,
      },
      defaultItem: {
        name: '',
        detail: '',
        amount: 0,
        id: '',
        image: '',
        quantity: 0,
      },
    }),

    computed: {
        ...mapGetters(["getOrders"]),
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
      this.handleGetOrders()
    },

    methods: {
      initialize () {
    
      },

      handleGetOrders() {
        this.$store.dispatch("getOrders")
      },

      editItem (item) {
       
        this.editedIndex = this.getOrders.indexOf(item)
        console.log(this.editedIndex)
        console.log()
        this.dialog = true
      },
      deleteItem (item) {
       let id = item._id;
       this.$store.dispatch("deleteOrder", id)
      },


      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.showProduct = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.showProduct = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save (product) {
        console.log('product', product)
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>

<style scoped>
.order-title {
    border: 10px solid #004D40;
    border-radius: 10px;
    background-color: #004D40;
    color: #FFFF;
}
</style>
>
