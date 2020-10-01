<template>
  <div class="tuijian">
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="../../../assets/img/banner-1.png" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../../assets/img/banner-2.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../../assets/img/banner-3.png" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../../assets/img/banner-4.png" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="list">
      <h3>热销爆款</h3>
      <ul>
        <li>
          <img src="../../../assets/img/list-1.jpg" alt="">
          <h4 class="title">米家四位四孔插线板</h4>
          <p class="desc">四位分控，随时随开</p>
          <h5 class="price">￥ 89</h5>
        </li>
        <li>
          <img src="../../../assets/img/list-2.png" alt="">
          <h4 class="title">米家四位四孔插线板</h4>
          <p class="desc">四位分控，随时随开</p>
          <h5 class="price">￥ 89</h5>
        </li>
        <li>
          <img src="../../../assets/img/list-3.jpg" alt="">
          <h4 class="title">米家四位四孔插线板</h4>
          <p class="desc">四位分控，随时随开</p>
          <h5 class="price">￥ 89</h5>
        </li>
        <li>
          <img src="../../../assets/img/list-4.png" alt="">
          <h4 class="title">米家四位四孔插线板</h4>
          <p class="desc">四位分控，随时随开</p>
          <h5 class="price">￥ 89</h5>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="scss">
  .banner {
    border-bottom: 5px solid #f4f4f4;
    margin-top: 90px;

    .my-swipe .van-swipe-item {
      height: 190px;
      margin-top: 1px;
      color: #fff;
      font-size: 20px;
      line-height: 190px;
      text-align: center;

      img {
        height: 190px;
      }
    }


  }

  .list {
    h3 {
      font-size: 18px;
      line-height: 45px;
      font-weight: 600;
      text-indent: 1em;
    }

    ul {
      padding-left: 4px;

      li {
        float: left;
        margin-bottom: 10px;
        margin-right: 3px;

        img {
          width: 182px;
        }

        h4{
          font-size: 14px;
          line-height: 25px;
          text-indent: 5px;
        }

        p{
          font-size: 14px;
          color:#999;
          text-indent: 5px;
        }

        h5{
          font-size: 14px;
          line-height: 25px;
          color: orangered;
          text-indent: 5px;
        }

      }
    }


  }
</style>