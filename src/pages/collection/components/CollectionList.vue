<!--
 * @Description: 收藏页面-书架列表
 * @Author: 王振
 * @Date: 2021-10-14 11:20:31
 * @LastEditors: 王振
 * @LastEditTime: 2021-10-14 11:30:47
-->
<template>
  <div class="shelf__list">
    <div class="shelf__list__inner">
      <div class="shelf__book" v-for="book in shelfList" :key="book.fileName">
        <div
          class="shelf__book__cover"
          v-if="book && book.cover"
          @click="() => OnClickBookDetail(book)"
        >
          <van-image :src="book.cover" />
        </div>
        <div class="shelf__book__title" v-if="book && book.title">
          {{ book.title }}
        </div>
        <div class="shelf__book__add" v-if="!book.title">
          <div class="shelf__book__add__wrapper">
            <div class="shelf__book__add__x"></div>
            <div class="shelf__book__add__y"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CollectionList",
  props: {
    shelfList: {
      // 书架列表
      type: Array,
    },
  },
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    // 查看图书详情
    OnClickBookDetail(book) {
      console.log(book);
    },
  },
};
</script>

<style lang='scss' scoped>
.shelf__list {
  padding: 0 25rpx 40rpx 25rpx;
  .shelf__list__inner {
    display: flex;
    flex-flow: row wrap;
    .shelf__book {
      flex: 0 0 33.33%;
      width: 33.33%;
      padding: 40rpx 25rpx 0 25rpx;
      box-sizing: border-box;

      .shelf__book__cover {
        width: 100%;
        height: 260rpx;
      }

      .shelf__book__title {
        width: 100%;
        font-size: 26rpx;
        color: #333;
        overflow: hidden;
        text-overflow: clip;
        line-height: 28rpx;
        max-height: 56rpx;
        margin-top: 20rpx;
      }

      .shelf__book__add {
        width: 100%;
        height: 260rpx;
        border: 1px solid #cbcbcb;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        .shelf__book__add__wrapper {
          position: relative;
          width: 60rpx;
          height: 60rpx;
          .shelf__book__add__x {
            position: absolute;
            top: 50%;
            width: 60rpx;
            height: 4rpx;
            margin-top: -2rpx;
            background: #cacaca;
          }

          .shelf__book__add__y {
            position: absolute;
            left: 50%;
            width: 4rpx;
            height: 60rpx;
            background: #cacaca;
          }
        }
      }
    }
  }
}
</style>
