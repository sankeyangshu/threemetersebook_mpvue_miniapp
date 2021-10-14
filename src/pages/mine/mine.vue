<!--
 * @Description: 我的页面
 * @Author: 王振
 * @Date: 2021-10-12 10:14:27
 * @LastEditors: 王振
 * @LastEditTime: 2021-10-14 13:45:28
-->
<template>
  <div>
    <!-- 用户头像、昵称等 开始 -->
    <div class="userinfo">
      <!-- 登录成功状态 开始 -->
      <div class="userinfo__content" v-if="isLogin">
        <div class="userinfo__content__avater">
          <image
            :src="userInfo.avatarUrl ? userInfo.avatarUrl : logo"
            mode="scaleToFill"
          ></image>
        </div>
        <div class="userinfo__content__nickname">
          <span>三米阅读</span>
        </div>
      </div>
      <!-- 登录成功状态 结束 -->

      <!-- 未登录状态 开始 -->
      <div class="userinfo__content" v-else>
        <div class="userinfo__content__avater" @click="OnClickLogin">
          <image
            :src="userInfo.avatarUrl ? userInfo.avatarUrl : logo"
            mode="scaleToFill"
          ></image>
        </div>
        <div class="userinfo__content__nickname" @click="OnClickLogin">
          <span>点击登录账户</span>
        </div>
      </div>
      <!-- 未登录状态 结束 -->
    </div>
    <!-- 用户头像、昵称等 结束 -->

    <!-- 系统设置等单元格 开始 -->
    <van-cell-group>
      <van-cell title="签到" icon="completed" is-link />
      <van-cell title="个人信息" icon="contact" is-link />
      <van-cell title="关于我们" icon="info-o" is-link />
      <van-cell title="退出登录" icon="peer-pay" is-link />
    </van-cell-group>
    <!-- 系统设置等单元格 结束 -->
  </div>
</template>

<script>
export default {
  name: "mine",
  data() {
    return {
      logo: "https://img.yzcdn.cn/vant/cat.jpeg",
    };
  },
  methods: {},
};
</script>

<style lang='scss' scoped>
.userinfo {
  width: 100%;
  margin-bottom: 20rpx;
  padding: 40rpx 0;
  background-image: linear-gradient(to left top, #7cc146, #3db548);
  &__content {
    width: 100%;
    margin-top: 70rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &__avater {
      width: 160rpx;
      height: 160rpx;
      image {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    &__nickname {
      margin-top: 30rpx;
      span {
        font-size: 32rpx;
        color: #fff;
      }
    }
  }
}
</style>
