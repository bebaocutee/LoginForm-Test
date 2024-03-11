<template>
  <div class="register-wrapper">
    <h4 class="register-title">Đăng ký tài khoản</h4>
    <div class="register-container">
      <div class="register-form-content">
        <!-- row 1 -->
        <v-row>
          <v-col>
            <div class="form-group-store">
              <label>Tên cửa hàng</label>
              <input
                class="form-group__name-store"
                placeholder="Nhập tên cửa hàng..."
                v-model="form.store_name"
              />
            </div>
          </v-col>

          <v-col>
            <div class="form-group-store">
              <label>Số điện thoại</label>
              <input
                class="form-group__name-store"
                placeholder="Nhập số điện thoại"
                v-model="form.phone_number"
              />
            </div>
          </v-col>

          <v-col>
            <div class="form-group-store">
              <label>Email</label>
              <input
                class="form-group__name-store"
                placeholder="Nhập email..."
                v-model="form.email"
              />
            </div>
          </v-col>
        </v-row>

        <!-- row 2 -->
        <v-row>
          <v-col>
            <div class="form-group-password">
              <label>Mật khẩu</label>
              <input
                class="form-group__input-password"
                placeholder="Nhập mật khẩu..."
                v-model="form.password"
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
                v-model="form.password_comfirmation"
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
        </v-row>

        <!-- row-3 -->
        <v-row>
          <v-col>
            <div class="form-group-address">
              <label>Địa chỉ</label>
              <input
                class="form-group-address__apartment"
                placeholder="Nhập số nhà, tòa nhà, tên đường..."
                v-model="form.address"
              />
            </div>
          </v-col>
        </v-row>

        <!-- row-4 -->
        <v-row>
          <v-col>
            <div class="form-group-address">
              <label>Phường/ Xã</label>
              <v-select
                class="form-group-address__options"
                placeholder="Chọn Phường/ Xã"
                :items="wards"
                variant="outlined"
                v-model="form.ward_id"
                item-title="name"
                item-value="id"
                @update:model-value="getDistricts"
              ></v-select>
            </div>
          </v-col>
          <v-col>
            <div class="form-group-address">
              <label>Quận/ Huyện</label>
              <v-select
                placeholder="Chọn Quận/ Huyện"
                :items="districts"                
                class="form-group-address__options"
                variant="outlined"
                v-model="form.district_id"
                item-title="name"
                item-value="id"
                @change="getDistricts"
              ></v-select>
              
            </div>
          </v-col>
          <v-col>
            <div class="form-group-address">
              <label>Thành phố</label>
              <v-select
                placeholder="Chọn thành phố"
                :items="provinces"
                variant="outlined"
                class="form-group-address__options"
                v-model="form.province_id"
                item-title="name"
                item-value="id"
                @update:model-value="getProvince"
              ></v-select>
            </div>
          </v-col>
        </v-row>
      </div>

      <div class="form-checkbox">
        <div class="checkbox-content">
          <input type="checkbox" class="btn-checkbox" />
          <p class="text">Tôi đã đọc và đồng ý với</p>

          <span class="link-text" @click="showDialog">Chính sách bảo mật thông tin</span>
          <!-- Dialog -->
          <div v-if="policyDialog" class="dialog-overlay">
            <div class="dialog-protect">
              <img src="/src/assets/images/protect.svg" alt="protect" height="64px" weight="64px"/>
              <h4 class="protect__h4">Chính sách đang được cập nhật</h4>
              <p class="protect_p1">Cảm ơn bạn đã sử dụng dịch vụ!</p>
              <span class="protect_p2" @click="hideDialog">Vui lòng kiểm tra lại sau</span>
            </div>
          </div>

          <!-- btn-register -->
          <button class="register-button" @click="btnRegister">Đăng ký ngay</button>
          <!-- Dialog-sussess -->
          <div v-if="registerDialog" class="dialog-overlay">
            <div class="dialog-protect">
              <img src="/src/assets/images/protect.svg" alt="protect" height="64px" weight="64px"/>
              <h4 class="protect__h4">Đăng ký thành công</h4>
              <p class="protect_p1">Để sử dụng dịch vụ thu hộ, <br> bạn có muốn Ký kết hợp đồng điện tử ngay ?</p>
              <div class="btn-login">
                <button class="btn-login" @click="hideRegisterDialog">Đăng nhập</button>
                <button class="btn-contract">Ký kết hợp đồng</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";
export default {
  setup() {
    const policyDialog = ref(false);
    const showDialog = () => {
      policyDialog.value = true;
    };

    const hideDialog = () => {
      policyDialog.value = false;
    };

    // dialog-register
    const registerDialog = ref(false);

    const hideRegisterDialog = () => {
      registerDialog.value = false;
    }

    var form = {};

    const btnRegister = async () => {
      registerDialog.value = true;
      try {
        const response = await axios.post('register', form);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    var provinces = ref([]);
    var districts = ref([]);
    var wards = ref([]);

    const getProvince = () => {
      axios.get('provinces')
        .then(response => {
          provinces.value = response.data.data;
          console.log(provinces);

          if (form.province_id) {
            getDistricts(form.province_id);
          }

        })
        .catch (error => {
          console.log(error);
        });
    };

    const getDistricts = () => {
      axios.get('districts?province_id=${form.province_id}')
        .then(response => {
          districts.value = response.data.data;
          console.log(districts);
        })
        .catch (error => {
          console.log(error);
        });
    };

    const getWards = () => {
      axios.get('wards?district_id=district_id')
        .then(response => {
          wards.value = response.data.data;
          console.log(wards);
        })
        .catch (error => {
          console.log(error);
        });
    };
    
    onMounted(() => {
      getProvince();
      getDistricts();
      getWards();
    });

    return {
      showDialog,
      policyDialog,
      hideDialog,
      registerDialog,
      hideRegisterDialog,
      btnRegister,
      form,
      provinces,
      getProvince,
      districts,
      getDistricts,
      wards,
      getWards,
    };
  },
};
</script>

<style scoped>
.register-wrapper {
  width: max-content;
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
  height: 44px;
  padding: 0 12px;
  border: 1px solid #a0abbb;
  border-radius: 4px;
  color: #a0abbb;
}

.form-group__name-store:not(:placeholder-shown) {
  color: black;
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
  height: 44px;
  padding: 0 12px;
  border: 1px solid #a0abbb;
  border-radius: 4px;
  color: #a0abbb;
}

.form-group__input-password:not(:placeholder-shown) {
  color: black;
}

.form-group__confirm-pass:not(:placeholder-shown) {
  color: black;
}

.form-group__confirm-pass {
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

.form-group-address__apartment:not(:placeholder-shown) {
  color: black;
}


/* row-4 */
.form-group_row-4 {
  display: flex;
}

.form-group-address__district {
  height: 44px;
}

.form-group-address__district:not(:placeholder-shown) {
  color: black;
}


/* checkbox */
.checkbox-content {
  display: flex;
  align-items: center;
}

.btn-checkbox {
  width: 18px;
  height: 18px;
  margin-left: 3px;
  margin-right: 16px;
  border: 1px solid #ecad48;
}

.link-text {
  margin-left: 1ch;
  text-decoration: none;
  color: #ECAD48;
  cursor: pointer;
}

.register-button {
  display: flex;
  align-items: center;
  height: 44px;
  margin-left: 220px;
  padding: 12px 18px 12px 18px;

  box-sizing: border-box;
  border: 1px solid #fdba4d;
  border-radius: 4px;
  background-color: #fdba4d;
  color: #ffffff;
}

/* Dialog */
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
}

.dialog-protect {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 650px;
  background-color: #fff;
  padding: 24px 0 24px 0 ;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.protect__h4 {
  padding: 24px 0;
  text-transform: uppercase;
  color: #10B981;
  font-weight: 600;
  size: 25px;
  line-height: 34px;
  font-size: 1.25rem;
}

.protect_p2 {
  padding: 24px 0;
  text-decoration: none;
  color: #F59E0B;
  cursor: pointer;
}
</style>