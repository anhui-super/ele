<template>
    <div class="main">
        <swiper :options="swiperOption" class="banner">
            <swiper-slide v-for="(item,index) in bannerBox" :key="index"><img :src="item" alt=""></swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>

        <div class="top">
            <div class="return"></div>
            <div class="san"></div>
            <div class="xin"></div>
        </div>
        <div class="bannerContent">
            <div class="title">全套三黄鸡夏季解暑汤（送养生包1罐）全套三黄鸡夏季解暑汤全套三黄鸡夏季解暑汤（送养生包1罐）</div>
            <div class="type">分类:精品土鸡>三黄鸡</div>
            <div class="prize">￥388.00 <span class="oldPrize">988.00</span></div>
            <div class="freight">运费：免运费 <span class="adress">所在地： 福建省 福州市</span></div>
        </div>
        <div class="tips">
            <span class="item">
                <img src="../../assets/detail/ico2.png" alt="">正品保障
            </span>
            <span class="item">
                <img src="../../assets/detail/ico3.png" alt="">全场包邮
            </span>
        </div>

        <div class="Number">请选择 规格 数量 <span class="r"></span></div>

        <!-- 评论 start -->
        <div class="comment">
            <div class="title">商品评价(12) <span class="r">好评率 <span class="red">100%</span></span></div>
            <ul class="list">
                <li class="item">
                    <div class="user"><div class="logo"></div>匿名用户</div>
                    <div class="txt">这款萌物还真不错！>这款萌物还真不错！>这款萌物还真不错！>这款萌物还真不错！>这款萌物还真不错！>这款萌物还真不错！>这款萌物还真不错！>这款萌物还真不错！>这款萌物还真不错！>这款萌物还真不错！</div>
                    <div class="time">2018-11-30 13:47:53</div>
                </li>
            </ul>
            <div class="more">查看更多评价</div>
        </div>
        <!-- 评论 end -->

        <div class="not">该商品已下架</div>

        <!-- 底部start -->
        <div class="footer active">
            <div class="item">加入购物车</div>
            <div class="item">立即购买</div>
        </div>
        <!-- 底部end -->

        <div class="prop">
            <div class="bom">
                <div class="btop clear">
                    <div class="img"></div>
                    <div class="r">
                        <div class="prize">￥688</div>
                        <div class="txt">库存 <span>7</span></div>
                        <div class="txt">已选 <span>套餐A 0.5</span></div>
                    </div>
                    <div class="delete"></div>
                </div>
                <div class="color">
                    <div class="title">颜色</div>
                    <ul class="list">
                        <li class="item active">套餐A</li>
                        <li class="item">套餐A</li>
                        <li class="item">套餐A</li>
                        <li class="item">套餐A</li>
                        <li class="item">套餐A</li>
                        <li class="item">套餐A</li>
                    </ul>
                </div>
                <div class="color">
                    <div class="title">公斤</div>
                    <ul class="list">
                        <li class="item active">0.5</li>
                        <li class="item">1.2</li>
                        <li class="item">1.3</li>
                        <li class="item">1.4</li>
                        <li class="item">1.5</li>
                    </ul>
                </div>
                <div class="num">数量
                    <div class="box">
                        <div class="btn_1"></div>
                        <input type="text" value="1">
                        <div class="btn_2"></div>
                    </div>
                    <div class="tis">(限购7件)</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    components:{
        swiper,
        swiperSlide
    },
    data(){
        return{
            swiperOption: {
                pagination: {
                el: '.swiper-pagination'
                },
            },
            bannerBox:[require('../../assets/detail/banner.png'),require('../../assets/detail/banner.png')]
        }
    }
}
</script>
<style lang="scss" scoped>
.main{
    min-height: 100%;
    padding-bottom: 100px;
   .banner{
       height: 450px;
       img{
           width: 100%;
           height: 100%
       }
   }
   .top{
       height: 50px;
       position: absolute;
       left: 0;
       top: 20px;
       z-index: 1;
       width: calc(100% - 40px);
       padding: 0 20px;
       .return{
           width: 50px;
           height: 50px;
           float: left;
           background: rgba(0,0,0,.4) url('../../assets/detail/retrun.png') center center no-repeat;
           background-size: 17px;
           border-radius: 50%;
       }
       .xin,.san{
           width: 50px;
           height: 50px;
           float: right;
           border-radius: 50%;
           margin-left:15px; 
       }
       .xin{
            background: rgba(0,0,0,.4) url('../../assets/detail/xin.png') center center no-repeat;
            background-size: 40px; 
       }
       .san{
            background: rgba(0,0,0,.4) url('../../assets/detail/ico.png') center center no-repeat;
            background-size: 31px; 
       }
   }
   .bannerContent{
       background: #fff;
       padding: 0 20px;
       .title{
            padding-top: 10px;
            font-size: 28px;
            font-weight: bold;
            line-height: 40px;
            height: 80px;
            color: #595757;
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            font-family: "微软雅黑"
       }
       .type{
           line-height: 50px;
           color: #898989;
       }
       .prize{
           font-size: 32px;
           color: #ff5c36;
           font-weight: bold;
           .oldPrize{
               font-size: 24px;
               font-weight: normal;
               color: #aaa;
               margin-left: 20px;
               text-decoration: line-through;
           }
       }
       .freight{
           font-size: 20px;
           color: #333;
           line-height: 60px;
           .adress{
               padding-left: 60px;
               color: #999
           }
       }
       
   }
   .tips{
        background: #f8f8f8;
        padding: 20px;
        border-bottom: 1px solid #ddd;
        .item{
            margin-right: 30px;
            img{
                width: 25px;
                display: inline-block;
                vertical-align: middle;
                margin-top: -3px;
                margin-right: 5px;
            }
        }
    }
    .Number{
        line-height: 70px;
        padding: 0 20px;
        font-size: 26px;
        color: #595757;
        background: #fff;
        margin: 10px 0;
        border-top:1px solid #ddd;
        border-bottom: 1px solid #ddd;
        position: relative;
        .r{
            width: 11px;
            height: 19px;
            display: block;
            position: absolute;
            top: 25px;
            right: 20px;
            background: url('../../assets/detail/ico_r.png') 0 0 no-repeat;
            background-size: 100%;
        }
    }
    .comment{
        background: #fff;
        padding: 0 20px;
        .title{
            height: 80px;
            line-height: 80px;
            font-size: 28px;
            color: #595757;
            border-bottom: 1px solid #ddd;
            .r{
                float: right;
                font-size: 20px;
                .red{
                    color: #ff5c36
                }
            }
        }
        .list{
            .item{
                padding: 15px 0;
                border-bottom: 1px solid #ddd;
                .user{
                    height: 80px;
                    line-height: 80px;
                    font-size: 24px;
                    color: #595757;
                    .logo{
                        width: 80px;
                        height:80px;
                        background: #ccc;
                        border-radius: 50%;
                        display: inline-block;
                        vertical-align: middle;
                        margin-right: 20px;
                        margin-top: -3px;
                        border-radius: 100%;
                        img{
                            width: 100%
                        }
                    }
                }
                .txt{
                    margin: 10px 0;
                    font-size: 24px;
                    color: #898989;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                .time{
                    font-size: 20px;
                    color: #898989;
                }
            }
        }
        .more{
            height: 70px;
            line-height: 70px;
            font-size: 28px;
            color: #595757;
            text-align: center;
        }
    }
    .not{
        height: 75px;
        line-height: 75px;
        text-align: center;
        font-size: 24px;
        color: #fff;
        margin-top: 10px;
        background: #b5b6b6;
    }
    .footer{
        height: 100px;
        line-height: 100px;
        font-size: 30px;
        color: #fff;
        text-align: center;
        display: flex;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        &.active{
            .item{
                background: #c3d600;
                &:last-child{
                    background: #45a73a
                }
            }
            
        }
        .item{
            flex: 1;
            background: #e3ea95;
            &:last-child{
                background: #b0d8ac
            }
        }
    }
    .prop{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: calc( 100% - 100px);
        background: rgba(0,0,0,.8);
        z-index: 2;
        .bom{
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            background: #fff;
            .btop{
                padding: 0 20px 20px;
                border-bottom: 1px solid #ccc;
                .delete{
                    width: 42px;
                    height: 42px;
                    background: url('../../assets/detail/delete.png') 0 0 no-repeat;
                    background-size: 100%;
                    position: absolute;
                    right: 20px;
                    top: 20px;
                }
                .img{
                    width:175px;
                    height: 175px;
                    background: #ccc;
                    float: left;
                    margin: -30px 0 0;
                    border-radius: 5px;
                    overflow: hidden;
                }
                .r{
                    width: calc( 100% -215px);
                    float: left;
                    padding-left: 20px;
                    padding-top: 20px;
                    .prize{
                        font-size: 34px;
                        color: #f84e37;
                    }
                    .txt{
                        font-size: 22px;
                        line-height: 40px;
                        span{
                            color: #aaa
                        }
                    }
                }
            }
            .color{
                padding: 20px 0;
                margin: 0 20px;
                border-bottom: 1px solid #ccc;
                .title{
                    font-size: 24px;
                    color: #595757;
                    padding-bottom: 15px;
                }
                .list{
                    .item{
                        height: 50px;
                        line-height: 50px;
                        padding: 0 20px;
                        margin-bottom: 10px; 
                        margin-right: 10px;
                        color: #898989;
                        background: #efefef;
                        display: inline-block;
                        border-radius: 5px;
                        &.active{
                            color: #fff;
                            background: #45a73a;
                        }
                    }
                }
            }
            .num{
                line-height: 100px;
                height: 100px;
                font-size: 24px;
                padding: 0 20px;
                .box{
                    float: right;
                    input{
                        width: 120px;
                        height: 44px;
                        border:none;
                        text-align: center;
                        font-size: 34px;
                    }
                    div{
                        width: 44px;
                        height: 44px;
                        display: inline-block;
                        vertical-align: middle;
                        margin-top: -5px;
                        &.btn_1{
                            background: url('../../assets/detail/add1.png') 0 0 no-repeat;
                            background-size: 100%;
                        }
                        &.btn_2{
                            background: url('../../assets/detail/add2.png') 0 0 no-repeat;
                            background-size: 100%;
                        }
                    }
                }
                .tis{
                    float: right;
                    color: #aaa;
                    padding-right:20px; 
                }
            }
        }
    }
}
</style>
