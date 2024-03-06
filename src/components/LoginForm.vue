<template>
    <div class="login-wrapper">
        <p class="login-form-title">Đăng nhập ngay!</p>

        <div class="login-form-container">
            <v-row class="login-form-content">
                <v-col class="col-email">
                    <div class="form-group">
                        <label>Số điện thoại hoặc email</label>
                        <input class="form-group__email" placeholder="Nhập số điện thoại hoặc email...">
                    </div>
                </v-col>

                <v-col class="col-password">
                    <div class="form-group">
                        <label>Mật khẩu</label>
                        <div class="form-group__input">
                            <input class="form-group__password" type="password" placeholder="Nhập mật khẩu..." required>
                            <span class="password-icon">
                                <img src="/src/assets/images/lookpassword.svg" width="24px" height="24px" alt="lookpassword" >
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
            <span class="forgot-password">Quên mật khẩu</span>
        </div>
    </div>
    
</template>

<script>
export default {
    setup() {
        
    },
}
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
    border: 1px solid #A0ABBB;
    border-radius: 4px;
    color: #A0ABBB;

}
.form-group__input{
    position: relative;
}
.form-group__password {
    width: 250px;
    height: 44px;
    padding: 0 12px 0 12px;
    border-radius: 4px;
    box-sizing: border-box;
    border: 1px solid #A0ABBB;
    border-radius: 4px;
    color: #A0ABBB;
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
    border: 1px solid #FDBA4D;
    border-radius: 4px;
    background-color: #FDBA4D;
    color: #ffffff;
}

.text-forgot-password {
    display: flex;
    justify-content: flex-end;
    margin-top: 16px;
    color: #ffffff;
}
</style>