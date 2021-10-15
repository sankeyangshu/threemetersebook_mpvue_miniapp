<!--
 * @Description: 小说阅读页
 * @Author: 王振
 * @Date: 2021-10-13 14:57:26
 * @LastEditors: 王振
 * @LastEditTime: 2021-10-14 16:11:39
-->
<template>
  <div class="reading">
    <!-- 设置头部 开始 -->
    <div class="reading__title cal">
      <text>{{ chapterCatalog[0].title }}</text>
    </div>
    <!-- 设置头部 结束 -->

    <!-- 文本部分 开始 -->
    <swiper
      :style="{ height: calHeight + 'rpx' }"
      class="reading__content"
      @click="OnClickSetStatus"
    >
      <swiper-item v-for="item in testChapter" :key="item.id">
        <scroll-view scroll-y :style="{ height: calHeight + 'rpx' }">
          <rich-text :nodes="item.text"></rich-text>
        </scroll-view>
      </swiper-item>
    </swiper>
    <!-- 文本部分 结束 -->

    <!-- 设置底部 开始 -->
    <div class="reading__footer animated slideInUp" v-if="setStatus">
      <div class="reading__footer__grid">
        <van-icon
          class-prefix="iconfont"
          name="iconfont icon-xueyuan-mulu"
          size="55rpx"
        />
        <div>目录</div>
      </div>
      <div class="reading__footer__grid">
        <van-icon
          class-prefix="iconfont"
          name="iconfont icon-yanjing"
          size="55rpx"
        />
        <div>夜间模式</div>
      </div>
      <div class="reading__footer__grid">
        <van-icon
          class-prefix="iconfont"
          name="iconfont icon-ziti1"
          size="55rpx"
        />
        <div>字体</div>
      </div>
      <div class="reading__footer__grid">
        <van-icon
          class-prefix="iconfont"
          name="iconfont icon-diqiuhuanqiu"
          size="55rpx"
        />
        <div>更多</div>
      </div>
    </div>
    <!-- 设置底部 结束 -->
  </div>
</template>

<script>
import test from "@/utils/test";
import unit from "@/utils/unit";
import htmlParser from "@/utils/html-parser";
export default {
  name: "reading",
  data() {
    return {
      novalName: test.name, // 小说名称
      chapterCatalog: test.chapterCatalog, // 图书目录
      calHeight: 0, // 计算后的高度
      setStatus: false, // 是否显示底部状态栏
      // testChapter: htmlParser(test.content[0].text),
      testChapter: test.content,
      loaderChapters: [], // 已经加载的章节
      chapterIndex: 0, // 当前章节的标识
    };
  },
  onLoad(option) {
    console.log(option);
  },
  mounted() {
    // 动态获取高度
    unit.calSurplusHeight({
      pos: "cal",
      success: (val) => (this.calHeight = val),
    });
  },
  methods: {
    OnClickSetStatus() {
      this.setStatus = !this.setStatus;
    },
  },
};
</script>

<style lang='scss' scoped>
.reading {
  &__title {
    display: flex;
    align-items: center;
    font-size: 40rpx;
    text-indent: 80rpx;
  }
  &__content {
    padding-left: 20rpx;
    padding-right: 20rpx;
  }
  &__footer {
    height: 200rpx;
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1030;
    display: flex;
    align-items: center;
    font-size: 30rpx;
    background-color: #fff;
    box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.15);
    &__grid {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
    }
  }
}
</style>
