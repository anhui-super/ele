<template>
  <div class="main">
    <!-- 头部 start -->
    <div class="top">
      <img class="logo" src="../../assets/index/logo.png" alt="">
      <img class="buy" src="../../assets/index/buy.png" alt="">
    </div>
    <!-- 头部 end -->

    <!-- banner start -->
    <swiper :options="swiperOption" class="banner">
      <swiper-slide v-for="(item,index) in bannerBox" :key="index"><img :src="item" alt=""></swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <!-- banner end -->

    <!-- 搜索框 start -->
    <div class="seach">
      <div class="seachBox">
        <img class="seachBtn" src="../../assets/index/seach.png" alt="">、
        <input type="text" class="txt" placeholder="输入关键字搜索">
        <span class="btn">搜索</span>
      </div>
    </div>
    <!-- 搜索框 end -->

    <!-- 品类 start -->
    <div class="type">
      <div class="item" ><img src="../../assets/index/icon_1.png" alt="">体质</div>
      <div class="item"><img src="../../assets/index/icon_2.png" alt="">季节</div>
      <div class="item"><img src="../../assets/index/icon_3.png" alt="">品类</div>
      <div class="item"><img src="../../assets/index/icon_4.png" alt="">功效</div>
    </div>
    <div class="tips">
      <img class="music" src="../../assets/index/music.png" alt="">
      我和春天有个约会-滋补炖品
    </div>
    <!-- 品类 end -->

    <!-- 广告位start -->
    <div class="adv">
      <img src="../../assets/index/tuc.jpg" alt="">
      <img src="../../assets/index/tuc2.jpg" alt="">
      <img src="../../assets/index/tuc3.jpg" alt="">
    </div>
    <!-- 广告位start -->
    <!-- 列表 start -->
    <list :listBox="listBox" :status='1'></list>
    <div class="listTips">上拉加载更多...</div>
    <!-- 列表 end -->

    <!-- 底部 start -->
    <cfoot></cfoot>
    <!-- 底部 end -->
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import list from '../../components/list/list'
import cfoot from '../../components/foot/foot'
import { setInterval } from 'timers';
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
      },
      listBox:[
        {
          id:1,
          img:require('../../assets/index/img.jpg'),
          name:'全套水鸭温肾助阳汤（送养生包1罐）全套水鸭温肾助阳汤（送养生包1罐）',
          prize:'59.0',
          num:15
        },
        {
          id:2,
          img:require('../../assets/index/img.jpg'),
          name:'全套水鸭温肾助阳汤（送养生包1罐）',
          prize:'60.0',
          num:15
        },
        {
          id:2,
          img:require('../../assets/index/img.jpg'),
          name:'全套水鸭温肾助阳汤（送养生包1罐）',
          prize:'60.0',
          num:10
        },
        {
          id:2,
          img:require('../../assets/index/img.jpg'),
          name:'全套水鸭温肾助阳汤（送养生包1罐）',
          prize:'60.0',
          num:1
        }
      ],
      bannerBox:[require('../../assets/index/banner.jpg'),require('../../assets/index/banner.jpg')]
    }
  },
  components: {
    swiper,
    swiperSlide,
    list,
    cfoot
  },
  methods:{
  
  },
  mounted(){     
 
    this.$cookies.set("abca","1234",10)
    
    // this.$axios.get('http://192.168.3.46:8000/tt/abc') ;
    // this.$axios({
    //     method:'get',
    //     url:'http://192.168.3.46:8000/tt/abc'
    // }).then((response) =>{          //这里使用了ES6的语法
    //     console.log(JSON.parse(response.data))       //请求成功返回的数据
    // }).catch((error) =>{
    //     console.log(error)       //请求失败返回的数据
    // })
  }
}
</script>
<style lang="scss" scoped>
.main{
  height: 100%;
  padding-bottom: 100px;
  .top{
    height: 80px;
    line-height: 80px;
    padding: 0 30px;
    background: #fff;
    position: relative;
    img{
      vertical-align: middle;
      &.logo{
        width: 140px;
      }
      &.buy{
        width: 35px;
        position: absolute;
        right: 30px;
        top: 25px
      }
    }
   
  }
  .banner{
    img{
      width: 100%
    }
  }
  .seach{
    height: 90px;
    padding: 0 20px;
    .seachBox{
      width: 95%;
      height: 60px;
      position: relative;
      top: 15px;
      margin: 0 auto;
      border:1px solid #b5b6b6;
      border-radius: 30px;
      background: #fff;
      overflow: hidden;
      .seachBtn{
        width: 25px;
        position: absolute;
        left: 20px;
        top: 20px;
        z-index: 1;
      }
      .txt{
        width: 440px;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 30px;
        border:none;
        color: #666;
        font-size: 28px;
        padding: 0 60px;
      }
      .btn{
        position: absolute;
        right: 30px;
        top: 16px;
        z-index: 1;
        height:30px;
        font-size: 24px;
        color: #45a73a;
        line-height: 30px;
      }
    }
    

  }
  .type{
    display: flex;
    background: #fff;
    padding: 40px 0 20px;
    border-bottom: 1px solid #efefef;
    .item{
      flex: 1;
      text-align: center;
      font-size: 24px;
      color: #666;
      img{
        width: 90px;
        margin: 0 auto 10px;
        display: block;
      }
    }
  }
  .tips{
    background: #fff;
    height: 50px;
    padding: 0 20px 0 60px;
    line-height: 50px;
    font-size: 20px;
    color: #666;
    position: relative;
    .music{
      width: 25px;
      display: inline-block;
      position: absolute;
      top: 12px;
      left: 20px;
    }
  }
  .adv{
    line-height: 0;
    // background: #fff;
    margin: 10px auto;
    img{
      width: 100%;
      margin-bottom: 10px;
      &:last-child{
        margin-bottom: 0
      }
    }
  }
  
}
</style>
