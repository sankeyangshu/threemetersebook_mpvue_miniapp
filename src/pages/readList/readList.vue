<!--
 * @Description: 看榜单页面
 * @Author: 王振
 * @Date: 2021-10-12 15:10:13
 * @LastEditors: 王振
 * @LastEditTime: 2021-10-12 15:32:22
-->
<template>
  <div>
    <book-list :bookList="bookList"></book-list>
  </div>
</template>

<script>
import bookList from "@/components/bookList";
export default {
  components: { bookList },
  name: "readList",
  data() {
    return {
      bookList: [
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
    };
  },
  methods: {},
};
</script>

<style lang='scss' scoped>
</style>
