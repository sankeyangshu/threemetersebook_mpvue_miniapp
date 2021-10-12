<!--
 * @Description: 轮播图组件
 * @Author: 王振
 * @Date: 2021-10-12 11:19:09
 * @LastEditors: 王振
 * @LastEditTime: 2021-10-12 11:19:10
-->
<template>
  <swiper
    class="swiper"
    indicator-active-color="#ffffff"
    :indicator-dots="indicatorDots"
    :autoplay="autoplay"
    :interval="interval"
    :duration="duration"
  >
    <block v-for="(item, index) in images" :key="index">
      <swiper-item>
        <image :src="item.url" class="slide-image" mode="aspectFill" />
      </swiper-item>
    </block>
  </swiper>
</template>

<script>
export default {
  props: {
    //父组件传递给子组件值
    images: {
      type: Array, //判断是否为数组
    },
  },
  data() {
    return {
      indicatorDots: true, //是否显示面板指示点
      autoplay: true, //是否自动切换
      interval: 3000, //自动切换时间间隔
      duration: 500, //滑动动画时长
    };
  },
};
</script>
<style lang='scss' scoped>
.swiper {
  height: 376rpx !important;
}
.slide-image {
  height: 100%;
  width: 100%;
}
</style>
