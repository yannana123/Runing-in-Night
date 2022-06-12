<template>
  <div class="bd">
    <!-- 导航栏 -->
    <registerNav />
    <!-- 内容 -->
    <div class="nr">
      <h2>个性化您的夜跑</h2>
      <div class="words">
        夜跑需要了解一些您的信息，从而更精准的计算你的运动数据，提供更适合您的运动建议。
      </div>
      <h3>您的性别是：</h3>
      <div class="sex">
        <van-radio-group v-model="radio" direction="horizontal" class="imgs">
          <van-radio name="1" @click.native="go">
            男
            <template #icon="props">
              <img
                class="img-icon"
                :src="props.checked ? activeIcon : inactiveIcon"
              />
            </template>
          </van-radio>
          <van-radio name="0" @click.native="go">
            女
            <template #icon="props">
              <img
                class="img-icon"
                :src="props.checked ? activeIcon : inactiveIcon"
              />
            </template>
          </van-radio>
        </van-radio-group>
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
      radio: "1",
      activeIcon: "https://img01.yzcdn.cn/vant/user-active.png",
      inactiveIcon: "https://img01.yzcdn.cn/vant/user-inactive.png",
    };
  },
  methods: {
    go() {
      console.log(this.radio);
      this.$router.push(`/registerAge?sex=${this.radio}`);
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
.words {
  color: #aaa;
}
.img-icon {
  height: 20px;
}
.imgs {
  display: flex;
  justify-content: center;
  margin-top: 40vh;
}
</style>
