<template>
    <v-app-bar
      app
      class="teal darken-4"
      dark
      height="100"
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://jeju.com.vn/wp-content/uploads/2016/02/Logo-Innis-e1455941436513.png"
          transition="scale-transition"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text-color="black"
      >
        <span class="mr-2">Login</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script>
export default {
    name: 'nav-bar'
}
</script>

<style>

</style>