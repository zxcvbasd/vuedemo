<template>
  <div id="app">
    <van-sticky>
      <van-row id="aa">
        <van-col span="2">
          <van-button square type="primary" size="large" color="#C82519" id="aaa">三</van-button>
        </van-col>
        <van-col span="22">
          <van-search
            v-model="value"
            placeholder="请输入搜索关键词"
            show-action
            background="#C82519"
            shape="round"
            @search="onSearch"
          >
            <div slot="action" @click="onSearch" style="color: white">搜索</div>
          </van-search>
        </van-col>
      </van-row>
    </van-sticky>

    <keep-alive>
      <router-view/>
    </keep-alive>

    <van-tabbar v-model="active" class="vbbg">
      <van-tabbar-item icon="home-o" to="/">主页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/login">登录</van-tabbar-item>
      <van-tabbar-item icon="apps-o"  to="/productdetail">商品</van-tabbar-item>
      <van-tabbar-item icon="cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/mycenter">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        value:'',
        active: 0
      };
    },
    methods:{
      onSearch(){

      }
    }
  };
</script>

<style lang="scss">
  .vbbg{
    background-color: gainsboro !important;
  }
  #aaa{
    height: 54px;
  }
</style>
