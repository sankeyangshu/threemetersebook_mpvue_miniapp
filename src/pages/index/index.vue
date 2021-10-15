<!--
 * @Description: 首页页面
 * @Author: 王振
 * @Date: 2021-10-11 16:18:41
 * @LastEditors: 王振
 * @LastEditTime: 2021-10-15 09:23:44
-->
<template>
  <div class="home">
    <!-- 顶部搜索框 开始 -->
    <van-search
      :value="keyword"
      placeholder="搜索你想听的节目"
      @clickInput="OnClickSearch"
    />
    <!-- 顶部搜索框 结束 -->

    <!-- 轮播图 开始 -->
    <div class="home__total__swiper">
      <Swiper :images="images" />
    </div>
    <!-- 轮播图 结束 -->

    <!-- 功能分类 开始 -->
    <van-grid icon-size="32">
      <van-grid-item
        icon-prefix="iconfont"
        icon="iconfont icon-icon-test"
        icon-color="#ffc107"
        link-type="navigateTo"
        url="/pages/readList/main"
        text="看榜单"
      />
      <van-grid-item
        icon-prefix="iconfont"
        icon="iconfont icon-startRead"
        icon-color="#0056b3"
        link-type="navigateTo"
        url="/pages/listenNovel/main"
        text="听小说"
      />
      <van-grid-item
        icon-prefix="iconfont"
        icon="iconfont icon-icon09"
        link-type="navigateTo"
        url="/pages/listenMusic/main"
        text="听音乐"
      />
      <van-grid-item
        icon-prefix="iconfont"
        icon="iconfont icon-zhishi"
        icon-color="#28a745"
        link-type="navigateTo"
        url="/pages/listenKnowledge/main"
        text="听知识"
      />
    </van-grid>
    <!-- 功能分类 结束 -->

    <!-- 猜你喜欢 开始 -->
    <list-header title="猜你喜欢"></list-header>
    <book-grid :Rebooks="Rebooks"></book-grid>
    <!-- 猜你喜欢 结束 -->

    <!-- 分类 开始 -->
    <div v-for="(items, index) in bookResources" :key="index">
      <list-header :title="items.headerTitle"></list-header>
      <book-list :bookList="items.books"></book-list>
    </div>
    <!-- 分类 结束 -->

    <!-- 播放器 开始 -->
    <music-player></music-player>
    <!-- 播放器 结束 -->
  </div>
</template>

<script>
import Swiper from "@/components/swiper";
import listHeader from "@/components/listHeader";
import BookGrid from "@/components/bookGrid";
import BookList from "@/components/bookList";
import MusicPlayer from "@/components/musicPlayer";
export default {
  components: { Swiper, listHeader, BookGrid, BookList, MusicPlayer },
  data() {
    return {
      keyword: "", // 搜索关键词
      images: [
        {
          url: "https://img.yzcdn.cn/vant/cat.jpeg",
        },
        {
          url: "https://img.yzcdn.cn/vant/cat.jpeg",
        },
      ], // 轮播图
      Rebooks: [
        {
          id: 1,
          url: "https://img.yzcdn.cn/vant/cat.jpeg",
          title: "水浒传",
        },
        {
          id: 2,
          url: "https://img.yzcdn.cn/vant/cat.jpeg",
          title: "水浒传",
        },
        {
          id: 3,
          url: "https://img.yzcdn.cn/vant/cat.jpeg",
          title: "水浒传",
        },
      ],
      bookResources: [
        {
          headerTitle: "人文",
          books: [
            {
              name: "《斗破苍穹》",
              synopsis: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
              imgurl: "https://img.yzcdn.cn/vant/cat.jpeg",
            },
            {
              name: "《斗破苍穹》",
              synopsis: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
              imgurl: "https://img.yzcdn.cn/vant/cat.jpeg",
            },
          ],
        },
        {
          headerTitle: "美术",
          books: [
            {
              name: "《斗破苍穹》",
              synopsis: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
              imgurl: "https://img.yzcdn.cn/vant/cat.jpeg",
            },
            {
              name: "《斗破苍穹》",
              synopsis: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
              imgurl: "https://img.yzcdn.cn/vant/cat.jpeg",
            },
          ],
        },
      ],
    };
  },

  methods: {
    // 跳转搜索页
    OnClickSearch() {
      this.$router.push("/pages/search/main");
    },
  },
};
</script>

<style lang='scss' scoped>
.home {
}
</style>
