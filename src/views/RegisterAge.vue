<template>
  <div class="bd">
    <!-- 导航栏 -->
    <registerNav />
    <!-- 内容 -->
    <div class="nr">
      <h3>请选择您的出生日期：</h3>
      <div class="age">
        <!-- input框 -->
        <!-- <van-field :value="val" /> -->
        <!-- 日期选择器 -->
        <van-datetime-picker
          v-model="currentDate"
          type="year-month"
          :min-date="minDate"
          :max-date="maxDate"
          @confirm="click"
        />
      </div>
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
      minDate: new Date(1900, 0, 1),
      maxDate: new Date(),
      currentDate: new Date(),
    };
  },
  methods: {
    click(value) {
      let now = new Date();
      let age = now.getFullYear() - value.getFullYear();
      console.log(age);
      this.$router.push(`/registerHeight?sex=${this.sex}&age=${age}`);
    },
  },
};
</script>

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
</style>
