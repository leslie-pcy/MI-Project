<template>
  <div class="footer">
    <ul>
      <router-link to="/shouye" tag="li">
        <van-icon name="shop-o" />
        <p>首页</p>
      </router-link>
      <router-link to="/fenlei" tag="li">
        <van-icon name="cluster-o" />
        <p>分类</p>
      </router-link>
      <router-link to="/cart" tag="li">
        <van-icon name="shopping-cart-o" />
        <p>购物车</p>
      </router-link>
      <router-link to="/mine" tag="li">
        <van-icon name="smile-o" />
        <p>我的</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped lang="scss">
  .footer{
    width: 100%;
    height: 60px;
    border-top: 1px solid #cecece;

    ul{
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;

      li {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        i{
          font-size: .5rem;
          margin-bottom: .1rem;
          color:#999;
        }

        p{
          color:#999;
        }
      }

      .active i,.active p{
        color:orangered
      }
    }
  }

  

</style>
