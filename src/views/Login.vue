<template>
  <div class="login">
    <van-nav-bar left-arrow />
    <h1>登录</h1>
    <van-form @submit="onSubmit">
      <van-field
        name="uphone"
        class="item"
        v-model="uphone"
        placeholder="请输入11位电话号码"
        :rules="[
          {
            validator,
            required: true,
            message: '请填写正确号码',
          },
        ]"
      />
      <van-field
        name="upwd"
        class="item"
        v-model="upwd"
        type="password"
        placeholder="请输入密码"
        :rules="[
          {
            validator: validatorpwd,
            required: true,
            message: '请输入正确密码',
          },
        ]"
      />

      <div style="margin: 16px">
        <van-button
          :disabled="btn"
          color="#F3BC47"
          round
          block
          type="info"
          native-type="submit"
          >立即登录</van-button
        >
      </div>
    </van-form>
    <van-tabbar>
      <van-divider :style="{ borderColor: '#CCC', padding: '0 16px' }" />
      <van-checkbox v-model="checked" shape="square" icon-size="16px">
        <span class="aaaa">
          已阅读并同意夜跑的隐私条款和用户协议</span
        ></van-checkbox
      >
    </van-tabbar>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      uphone: "",
      upwd: "",
      checked: false,
      btn: true,
    };
  },
  methods: {
    // 点击按钮
    onSubmit(values) {
      if (!this.checked) {
        Toast("请在屏幕下方确认您已阅读并同意夜跑的隐私条款和用户协议");
      } else {
        console.log("submit", values);
        let parmas = `uphone=${values.uphone}&upwd=${values.upwd}`;
        this.axios.post("users/login", parmas).then((res) => {
          console.log(res);

          if (res.data.code == 200) {
            // console.log("登录成功");
            let url = `/users/datas?uphone=${values.uphone}`;
            console.log(url);
            this.axios.get(url).then((res) => {
              console.log(res);
            });
            // console.log(111);
          } else {
            Toast({
              message: "电话号码或密码错误",
              icon: "clear",
              overlay: "true",
              forbidClick: "true",
            });
          }
        });
      }
    },

    // 电话号码验证
    validator(val) {
      return /^1[3-9]\d{9}$/.test(val);
    },
    validatorpwd(val) {
      return /^1\d{5}$/.test(val);
    },
  },
  watch: {
    upwd(newValue, oldValue) {
      console.log(this.validator());
      console.log(this.validatorpwd());
      if (!this.validator() && !this.validatorpwd()) {
        this.btn = false;
      }
      console.log(newValue);
    },
  },
};
</script>
<!-- 全局样式 -->
<style lang="scss">
.van-field__control {
  color: #fff;
}
</style>
<style scoped src="../assets/css/login.css">
</style>