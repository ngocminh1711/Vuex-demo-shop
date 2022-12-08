<template>
  <v-app-bar class="teal darken-4" height="600" dark>
    <v-container class="container">
      <v-row class="row-header">
        <h1>innisfree</h1>
        <v-col>
          <v-row>
            <v-img />
          </v-row>
        </v-col>
      </v-row>
      <hr />
      <v-row>
        <v-col
            cols="12"
            md="8"
        >
        <div class="policy-text">
        <p>Chính sách giao hàng|</p>
        <p>Chính sách bảo mật thông tin khách hàng|</p>
        <p>Chính sách mua hàng|</p>
        <p>Chính sách trả hàng </p>
      </div>
        </v-col>
        <v-col
        cols="6"
        md="4"
      ></v-col>
      </v-row>
      <v-row>
        <v-col
            cols="12"
            md="8"
        >
        <div class="contact-info">
            <p>Thời gian làm việc Thứ 2 ~ Thứ 6 09:00 ~ 17:00 (trừ Thứ 7, Chủ Nhật và ngày lễ)</p>
        <p>Tư vấn và chăm sóc khách hàng 028 3827 9777 (Ext: 125)</p>
        <p>Email cs_vn@innisfree.com</p>
        <p>CÔNG TY TNHH AMOREPACIFIC VIỆT NAM</p>
        <p>GIẤY CNĐKDN: 0309984165 - Ngày cấp: 05/05/2010, được sửa đổi lần thứ 21, ngày 04/04/2022</p>
        <p>Cơ quan cấp: Phòng Đăng kí kinh doanh - Sở Kế hoạch và Đầu tư TP.HCM</p>
        <p>Địa chỉ đăng ký kinh doanh: Lầu 4A, Toà nhà Vincom, 72 Lê Thánh Tôn, Phường Bến Nghé, Quận 1, Tp. Hồ Chí Minh, Việt Nam.</p>
        </div>
        
        </v-col>
        </v-row>
      
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "footer-bar",
};
</script>

<style scoped>
h1 {
  font-family: "Lucida Console";
}
.container {
}
.row-header {
  margin-bottom: 100px;
}
.policy-text {
    display: flex;
    justify-content: space-between;
}
.contact-info {
    line-height: normal;
}
</style>
