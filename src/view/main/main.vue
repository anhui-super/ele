<template>
    <div class="main">
        <div class="banner">
            <img src="../../assets/index/buy.png" alt="" class="buy">
        </div>
        <!-- 用户信息 start -->
        <div class="user">
            <div class="img"></div>
            <span class="name">爱上云田</span>
            <router-link to="/integral" class="right">
                <span class="txt">
                <img src="../../assets/main/fen.png" alt="" class="ico"> 我的积分
                </span>
                <span class="r">5000</span>
            </router-link>
        </div>
        <!-- 用户信息 end -->
        <!-- 订单状态 start -->
        <div class="iconbox">
            <router-link to="/order/0" class="item">
                <img src="../../assets/main/icon1.png" alt="">待付款
            </router-link>
            <router-link to="/order/1" class="item">
                <img src="../../assets/main/icon2.png" alt="">待发货
            </router-link>
            <router-link to="/order/2" class="item">
                <img src="../../assets/main/icon3.png" alt="">代收货
            </router-link>
            <router-link to="/order/3" class="item">
                <img src="../../assets/main/icon4.png" alt="">待评价
            </router-link>
            <router-link to="/order/4" class="item">
                <img src="../../assets/main/icon5.png" alt="">退款
            </router-link>
        </div>
        <!-- 订单状态 end -->

        <div class="iconItem">
            <div class="L">
                <img src="../../assets/main/icon6.png" alt="" class="icon">全部订单
            </div>
            <div class="R">
                500 <span class="r"></span>
            </div>
        </div>

        <div class="iconItem mt15">
            <div class="L">
                <img src="../../assets/main/icon7.png" alt="" class="icon">我的会员卡
            </div>
            <div class="R"><span class="r"></span></div>
        </div>

        <div class="iconItem">
            <div class="L">
                <img src="../../assets/main/icon8.png" alt="" class="icon">我的收货地址
            </div>
            <div class="R">
                <span class="r"></span>
            </div>
        </div>

        <div class="iconItem">
            <div class="L">
                <img src="../../assets/main/icon9.png" alt="" class="icon">我的优惠券
            </div>
            <div class="R">
                <span class="r"></span>
            </div>
        </div>  

        <div class="iconItem mt15">
            <div class="L">
                <img src="../../assets/main/icon10.png" alt="" class="icon">消息
            </div>
            <div class="R">
                <span class="r"></span>
            </div>
        </div>

        <div class="iconItem">
            <div class="L">
                <img src="../../assets/main/icon11.png" alt="" class="icon">设置
            </div>
            <div class="R">
                <span class="r"></span>
            </div>
        </div>


        <!-- 底部 start -->
        <cfoot></cfoot>
        <!-- 底部 end -->
    </div>
</template>
<script>
import cfoot from '../../components/foot/foot'
export default {
    components:{cfoot},
    methods: {
    onSelected(data) {
     
      console.log(data)
    },
  } 
}
</script>
<style lang="scss" scoped>
.main{
    padding-bottom: 120px;
    .banner{
        height: 235px;
        background: url('../../assets/main/bg.png') 0 0 no-repeat;
        background-size: 100%;
        position: relative;
        .buy{
            width: 34px;
            position: absolute;
            top: 30px;
            right: 30px;
        }
    }
    .user{
        height: 80px;
        line-height: 80px;
        background: #fff;
        text-align: right;
        position: relative;
        font-size: 26px;
        padding-right: 30px;
        .img{
            width: 124px;
            height: 124px;
            position: absolute;
            left: 30px;
            bottom: 20px;
            background: #ccc;
            border-radius: 50%;
            overflow: hidden;
        }
        .name{
            position: absolute;
            top: -70px;
            left: 170px;
            color: #fff;
            
        }
        .txt{
            color: #45a73a;
            padding-right: 20px;
        }
        .ico{
            width: 28px;
            vertical-align: middle;
            margin-top: -3px;
        }
        .r{
            font-size: 30px;
            color: #595757;
        }
    }

    .iconbox{
        margin: 20px 0 0;
        background: #fff;
        border-bottom: 1px solid #ccc;
        display: flex;
        .item{
            flex: 1;
            padding: 25px 0;
            text-align: center;
            font-size: 24px;
            color: #898989;
            img{
                margin: 0 auto 7px;
                width: 48px;
                display: block;
            }
        }
    }
    .iconItem{
        height: 90px;
        line-height: 90px;
        font-size: 28px;
        color:  #595757;
        background: #fff;
        padding: 0 20px;
        display: flex;
        border-bottom: 1px solid #dcdddd;
        &.mt15{
            margin-top: 15px;
        }
        .L{
            flex: 1;
            width: 100%;
        }
        .R{
            flex: 1;
            text-align: right;
            .r{
                width: 11px;
                height: 19px;
                margin-left: 5px;
                display: inline-block;
                background: url('../../assets/detail/ico_r.png') 0 0 no-repeat;
                background-size: 100%;
            }
        }
        img{
            width: 53px;
            display: inline-block;
            vertical-align: middle;
            margin-right: 10px;
            margin-top: -4px;
        }
    }
}
</style>
