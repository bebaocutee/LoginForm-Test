<template>
    <div>
        <header class="header-wrapper">
            <v-row>
                <v-col cols="5">
                    <img src="@/assets/images/logoVIA.svg">
                </v-col>
                <v-col cols="7">
                    <login-form></login-form>
                </v-col>
            </v-row>
        </header>
        <main>
            <v-container class="main-wrapper">
                <v-row>
                    <v-col cols="8" class="register-form">
                        <register-form></register-form>
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

.service-form {
    display: flex;
    justify-content: flex-end;
}

.brand-container {
    margin-top: 64px;
}

</style>