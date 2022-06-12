<template>
  <div>
    <van-nav-bar left-arrow @click-left="onClickLeft" />
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.van-nav-bar {
  background-color: #000;
  color: #fff;
}
::v-deep .van-nav-bar .van-icon {
  color: #aaa;
}
[class*="van-hairline"]::after {
  border: none;
}
</style>
