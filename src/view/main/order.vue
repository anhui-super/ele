<template>
    <div class="main">
        <!-- 搜索框 start -->
        <div class="seach">
            <div class="seachBox">
                <img class="seachBtn" src="../../assets/index/seach.png" alt="">、
                <input type="text" class="txt" placeholder="输入关键字搜索">
                <span class="btn">搜索</span>
            </div>
        </div>
        <!-- 搜索框 end -->

        <!-- 状态start -->
        <div class="order">
            <div class="item" :class="orderIndex==index?'active':''" v-for="(item,index) in order" :key="index" @click="orderBtn(index)">{{item.name}}</div>
        </div>
        <!-- 状态end -->

        <!-- 待发货 start -->
        <div class="orderItem" v-if="orderIndex==0">
            <div class="top clear">
                <span class="r">买家已付款</span>
            </div>
            <div class="box clear">
                <div class="img"></div>
                <div class="right">
                    <div class="name">全套水鸭温肾助阳汤（送养生包1罐）</div>
                    <div class="prize">
                        <span class="l">套餐A 0.5</span>
                        <span class="r">￥56.00   ×2 </span>
                    </div>
                    <div class="tips">共2件商品  
                        <span class="r">合计：￥112.00 </span></div>
                </div>
            </div>
            <div class="btnBox">
                <span class="item"> <img src="../../assets/main/lin.png" alt=""> 提醒发货</span>
            </div>
        </div>
        <!-- 待发货 end -->

         <!-- 待付款 start -->
        <div class="orderItem" v-if="orderIndex==1">
            <div class="top clear">
                <span class="r">买家未付款</span>
            </div>
            <div class="box clear">
                <div class="img"></div>
                <div class="right">
                    <div class="name">全套水鸭温肾助阳汤（送养生包1罐）</div>
                    <div class="prize">
                        <span class="l">套餐A 0.5</span>
                        <span class="r">￥56.00   ×2 </span>
                    </div>
                    <div class="tips">共2件商品  
                        <span class="r">合计：￥112.00 </span></div>
                </div>
            </div>
            <div class="btnBox">
                <span class="item"> <img src="../../assets/main/lin2.png" alt=""> 立即付款</span>
            </div>
        </div>
        <!-- 待付款 end -->

        <!-- 待收货 start -->
        <div class="orderItem" v-if="orderIndex==2">
            <div class="top clear">
                <span class="r co">买家已发货</span>
            </div>
            <div class="box clear">
                <div class="img"></div>
                <div class="right">
                    <div class="name">全套水鸭温肾助阳汤（送养生包1罐）</div>
                    <div class="prize">
                        <span class="l">套餐A 0.5</span>
                        <span class="r">￥56.00   ×2 </span>
                    </div>
                    <div class="tips">共2件商品  
                        <span class="r">合计：￥112.00 </span></div>
                </div>
            </div>
            <div class="btnBox">
                <span class="item c"> <img src="../../assets/main/lin3.png" alt=""> 延长收货</span>
                <span class="item c"> <img src="../../assets/main/lin4.png" alt=""> 查看物流</span>
                <span class="item"> <img src="../../assets/main/lin5.png" alt=""> 确认收货</span>
            </div>
        </div>
        <!-- 待收货 end -->

        <!-- 待评价 start -->
        <div class="orderItem" v-if="orderIndex==3">
            <div class="top clear">
                <span class="r co">交易成功</span>
            </div>
            <div class="box clear">
                <div class="img"></div>
                <div class="right">
                    <div class="name">全套水鸭温肾助阳汤（送养生包1罐）</div>
                    <div class="prize">
                        <span class="l">套餐A 0.5</span>
                        <span class="r">￥56.00   ×2 </span>
                    </div>
                    <div class="tips">共2件商品  
                        <span class="r">合计：￥112.00 </span></div>
                </div>
            </div>
            <div class="btnBox">
                <span class="item c"> <img src="../../assets/main/lin6.png" alt=""> 删除订单</span>
                <span class="item c"> <img src="../../assets/main/lin4.png" alt=""> 查看物流</span>
                <span class="item"> <img src="../../assets/main/lin7.png" alt=""> 立即评价</span>
            </div>
        </div>
        <!-- 待评价 end -->

        <!-- 退款中 start -->
        <div class="orderItem" v-if="orderIndex==4">
            <div class="top clear">
                <span class="r co">退款中</span>
            </div>
            <div class="box clear">
                <div class="img"></div>
                <div class="right">
                    <div class="name">全套水鸭温肾助阳汤（送养生包1罐）</div>
                    <div class="prize">
                        <span class="l">套餐A 0.5</span>
                        <span class="r">￥56.00   ×2 </span>
                    </div>
                    <div class="tips">共2件商品  
                        <span class="r">合计：￥112.00 </span></div>
                </div>
            </div>
        </div>
        <!-- 退款中 end -->
    </div>
</template>
<script>
export default {
    data(){
        return{
            orderIndex:0,
            order:[
                {"name":"待发货","id":1},
                {"name":"待付款","id":2},
                {"name":"待收货","id":3},
                {"name":"待评价","id":4},
                {"name":"待退款","id":5}
            ]
        }
    },
    mounted(){
        this.orderIndex = this.$route.params.id
    },
    methods:{
        orderBtn(e){
            this.$router.push({path: '/order/'+e});
            this.orderIndex = e;
        }
    }
}
</script>
<style lang="scss" scoped>
.main{
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
    .order{
        display: flex;
        .item{
            height: 88px;
            line-height: 88px;
            background: #fff;
            font-size: 24px;
            flex: 1;
            text-align: center;
            color: #595757;
            &.active{
                color: #45a73a;
                border-bottom: 5px solid #45a73a;
                height: 83px;
            }
        }
    }
    .orderItem{
        background: #fff;
        margin-top: 10px;
        .top{
            padding: 0 20px;
            line-height: 50px;
            font-size: 22px;
            color: #595757;
            border-bottom: 1px solid #ccc;
            .r{
                float: right;
                &.co{
                    color: #45a73a;
                }
            }
        }
        .box{
            padding: 10px 20px;
            .img{
                width: 160px;
                height: 160px;
                background: #ccc;
                float: left;
                margin-right: 10px;
            }
            .right{
                .name{
                    font-size: 24px;
                    line-height: 34px;
                    height: 60px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                .prize{
                    font-size: 22px;
                    padding: 5px 0;
                    color: #898989;
                    .r{
                        float: right;
                    }
                }
                .tips{
                    text-align: right;
                    padding-top: 10px;
                    color: #595757;
                    font-size: 24px;
                    .r{
                        float: right;
                        margin-left: 10px;
                    }
                }
            }
        }
        .btnBox{
            text-align: right;
            padding: 0 20px 15px;
            .item{
                line-height: 50px;
                margin-top: 10px;
                padding: 0 20px;
                display: inline-block;
                color: #45a73a;
                border-radius: 5px;
                border:1px solid #b5b5b6;
                &.c{
                    color: #595757
                }
                img{
                    width: 26px;
                    vertical-align: middle;
                    margin-top: -3px;
                }
            }
        }
    }
}
</style>
