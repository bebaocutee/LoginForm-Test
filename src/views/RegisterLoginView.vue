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
            <div class="d-flex">
                    <div class="register-form">
                        <register-form></register-form>

                    </div>
                    <div class="service-form">
                        <service-form></service-form>

                    </div>
                <!-- <div class="register-form">

                </div>
                <div class="servire-form">
                </div> -->
            </div>
            <!-- <div class="flex">
                
            </div> -->
            <!-- <div class="brand-container">
                <ListBrand></ListBrand>
            </div> -->
        </main>
        <!-- <Footer></Footer> -->
    </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
import RegisterForm from '@/components/RegisterForm.vue';
import ServiceForm from '@/components/ServiceForm.vue';

export default {
  components: { LoginForm , RegisterForm, ServiceForm},
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

.d-flex {
    display: flex;
    justify-content: space-between;
    /* width: max-content; */
    height: 478px;
    margin: 64px 80px 0 80px;
}

.left-content,
.right-content {
  flex: 1;
}

.register-form {
    display: flex;
}
.servire-form {
    display: flex;
    width: 300px;
    height: 478px;
}
</style>