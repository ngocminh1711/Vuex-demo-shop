<template>
  <v-carousel v-model="model">
    <v-carousel-item v-for="color in colors" :key="color">
      <v-sheet :color="color" height="100%" tile>
        <v-row class="fill-height" align="center" justify="center">
            <img :src="color"/>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "carousels-image",
  data() {
    return {
      model: 0,
      colors: ["https://www.innisfree.vn/static/upload/display/banner/main/482_attimg1_origin.jpg", 
      "https://www.innisfree.vn/static/upload/display/banner/main/484_attimg1_origin.jpg", 
      "https://www.innisfree.vn/static/upload/display/banner/main/487_attimg1_origin.jpg", 
      "https://www.innisfree.vn/static/upload/display/banner/main/481_attimg1_origin.jpg", 
      "https://www.innisfree.vn/static/upload/display/banner/main/485_attimg1_origin.jpg"],
    };
  },
};
</script>

<style></style>
