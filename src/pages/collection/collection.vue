<!--
 * @Description: 收藏页面
 * @Author: 王振
 * @Date: 2021-10-12 10:08:53
 * @LastEditors: 王振
 * @LastEditTime: 2021-10-14 11:31:44
-->
<template>
  <div>
    <!-- 用户卡片 开始 -->
    <collection-user-info :userInfo="userInfo"></collection-user-info>
    <!-- 用户卡片 结束 -->

    <!-- 书架 开始 -->
    <collection-list :shelfList="shelfList"></collection-list>
    <!-- 书架 结束 -->
  </div>
</template>

<script>
import CollectionList from "./components/CollectionList.vue";
import CollectionUserInfo from "./components/CollectionUserInfo";
export default {
  name: "collection",
  components: { CollectionUserInfo, CollectionList },
  data() {
    return {
      userInfo: {
        nickName: "三棵杨树",
        avatarUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
      },
      shelfList: [],
    };
  },
  methods: {},
};
</script>

<style lang='scss' scoped>
</style>
