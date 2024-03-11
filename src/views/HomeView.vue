<template>
    <div>
        <header class="header-wrapper">
            <v-row>
                <v-col cols="3">
                    <img src="@/assets/images/logoVIA.svg">
                </v-col>
                <v-col cols="6" class="search-wrapper">
                    <div class="search-content">
                        <p class="search-text-p">Tìm kiếm nội dung</p>
                        <div class="search-group">
                            <label>Nhập thông tin cần tìm</label>
                            <v-row class="search-input">
                                <v-col >
                                    <input  
                                        class="search-group__input"
                                        placeholder="Tên người dùng, số điện thoại hoặc email">
                                    </input>
                                </v-col>
                
                                <v-col class="button">
                                    <button class="btn-search">Tìm</button>
                                </v-col>
                            </v-row>
                        </div>
                    </div>
                </v-col>
                <v-col cols="3" class="personal-wrapper">
                    <div class="personal">
                        <p class="text-p">Xin chào bạn</p>
                        <p class="text-name">NGUYỄN VĂN HỌC</p>
                        <img src="@/assets/images/avatar.svg" alt="avatar" height="107px" weight="102px" class="img-avatar">
                        <div class="button-exit">
                            <button class="exit">Thoát</button>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </header>
        <main>
            <v-container class="main-wrapper">
                <v-row>
                    <v-col cols="8" class="register-form">
                        <h4 class="success-h4">BẠN ĐÃ ĐĂNG NHẬP THÀNH CÔNG</h4>
                        <p class="succsess-p">Chào mừng <span class="highlight">User1</span> đã quay trở lại hệ thống</p>
                    </v-col>    
                    <v-col cols="4" class="service-form">
                        <service-form></service-form>
                    </v-col>
            </v-row>

            </v-container>
            <div cols="12" class="brand-container">
                <list-brand></list-brand>
            </div>
        </main>
        
        <Footer></Footer> 
    </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
import RegisterForm from '@/components/RegisterForm.vue';
import ServiceForm from '@/components/ServiceForm.vue';
import ListBrand from '@/components/ListBrand.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: { LoginForm , RegisterForm, ServiceForm, ListBrand, Footer},
  setup() {},
};
</script>

<style scoped>
.header-wrapper {
    width: 100%;
    min-height: 430px;
    background-image: url('/src/assets/images/bg.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.main-wrapper {
    margin-top: 64px;
}

.register-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.service-form {
    display: flex;
    justify-content: flex-end;
}

.search-wrapper {
    display: flex;
    justify-content: flex-end;
    margin-top: 59px;
}

.search-content {
    display: flex;
    flex-direction: column;
    width: max-content;
}

.search-text-p {
    text-transform: uppercase;
    color: #ffffff;
    font-weight: 600;
    size: 18px;
    line-height: 21.6px;
    padding-bottom: 16px;
}

.search-group {
    padding: 28px;
    background-color: #ffffff;
    border-radius: 4px;
}

.search-group__input {
    width: 558px;
    height: 44px;
    padding: 0 12px;
    box-sizing: border-box;
    border: 1px solid #a0abbb;
    border-radius: 4px;
}

.btn-search {
    height: 44px;
    padding: 12px 18px;
    background-color: #FDBA4D;
    color: #ffffff;
    box-sizing: border-box;
    border: 1px solid #FDBA4D;
    border-radius: 4px;
}

.personal-wrapper {
    display: flex;
    width: max-content;
    flex-direction: column;
}

.personal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 14px 0;
}

.text-p {
    color: #ffffff;
}

.text-name {
    padding: 14px 0 13px 0;
    color: #ffffff;
}

.button-exit {
    padding: 18px 0 0 15px;
}

.exit {
    height: 44px;
    padding: 0 12px;
    box-sizing: border-box;
    background-color: #FDBA4D;
    border: 1px solid #FDBA4D;
    border-radius: 4px;
    color: #ffffff;
}

.success-h4 {
  color: #DCA245;
  font-weight: 600;
  size: 25px;
  line-height: 34px;
  font-size: 1.25rem;
}

.succsess-p {
    font-weight: 700;
    size: 16px;
    line-height: 19.36px;
}

.highlight {
    color: #ECAD48;
}

.brand-container {
    margin-top: 64px;
}

</style>