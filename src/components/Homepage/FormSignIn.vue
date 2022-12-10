<template>
  <div id="form-sign-in">
    <v-container class="grey lighten-5">
      <!-- Columns are always 50% wide, on mobile and desktop -->
      <v-row>
        <v-col cols="6" class="banner">
          <img
            width="100%"
            height="auto"
            class="image-banner"
            src="https://theklog.co/wp-content/uploads/2017/06/innisfree-banner.jpg"
          />
        </v-col>
        <v-col cols="6" class="col-sign-in-form">
          <v-container class="container-form">
            <v-form>
              <v-row class="form-title">
                <h1>Đăng nhập thành viên</h1>
              </v-row>
              <v-row>
                <v-text-field label="UserName" v-model="accountAdmin.username"></v-text-field>
              </v-row>
              <v-row>
                <v-text-field
                  type="password"
                  label="Password"
                  v-model="accountAdmin.password"
                ></v-text-field>
              </v-row>

              <div>
                <v-btn @click="signIn" class="teal darken-4 sign-in-btn">Đăng nhập</v-btn>
              </div>
              <div class="facebook-google-btn">
                <v-btn class="indigo darken-3" style="color: #ffff; margin-left: 10px">
                  <v-icon>fa-brands fa-facebook</v-icon>
                </v-btn>
                <v-btn class="red darken-3" style="color: #ffff; margin-left: 10px">
                  <v-icon>fa-brands fa-google</v-icon>
                </v-btn>
              </div>
            </v-form>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import router from "../../router/index.js";

export default {
  name: "form-sign-in",
  data() {
    return {
      accountAdmin: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    signIn() {
      if (
        this.accountAdmin.username == "admin" &&
        this.accountAdmin.password == "admin"
      ) {
        router.push("/admin");
      } else {
        this.$alert(
          "Sai tài khoản hoặc mật khẩu vui lòng nhập lại.",
          "Đăng nhập thất bại",
          "warning"
        ).then(() => console.log("Closed"));
      }
    },
  },
};
</script>

<style scoped>
.col-sign-in-form {
  width: 470px;
}
.container-form {
  margin: 20px 20px 20px 20px;
}

h1 {
  text-align: center;
  width: 100%;
}
.sign-in-btn {
  margin-top: 50px;
  width: 100%;
  color: #ffff;
}
.facebook-google-btn {
  margin-top: 10px;
  text-align: center;
}
</style>
