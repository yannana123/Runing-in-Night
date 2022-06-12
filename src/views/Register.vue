<template>
  <div class="bd">
    <!-- 导航栏 -->
    <registerNav />
    <!-- 内容 -->
    <van-form style="margin-top: 5vh">
      <van-field
        v-model="uname"
        label="用户名"
        placeholder="请输入您的用户名"
        :rules="[
          { required: true, message: '请输入用户名' },
          { pattern: /^\w{3,15}$/, message: '用户名格式不正确' },
        ]"
      />
      <van-field
        v-model="pwd"
        type="password"
        label="密码"
        placeholder="请设置您的密码"
        :rules="[
          { required: true, message: '请输入密码' },
          { pattern: /^\d{6}$/, message: '密码格式不正确' },
        ]"
      />
      <van-field
        v-model="repwd"
        type="password"
        label="密码"
        placeholder="请确认您的密码"
        :rules="[
          { required: true, message: '请输入确认密码' },
          { pattern: /^\d{6}$/, message: '密码格式不正确' },
          { validator, message: '两次密码不一致' },
        ]"
      />
      <van-field
        v-model="phone"
        label="手机号"
        placeholder="请输入您的手机号"
        :rules="[
          { required: true, message: '请输入手机号' },
          { pattern: /^1[3-9]\d{9}$/, message: '手机号格式不正确' },
        ]"
      >
        <template #button>
          <van-button size="small" type="primary">发送验证码</van-button>
        </template>
      </van-field>
      <!-- 验证码 -->
      <van-field
        v-model="sms"
        label="验证码"
        placeholder="请输入验证码"
        :rules="[{ required: true, message: '请输入验证码' }]"
      />

      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit" @click="regist"
          >注册</van-button
        >
      </div>
    </van-form>
  </div>
</template>
<script>
import registerNav from "@/components/registerNav.vue";
export default {
  components: { registerNav },
  data() {
    return {
      sms: "",
      uname: "",
      pwd: "",
      repwd: "",
      phone: "",
    };
  },
  methods: {
    validator() {
      return this.pwd == this.repwd;
    },
    regist() {
      let param = `username=${this.uname}&password=${this.pwd}&uphone=${this.phone}&sms=${this.sms}`;
      this.axios.post("/register", param).then((res) => {
        console.log("注册结果：", res);
        if (res.data.code == 200) {
          // 注册成功
          this.$messagebox("注册成功", "恭喜！");
          this.$router.push("/registerSex");
        } else {
          // 注册失败
          this.$toast("该用户已存在");
        }
      });
    },
  },
};
</script>
<style lang="scss">
.bd {
  background-color: #000;
  width: 100vw;
  height: 100vh;
  color: #fff;
}
.van-field__control {
  color: #fff;
}
.van-cell {
  background-color: #000;
}
.van-cell::after {
  border: none;
}
.van-checkbox__label > .aaaa {
  color: #ccc;
}
.van-cell {
  margin: 10px auto;
}
.van-tabbar {
  background-color: transparent;
}
</style>
