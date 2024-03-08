<template>
  <div class="service-wrapper">
    <div class="service-form">
      <h6 class="text-h6">DỊCH VỤ CỦA CHÚNG TÔI</h6>
      <v-col class="list-service">
          <v-row>
            <img src="/src/assets/images/express.svg" alt="Image-Express" class="image" />
            <img src="/src/assets/images/fast.svg" alt="Image-Fast" class="image"/>
          </v-row>
          <v-row>
            <img src="/src/assets/images/super.svg" alt="Image-Super" class="image" />
            <img src="/src/assets/images/fresh.svg" alt="Image-Fresh" class="image"/>
          </v-row>
          <v-row>
            <v-col class="pb-2">
              <img src="/src/assets/images/international.svg" alt="Image-International"/>
            </v-col>
          </v-row>
      </v-col>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
.service-wrapper {
  width: max-content;
  margin-top: 17px;
  background-color: #f7f8f9;
}

.text-h6 {
  margin-top: 12px;
  text-align: center;
  font-weight: 600;
  size: 19px;
  line-height: 23px;
}

.service-form {
    text-align: center;
    padding: 12px;

}

.image {
    padding: 12px;
}
</style>