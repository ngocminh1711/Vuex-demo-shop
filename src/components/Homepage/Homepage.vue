<template>
  <v-app>
    <Carousels/>
    <ProductsCard/>
    <router-view/>
  </v-app>
 
</template>

<script>
import Carousels from './Carousels.vue';
import ProductsCard from './ProductsCard.vue'


export default {
  name: 'home-page',
  components: {
    Carousels,
    ProductsCard,

  }
}
</script>

    ProductsCard
<style scoped>

</style>