<template>
  <v-app>
    <NavBar />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from "./components/Navbar/Navbar.vue";
import Footer from "./components/Footer/Footer.vue";

export default {
  name: "App",

  components: {
    NavBar,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
