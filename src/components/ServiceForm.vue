<template>
  <div class="service-wrapper">
    <div class="service-form">
      <h6 class="text-h6">DỊCH VỤ CỦA CHÚNG TÔI</h6>
      <div class="list-service">
          <div>
            <img src="/src/assets/images/express.svg" alt="Image-Express" class="image" />
            <img src="/src/assets/images/fast.svg" alt="Image-Fast" class="image"/>
          </div>
          <div>
            <img src="/src/assets/images/super.svg" alt="Image-Super" class="image" />
            <img src="/src/assets/images/fresh.svg" alt="Image-Fresh" class="image"/>
          </div>
          <div>
            <img src="/src/assets/images/international.svg" alt="Image-International"/>
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
.service-wrapper {
  display: flex;
  height: 445px;
  margin-top: 33px;
  background-color: #f7f8f9;
}

.text-h6 {
  margin-top: 24px;
  text-align: center;
  font-weight: 600;
  size: 19px;
  line-height: 23px;
}

.list-service {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 12px;
}

.image {
    padding: 12px;
}
</style>