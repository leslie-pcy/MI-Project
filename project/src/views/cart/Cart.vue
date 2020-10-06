<template>
  <div class="cart">
    <div class="header">
      <van-icon name="arrow-left" />
      <span>购物车</span>
      <van-icon name="search" />
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
.header {
      width: 100%;
      height: 60px;
      background-color: #f4f4f4;
      text-align: center;
      overflow: hidden;
      position: fixed;
      top: 0;
      left: 0;

      i {
        font-size: 30px;
        color: #999;
        position: absolute;
        top: 13px;
        left: 0;

      }

      .van-icon-search {
        margin-left: 330px;
      }

      span {
        font-size: 16px;
        line-height: 60px;
      }

    }

</style>