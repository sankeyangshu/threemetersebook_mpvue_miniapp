<!--
 * @Description: 搜索页
 * @Author: 王振
 * @Date: 2021-10-15 09:20:46
 * @LastEditors: 王振
 * @LastEditTime: 2021-10-15 10:27:52
-->
<template>
  <div>
    <!-- 顶部搜索框 开始 -->
    <van-search :value="keyword" placeholder="搜索你想听的节目" />
    <!-- 顶部搜索框 结束 -->

    <!-- 热门搜索 开始 -->
    <tag-group
      :value="hotSearch"
      header-text="热门搜索"
      btn-text="换一批"
      @onTagClick="onTagClick"
      @onBtnClick="onBtnClick"
      v-if="hotSearch.length > 0 && !isShowList"
    ></tag-group>
    <!-- 热门搜索 结束 -->

    <!-- 历史搜索 开始 -->
    <tag-group
      :value="historySearch"
      header-text="历史搜索"
      btn-text="清空"
      v-if="historySearch.length > 0 && !isShowList"
    ></tag-group>
    <!-- 历史搜索 结束 -->

    <!-- 搜索结果 开始 -->
    <book-list :bookList="searchList" v-if="isShowList"></book-list>
    <!-- 搜索结果 结束 -->
  </div>
</template>

<script>
import tagGroup from "@/components/tagGroup";
import bookList from "@/components/bookList";

export default {
  name: "search",
  components: { tagGroup, bookList },
  data() {
    return {
      keyword: "", // 搜索关键词
      hotSearch: ["aaa", "bbb", "ccc", "dddddddddddddddddddddddddddd", "ee"], // 热门搜索
      historySearch: [], // 历史搜索
      searchList: [], // 搜索结果
    };
  },
  computed: {
    isShowList() {
      // 是否存在搜索结果
      const keys = this.searchList.length;
      return keys > 0;
    },
  },
  methods: {
    onTagClick(text, index) {
      console.log(text, index);
    },
    // 热门搜索-换一批
    onBtnClick() {
      console.log(123);
    },
  },
};
</script>

<style lang='scss' scoped>
</style>
