<template>
    <div class="main">
        <!-- 头部 start -->
        <div class="head clear">
            <div class="user">
                <img class="people" src="../../assets/order/people.png" alt="">
                收货人   <span class="name">沈永超</span>  
                <span class="phone">13504041212</span>
                <span class="r"></span>
            </div>
            <div class="adres active">
                <span class="icon"></span>
                <span class="txt">我要自提</span>
                <span class="adress">福建省福州市鼓楼区五一路129号福建省福州市鼓楼区五一路...</span>
                <span class="r"></span>
            </div>
            <div class="adres">
                <span class="icon"></span>
                <span class="txt">收货地址</span>
                <span class="adress">福建省福州市鼓楼区五一路129号...</span>
                <span class="r"></span>
            </div>
        </div>
        <!-- 头部 end -->

        <!-- 商品start -->
        <div class="detail clear">
            <div class="img"></div>
            <div class="imgR">
                <div class="title">全套水鸭温肾助阳汤全套水鸭温肾助阳汤全套水鸭温肾助阳汤（送生包1罐）</div>
                <div class="txt">套餐A 0.5</div>
                <div class="prize">￥200  <span class="num">×1</span></div>
                <div class="T">特</div>
            </div>
        </div>
        <!-- 商品end -->

        <!--  -->
        <div class="box">
            <div class="tips clear">
                购买数量
                <div class="addBox">
                    <div class="btn btn_1"></div>
                    <input type="text" class="txt" value="1">
                    <div class="btn btn_2"></div>
                </div>
            </div>
            <div class="tips clear">配送方式 
                
                <span class="freight">优惠运费0.00元</span>
                <span class="oldFreight">实际运费 10.00元</span>
                <span class="r"></span>
            </div>
            <div class="tips clear">优惠券 
                <span class="freight">-20.00元</span>
                <span class="r"></span>
            </div>
            <div class="tips clear">
                实付款: <span class="money">￥180</span>
            </div>
        </div>

        <div class="footer">确定</div>
    </div>    
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.main{
    max-width: 800px;
    width: 100%;
    padding-bottom: 100px;
    margin: 0 auto;
    position: relative;
    .r{
        width: 10px;
        height: 19px;
        display: block;
        position: absolute;
        top: 30px;
        right: 20px;
        background: url('../../assets/detail/ico_r.png') 0 0 no-repeat;
        background-size: 100%;
        
    }
    .head{
        background: #fff;
        padding: 0 20px;
        .user{
            height: 80px;
            line-height: 80px;
            border-bottom: 1px solid #ccc;
            font-size: 24px;
            color: #595757;
            .people{
                width: 25px;
                vertical-align: middle;
                margin-top: -5px;
                margin-right: 10px;
                
            }
            .name{
                margin-left: 30px;
            }
            .phone{
                float: right;
                padding-right: 30px;
                font-family: Arial, Helvetica, sans-serif
            }
        }
        .adres{
            line-height: 80px;
            height: 80px;
            font-size: 24px;
            color: #595757;
            position: relative;
            border-bottom: 1px solid #ccc;
            &:last-child{
                border-bottom: none
            }
            &.active{
                .icon{
                    background: url('../../assets/order/ico_act.png') 0 0 no-repeat;
                    background-size: 100%;
                }
                .txt{
                    color: #45a73a
                }
            }
            .r{
                right: 0;
            }
            .icon{
                width: 38px;
                height: 36px;
                margin-top: 22px;
                display: inline-block;
                background: url('../../assets/order/ico.png') 0 0 no-repeat;
                background-size: 100%;
                vertical-align: middle;
                margin-right: 10px;
                float: left;
            }
            .txt{
                margin-right: 20px;
                float: left
            }
            .adress{
                float: left;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                display: inline-block;
                vertical-align: middle;
                width: calc(100% - 200px);
            }
        }
    }
    .detail{
        margin: 15px auto;
        padding: 20px;
        
        background: #f5f5f5;
        .img{
            width: 160px;
            height: 160px;
            float: left;
            background: #fff;
        }
        .imgR{
            float: left;
            width: calc(100% - 230px);
            margin-left: 65px;
            position: relative;
            .T{
                position: absolute;
                top: 0;
                left: -50px;
                background: #f39800;
                font-size: 24px;
                color: #fff;
                padding: 5px 10px;
                border-radius: 5px;
            }
            .title{
                color: #595757;
                font-size: 24px;
                line-height: 34px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
            .txt{
                padding: 10px 0 20px;
                font-size: 22px;
                color: #898989;
            }
            .prize{
                font-size: 24px;
                color: #f84e37;
                .num{
                    float: right;
                    color: #282828
                }
            }
        }
    }
    .box{
        background: #fff;
        .tips{
            line-height: 100px;
            height: 100px;
            margin: 0 20px;
            font-size: 24px;
            border-bottom: 1px solid #ececec;
            position: relative;
            &:last-child{
                border:none
            }
            .r{
                top: 40px;
                right: 0
            }
            .addBox{
                float: right;
                .txt{
                    width: 60px;
                    border:none;
                    text-align: center;
                }
                .btn{
                    width: 56px;
                    height: 47px;
                    display: inline-block;
                    background: url('../../assets/order/add1.png') 0 0 no-repeat;
                    background-size: 100%;
                    vertical-align: middle;

                    &.btn_2{
                        background: url('../../assets/order/add2.png') 0 0 no-repeat;
                        background-size: 100%;
                    }
                }
            }
            .freight{
                float: right;
                color: #fd6847;
                padding-right: 30px;
            }
            .oldFreight{
                float: right;
                margin-right: 10px;
                font-size: 20px;
                color: #898989;
                text-decoration: line-through
            }
            .money{
                color: #f84e37;
                font-weight: bold;
            }
        }
    }
    .footer{
        width: 100%;
        height: 100px;
        line-height: 100px;
        text-align: center;
        background: #45a73a;
        font-size: 30px;
        position: fixed;
        bottom: 0;
        left: 0;
        color: #fff
    }
}
</style>
