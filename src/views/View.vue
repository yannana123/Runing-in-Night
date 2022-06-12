<template>
  <div class="bd">
    <div class="swp">
      <van-swipe
        :show-indicators="false"
        class="my-swipe"
        :autoplay="3000"
        indicator-color="white"
      >
        <van-swipe-item
          ><img src="../assets/imgs/VCG41162221489.jpg"
        /></van-swipe-item>
        <van-swipe-item
          ><img src="../assets/imgs/VCG41471911305.jpg"
        /></van-swipe-item>
        <van-swipe-item
          ><img src="../assets/imgs/VCG41476204586.jpg"
        /></van-swipe-item>
        <van-swipe-item
          ><img src="../assets/imgs/VCG41523955129.jpg"
        /></van-swipe-item>
        <van-swipe-item
          ><img src="../assets/imgs/VCG41523955177.jpg"
        /></van-swipe-item>
      </van-swipe>
    </div>
    <div class="btn">
      <van-button type="info" round size="large" @click="register"
        >我是新用户</van-button
      >
      <van-button type="info" round size="large" @click="login"
        >我是老用户</van-button
      >
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    register() {
      this.$router.push("/register");
    },
    login() {
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
.bd {
  position: relative;
  display: flex;
  flex-direction: column;
}
.van-swipe {
  position: absolute;
  width: 100vw;
  height: 100vh;
  img {
    width: 100%;
    height: 100%;
  }
}
.btn {
  margin: 80vh 10vw 20vh 10vw;

  .van-button {
    border-color: #f3bc47;
    background-color: #f3bc47;

    :active {
      background-color: rgba($color: #f3bc47, $alpha: 0.7);
      color: #fff;
    }
  }

  .van-button:last-child {
    margin-top: 20px;
  }
}
</style>
