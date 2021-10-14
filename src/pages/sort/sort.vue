<!--
 * @Description: 分类页面
 * @Author: 王振
 * @Date: 2021-10-12 10:13:34
 * @LastEditors: 王振
 * @LastEditTime: 2021-10-14 10:31:29
-->
<template>
  <div class="sort">
    <!-- 搜索框 开始 -->
    <div class="cal">
      <van-search :value="sortWord" placeholder="请输入搜索关键词" />
    </div>
    <!-- 搜索框 结束 -->

    <!-- 分类 开始 -->
    <div class="sort__total">
      <!-- 左侧 开始 -->
      <scroll-view
        scroll-y
        :style="{ height: calHeight + 'rpx' }"
        class="sort__total__left"
      >
        <block v-for="(item, index) in leftListRes" :key="index">
          <div
            class="left__text"
            :class="{ left__text__active: leftIndex === index }"
            @click="OnClickToRight(index)"
          >
            {{ item }}
          </div>
        </block>
      </scroll-view>
      <!-- 左侧 结束 -->

      <!-- 右侧 开始 -->
      <scroll-view
        scroll-y
        :scroll-into-view="rightIndex"
        scroll-with-animation
        :style="{ height: calHeight + 'rpx' }"
        @scroll="OnScrollRightToLeft"
      >
        <block v-for="(item, index) in rightListRes" :key="index">
          <div class="sort__total__right" :id="'right' + index">
            <div class="right__title">
              <text>{{ item.text }}</text>
              <van-icon
                class-prefix="iconfont"
                name="iconfont icon-youjiantou"
                size="40rpx"
              />
            </div>
            <div class="right__content">
              <block v-for="(mitem, midx) in item.content" :key="midx">
                <div class="right__content__item">{{ mitem }}</div>
              </block>
            </div>
          </div>
        </block>
        <div :style="{ height: calHeight - 320 + 'rpx' }"></div>
      </scroll-view>
      <!-- 右侧 结束 -->
    </div>
    <!-- 分类 结束 -->
  </div>
</template>

<script>
import { sortResources } from "@/assets/sortResources";
import unit from "@/utils/unit";
export default {
  name: "sort",
  data() {
    return {
      sortWord: "", // 分类搜索关键词
      calHeight: 0, // 计算高度
      rightIndex: `right${0}`, // 左联动右侧菜单id
      leftIndex: 0,
    };
  },
  computed: {
    // 左侧数据
    leftListRes() {
      let res = sortResources.map((item) => item.text);
      return res;
    },
    // 右侧数据
    rightListRes() {
      return sortResources;
    },
  },
  mounted() {
    // 动态获取高度
    unit.calSurplusHeight({
      pos: "cal",
      isTabBarPage: true,
      success: (val) => (this.calHeight = val),
    });
  },
  methods: {
    // 点击左侧分类菜单，定位到右侧菜单
    OnClickToRight(index) {
      this.rightIndex = `right${index}`;
    },
    // 划动右侧菜单，定位到左侧菜单位置
    OnScrollRightToLeft(e) {
      let curScrollTop = e.target.scrollTop,
        standardVall = unit.Topx(320),
        curIndex = Math.round(curScrollTop / standardVall);
      this.leftIndex = curIndex;
    },
  },
};
</script>

<style lang='scss' scoped>
.sort {
  &__total {
    display: flex;
    background-color: #f0f3f8;
    &__left {
      width: 180rpx;
      padding: 0 20rpx;
      font-size: 30rpx;
      color: rgba(0, 0, 0, 0.5);
      .left__text {
        height: 150rpx;
        line-height: 150rpx;
      }
      .left__text__active {
        color: #f7646d;
      }
    }
    &__right {
      height: 250rpx;
      margin-bottom: 70rpx;
      .right__title {
        height: 80rpx;
        line-height: 80rpx;
        text-align: center;
        text {
          margin-right: 10rpx;
        }
      }
      .right__content {
        height: 170rpx;
        font-size: 30rpx;
        display: flex;
        flex-wrap: wrap;
        background-color: #fff;
        border-radius: 8rpx;
        &__item {
          width: calc(100% / 3);
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
}
</style>
