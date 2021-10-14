<!--
 * @Description: 收藏页面-用户组件
 * @Author: 王振
 * @Date: 2021-10-14 10:52:42
 * @LastEditors: 王振
 * @LastEditTime: 2021-10-14 11:17:50
-->
<template>
  <div class="user__info__wrapper">
    <div class="user__info">
      <div class="user__nick__name">{{ userInfo.nickName }}</div>
      <div class="user__read__time">您已经加入三米阅读{{ readDay }}天</div>
      <div class="user__avatar__wrapper">
        <van-image
          :src="userInfo.avatarUrl"
          fit="fill"
          width="80rpx"
          height="80rpx"
          round
        />
      </div>
    </div>
    <div class="user__extra">
      <div class="user__extra__text">您的书架中共有 {{ num }} 本好书</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CollectionUserInfo",
  props: {
    num: {
      // 书架数量总计
      type: Number,
      default: 0,
    },
    readDay: {
      // 天数总计
      type: Number,
      default: 0,
    },
    userInfo: {
      // 用户信息
      type: Object,
      default() {
        return {
          nickName: "三棵杨树",
          avatarUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
        };
      },
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
.user__info__wrapper {
  margin: 30rpx 50rpx;
  background: #f8f9fb;
  border-radius: 24rpx;
  padding: 30rpx 40rpx;
  border: 1px solid #e0e1e2;
  .user__info {
    position: relative;
    height: 120rpx;
    border-bottom: 1px solid #e9e9e9;
    .user__nick__name {
      font-size: 34rpx;
      font-weight: 500;
      color: #333;
    }

    .user__read__time {
      margin-top: 10rpx;
      font-size: 26rpx;
      color: #868686;
    }

    .user__avatar__wrapper {
      position: absolute;
      right: 0;
      top: 0;
    }
  }

  .user__extra {
    margin-top: 30rpx;
    &__text {
      font-size: 26rpx;
      color: #666;
      font-weight: 500;
    }
  }
}
</style>
