<template>
  <div class="bd">
    <!-- 导航栏 -->
    <registerNav />
    <!-- 内容 -->
    <div class="nr">
      <h3>请输入您的身高</h3>
      <van-field
        :value="value"
        placeholder="厘米"
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
      value: "",
      show: false,
    };
  },
  methods: {
    go() {
      if (this.value == "") {
        this.$messagebox("注意", "身高不能为空");
      } else {
        console.log(this.value);
        this.$router.push(
          `/registerWeight?sex=${this.sex}&age=${this.age}&height=${this.value}`
        );
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
