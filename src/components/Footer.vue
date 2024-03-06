<template>
    <div class="footer-wrapper">
        <div class="footer-container">
            <div class="footer-content">
                <div class="footer-information">
                    <img src="/src/assets/images/footer-image/logo-footer.svg" alt="logoVIA" class="logo-footer">
                    <div class="footer-information__company">
                        <p class="name-company-p">Công ty cổ phần đầu tự và phát triển <br> ứng dụng thông minh việt</p>
                        <div class="footer-information__company-content">
                            <p class="name-company">Mã Số Thuế: 0106494214</p>
                            <p class="name-company">Ngày hoạt động: 27/03/2014</p>
                            <p class="name-company">Sở Kế Hoạch và Đầu Tư Thành Phố Hà Nội</p>
                        </div>
                    </div>
                    <img src="/src/assets/images/footer-image/Social.svg" alt="list-social" class="social">

                </div>
                <div class="footer-contact">
                    <p class="footer-contact__p">Liên hệ</p>
            
                    <p class="footer-contact__email-p">contact@viajsc.com</p>

                    <p class="footer-contact__telephone-p">1900 9999</p>

                    <p class="footer-contact__map-p">16, Ngõ 204, Trần Duy Hưng, Trung Hòa, Cầu Giấy, HN</p>
                    
                    <img src="/src/assets/images/footer-image/icon-bct.svg" alt="icon-bct" class="icon-bct">
                </div>

                <div class="footer-app">
                    <p class="down-app">Tải ứng dụng</p>
                    <img src="/src/assets/images/footer-image/app.svg" alt="" class="qr-app">
                </div>
            </div>

            <div class="footer-privacy-policy">
                <p class="footer-privacy-policy__text">Chính sách bảo mật</p>
                <p class="footer-privacy-policy__text-copyright">
                    Copyright © 2021 VIA JSC. All rights reserved.
                </p>
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

.footer-container {
    background-color: #D29B42;
}

.footer-content {
    display: flex;
    justify-content: center;
}

.footer-information {
    margin: 48px 80px;
}

/* footer-information__company */
.name-company-p {
    font-weight: 600;
    size: 13px;
    line-height: 22px;
    letter-spacing: 8%;
    color: #ffffff;
    text-transform: uppercase;
}

.name-company {
    font-weight: 400;
    size: 13px;
    line-height: 22px;
    letter-spacing: 2%;
    color: #ffffff;

}
/* footer-contact */
.footer-contact {
    margin: 102.8px 80px 48px 80px;
}

.email {
    display: flex;
}

.footer-contact__email {
    position: relative;
}

.footer-contact__p {
    font-weight: 600;
    size: 13px;
    line-height: 22px;
    letter-spacing: 8%;
    text-transform: uppercase;
    color: #ffffff;
}
.footer-contact__email-p::before {
    content: url("/src/assets/images/footer-image/email.svg");
    height: 16px;
    width: 16px;
    margin-right: 8px;
    display: inline-block;
    justify-content: center;
    align-items: center;
}

.footer-contact__email-p {
    display: inline-block;
    font-weight: 400;
    size: 13px;
    letter-spacing: 2%;
    color: #ffffff;
}

.footer-contact__telephone-p::before {
    content: url("/src/assets/images/footer-image/telephone.svg");
    height: 16px;
    width: 16px;
    margin-right: 8px;
    display: inline-block;
}

.footer-contact__telephone-p {
    display: flex;
    align-items: center;
    font-weight: 400;
    size: 13px;
    letter-spacing: 2%;
    color: #ffffff;
}

.footer-contact__map-p::before {
    content: url("/src/assets/images/footer-image/map.svg");
    height: 16px;
    width: 16px;
    margin-right: 8px;
    display: inline-block;
}

.footer-contact__map-p {
    display: flex;
    align-items: center;
    font-weight: 400;
    size: 13px;
    letter-spacing: 2%;
    color: #ffffff;
}

.icon-bct {
    margin-top: 16px;
}

/* down-app */
.footer-app {
    margin: 102.8px 80px 48px 80px;
}

.down-app {
    margin-bottom: 16px;
    font-weight: 600;
    size: 13px;
    line-height: 22px;
    letter-spacing: 8%;
    text-transform: uppercase;
    color: #ffffff;
}

/* footer-privacy-policy */

.footer-privacy-policy {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}

.footer-privacy-policy__text {
    margin-top: 16px;
    font-weight: 600;
    size: 13px;
    line-height: 22px;
    letter-spacing: 8%;
    text-transform: uppercase;
    color: #ffffff;
}

.footer-privacy-policy__text-copyright {
    margin-bottom: 16px;
    font-weight: 400;
    size: 13px;
    letter-spacing: 2%;
    color: #ffffff;
}

</style>