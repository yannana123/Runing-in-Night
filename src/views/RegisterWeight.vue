<template>
  <div class="bd">
    <!-- 导航栏 -->
    <registerNav />
    <!-- 内容 -->
    <div class="nr">
      <h3>请输入您的体重</h3>
      <van-field
        readonly
        clickable
        :value="value"
        placeholder="公斤"
        @touchstart.native.stop="show = true"
      >
        <template #button>
          <van-button size="small" type="default" @click="go">确认</van-button>
        </template>
      </van-field>
      <van-number-keyboard
        v-model="value"
        :show="show"
        :maxlength="3"
        @blur="show = false"
      />
    </div>
  </div>
</template>

<script>
import registerNav from "@/components/registerNav.vue";
export default {
  components: { registerNav },
  data() {
    return {
      sex: this.$route.query.sex,
      age: this.$route.query.age,
      height: this.$route.query.height,
      value: "",
      show: false,
    };
  },
  methods: {
    go() {
      if (this.value == "") {
        this.$messagebox("注意", "体重不能为空");
      } else {
        let param = `usex=${this.sex}&uage=${this.age}&uheight=${this.height}&uweight=${this.value}`;
        console.log(param);
        this.axios.post("/registerWeight", param).then((res) => {
          console.log("结果", res);
          if (res.data.code == 200) {
            // 信息注册成功
            this.$messagebox("填写完成", "恭喜！");
            // 跳转主界面
            this.$router.push("/");
          } else {
            // 信息注册失败
            this.$toast("请完善基本信息");
          }
        });
      }
    },
  },
};
</script>
<style>
.van-field__control {
  color: #fff;
}
</style>

<style lang="scss" scoped>
.bd {
  background-color: #000;
  width: 100vw;
  height: 100vh;
  color: #fff;
}
.nr {
  padding: 5vw;
}
.van-field {
  margin-top: 20vh;
  font-size: 1.5em;
  background-color: #000;
}
.van-number-keyboard {
  color: #000;
}
</style>
