<!--
 * @Description: 音乐详情页页面
 * @Author: 王振
 * @Date: 2021-10-13 09:43:53
 * @LastEditors: 王振
 * @LastEditTime: 2021-10-13 14:04:06
-->
<template>
  <div class="music" :class="isNightMode ? 'nightTheme' : ''">
    <!-- 歌曲信息 开始 -->
    <div class="music__content">
      <div class="music__content__song">
        <text class="song__title">歌曲</text>
        <text class="song__name">The one</text>
      </div>
      <div class="music__content__singer">
        <text class="singer__title">歌手</text>
        <text class="singer__name">The one</text>
      </div>
    </div>
    <!-- 歌曲信息 结束 -->

    <!-- 歌曲图片 开始 -->
    <div class="music__image">
      <image
        mode="widthFix"
        lazy-load
        src="https://img.yzcdn.cn/vant/cat.jpeg"
        class="image"
      />
    </div>
    <!-- 歌曲图片 结束 -->

    <!-- 歌曲进度 开始 -->
    <div class="music__slider">
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
    <!-- 歌曲进度 结束 -->

    <!-- 按钮部分 开始 -->
    <div class="music__btn">
      <div class="music__btn__top">
        <div class="top__left">
          <van-icon
            class-prefix="iconfont"
            name="iconfont icon-shangyixiang"
            size="85rpx"
          />
        </div>
        <div class="top__center">
          <van-icon
            class-prefix="iconfont"
            name="iconfont icon-bofang1"
            size="80rpx"
          />
        </div>
        <div class="top__right">
          <van-icon
            class-prefix="iconfont"
            name="iconfont icon-xiayixiang"
            size="85rpx"
          />
        </div>
      </div>
      <div class="music__btn__bottom">
        <div class="bottom__icon">
          <van-icon
            class-prefix="iconfont"
            name="iconfont icon-icon--"
            size="60rpx"
          />
          <text class="icon__text">播放列表</text>
        </div>
        <div class="bottom__icon bottom__icon__center">
          <van-icon
            class-prefix="iconfont"
            name="iconfont icon-aixinfengxian"
            size="60rpx"
          />
          <text class="icon__text">收藏</text>
        </div>
        <div class="bottom__icon" @click="isNightMode = !isNightMode">
          <van-icon
            class-prefix="iconfont"
            name="iconfont icon-yejianmoshi"
            size="60rpx"
          />
          <text class="icon__text">夜间模式</text>
        </div>
      </div>
    </div>
    <!-- 按钮部分 结束 -->

    <!-- 歌曲简介 开始 -->
    <div class="music__info">
      <div class="music__info__wrap">
        <div>
          <div>
            <text class="wrap__title">歌曲</text>
            <text class="wrap__name">The one</text>
          </div>
          <div>
            <text>歌手</text>
            <text>The one</text>
          </div>
        </div>
        <van-icon
          class-prefix="iconfont"
          name="iconfont icon-jieshao"
          size="65rpx"
          @click="isShowSinger = true"
        />
      </div>
      <div class="music__info__ctx">
        <div class="ctx__title">歌手简介：</div>
        <div class="ctx__content"></div>
      </div>
    </div>
    <!-- 歌曲简介 结束 -->

    <!-- 播放列表 开始 -->
    <!-- <div class="music__list">
      <div class="music__list__title">列表选择</div>
      <scroll-view scroll-y style="height: 350rpx">
        <block>
          <div class="music__list__song">
            <text class="song song__text">山水之间</text>
            <text class="song song__text">许嵩</text>
            <div class="song song__icon">
              <text>播放</text>
              <van-icon
                class-prefix="iconfont"
                name="iconfont icon-bofangsanjiaoxing"
                size="40rpx"
              />
            </div>
          </div>
        </block>
      </scroll-view>
    </div> -->
    <!-- 播放列表 结束 -->

    <!-- 歌手简介详情 开始 -->
    <van-popup :show="isShowSinger" @clickOverlay="OnClosePopup">
      <div class="music__popup" :class="isNightMode ? 'nightTheme' : ''">
        <text>歌手简介。。。</text>
      </div>
    </van-popup>
    <!-- 歌手简介详情 结束 -->
  </div>
</template>

<script>
export default {
  name: "musicDetail",
  data() {
    return {
      audioList: [],
      isNightMode: false, // 是否开启夜间模式
      isShowSinger: false, // 是否显示歌手简介详情
    };
  },
  methods: {
    // 点击遮罩层，关闭弹出层
    OnClosePopup() {
      this.isShowSinger = false;
    },
  },
};
</script>

<style lang='scss' scoped>
.nightTheme {
  background-color: #4c5662;
  color: #c1cbcd;
}
.music {
  &__content {
    padding: 40rpx 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &__song {
      .song__title {
        margin-right: 10rpx;
        font-size: 30rpx;
      }
      .song__name {
        font-weight: 700;
      }
    }
    &__singer {
      .singer__title {
        margin-right: 10rpx;
        font-size: 30rpx;
      }
      .singer__name {
        font-weight: 700;
      }
    }
  }
  &__image {
    height: 420rpx;
    margin-top: 20rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    .image {
      border-radius: 35rpx;
      box-shadow: 0 2rpx 6rpx 0;
    }
  }
  &__slider {
    height: 65rpx;
    margin-top: 20rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30rpx;
    color: #7a8388;
    .slider {
      width: 500rpx;
    }
  }
  &__btn {
    &__top {
      padding-top: 60rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      .top__left {
        margin-right: 30rpx;
      }
      .top__center {
        margin-left: 50rpx;
        margin-right: 50rpx;
      }
      .top__right {
        margin-left: 20rpx;
      }
    }
    &__bottom {
      padding-top: 100rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30rpx;
      .bottom__icon {
        display: flex;
        flex-direction: column;
        align-items: center;
        .icon__text {
          padding-top: 10rpx;
        }
      }
      .bottom__icon__center {
        padding: 0 80rpx;
      }
    }
  }
  &__info {
    height: 260rpx;
    margin-top: 45rpx;
    padding: 20rpx;
    // position: fixed;
    // right: 0;
    // bottom: 0;
    // left: 0;
    // z-index: 1030;
    box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.15);
    border-radius: 30rpx;
    &__wrap {
      display: flex;
      justify-content: space-between;
      .wrap__title {
        font-size: 30rpx;
      }
      .wrap__name {
        font-weight: 700;
      }
    }
    &__ctx {
      .ctx__title {
        padding-top: 20rpx;
        font-size: 35rpx;
      }
      .ctx__content {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  &__list {
    height: 400rpx;
    margin-top: 45rpx;
    padding: 20rpx;
    box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.15);
    border-radius: 30rpx;
    &__title {
      height: 50rpx;
      font-size: 35rpx;
      font-weight: 700;
    }
    &__song {
      height: 85rpx;
      display: flex;
      align-items: center;
      font-size: 30rpx;
      padding-left: 20rpx;
      padding-right: 20rpx;
      .song {
        flex: 1;
      }
      .song__text {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .song__icon {
        margin-left: 30rpx;
        display: flex;
        align-items: center;
        text {
          margin-right: 20rpx;
        }
      }
    }
  }
  &__popup {
    width: 600rpx;
    height: 850rpx;
    padding-left: 20rpx;
    padding-right: 20rpx;
    font-size: 30rpx;
    box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.15);
    border-radius: 40rpx;
  }
}
</style>
