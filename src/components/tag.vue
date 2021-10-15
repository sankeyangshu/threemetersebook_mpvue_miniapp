<!--
 * @Description: 标签组件
 * @Author: 王振
 * @Date: 2021-10-15 09:26:33
 * @LastEditors: 王振
 * @LastEditTime: 2021-10-15 09:37:52
-->
<template>
  <div class="tag__wrap" @click="onClickTag">
    <div class="tag">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "tag",
  props: {
    text: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    onClickTag() {
      this.$emit("onClick");
    },
  },
};
</script>

<style lang='scss' scoped>
.tag__wrap {
  display: flex;
  justify-content: center;
  padding: 12rpx 34rpx;
  background-color: #f7f7f9;
  border-radius: 32rpx;
  .tag {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 30rpx;
    color: #272e37;
  }
}
</style>
