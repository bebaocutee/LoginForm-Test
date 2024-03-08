<template>
    <div class="brand-wrapper">
        <div class="brand-container">
            <div>
                <h4 class="text-h4">KHÁCH HÀNG TIÊU BIỂU</h4>
            </div>
            <div class="list-brand">
                <img src="/src/assets/images/left.svg" alt="icon-left" class="left">
                <img src="/src/assets/images/tiktok.svg" alt="icon-tiktok" class="brand">
                <img src="/src/assets/images/upos.svg" alt="icon-upos" class="brand">
                <img src="/src/assets/images/shopee.svg" alt="icon-shopee" class="brand">
                <img src="/src/assets/images/oppo.svg" alt="icon-oppo" class="brand">
                <img src="/src/assets/images/tiki.svg" alt="icon-tiki" class="brand">
                <img src="/src/assets/images/thegioididong.svg" alt="icon-thegioididong" class="brand">
                <img src="/src/assets/images/right.svg" alt="icon-right" class="right">
            </div>
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

.brand-wrapper{
    display: flex;
    justify-content: center;
    text-align: center;
    background-color: #F7F8F9;
}

.brand-container {
    box-sizing: border-box;
    padding: 53px 82px 53px 78px;
}

.text-h4 {
  text-align: center;
  color: #dca245;
  font-weight: 600;
  size: 28px;
  line-height: 34pxs;
  font-size: 1.35rem;
}

.brand {
    margin-left: 54px;
}

.right {
    margin-left: 54px;
}
</style>