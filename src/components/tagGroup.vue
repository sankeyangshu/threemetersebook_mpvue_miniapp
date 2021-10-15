<!--
 * @Description: 标签分组组件
 * @Author: 王振
 * @Date: 2021-10-15 09:39:08
 * @LastEditors: 王振
 * @LastEditTime: 2021-10-15 10:14:52
-->
<template>
  <div class="tag__group__wrap">
    <div class="tag__group__header">
      <div class="header__text">{{ headerText }}</div>
      <div class="header__btn" @click="onBtnClick">{{ btnText }}</div>
    </div>
    <div class="tag__group">
      <div
        class="tag__group__inner"
        v-for="(item, index) in value"
        :key="index"
      >
        <tag :text="item" @onClick="onTagClick(item, index)"></tag>
      </div>
    </div>
  </div>
</template>

<script>
import tag from "./tag";
export default {
  name: "tagGroup",
  components: { tag },
  props: {
    headerText: {
      type: String,
    },
    btnText: {
      type: String,
    },
    value: {
      type: Array,
    },
  },
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    // 标签点击事件
    onTagClick(text, index) {
      this.$emit("onTagClick", text, index);
    },
    // 按钮点击事件
    onBtnClick() {
      this.$emit("onBtnClick");
    },
  },
};
</script>

<style lang='scss' scoped>
.tag__group__wrap {
  margin-top: 70rpx;
  .tag__group__header {
    display: flex;
    justify-content: space-between;
    padding: 0 32rpx;
    line-height: 40rpx;
    font-size: 30rpx;
    .header__text {
      color: #333;
    }

    .header__btn {
      color: #3696ef;
    }
  }

  .tag__group {
    display: flex;
    flex-flow: row wrap;
    padding: 8rpx 20rpx 0 20rpx;
    .tag__group__inner {
      padding: 24rpx 12rpx 0 12rpx;
    }
  }
}
</style>
