<template>
  <div class="mine">
    <div class="header">
      <div class="touxiang">

      </div>
      <div class="login">
        <router-link id="login" tag="span" to="/login">登录</router-link>
        <span> / </span>
        <router-link id="regist" to="/regist" tag="span">注册</router-link>
      </div>

    </div>

    <div class="one">
      <van-cell title="我的订单" is-link />
      <ul>
        <li>
          <van-icon name="paid" />
          <p>待付款</p>
        </li>
        <li>
          <van-icon name="logistics" />
          <p>待收货</p>
        </li>
        <li>
          <van-icon name="brush-o" />
          <p>退换修</p>
        </li>
      </ul>

    </div>

    <div class="two">
      <div class="box box1">
        <div class="l">
         <van-icon name="gem" />
        </div>
        <div class="r">
          <van-cell title="会员福利" is-link />
        </div>
      </div>
      <div class="box box2">
        <div class="l">
          <van-icon name="bill" />
        </div>
        <div class="r">
          <van-cell title="我的优惠" is-link />
        </div>
      </div>
    </div>

    <div class="two">
      <div class="box box3">
        <div class="l">
         <van-icon name="service" />
        </div>
        <div class="r">
          <van-cell title="服务中心" is-link />
        </div>
      </div>
      <div class="box box4">
        <div class="l">
          <van-icon name="shop" />
        </div>
        <div class="r">
          <van-cell title="小米之家" is-link />
        </div>
      </div>
    </div>

    <div class="two">
      <div class="box box5">
        <div class="l">
         <van-icon name="setting" />
        </div>
        <div class="r">
          <van-cell title="设置" is-link />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="scss">
.mine{
  height: 100%;
  background-color: #f4f4f4;
}

  .header {
    width: 100%;
    height: 90px;
    background: url("../../assets/img/minebg.png") #f37d0f;
    background-size: cover;

    .touxiang {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 2px solid #fff;
      position: absolute;
      top: 20px;
      left: 20px;
    }

    .login {
      position: absolute;
      top: 38px;
      left: 90px;

      span {
        font-size: 17px;
        color: #fff;
      }
    }
  }

  .one {
    .van-cell {
      border-bottom: 1px solid #cecece;
    }

    ul {
      width: 100%;
      height: 80px;
      background-color: #fff;

      li {
        height: 80px;
        width: 33.3333%;
        float: left;
        text-align: center;

        .van-icon {
          font-size: 26px;
          color: #cecece;
          margin-bottom: 5px;
          margin-top: 18px;
        }

        p {
          font-size: 13px;
        }


      }
    }
  }

  .two {
    width: 100%;
    border-top: 10px solid #f4f4f4;
    overflow: hidden;

    .box {
      .l {
        width: 60px;
        float: left;
        height: 44px;
        background-color: #fff;

        .van-icon {
          font-size: 24px;
          margin-left: 25px;
          line-height: 44px;
          color: orange;
        }
      }

      .r {
        width: calc(100% - 60px);
        float: left;
        border-bottom: 1px solid #cecece;

        .van-cell {
          width: 100%;
          padding: 10px 16px 10px 0;
        }
      }
    }

    .box2 {
      .l{
        .van-icon {
          color: rgb(52, 191, 209);
        }
      }

      .r{
        border: none;
      }
    }

    .box3 {
      .l{
        .van-icon {
          color: rgb(216, 51, 92);
        }
      }
    }

    .box4 {
      .l{
        .van-icon {
          color: rgb(236, 126, 36);
        }
      }

      .r{
        border: none;
      }
    }

    .box5 {
      .l{
        .van-icon {
          color:#999;
        }
      }

      .r{
        border: none;
      }
    }



  }
</style>