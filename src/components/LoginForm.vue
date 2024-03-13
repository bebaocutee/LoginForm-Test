<template>
  <div class="login-wrapper">
    <p class="login-form-title">Đăng nhập ngay!</p>

    <div class="login-form-container">
      <v-row class="login-form-content">
        <v-col class="col-email">
          <div class="form-group">
            <label>Số điện thoại hoặc email</label>
            <input
              class="form-group__email"
              placeholder="Nhập số điện thoại hoặc email..."
              v-model="form.account"
            />
          </div>
        </v-col>

        <v-col class="col-password">
          <div class="form-group">
            <label>Mật khẩu</label>
            <div class="form-group__input">
              <input
                class="form-group__password"
                type="password"
                placeholder="Nhập mật khẩu..."
                required
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
          </div>
        </v-col>
        <v-col class="col-login">
          <button class="login-button" @click="login">Đăng nhập</button>
        </v-col>
      </v-row>
    </div>

    <div class="text-forgot-password">
      <span class="forgot-password" @click="showForgotPasswordDialog">Quên mật khẩu</span>

      <!-- Dialog-input-email -->
      <div v-if="forgotPasswordDialog" class="dialog-overlay">
        <div class="dialog-forgot-password">
          <div class="text-close">
            <h6 class="forgot-password__h6">Yêu cầu thay đổi mật khẩu</h6>
            <span class="button-close" @click="hideDialog"
              ><img src="/src/assets/images/close.svg" alt="close"
            /></span>
          </div>
          <div class="form-group-email-phone">
            <label>Email/ Số điện thoại</label>
            <input
              class="form-group__email-phone"
              placeholder="Nhập email hoặc số điện thoại..."
              
              v-model="formReset.email"
              @input="errorMessages.email = null"
            />
            <span v-if="errorMessages.email" class="text-error-message">{{ errorMessages.email }}</span>
          </div>
          <div class="btn">
            <p class="forgot-password_p">
              Bạn vui lòng kiểm tra hòm thư đến hoặc mục tin nhắn <br />
              trên điện thoại để lấy mã OTP
            </p>
            <button @click="submitForgotPassword" class="forgot-password-button">Gửi yêu cầu</button>
          </div>
        </div>
      </div>

      <!-- Dialog-OTP -->
      <div v-if="OTPDialog" class="dialog-overlay-OTP">
        <div class="dialog-OTP">
          <div class="text-close">
            <h6 class="forgot-password__h6">Nhập mã OTP</h6>
            <span class="button-close" @click="OTPhideDialog"
              ><img src="/src/assets/images/close.svg" alt="close"
            /></span>
          </div>
          <div class="form-group-OTP">
            <p class="Otp-p">MÃ OTP ĐÃ ĐƯỢC GỬI TỚI SỐ ĐIỆN THOẠI/ EMAIL</p>
            <p class="count-down__p">Thời gian còn lại: {{ countdownDisplay }} phút</p>
            <v-otp-input v-model="formReset.otp"></v-otp-input>
            <span v-if="errorMessages.otp" class="text-error-message-otp">{{ errorMessages.otp }}</span>

            <p class="text-error"> Không nhận được mã OTP 
              <span class="resend-otp" @click="resendOTP">Gửi lại mã</span>
            </p>
          </div>
          <div class="btn">
            <button class="btn-back" @click="goBack">Trở về</button>
            <button class="btn-change-password" @click="changePassword">Thay đổi mật khẩu</button>
          </div>
        </div>
      </div>

      <!-- Dialog-change-password-success -->
      <div v-if="changePasswordDialog" class="dialog-overlay-change-password">
        <div class="dialog-OTP">
          <div class="text-close">
            <h6 class="forgot-password__h6">Thiết lập mật khẩu mới</h6>
            <span class="button-close" @click="changehideDialog"
              ><img src="/src/assets/images/close.svg" alt="close"
            /></span>
          </div>
          <div class="group-change-password">
            <div class="form-group__change-pasword">
              <label>Mật khẩu mới</label>
                <input
                  class="new-password"
                  type="password"
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="Nhập mật khẩu..."
                  v-model="formReset.password"
                />
                <span class="change-password-icon" @click="togglePassword">
                  <img
                    src="/src/assets/images/lookpassword.svg"
                    width="24px"
                    height="24px"
                    alt="lookpassword"
                  />
                </span>
            </div>

            <div class="form-group__change-pasword">
              <label>Xác nhận mật khẩu mới</label>
              <input
                class="comfirm-password"
                type="password"
                :type="showConfirmPassword ? 'text' : 'password'"
                placeholder="Nhập mật khẩu..."
                v-model="formReset.password_confirmation"
              />
              <span class="change-password-icon" @click="toggleConfirmPassword">
                <img
                  src="/src/assets/images/lookpassword.svg"
                  width="24px"
                  height="24px"
                  alt="lookpassword"
                />
              </span>
            </div>
          </div>

          <div class="btn-change-login">
            <button class="change-login" @click="goLogin">Đăng nhập</button>
          </div>

        </div>
      </div>

      <!-- Dialog-change-password-fail -->
      <div v-if="failChangeOTPDialog" class="dialog-overlay-fail-change-OTP">
        <div class="dialog-OTP">

          <div class="text-close">
            <h6 class="forgot-password__h6">Thiết lập mật khẩu mới</h6>
            <span class="button-close" @click="failChangeHideDialog"
              ><img src="/src/assets/images/close.svg" alt="close"
            /></span>
          </div>

          <div class="send-OTP-fail">
            <img src="/src/assets/images/errorOTP.svg" alt="error" class="icon-send-error">
            <p class="fail-change-text-p"> Mã khôi phục không đúng 
              <span class="fail-change-otp" @click="failChangeOTP">Gửi lại mã</span>
            </p>
          </div>

          <div class="form-group-OTP">
            <p class="count-down__p">Thời gian còn lại: {{ countdownDisplay }} phút</p>
            <v-otp-input></v-otp-input>
          </div>

          <div class="btn-change-fail-otp">
            <button class="btn-back" @click="backDialogOTP">Trở về</button>
            <button class="btn-change-password" @click="changehideDialog">Khôi phục mật khẩu</button>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useRouter } from 'vue-router';
import axios from 'axios';
export default {
  setup() {
    const forgotPasswordDialog = ref(false);
    const form = ref({});

    const showForgotPasswordDialog = () => {
      forgotPasswordDialog.value = true;
    };

    const hideDialog = () => {
      forgotPasswordDialog.value = false;
    };

    const errorMessages = ref({});

    ///////////////// send-OTP
    const OTPDialog = ref(false);

    const submitForgotPassword = async () => {
      if (!formReset.value.email) {
        errorMessages.value.email = 'Vui lòng nhập email hoặc số điện thoại';
      } else{
        try {
          const response = await axios.get(`get-otp?email=${formReset.value.email}`
          );
          const otp = response.data.otp;
          OTPDialog.value = true;
          hideDialog();
          startCountdown();      
        } catch (error) {
          errorMessages.value.email = 'Email không tồn tại';
          console.log(error);
        }   
      }     
    };

    // 
    const OTPhideDialog = () => {
      OTPDialog.value = false;
      resetCountDown();
    };

    const goBack = () => {
      OTPDialog.value = false;
      forgotPasswordDialog.value = true;
      resetCountDown();
    };

    /////////////////// check OTP
    const countdown = ref(180);
    const timer = ref(null);
    const otp = ref('');
   

    const countdownDisplay = computed(() => {
      const minutes = Math.floor(countdown.value / 60);
      const seconds = countdown.value % 60;
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    });

    const startCountdown = () => {
      timer.value = setInterval(() => {
        countdown.value--;
        if (countdown.value === 0) {
          stopCountdown();
          return 'Hết thời gian nhập OTP'
        }
      },1000);
    };

    const stopCountdown = () => {
      clearInterval(timer.value);
    };

    const resetCountDown = () => {
      countdown.value = 180;
      stopCountdown();
    }

    ////////////// change-password-success--fail
    const changePasswordDialog = ref(false);

    const failChangeOTPDialog = ref(false);
    const formReset = ref({
      otp: ''
    })

    const changehideDialog = () => {
      changePasswordDialog.value = false;
    }

    const failChangeHideDialog = () => {
      failChangeOTPDialog.value = false;
    }

    const changePassword = async () => {
      if (!formReset.value.otp) {
        errorMessages.value.otp = 'Vui lòng nhập mã OTP';
      } else {
          try {
            const response = await axios.post('verify-otp', {
              otp: formReset.value.otp,
              email: formReset.value.email   
            });
            changePasswordDialog.value = true;
            OTPDialog.value = false;
          } catch (error) {
            failChangeOTPDialog.value = true;
            OTPDialog.value = false;
          }
      }
    };
      /////// resend-OTP
    const resendOTP = async () => {
      try {
        const responseOtp = await axios.get(`get-otp?email=${formReset.value.email}`)
      } catch (error) {
        console.error(error);
      }
    }

    const backDialogOTP = () => {
      failChangeOTPDialog.value = false;
      OTPDialog.value = true;
    };

    const goLogin = async () => {
      try {
        const passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{9,}$/;
        if (!passwordFormat.test(formReset.value.password)) {
          return;
        }

        // check confirpassword
        if (formReset.value.password_confirmation !== formReset.value.password) {
          return;
        }
        await axios.post('reset-password', formReset.value)
        changePasswordDialog.value = false;
        changePassword.value = true;
      } catch(error) {
        console.log(error);
      }
    };

    ///////////// show password
    // const showPassword = ref(true); 
    // const showConfirmPassword = ref(true);

    // const togglePassword = () => {
    //   showPassword.value = !showPassword.value;
    // };

    // const toggleConfirmPassword = () => {
    //   showConfirmPassword.value = !showConfirmPassword.value;
    // }
    
    ///////////// login

    const router = useRouter();

    const login = async () => {
      try {
        const response = await axios.post('login', form.value);
        console.log(response);
        router.push('/trang-chu');
      } catch (error) {
        console.error(error);
      }
    }

    return {
      forgotPasswordDialog,
      showForgotPasswordDialog,
      submitForgotPassword,
      hideDialog,
      OTPDialog,
      goBack,
      OTPhideDialog,
      login,
      form,
      router,
      changePassword,
      goLogin,
      changePasswordDialog,
      changehideDialog,
      errorMessages,
      failChangeHideDialog,
      failChangeOTPDialog,
      backDialogOTP,
      countdownDisplay,
      otp,
      // showPassword,
      // showConfirmPassword,
      // togglePassword,
      // toggleConfirmPassword,
      resendOTP,
      formReset
    };
  },
};
</script>

<style scoped>
/* Header --login */
.login-wrapper {
  width: max-content;
  box-sizing: border-box;
  padding: 70px 32px;
}
.login-form-title {
  margin-bottom: 16px;
  color: #ffffff;
  text-transform: uppercase;
}
.login-form-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: max-content;
  height: 124px;
  padding: 14px;
}
.login-form-content {
  box-sizing: border-box;

  background-color: #ffffff;
  border-radius: 4px;
}
.col-email {
  padding-left: 28px;
  padding-right: 6px;
}
.col-password {
  padding-left: 6px;
  padding-right: 6px;
}
.col-login {
  padding-right: 28px;
  padding-left: 6px;
}

.form-group {
  display: flex;
  flex-direction: column;
  padding: 16px 0;
}
.form-group__email {
  height: 44px;
  padding: 0 12px;
  box-sizing: border-box;
  border: 1px solid #a0abbb;
  border-radius: 4px;
  color: #a0abbb;
}
.form-group__input {
  position: relative;
}

.form-group__password {
  height: 44px;
  padding: 0 12px;
  border-radius: 4px;
  box-sizing: border-box;
  border: 1px solid #a0abbb;
  border-radius: 4px;
  color: #a0abbb;
}

.form-group__password:not(:placeholder-shown) {
  color: black;
}

.form-group__email:not(:placeholder-shown) {
  color: black;
}
.password-icon {
  position: absolute;
  top: 25%;
  right: 10px;
}

.login-button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  margin-top: 40px;
  padding: 12px 18px 12px 18px;

  box-sizing: border-box;
  border: 1px solid #fdba4d;
  border-radius: 4px;
  background-color: #fdba4d;
  color: #ffffff;
}

.text-forgot-password {
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
}

.forgot-password {
  text-decoration: none;
  color: #ffffff;
  cursor: pointer
}

/* dialog-input-email */

.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
}

.dialog-forgot-password {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  background-color: #fff;
}

.button-close {
  cursor: pointer;
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

.forgot-password__h6 {
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 600;
  size: 19px;
  line-height: 23px;
}

.form-group-email-phone {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 24px 24px 12px 24px;
}

.form-group__email-phone {
  height: 44px;
  padding-left: 12px;
  padding-right: 12px;
  border: 1px solid #a0abbb;
  border-radius: 4px;
}

.forgot-password_p {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn {
  text-align: center;
  padding-bottom: 48px;
}

.forgot-password_p {
  padding: 12px 0 24px 0;
}

.forgot-password-button {
  height: 44px;
  padding-left: 12px;
  padding-right: 12px;
  background-color: #fdba4d;
  color: #ffffff;
  border: 1px solid #fdba4d;
  border-radius: 4px;
}

.text-error-message {
  position: absolute;
  bottom: -8px;
  color: #ECAD48;
  font-size: 0.75rem;
}

/* dialog-OTP */

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

/* dialog change password seccess*/
.dialog-overlay-change-password {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
}

.dialog-change-password {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  background-color: #fff;
}

/*  */
.group-change-password {
  padding: 0 24px;
  padding-top: 24px;
}
.form-group__change-pasword {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
}

.new-password {
  height: 44px;
  padding: 0 12px;
  box-sizing: border-box;
  border: 1px solid #a0abbb;
  border-radius: 4px;
  color: #a0abbb;
}
.new-password:not(:placeholder-shown) {
  color: black;
}

.comfirm-password:not(:placeholder-shown) {
  color: black;
}

.comfirm-password {
  height: 44px;
  padding: 0 12px;
  border-radius: 4px;
  box-sizing: border-box;
  border: 1px solid #a0abbb;
  border-radius: 4px;
  color: #a0abbb;
}

.change-password-icon {
  position: absolute;
  top: 38%;
  right: 10px;
  cursor: pointer;
}

.btn-change-login {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 48px;
}

.change-login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  padding: 12px 18px 12px 18px;

  box-sizing: border-box;
  border: 1px solid #fdba4d;
  border-radius: 4px;
  background-color: #fdba4d;
  color: #ffffff;
}

/* dialog change password fail*/
.dialog-overlay-fail-change-OTP {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
}

.dialog-OTP {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  background-color: #fff;
}

.send-OTP-fail {
  display: flex;
  width: max-content;
  background-color: #FFF2F2;
  margin: 24px auto 8px auto;
  padding: 7px 10px;
  border-radius: 4px;
}

.fail-change-text-p {
  padding-left: 10px;
  color: #ECAD48;
}

.fail-change-otp {
  color: #0079ED;
  cursor: pointer;
}

.btn-change-fail-otp {
  text-align: center;
  padding-top: 20px;
  padding-bottom: 48px;
}
</style>