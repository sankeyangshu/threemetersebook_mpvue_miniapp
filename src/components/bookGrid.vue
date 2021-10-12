<!--
 * @Description: 图书宫格
 * @Author: 王振
 * @Date: 2021-10-12 14:24:24
 * @LastEditors: 王振
 * @LastEditTime: 2021-10-12 14:38:36
-->
<template>
  <div class="book__grid">
    <block v-for="(item, index) in Rebooks" :key="index">
      <div class="book__grid__wrap">
        <image :src="item.url" class="wrap__img" />
        <text class="wrap__title">{{ item.title }}</text>
        <van-icon
          class-prefix="iconfont"
          name="iconfont icon-erji"
          color="#fff"
          class="wrap__icon"
        />
      </div>
    </block>
  </div>
</template>

<script>
export default {
  name: "bookGrid",
  props: {
    Rebooks: {
      type: Array,
    },
  },
  data() {
    return {
      msg: "",
    };
  },
  methods: {},
};
</script>

<style lang='scss' scoped>
.book__grid {
  display: flex;
  align-items: center;
  &__wrap {
    display: flex;
    align-items: center;
    flex-direction: column;
    flex: 1;
    position: relative;
    .wrap__img {
      width: 85%;
      height: 300rpx;
    }

    .wrap__title {
      margin: 10rpx 0;
      font-size: 30rpx;
      color: #a9a5a0;
    }

    .wrap__icon {
      position: absolute;
      left: 45rpx;
      top: 20rpx;
    }
  }
}
</style>
