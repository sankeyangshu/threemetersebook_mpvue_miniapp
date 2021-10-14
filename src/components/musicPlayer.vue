<!--
 * @Description: 播放器组件
 * @Author: 王振
 * @Date: 2021-10-12 15:41:19
 * @LastEditors: 王振
 * @LastEditTime: 2021-10-13 09:47:11
-->
<template>
  <div class="player" @click="OnClickOpenDetail">
    <!-- 进度条 开始 -->
    <div class="player__slider">
      <!-- 总时长 -->
      <div>00:00</div>
      <!-- 进度条 -->
      <div class="slider">
        <slider
          value="50"
          activeColor="#e48267"
          backgroundColor="#eef2f3"
          block-size="16"
        />
      </div>
      <!-- 当前播放时长 -->
      <div>00:00</div>
    </div>
    <!-- 进度条 结束 -->

    <div class="player__content">
      <div class="content__left">
        <div>歌手-The one</div>
        <div>歌曲-暗香</div>
      </div>
      <div class="content__right">
        <van-icon
          class-prefix="iconfont"
          name="iconfont icon-shangyishou"
          size="75rpx"
        />
        <van-icon
          class-prefix="iconfont"
          name="iconfont icon-ziyuan"
          size="75rpx"
          class="content__right__icon"
        />
        <van-icon
          class-prefix="iconfont"
          name="iconfont icon-xiayishou"
          size="75rpx"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "musicPlayer",
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    // 跳转到音乐详情页
    OnClickOpenDetail() {
      this.$router.push("/pages/musicDetail/main");
    },
  },
};
</script>

<style lang='scss' scoped>
.player {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1030;
  height: 160rpx;
  margin: 0 20rpx 10rpx;
  background-color: #d1ccc0;
  opacity: 0.9;
  border-radius: 8rpx;
  &__slider {
    height: 65rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30rpx;
    color: #7a8388;
    .slider {
      width: 500rpx;
    }
  }
  &__content {
    height: 95rpx;
    margin-left: 20rpx;
    margin-right: 20rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .content__left {
      font-size: 30rpx;
      color: #424651;
    }
    .content__right {
      &__icon {
        margin-left: 20rpx;
        margin-right: 20rpx;
      }
    }
  }
}
</style>
