<template>
  <v-app-bar app class="teal darken-4" dark height="100">
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        style="cursor: pointer"
        src="https://jeju.com.vn/wp-content/uploads/2016/02/Logo-Innis-e1455941436513.png"
        transition="scale-transition"
        width="100"
        @click="navigateHome"
      />
    </div>

    <v-spacer></v-spacer>

    <v-btn
     @click="navigateSignIn"
      target="_blank"
      text-color="black"
    >
      <span class="mr-2">Đăng Nhập</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
    <CartButton />
  </v-app-bar>
</template>

<script>
import CartButton from "./CartButton.vue";
import router from "../../router/index.js";

export default {
  name: "nav-bar",
  components: {
    CartButton,
  },
  methods: {
    navigateHome() {
      router.push({ path: `/` });
    },
    navigateSignIn() {
      router.push({ path: `/sign-in` });
    }
  },
};
</script>

<style></style>
