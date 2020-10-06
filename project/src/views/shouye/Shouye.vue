<template>
  <div class="shouye">
    <div class="header">
      <van-icon name="gem" />
      <van-search v-model="value" placeholder="请输入搜索关键词" />
      <van-icon name="smile-o" />
    </div>

    <div class="list">
      <ul>
        <router-link to="/shouye/tuijian" tag="li">推荐</router-link>
        <router-link to="/shouye/shouji" tag="li">手机</router-link>
        <router-link to="/shouye/zhineng" tag="li">智能</router-link>
        <router-link to="/shouye/dianshi" tag="li">电视</router-link>
        <router-link to="/shouye/diannao" tag="li">电脑</router-link>
        <router-link to="/shouye/quanmianping" tag="li">全面屏</router-link>
        <router-link to="/shouye/zhoubian" tag="li">生活周边</router-link>
        <router-link to="/shouye/hezi" tag="li">盒子</router-link>
        <router-link to="/shouye/yishu" tag="li">艺术</router-link>
      </ul>
    </div>

    <div class="con">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="scss">

  .header {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #f4f4f4;
    position: fixed;
    top: 0;
    z-index: 1;

    .van-search {
      background-color: #f4f4f4;
      padding: 8px;
      width: 73%;

      .van-search__content {
        background-color: #fff;
        border: 1px solid #e2dede;
      }
    }

    i {
      font-size: 25px;
      color: #999;
    }
  }

  .list {
    width: 100%;
    height: .8rem;
    position: fixed;
    top: 50px;
    z-index: 1;

    ul {
      width: 100%;
      height: 100%;
      display: flex;
      overflow-x: auto;
      background-color: #f4f4f4;
      border-bottom: 1px solid #cecece;

      li {
        height: 100%;
        padding: 0 13px;
        flex-shrink: 0;
        align-items: center;
        line-height: .8rem;
        font-size: .26rem;
        color: #888;
        box-sizing: border-box;
      }

      .active {
        color: orangered;
        border-bottom: 3px solid orangered;
      }
    }
  }

</style>