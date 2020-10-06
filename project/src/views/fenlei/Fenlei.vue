<template>
  <div class="fenlei">
    <div class="header">
      <van-icon name="arrow-left" />
      <span>分类</span>
      <van-icon name="search" />
    </div>

    <div class="list">
      <ul>
        <router-link to="/fenlei/xinpin" tag="li">新品</router-link>
        <router-link to="/fenlei/shouji" tag="li">手机</router-link>
        <router-link to="/fenlei/diannao" tag="li">电脑</router-link>
        <router-link to="/fenlei/dianshi" tag="li">电视</router-link>
        <router-link to="/fenlei/jiadian" tag="li">家电</router-link>
        <router-link to="/fenlei/luyou" tag="li">路由</router-link>
        <router-link to="/fenlei/zhineng" tag="li">智能</router-link>
        <router-link to="/fenlei/dianyuan" tag="li">电源</router-link>
        <router-link to="/fenlei/erji" tag="li">耳机</router-link>
        <router-link to="/fenlei/yinxiang" tag="li">音箱</router-link>
        <router-link to="/fenlei/lipin" tag="li">礼品</router-link>
        <router-link to="/fenlei/shenghuo" tag="li">生活</router-link>
        <router-link to="/fenlei/mifenka" tag="li">米粉卡</router-link>
        <router-link to="/fenlei/lingshoudian" tag="li">零售店</router-link>
      </ul>
    </div>

    <div class="show">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  .fenlei {
    overflow: hidden;

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

    .list {
      width: 80px;
      margin-top: 60px;
      float: left;

      .active{
        color: orangered;
        font-size: 18px;
      }

      ul {
        width: 80px;
        border-right: 1px solid #f4f4f4;
        overflow-y: auto;

        li {
          width: 100%;
          height: 50px;
          font-size: 15px;
          text-align: center;
          line-height: 50px;
        }
      }
    }

    .show{
      width: calc(100% - 80px);
      height: 100px;
      float: left;
      margin-top: 60px;
      background-color: burlywood;
    }
  }
</style>