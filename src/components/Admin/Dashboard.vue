<template>
  <v-app>
    <v-container>
        <CreateNewProductForm/>
        <v-data-table
    :headers="headers"
    :items="getAllProducts"
    :items-per-page="5"
    class="elevation-1"
  >

  </v-data-table>
    </v-container>
  </v-app>
</template>

<script>
import CreateNewProductForm from './CreateNewProductForm.vue';

  export default {
    name: 'dash-board',
    data () {
      return {
        headers: [
          {
            text: 'Name Product',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Price', value: 'price' },
          { text: 'Amount', value: 'amount' },
          { text: 'Detail', value: 'detail' , align: 'start'},
          { text: 'Actions'}
        ],
      }
    },
    components: {
        CreateNewProductForm,
    },
    computed: {
        getAllProducts() {
            return this.$store.state.products
        }
    },
    methods: {
        getProducts(){
            this.$store.dispatch("getProducts")
        }
    },
    mounted() {
        this.getProducts();
    }
  }
</script>

<style>
</style>