<template>
  <div class="limiter">
    <div class="container-login100">
      <div class="wrap-login100">
        <div class="login100-form validate-form">
          <div class="pb-5 text-center" v-if="error">
            <h5 class="bg-danger text-white p-1">
              {{error}}
            </h5>
          </div>
          <span class="login100-form-title p-b-43"> وارد شوید </span>

          <div
            class="wrap-input100 validate-input"
            data-validate="Valid email is required: ex@abc.xyz"
          >
            <input class="input100 text-center" type="text" name="identifier" v-model="identifier" />
            <span class="focus-input100"></span>
            <span class="label-input100">ایمیل یا نام کاربری</span>
          </div>

          <div
            class="wrap-input100 validate-input"
            data-validate="Password is required"
          >
            <input class="input100 text-center" type="password" name="pass" v-model="password" />
            <span class="focus-input100"></span>
            <span class="label-input100">پسورد</span>
          </div>

          <div class="flex-sb-m w-full p-t-3 p-b-32">
            <div class="contact100-form-checkbox">
              <input
                class="input-checkbox100"
                id="ckb1"
                type="checkbox"
                name="remember-me"
              />
              <!-- <label class="label-checkbox100" for="ckb1">
                مرا به خاطر بسپار
              </label> -->
            </div>

            <div>
              <a href="#" class="txt1"> رمزتان را فراموش کردید؟ </a>
            </div>
          </div>

          <div class="container-login100-form-btn">
              <button class="login100-form-btn" @click="login()"> ورود </button>
          </div>

        <a href="/register">
          <h5 class="text-center py-5">
            ثبت نام نکردید؟ ثبت نام کنید
          </h5>
        </a>
        </div>

        <div
          class="login100-more d-flex align-items-center justify-content-center"
          style="
            background-image: linear-gradient(to bottom,#a11f3c 0%,#9352b3 100%);
          "
        >
          <h1 class="text-white mobile-disable">فیلمیکس ، دنیای فیلم و سریال</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapActions, mapGetters } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      identifier: "",
      password: "",
      error: false,
    };
  },
  methods: {
    login() {
      fetch("http://localhost:1337/graphql", {
        method: "post",
        body: JSON.stringify({
          query: 'mutation Login { login(input: {identifier:"'+this.identifier+'", password: "'+this.password+'"}) {jwt} }',
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((r) => r.json())
        .then((data) => localStorage.setItem('jwt',data.data.login.jwt))
        .then(() => this.$router.push({ name: 'Home' }))
        .catch(() => {
          this.error = " نام کاربری یا رمز عبور اشتباه است "
        });
    },
  }
};
</script>

<style scoped>
/*//////////////////////////////////////////////////////////////////
[ FONT ]*/

@font-face {
  font-family: Poppins-Regular;
  src: url("../assets/fonts/poppins/Poppins-Regular.ttf");
}

@font-face {
  font-family: Poppins-Medium;
  src: url("../assets/fonts/poppins/Poppins-Medium.ttf");
}

@font-face {
  font-family: Poppins-Bold;
  src: url("../assets/fonts/poppins/Poppins-Bold.ttf");
}

@font-face {
  font-family: Poppins-SemiBold;
  src: url("../assets/fonts/poppins/Poppins-SemiBold.ttf");
}

@font-face {
  font-family: Montserrat-Bold;
  src: url("../assets/fonts/montserrat/Montserrat-Bold.ttf");
}

@font-face {
  font-family: Montserrat-SemiBold;
  src: url("../assets/fonts/montserrat/Montserrat-SemiBold.ttf");
}

@font-face {
  font-family: Montserrat-Regular;
  src: url("../assets/fonts/montserrat/Montserrat-Regular.ttf");
}

/*//////////////////////////////////////////////////////////////////
[ RESTYLE TAG ]*/

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

body,
html {
  height: 100%;
  font-family: Poppins-Regular, sans-serif;
}

/*---------------------------------------------*/
a {
  font-family: Poppins-Regular;
  font-size: 14px;
  line-height: 1.7;
  color: #666666;
  margin: 0px;
  transition: all 0.4s;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
}

a:focus {
  outline: none !important;
}

a:hover {
  text-decoration: none;
  color: #6675df;
}

/*---------------------------------------------*/
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0px;
}

p {
  font-family: Poppins-Regular;
  font-size: 14px;
  line-height: 1.7;
  color: #666666;
  margin: 0px;
}

ul,
li {
  margin: 0px;
  list-style-type: none;
}

/*---------------------------------------------*/
input {
  outline: none;
  border: none;
}

textarea {
  outline: none;
  border: none;
}

textarea:focus,
input:focus {
  border-color: transparent !important;
}

input:focus::-webkit-input-placeholder {
  color: transparent;
}
input:focus:-moz-placeholder {
  color: transparent;
}
input:focus::-moz-placeholder {
  color: transparent;
}
input:focus:-ms-input-placeholder {
  color: transparent;
}

textarea:focus::-webkit-input-placeholder {
  color: transparent;
}
textarea:focus:-moz-placeholder {
  color: transparent;
}
textarea:focus::-moz-placeholder {
  color: transparent;
}
textarea:focus:-ms-input-placeholder {
  color: transparent;
}

input::-webkit-input-placeholder {
  color: #999999;
}
input:-moz-placeholder {
  color: #999999;
}
input::-moz-placeholder {
  color: #999999;
}
input:-ms-input-placeholder {
  color: #999999;
}

textarea::-webkit-input-placeholder {
  color: #999999;
}
textarea:-moz-placeholder {
  color: #999999;
}
textarea::-moz-placeholder {
  color: #999999;
}
textarea:-ms-input-placeholder {
  color: #999999;
}

label {
  display: block;
  margin: 0;
}

/*---------------------------------------------*/
button {
  outline: none !important;
  border: none;
  background: transparent;
}

button:hover {
  cursor: pointer;
}

iframe {
  border: none !important;
}

/*//////////////////////////////////////////////////////////////////
[ utility ]*/

/*==================================================================
[ Text ]*/
.txt1 {
  font-family: Montserrat-Regular;
  font-size: 13px;
  line-height: 1.4;
  color: #555555;
}

.txt2 {
  font-family: Montserrat-Regular;
  font-size: 13px;
  line-height: 1.4;
  color: #999999;
}

/*==================================================================
[ Size ]*/
.size1 {
  width: 355px;
  max-width: 100%;
}

.size2 {
  width: calc(100% - 43px);
}

/*==================================================================
[ Background ]*/
.bg1 {
  background: #3b5998;
}
.bg2 {
  background: #1da1f2;
}
.bg3 {
  background: #cd201f;
}

/*//////////////////////////////////////////////////////////////////
[ login ]*/
.limiter {
  width: 100%;
  margin: 0 auto;
}

.container-login100 {
  width: 100%;
  min-height: 100vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: #f2f2f2;
}

.wrap-login100 {
  width: 100%;
  background: #fff;
  overflow: hidden;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  flex-direction: row-reverse;
}

/*==================================================================
[ login more ]*/
.login100-more {
  width: calc(100% - 560px);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 1;
}

.login100-more::before {
  content: "";
  display: block;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.1);
}

/*==================================================================
[ Form ]*/

.login100-form {
  width: 560px;
  min-height: 100vh;
  display: block;
  background-color: #f7f7f7;
  padding: 173px 55px 55px 55px;
}

.login100-form-title {
  width: 100%;
  display: block;
  font-family: Poppins-Regular;
  font-size: 30px;
  color: #333333;
  line-height: 1.2;
  text-align: center;
}

/*------------------------------------------------------------------
[ Input ]*/

.wrap-input100 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  width: 100%;
  height: 80px;
  position: relative;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  margin-bottom: 10px;
}

.label-input100 {
  font-family: Montserrat-Regular;
  font-size: 18px;
  color: #999999;
  line-height: 1.2;

  display: block;
  position: absolute;
  pointer-events: none;
  width: 100%;
  padding-left: 24px;
  left: 0;
  top: 30px;

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

.input100 {
  display: block;
  width: 100%;
  background: transparent;
  font-family: Montserrat-Regular;
  font-size: 18px;
  color: #555555;
  line-height: 1.2;
  padding: 0 26px;
}

input.input100 {
  height: 100%;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

/*---------------------------------------------*/

.focus-input100 {
  position: absolute;
  display: block;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  top: -1px;
  left: -1px;
  pointer-events: none;
  border: 1px solid #6675df;
  border-radius: 10px;

  visibility: hidden;
  opacity: 0;

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;

  -webkit-transform: scaleX(1.1) scaleY(1.3);
  -moz-transform: scaleX(1.1) scaleY(1.3);
  -ms-transform: scaleX(1.1) scaleY(1.3);
  -o-transform: scaleX(1.1) scaleY(1.3);
  transform: scaleX(1.1) scaleY(1.3);
}

.input100:focus + .focus-input100 {
  visibility: visible;
  opacity: 1;

  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
}

.eff-focus-selection {
  visibility: visible;
  opacity: 1;

  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
}

.input100:focus {
  height: 48px;
}

.input100:focus + .focus-input100 + .label-input100 {
  top: 14px;
  font-size: 13px;
}

.has-val {
  height: 48px !important;
}

.has-val + .focus-input100 + .label-input100 {
  top: 14px;
  font-size: 13px;
}

/*==================================================================
[ Restyle Checkbox ]*/

.input-checkbox100 {
  display: none;
}

.label-checkbox100 {
  font-family: Poppins-Regular;
  font-size: 13px;
  color: #999999;
  line-height: 1.4;

  display: block;
  position: relative;
  padding-left: 26px;
  cursor: pointer;
}

.label-checkbox100::before {
  content: "\f00c";
  font-family: FontAwesome;
  font-size: 13px;
  color: transparent;

  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 2px;
  background: #fff;
  border: 1px solid #6675df;
  left: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
}

.input-checkbox100:checked + .label-checkbox100::before {
  color: #6675df;
}

/*------------------------------------------------------------------
[ Button ]*/
.container-login100-form-btn {
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.login100-form-btn {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background: #6675df;

  font-family: Montserrat-Bold;
  font-size: 12px;
  color: #fff;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 1px;

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

.login100-form-btn:hover {
  background: #333333;
}

/*------------------------------------------------------------------
[ Responsive ]*/

@media (max-width: 992px) {
  .login100-form {
    width: 50%;
    padding-left: 30px;
    padding-right: 30px;
  }

  .login100-more {
    width: 50%;
  }

  .mobile-disable {
    display: none;
  }
}

@media (max-width: 768px) {
  .login100-form {
    width: 100%;
  }

  .login100-more {
    display: none;
  }

  .mobile-disable {
    display: none;
  }
}

@media (max-width: 576px) {
  .login100-form {
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 70px;
  }
}

/*------------------------------------------------------------------
[ Alert validate ]*/

.validate-input {
  position: relative;
}

.alert-validate::before {
  content: attr(data-validate);
  position: absolute;
  z-index: 100;
  max-width: 70%;
  background-color: #fff;
  border: 1px solid #c80000;
  border-radius: 2px;
  padding: 4px 25px 4px 10px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 12px;
  pointer-events: none;

  font-family: Poppins-Regular;
  color: #c80000;
  font-size: 13px;
  line-height: 1.4;
  text-align: left;

  visibility: hidden;
  opacity: 0;

  -webkit-transition: opacity 0.4s;
  -o-transition: opacity 0.4s;
  -moz-transition: opacity 0.4s;
  transition: opacity 0.4s;
}

.alert-validate::after {
  content: "\f12a";
  font-family: FontAwesome;
  display: block;
  position: absolute;
  z-index: 110;
  color: #c80000;
  font-size: 16px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 18px;
}

.alert-validate:hover:before {
  visibility: visible;
  opacity: 1;
}

@media (max-width: 992px) {
  .alert-validate::before {
    visibility: visible;
    opacity: 1;
  }
}

/*==================================================================
[ Social ]*/
.login100-form-social-item {
  width: 36px;
  height: 36px;
  font-size: 18px;
  color: #fff;
  border-radius: 50%;
}

.login100-form-social-item:hover {
  background: #333333;
  color: #fff;
}
</style>

<style scoped src="../assets/utils.css">
</style>