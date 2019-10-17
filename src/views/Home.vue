<template>
  <div id="aa">
    <top-back :content="title"></top-back>
    <van-swipe :autoplay="3000" class="dt">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" id="sw-img"/>
      </van-swipe-item>
    </van-swipe>
    <!--功能栏-->
    <van-grid :gutter="10">
      <van-grid-item
        v-for="value in icons"
        :key=""
        :icon="value.image"
        :text="value.text"
      />
    </van-grid>

    <!--秒杀活动-->
    <!--推荐内容-->
    <van-row>
      <van-col offset="1">
        <van-panel>
          <!--<van-image-->
            <!--width="155"-->
            <!--height="155"-->
            <!--src="https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg"-->
          <!--/>-->
          <img :src="image1" style="width: 155px;height:155px;" />
          <div id="a1">
            <p>苹果</p>
            <div>5499</div>
          </div>
        </van-panel>
      </van-col>
      <van-col offset="2">
      <van-panel>
        <img :src="image2" style="width: 155px;height:155px;" />
        <div id="a2">
          <!--<p>商品名称:{{productList.name}}</p>-->
          <p>oppo{{productList.price}}</p>
          <div>3299</div>
        </div>
      </van-panel>
    </van-col>
      <van-col offset="1">
        <van-panel>
          <img :src="image3" style="width: 155px;height:155px;" />
          <div id="a3">
            <!--<p>商品名称:{{productList.name}}</p>-->
            <p>vivo{{productList.price}}</p>
            <div>3599</div>
          </div>
        </van-panel>
      </van-col>
      <van-col offset="2">
        <van-panel>
          <img :src="image4" style="width: 155px;height:155px;" />
          <div id="a4">
            <!--<p>商品名称:{{productList.name}}</p>-->
            <p>华为{{productList.price}}</p>
            <div>4399</div>
          </div>
        </van-panel>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  import store from '@/store';
  import axios from 'axios';
  import TopBack from '@/components/TopBack.vue'

  export default {
    name: 'Home',
    components:{
      TopBack
    },
    store,
    data() {
      return {
        title:'首页',
        image1:require('@/assets/apple.jpg'),
        image2:require('@/assets/oppo.jpg'),
        image3:require('@/assets/vivo.jpg'),
        image4:require('@/assets/huawei.jpg'),
        images: [
          'https://img.yzcdn.cn/vant/apple-1.jpg',
          'https://img.yzcdn.cn/vant/apple-2.jpg',
          'https://img.yzcdn.cn/vant/apple-3.jpg',
          require('@/assets/a.jpg'),
        ],
        icons: [
          {
            text: '外设',
            image: require('@/assets/5.png')
          },
          {
            text: '服装',
            image: require('@/assets/4.png')
          },
          {
            text: '充值',
            image: require('@/assets/2.png')
          },
          {
            text: '水果海鲜',
            image: require('@/assets/8.png')
          },
          {
            text: '拼团',
            image: require('@/assets/7.png')
          },
          {
            text: '超市',
            image: require('@/assets/6.png')
          },
          {
            text: '钱包',
            image: require('@/assets/3.png')
          },
          {
            text: '优惠卷',
            image: require('@/assets/1.png')
          },
        ],
        users: store.state.users,
        productList: ''
      };
    },
    methods: {
      getProducts() {
        //保存当前对象
        //保存当前对象
        var this_ = this;

        //封装前端传递给后端的数据
        var params = new URLSearchParams();
        params.append('productId',10000);

        //执行请求获取后端数据
        axios.post('/portal/product/detail.do', params)
          .then(function (datas) {
            //获取状态码
            var status = datas.data.status;

            if (status !== 200) {
              //弹出错误信息
              this_.$dialog.alert({
                message: datas.data.msg
              });
            } else {
              this_.productList = datas.data.data
            }
          });
      }
    },
    activated:function () {
      this.getProducts();
    }
  };
</script>

<style scoped>
  #sw-img {
    height: 250px;
    width: 100%;
  }
  #aa{
    height: 1100px;
  }
  #a1{
    margin-left: 40%;
  }
  #a2{
    margin-left: 40%;
  }
  #a3{
    margin-left: 40%;
  }
  #a4{
    margin-left: 40%;
  }
</style>
