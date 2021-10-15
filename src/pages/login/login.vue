<!--
 * @Description: 登录页面
 * @Author: 王振
 * @Date: 2021-10-15 11:13:57
 * @LastEditors: 王振
 * @LastEditTime: 2021-10-15 14:08:03
-->
<template>
  <div class="container">
    <div class="wechatapp">
      <div class="header">
        <open-data class="avatar" type="userAvatarUrl"></open-data>
      </div>
    </div>
    <div class="auth-title">申请获取以下权限</div>
    <div class="auth-subtitle">获得你的公开信息（昵称、头像等）</div>
    <div class="login-btn">
      <!-- 获取微信用户信息（新版） -->
      <button class="button btn-normal">授权登录</button>
    </div>
    <div class="no-login-btn">
      <button class="button btn-normal">暂不登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      msg: "",
    };
  },
  methods: {},
};
</script>

<style lang='scss' scoped>
.container {
  padding: 0 60rpx;
  font-size: 32rpx;
  background: #fff;
  min-height: 100vh;
  .wechatapp {
    padding: 80rpx 0 48rpx;
    border-bottom: 1rpx solid #e3e3e3;
    margin-bottom: 72rpx;
    text-align: center;
    .header {
      width: 190rpx;
      height: 190rpx;
      border: 4rpx solid #fff;
      margin: 0 auto 0;
      border-radius: 50%;
      overflow: hidden;
      box-shadow: 2rpx 0 10rpx rgba(50, 50, 50, 0.3);
    }
  }
  .auth-title {
    color: #585858;
    font-size: 34rpx;
    margin-bottom: 40rpx;
  }
  .auth-subtitle {
    color: #888;
    margin-bottom: 88rpx;
    font-size: 28rpx;
  }
  .login-btn {
    padding: 0 20rpx;
    .button {
      height: 88rpx;
      line-height: 88rpx;
      background: #04be01;
      color: #fff;
      font-size: 30rpx;
      border-radius: 999rpx;
      text-align: center;
    }
  }
  .no-login-btn {
    margin-top: 20rpx;
    padding: 0 20rpx;
    .button {
      height: 88rpx;
      line-height: 88rpx;
      background: #dfdfdf;
      color: #fff;
      font-size: 30rpx;
      border-radius: 999rpx;
      text-align: center;
    }
  }
}
</style>
