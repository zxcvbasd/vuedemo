<template>
  <div>
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
      <van-col offset="4">
        <van-panel>
          <van-image
            width="100"
            height="100"
            src="https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg"
          />
          <p>苹果</p>
          <div>内容</div>
        </van-panel>
      </van-col>
      <van-col offset="4">
        <van-panel>
          <van-image
            width="100"
            height="100"
            src="https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg"
          />
          <p>商品名称:{{productList.name}}</p>
          <p>商品价格:{{productList.price}}</p>
          <div>内容</div>
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
        images: [
          'https://img.yzcdn.cn/vant/apple-1.jpg',
          'https://img.yzcdn.cn/vant/apple-2.jpg',
          'https://img.yzcdn.cn/vant/apple-3.jpg',
        ],
        icons: [
          {
            text: '外设',
            image: 'https://gw.alicdn.com/tfs/TB11rTqtj7nBKNjSZLeXXbxCFXa-183-144.png?getAvatar=1_.webp'
          },
          {
            text: '服装',
            image: 'https://gw.alicdn.com/tfs/TB1IKqDtpooBKNjSZFPXXXa2XXa-183-144.png_.webp'
          },
          {
            text: '家具',
            image: 'https://gw.alicdn.com/tfs/TB1Wxi2trsrBKNjSZFpXXcXhFXa-183-144.png_.webp'
          },
          {
            text: '电器',
            image: 'https://gw.alicdn.com/tfs/TB18P98tyQnBKNjSZFmXXcApVXa-183-144.png?getAvatar=1_.webp'
          },
          {
            text: '零食',
            image: 'https://gw.alicdn.com/tfs/TB1CMf4tlnTBKNjSZPfXXbf1XXa-183-144.png?getAvatar=1_.webp'
          },
          {
            text: '水果',
            image: 'https://gw.alicdn.com/tfs/TB15nKhtpkoBKNjSZFEXXbrEVXa-183-144.png?getAvatar=1_.webp'
          },
          {
            text: '海鲜',
            image: 'https://img.alicdn.com/tfs/TB10UHQaNjaK1RjSZKzXXXVwXXa-183-144.png?getAvatar=1_.webp'
          },
          {
            text: '蔬菜',
            image: 'https://gw.alicdn.com/tfs/TB1o0FLtyMnBKNjSZFoXXbOSFXa-183-144.png_.webp'
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
    height: 100%;
    width: 100%;
  }
</style>
