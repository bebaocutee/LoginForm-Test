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
          <button class="login-button">Đăng nhập</button>
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
              v-model="emailOrPhone"
              class="form-group__email-phone"
              placeholder="Nhập email hoặc số điện thoại..."
            />
          </div>
          <div class="btn">
            <p class="forgot-password_p">
              Bạn vui lòng kiểm tra hòm thư đến hoặc mục tin nhắn <br />
              trên điện thoại để lấy mã OTP
            </p>
            <button
              @click="submitForgotPassword" class="forgot-password-button">Gửi yêu cầu</button>
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
            <p class="count-down__p">Thời gian còn lại: 3:00 phút</p>
            <v-otp-input></v-otp-input>
            <p class="text-error"> Không nhận được mã OTP 
              <span class="resend-otp">Gửi lại mã</span>
            </p>
          </div>
          <div class="btn">
            <button class="btn-back" @click="goBack">Trở về</button>
            <button class="btn-change-password">Thay đổi mật khẩu</button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const forgotPasswordDialog = ref(false);

    const emailOrPhone = ref("");
    const showForgotPasswordDialog = () => {
      forgotPasswordDialog.value = true;
    };

    const hideDialog = () => {
      forgotPasswordDialog.value = false;
    };

    // OTP
    const OTPDialog = ref(false);

    const submitForgotPassword = () => {
      // Thực hiện xử lý để gửi yêu cầu và lấy mã OTP
      OTPDialog.value = true;
      // ...

      // Sau khi hoàn thành xử lý, ẩn dialog
      hideDialog();
    };

    const OTPhideDialog = () => {
      OTPDialog.value = false;
    };

    const goBack = () => {
      OTPDialog.value = false;
      forgotPasswordDialog.value = true;
    };

    return {
      forgotPasswordDialog,
      emailOrPhone,
      showForgotPasswordDialog,
      submitForgotPassword,
      hideDialog,
      OTPDialog,
      goBack,
      OTPhideDialog,
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
  width: 290px;
  height: 44px;
  padding: 0 12px 0 12px;
  box-sizing: border-box;
  border: 1px solid #a0abbb;
  border-radius: 4px;
  color: #a0abbb;
}
.form-group__input {
  position: relative;
}
.form-group__password {
  width: 250px;
  height: 44px;
  padding: 0 12px 0 12px;
  border-radius: 4px;
  box-sizing: border-box;
  border: 1px solid #a0abbb;
  border-radius: 4px;
  color: #a0abbb;
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
</style>