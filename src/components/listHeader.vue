<!--
 * @Description: 列表头部组件
 * @Author: 王振
 * @Date: 2021-10-12 11:24:59
 * @LastEditors: 王振
 * @LastEditTime: 2021-10-12 13:51:40
-->
<template>
  <div class="list__header">
    <div class="list__header__title">
      {{ title }}
    </div>
    <div class="list__header__wrap">
      <div class="header__wrap__tips">
        {{ tips }}
      </div>
      <van-icon name="arrow" color="#a9a5a0" />
    </div>
  </div>
</template>

<script>
export default {
  name: "listHeader",
  props: {
    title: {
      // 头部标题
      type: String,
    },
    tips: {
      // 查看全部
      type: String,
      default: "查看全部",
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
.list__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10rpx 0;
  padding: 20rpx;
  &__title {
    font-size: 40rpx;
  }

  &__wrap {
    display: flex;
    align-items: center;
    .header__wrap__tips {
      font-size: 30rpx;
      color: #a9a5a0;
    }
  }
}
</style>
