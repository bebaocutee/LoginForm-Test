<template>
  <div class="register-wrapper">
    <h4 class="register-title">Đăng ký tài khoản</h4>
    <div class="register-container">
      <div class="register-form-content">
        <!-- row 1 -->
        <v-row>
          <v-col>
            <div class="form-group-store">
              <label>Tên cửa hàng<span class="required">*</span></label>
              <input
                class="form-group__name-store"
                placeholder="Nhập tên cửa hàng..."
                v-model="form.store_name"
                @input="errorMessages.store_name = null"
              />
              <span v-if="errorMessages.store_name" class="text-danger">{{ errorMessages.store_name }}</span>
            </div>
          </v-col>

          <v-col>
            <div class="form-group-store">
              <label>Số điện thoại<span class="required">*</span></label>
              <input
                class="form-group__name-store"
                placeholder="Nhập số điện thoại"
                v-model="form.phone_number"
                @input="errorMessages.phone_number = null"
              />
              <span v-if="errorMessages.phone_number" class="text-danger">{{ errorMessages.phone_number }}</span>
            </div>
          </v-col>

          <v-col>
            <div class="form-group-store">
              <label>Email<span class="required">*</span></label>
              <input
                class="form-group__name-store"
                placeholder="Nhập email..."
                v-model="form.email"
                @input="errorMessages.email = null"
              />
              <span v-if="errorMessages.email" class="text-danger">{{ errorMessages.email }}</span>
            </div>
          </v-col>
        </v-row>

        <!-- row 2 -->
        <v-row>
          <v-col>
            <div class="form-group-password">
              <label>Mật khẩu<span class="required">*</span></label>
              <input
                class="form-group__input-password"
                placeholder="Nhập mật khẩu..."
                :type="showPassword ? 'text' : 'password'"
                v-model="form.password"
                @input="errorMessages.password = null"
              />
              <span v-if="errorMessages.password" class="text-danger">{{ errorMessages.password }}</span>
              <span class="password-icon" @click="togglePassword">
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
              <label>Xác nhận mật khẩu<span class="required">*</span></label>
              <input
                class="form-group__confirm-pass"
                placeholder="Xác nhận mật khẩu..."
                :type="showConfirmPassword ? 'text' : 'password'"
                v-model="form.password_confirmation"
                @input="errorMessages.password_confirmation = null"
              />
              <span v-if="errorMessages.password_confirmation" class="text-danger">{{ errorMessages.password_confirmation }}</span>
              <span class="password-icon" @click="toggleConfirmPassword">
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
                @input="errorMessages.address = null"
              />
              <span v-if="errorMessages.address" class="text-danger">{{ errorMessages.address }}</span>
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
                @input="errorMessages.ward_id = null"
              ></v-select>
              <span v-if="errorMessages.ward_id" class="text-danger">{{ errorMessages.ward_id }}</span>
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
                @input="errorMessages.district_id = null"             
                @update:model-value="getWards"
              ></v-select>
              <span v-if="errorMessages.district_id" class="text-danger">{{ errorMessages.district_id }}</span>
              
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
                :error="errorMessages.province_id != null"
                :error-messages="errorMessages.province_id"
                @update:model-value="getDistricts"
              ></v-select>
            </div>
          </v-col>
        </v-row>
      </div>

      <div class="form-checkbox">
        <div class="checkbox-content">
          <label class="custom-checkbox">
            <input type="checkbox" v-model="form.checkmark" class="btn-checkbox" @input="errorMessages.checkmark = null"/>
            <span v-if="errorMessages.checkmark" class="text-danger">{{ errorMessages.checkmark }}</span>
            <span class="checkmark" ></span>
            <p class="text">Tôi đã đọc và đồng ý với</p>
            <span class="link-text" @click="showDialog">Chính sách bảo mật thông tin</span>
          </label>
          
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

          <!-- Dialod-send-OTP -->
          <div v-if="OTPDialog" class="dialog-overlay-OTP">
            <div class="dialog-OTP">
              <div class="text-close">
                <h6 class="forgot-password__h6">Nhập mã OTP</h6>
                <span class="button-close" @click="OTPhideDialog"
                  ><img src="/src/assets/images/close.svg" alt="close"
                /></span>
              </div>
              <div class="form-group-OTP">
                <p class="count-down__p">Thời gian còn lại: {{ countdownDisplay }} phút</p>
                <v-otp-input v-model="form.otp"></v-otp-input>
                <span v-if="errorMessages.otp" class="text-error-message-otp">{{ errorMessages.otp }}</span>

                <p class="text-error"> Không nhận được mã OTP 
                  <span class="resend-otp" @click="resendOTP">Gửi lại mã</span>
                </p>
              </div>
              <div class="btn">
                <button class="btn-back" @click="goBack">Trở về</button>
                <button class="btn-change-password" @click="verifyOTP">Hoàn tất đăng ký tài khoản</button>
              </div>
            </div>
          </div>

          <!-- Dialog-register-sussess -->
          <div v-if="registerDialog" class="dialog-overlay">
            <div class="dialog-register-success">
              <img src="/src/assets/images/protect.svg" alt="protect" height="64px" weight="64px"/>
              <h4 class="protect__h4">Đăng ký thành công</h4>
              <p class="dialog-protect_p1">Để sử dụng dịch vụ thu hộ,</p>  
              <p>bạn có muốn Ký kết hợp đồng điện tử ngay ?</p>
                <div class="group-login">          
                  <button class="btn-login" @click="hideRegisterDialog">Đăng nhập</button>
                  <button class="btn-contract">Ký kết hợp đồng</button>
                </div>
            </div>
          </div>

           <!-- Dialog-registre-fail -->
           <div v-if="failRegisterDialog" class="dialog-overlay">
            <div class="dialog-register-success">
              <img src="/src/assets/images/registerFail.svg" alt="register-fail" height="64px" weight="64px"/>
              <h4 class="fail__h4">Đăng ký không thành công</h4>
              <p class="dialog-protect_p1">Thông tin bạn đăng ký có thể đã trùng </p>  
              <p>với một tài khoản khác trong hệ thống</p>
                <div class="group-login">          
                  <button class="btn-login" @click="hideFailRegisterDialog">Bỏ qua đăng ký</button>
                  <button class="btn-contract" @click="hideChangeRegisterDialog">Thử lại</button>
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

    // show password
    const showPassword = ref(false); 
    const showConfirmPassword = ref(false);

    const togglePassword = () => {
      showPassword.value = !showPassword.value;
    };

    const toggleConfirmPassword = () => {
      showConfirmPassword.value = !showConfirmPassword.value;
    }

    //dialog-register
    const registerDialog = ref(false);

    const failRegisterDialog = ref(false);

    const hideRegisterDialog = () => {
      registerDialog.value = false;
      form.value.store_name = '';
      form.value.phone_number = '';
      form.value.email = '';
      form.value.password = '';
      form.value.password_confirmation = '';
      form.value.address = '';
      form.value.province_id = null;
      form.value.district_id = null;
      form.value.ward_id = null;
      form.value.checkmark = false;
    };

    const hideFailRegisterDialog = () => {
      failRegisterDialog.value = false;
      errorMessages.value = {};
      form.value.store_name = '';
      form.value.phone_number = '';
      form.value.email = '';
      form.value.password = '';
      form.value.password_confirmation = '';
      form.value.address = '';
      form.value.province_id = null;
      form.value.district_id = null;
      form.value.ward_id = null;
      form.value.checkmark = false;
    };

    const hideChangeRegisterDialog = () => {
      failRegisterDialog.value = false;
    }

    const form = ref ({
      store_name: '',
      phone_number: '',
      email: '',
      password: '',
      password_confirmation: '',
      address: '',
      province_id: null,
      district_id: null,
      ward_id: null,
      checkmark: false,
      otp: '',
      email: '',
    });

    const errorMessages = ref({});

    function validateRegister() {
      // check store_name
      if (form.value.store_name.trim() === '') {
        errorMessages.value.store_name = 'Nhập Tên cửa hàng';
        return;
      }

      // check phone_number
      const phoneNumberFormat = /(09|03|07|08|05)[0-9]{8}/;
      if (!phoneNumberFormat.test(form.value.phone_number)) {
        errorMessages.value.phone_number = 'Số điện thoại không hợp lệ';
        return;
      }

      // check email
      const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailFormat.test(form.value.email)) {
        errorMessages.value.email = 'Email không hợp lệ';
        return;
      }

      // check password
      const passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{9,}$/;
      if (!passwordFormat.test(form.value.password)) {
        errorMessages.value.password = 'Mật khẩu ít nhất 9 ký tự gồm 1: chữ in hoa, thường, số, ký tự đặc biệt ';
        return;
      }

      // check confirpassword
      if (form.value.password_confirmation !== form.value.password) {
        errorMessages.value.password_confirmation = 'Mật khẩu xác nhận không trùng khớp';
        return;
      }

      // check address
      if (form.value.address.trim() === '') {
        errorMessages.value.address = 'Nhập địa chỉ';
        return ;
      }

      if (!form.value.province_id) {
        errorMessages.value.province_id = 'Vui lòng chọn Thành phố'; 
        return 'alo13';
      }

      if (!form.value.district_id) {
        errorMessages.value.district_id = 'Vui lòng chọn Quận/Huyện';
        return;
      }

      if (!form.value.ward_id) {
        errorMessages.value.ward_id = 'Vui lòng chọn Phường/ Xã';
        return;
      }

      if (!form.value.checkmark) {
        errorMessages.value.checkmark =  'Bạn phải Đồng ý với chính sách bảo mật thông tin';
        return;
      }
      return 'success';
    };

    var provinces = ref([]);
    var districts = ref([]);
    var wards = ref([]);

    const getProvince = () => {
      axios.get('provinces')
        .then(response => {
          provinces.value = response.data.data;

          if (form.province_id) {
            getDistricts();
          }

        })
        .catch (error => {
          console.log(error);
        });
    };

    const getDistricts = () => {
      errorMessages.value.province_id = null;

      if (form.value.province_id) {
        axios.get(`districts?province_id=${form.value.province_id}`)
        .then(response => {
          districts.value = response.data.data;

          if (form.district_id) {
            getWards();
          }
        })
        .catch (error => {
          console.log(error);
        });
      } else {
        districts.value = [];
      }
      
    };

    const getWards = () => {
      if (form.value.district_id) {
        axios.get(`wards?district_id=${form.value.district_id}`)
        .then(response => {
          wards.value = response.data.data;
          console.log(wards);
        })
        .catch (error => {
          console.log(error);
        });
      } else {
        wards.value = [];
      }
      
    };
    
    // btn-register
    const OTPDialog = ref(false);

    const OTPhideDialog = () => {
      OTPDialog.value = false;
    };

    const goBack = () => {
      OTPDialog.value = false;
      // btnRegister.value = true;
    };

    const btnRegister = async () => {
      const validation = validateRegister();
      if (validation === 'success') {
        try {
          const response = await axios.post('register', form.value);
          console.log(response);
          try {
            const responseOtp = await axios.get(`get-otp?email=${form.value.email}`)
            OTPDialog.value = true;
          } catch (error) {
          }
        } catch (error) {
          if (error.response.data.message == "The email has already been taken.") {
            try {
              const responseOtp = await axios.get(`get-otp?email=${form.value.email}`)
              OTPDialog.value = true;
            } catch (error) {

            }
          } else if (error.response.data.message.contains("has already been taken")) {
            failRegisterDialog.value = true;
          }
          console.error(error);
        }
      } else {
        failRegisterDialog.value = true;
        console.log(validation);
      }    
    };

    const resendOTP = async () => {
      try {
        const responseOtp = await axios.get(`get-otp?email=${form.value.email}`)
      } catch (error) {
        console.error(error);
      }
    }

    // check OTP
    const verifyOTP = async () => {
      try {
        const response = await axios.post('verify-otp', {
          otp: form.value.otp,
          email: form.value.email
        });

        registerDialog.value = true;
        console.log(response);
        OTPDialog.value = false;
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(() => {
      getProvince();
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
      errorMessages,
      failRegisterDialog,
      hideFailRegisterDialog,
      hideChangeRegisterDialog,
      showPassword,
      togglePassword,
      toggleConfirmPassword,
      showConfirmPassword,
      OTPDialog,
      OTPhideDialog,
      // countdownDisplay,
      goBack,
      verifyOTP,
      resendOTP,
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
  position: relative;
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

.required {
  padding-left: 1ch;
  color: #F0BD6D;
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
  cursor: pointer;
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
  justify-content: center;
  align-items: center;
}

.custom-checkbox {
  position: relative;
  display: flex;
}

.btn-checkbox {
  margin-left: 3px;
  margin-right: 16px;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 3px;
  width: 18px;
  height: 18px;
  border: 2px solid #ECAD48; 
  border-radius: 3px;
  background-color: #ffffff;
}

.custom-checkbox input:checked ~ .checkmark:after {
  content: "";
  position: absolute;
  left: 4px;
  width: 6px;
  height: 12px;
  border: solid #ECAD48;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
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

/* Dialog  policy */
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

.fail__h4 {
  padding: 24px 0;
  text-transform: uppercase;
  color: #DC2626;
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

/* dialog-send-OTP */

.dialog-overlay-OTP {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
}

.dialog-OTP {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  background-color: #fff;
}

.text-close {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 560px;
  height: 72px;
  padding-left: 24px;
  padding-right: 24px;
  background-color: #f7f8f9;
}


.form-group-OTP {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text-error-message-otp {
  position: absolute;
  bottom: 70px;
  color: #ECAD48;
  font-size: 0.75rem;
}

.Otp-p {
  padding-top: 24px;
  color: #10B981;
  font-weight: 600;
  size: 25px;
  line-height: 34px;
  font-size: 1.25rem;
}

.count-down__p {
  padding-top: 24px;
  padding-bottom: 16px;
  color: #ECAD48;
}

.text-error {
  padding-top: 16px;
  padding-bottom: 32px;
  color: #4B5768 !important;
}

.resend-otp {
  color: #0079ED;
  cursor: pointer;
}

.btn-back {
  height: 44px;
  margin-right: 24px;
  padding-left: 12px;
  padding-right: 12px;
  background-color: #E7EAEE;
  color: #323A46;
  border: 1px solid #E7EAEE;
  border-radius: 4px;
}

.btn-change-password {
  height: 44px;
  padding-left: 12px;
  padding-right: 12px;
  background-color: #fdba4d;
  color: #ffffff;
  border: 1px solid #fdba4d;
  border-radius: 4px;
}

.forgot-password__h6 {
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 600;
  size: 19px;
  line-height: 23px;
}

.button-close {
  cursor: pointer;
}

.btn {
  text-align: center;
  padding-bottom: 48px;
}

/* Dialog register success */
.dialog-register-success {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 560px;
  background-color: #fff;
  padding: 24px 0 24px 0 ;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.group-login {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 24px;
}
.btn-login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 43px;
  margin-right: 12px;
  padding: 12px 18px;
  background-color: #E7EAEE;
  color: #323A46;
  border: 1px solid #E7EAEE;
  border-radius: 4px;
}

.btn-contract {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 43px;
  margin-left: 12px;
  padding: 12px 18px;
  background-color: #19B88B;
  color: #ffffff;
  border: 1px solid #19B88B;
  border-radius: 4px;
}

.text-danger {
  position: absolute;
  bottom: -18px;
  color: #ECAD48;
  font-size: 0.75rem;
}

</style>