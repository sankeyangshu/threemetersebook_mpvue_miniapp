<!--
 * @Description: 图书列表组件
 * @Author: 王振
 * @Date: 2021-10-12 14:56:51
 * @LastEditors: 王振
 * @LastEditTime: 2021-10-12 14:59:11
-->
<template>
  <div>
    <div v-for="(item, idx) in bookList" :key="idx">
      <div class="book">
        <van-image
          :src="item.imgurl"
          fit="cover"
          width="250rpx"
          height="250rpx"
          class="book__img"
        ></van-image>
        <div class="book__text">
          <div class="book__text__title">{{ item.name }}</div>
          <div class="book__text__content">{{ item.synopsis }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bookList",
  props: {
    bookList: {
      type: Array,
      default: () => [],
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
.book {
  height: 320rpx;
  display: flex;
  align-items: center;
  padding: 10rpx;
  border-radius: 8rpx;
  border-bottom: 1px solid #f5f5f5;
  .book__img {
    margin-left: 20rpx;
    margin-right: 20rpx;
  }
  .book__text {
    height: 100%;
    flex: 1;
    &__title {
      font-size: 35rpx;
      font-weight: 700;
      padding-top: 20rpx;
      padding-bottom: 20rpx;
    }
    &__content {
      font-size: 30rpx;
      color: rgba(0, 0, 0, 0.5);
    }
  }
}
</style>
