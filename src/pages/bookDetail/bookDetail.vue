<!--
 * @Description: 图书详情页
 * @Author: 王振
 * @Date: 2021-10-13 14:09:19
 * @LastEditors: 王振
 * @LastEditTime: 2021-10-13 15:01:17
-->
<template>
  <div class="book">
    <!-- 图书导航 开始 -->
    <div class="book__header">
      <image
        src="https://img.yzcdn.cn/vant/cat.jpeg"
        mode="widthFix"
        lazy-load
        class="book__header__img"
      />
      <div class="book__header__info">
        <div class="info__title">{{ bookName }}</div>
        <div class="info__author">作者：{{ author }}</div>
        <div class="info__btn">
          <van-button>分享</van-button>
          <van-button>收藏</van-button>
        </div>
      </div>
    </div>
    <!-- 图书导航 结束 -->

    <!-- 图书详情 开始 -->
    <div class="book__tab">
      <van-tabs :active="active">
        <van-tab title="详情">
          <scroll-view scroll-y style="height: 1129rpx">
            <div class="book__tab__info">
              <div class="info__title">——简介——</div>
              <div class="info__ctx">{{ synopsis }}</div>
            </div>
          </scroll-view>
        </van-tab>
        <van-tab title="目录">
          <scroll-view scroll-y style="height: 1129rpx">
            <block v-for="item in chapterCatalog" :key="item.id">
              <div class="book__tab__catalogue" @click="OnClickToRead(item.id)">
                {{ item.title }}
              </div>
            </block>
          </scroll-view>
        </van-tab>
      </van-tabs>
    </div>
    <!-- 图书详情 结束 -->
  </div>
</template>

<script>
import test from "@/utils/test";
export default {
  name: "bookDetail",
  data() {
    return {
      active: 0, // 图书详情tab标签
      bookName: test.name, // 图书名称
      author: test.author, // 作者
      synopsis: test.synopsis, // 图书简介
      chapterCatalog: test.chapterCatalog, // 图书目录
    };
  },
  methods: {
    // 点击目录
    OnClickToRead(id) {
      this.$router.push({ path: "/pages/reading/main", query: { id } });
    },
  },
};
</script>

<style lang='scss' scoped>
.book {
  &__header {
    height: 250rpx;
    padding-top: 20rpx;
    padding-bottom: 20rpx;
    display: flex;
    align-items: center;
    background-color: #a8b0c3;
    &__img {
      flex: 1;
      margin-left: 20rpx;
      margin-right: 20rpx;
      border-radius: 8rpx;
    }
    &__info {
      flex: 2;
      margin-left: 20rpx;
      margin-right: 20rpx;
      .info__title {
        font-size: 45rpx;
      }
      .info__author {
        font-size: 30rpx;
        margin-top: 10rpx;
      }
      .info__btn {
        margin-top: 20rpx;
        display: flex;
        align-items: center;
        van-button {
          margin-left: 20rpx;
          margin-right: 20rpx;
          flex: 1;
        }
      }
    }
  }
  &__tab {
    height: 1210rpx;
    box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.15);
    &__info {
      .info__title {
        padding-top: 20rpx;
        padding-bottom: 20rpx;
        display: flex;
        justify-content: center;
        color: rgba(0, 0, 0, 0.5);
      }
      .info__ctx {
        line-height: 80rpx;
        padding-top: 20rpx;
        padding-bottom: 20rpx;
        font-size: 40rpx;
      }
    }
    &__catalogue {
      padding: 20rpx;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      border-bottom: 1px solid #dee2e6;
    }
  }
}
</style>
