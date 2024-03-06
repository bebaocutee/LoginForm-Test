<template>
  <div class="register-wrapper">
    <h4 class="register-title">Đăng ký tài khoản</h4>
    <div class="register-container">
      <div class="register-form-content">
        <!-- row 1 -->
        <div class="form-group_row-1">
          <v-col>
            <div class="form-group-store">
              <label>Tên cửa hàng</label>
              <input
                class="form-group__name-store"
                placeholder="Nhập tên cửa hàng..."
              />
            </div>
          </v-col>

          <v-col>
            <div class="form-group-store">
              <label>Số điện thoại</label>
              <input
                class="form-group__name-store"
                placeholder="Nhập số điện thoại"
              />
            </div>
          </v-col>

          <v-col>
            <div class="form-group-store">
              <label>Email</label>
              <input
                class="form-group__name-store"
                placeholder="Nhập email..."
              />
            </div>
          </v-col>
        </div>

        <!-- row 2 -->
        <div class="form-group_row-2">
          <v-col>
            <div class="form-group-password">
              <label>Mật khẩu</label>
              <input
                class="form-group__input-password"
                placeholder="Nhập mật khẩu..."
              />
              <span class="password-icon">
                <img
                  src="/src/assets/images/lookpassword.svg"
                  width="24px"
                  height="24px"
                  alt="lookpassword"
                />
              </span>
            </div>
          </v-col>

          <v-col>
            <div class="form-group-password">
              <label>Xác nhận mật khẩu</label>
              <input
                class="form-group__confirm-pass"
                placeholder="Xác nhận mật khẩu..."
              />
              <span class="password-icon">
                <img
                  src="/src/assets/images/lookpassword.svg"
                  width="24px"
                  height="24px"
                  alt="lookpassword"
                />
              </span>
            </div>
          </v-col>
        </div>

        <!-- row-3 -->
        <div class="form-group_row-3">
          <v-col>
            <div class="form-group-address">
              <label>Địa chỉ</label>
              <input
                class="form-group-address__apartment"
                placeholder="Nhập số nhà, tòa nhà, tên đường..."
              />
            </div>
          </v-col>
        </div>

        <!-- row-4 -->
        <div class="form-group_row-4">
          <v-col>
            <div class="form-group-address-city">
              <label>Phường/ Xã</label>
              <v-select
                placeholder="Chọn Phường/ Xã"
                :items="['A', 'B', 'C', 'D', 'E', 'F']"
                variant="outlined"
                class="form-group-address__district"
              ></v-select>
            </div>
          </v-col>
          <v-col>
            <div class="form-group-address">
              <label>Quận/ Huyện</label>
              <v-select
                placeholder="Chọn Quận/ Huyện"
                :items="['A', 'B', 'C', 'D', 'E', 'F']"
                variant="outlined"
                class="form-group-address__district"
              ></v-select>
              
            </div>
          </v-col>
          <v-col>
            <div class="form-group-address">
              <label>Thành phố</label>
              <v-select
                placeholder="Chọn thành phố"
                :items="['A', 'B', 'C', 'D', 'E', 'F']"
                variant="outlined"
                class="form-group-address__district  custom-select"
              ></v-select>
            </div>
          </v-col>
        </div>
      </div>

      <div class="form-checkbox">
        <div class="checkbox-content">
          <input type="checkbox" class="btn-checkbox" />
          <p class="text">
            Tôi đã đọc và đồng ý với
          </p>
          <a href="#" class="link-text">Chính sách bảo mật thông tin</a>
          <button class="register-button">Đăng ký ngay</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
* {
  margin: 0;
}
/* .v-col {
  box-sizing: border-box;
  padding: 0;
} */
.register-wrapper {
  width: 798px;
  height: 478px;
}
.register-title {
  text-align: center;
  margin-bottom: 10px;
  text-transform: uppercase;
  color: #dca245;
  font-weight: 600;
  size: 25px;
  font-size: 1.35rem;
}

.register-container {
  display: flex;
  flex-direction: column;

}

.register-form-content {
  display: flex;
  flex-direction: column;
}

/* row-1 */
.form-group_row-1 {
  display: flex;
}

.form-group-store {
  display: flex;
  padding: 0;
  flex-direction: column;

}

.form-group__name-store {
  /* width: 250px; */
  height: 44px;
  padding: 0 12px;
  border: 1px solid #a0abbb;
  border-radius: 4px;
  color: #a0abbb;
}

/* row-2 */
.form-group_row-2 {
  display: flex;
}

.form-group-password {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 67px;
}

.form-group__input-password {
  /* width: 387px; */
  height: 44px;
  padding: 0 12px;
  border: 1px solid #a0abbb;
  border-radius: 4px;
  color: #a0abbb;
}

.form-group__confirm-pass {
  /* width: 387px; */
  height: 44px;
  padding: 0 12px 0 12px;
  border: 1px solid #a0abbb;
  border-radius: 4px;
  color: #a0abbb;
}

.password-icon {
  position: absolute;
  top: 50%;
  right: 10px;
}

/* row-3 */
.form-group_row-3 {
  display: flex;
}

.form-group-address {
  position: relative;
  display: flex;
  flex-direction: column;
}

.form-group-address__apartment {
  height: 44px;
  padding: 0 12px;
  border: 1px solid #a0abbb;
  border-radius: 4px;
  color: #a0abbb;
}

/* row-4 */
.form-group_row-4 {
  display: flex;
}

/* .form-group-address-city {
  position: relative;
  display: flex;
  flex-direction: column;
} */

.form-group-address__district {
  /* align-items: center;
  border-radius: 4px; */
  height: 44px;
}

/* checkbox */
.form-checkbox {
  display: flex;
  margin-top: 24px;
}

.checkbox-content {
  display: flex;
  align-items: center;
}

.btn-checkbox {
  /* appearance: none; */
  /* -webkit-appearance: none; */
  width: 18px;
  height: 18px;
  margin-left: 3px;
  margin-right: 16px;
  border: 1px solid #ecad48;
  /* background-color: transparent; */
}

/* .btn-checkbox:checked {
  background-color: #ECAD48;
} */

.link-text {
  margin-left: 1ch;
  text-decoration: none;
  color: #ECAD48;
}

.register-button {
  height: 44px;
  margin-left: 220px;
  padding: 12px 18px 12px 18px;

  box-sizing: border-box;
  border: 1px solid #fdba4d;
  border-radius: 4px;
  background-color: #fdba4d;
  color: #ffffff;
}

.v-col {
  padding-left: 0;
}
</style>