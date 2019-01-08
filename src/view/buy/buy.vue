<template>
    <div class="main">
        <ul class="buyBox">
            <li class="item">
                <div class="title">
                    <span class="icon"></span>
                    <span class="tname">福州仓山万达店</span>
                    <span class="edit">编辑</span>
                </div>
                <div class="toItem">
                    <span class="icon active"></span>
                    <div class="img"></div>
                    <div class="right Te">
                        <span class="iconTxt">特</span>
                        <div class="Tr">
                            <div class="name">全套水鸭温肾助阳汤全套水鸭温肾助阳汤全套水鸭温肾助阳汤全套水鸭温肾助阳汤（送养生包1罐）</div>
                            <div class="tips">套餐A 0.5</div>
                        </div>
                        <div class="prize">￥200 <span class="num">×1</span></div>
                    </div>
                    <div class="rightEdit">
                        <div class="editL">
                            <div class="top">
                                <div class="icoBtn add1"></div>
                                <input type="text" class="iconNum" value="1">
                                <div class="icoBtn add2"></div>
                            </div>
                            <div class="editTxt">
                                <div class="editP">套餐A</div>
                                <div class="editP">0.5</div>
                                <div class="r"></div>
                            </div>
                            
                        </div>
                        <div class="editR">删除</div>
                    </div>
                </div>
                <div class="toItem">
                    <span class="icon"></span>
                    <div class="img"></div>
                    <div class="right">
                        <div class="Tr">
                            <div class="name">全套水鸭温肾助阳汤（送养生包1罐）</div>
                            <div class="tips">套餐A 0.5</div>
                        </div>
                        <div class="prize">￥200 <span class="num">×1</span></div>
                    </div>
                    
                </div>
            </li>

            <li class="item">
                <div class="title">
                    <span class="icon"></span>
                    <span class="tname">福州仓山万达店</span>
                    <span class="edit">编辑</span>
                </div>
                <div class="toItem">
                    <span class="icon active"></span>
                    <div class="img"></div>
                    <div class="right Te">
                        <span class="iconTxt">特</span>
                        <div class="Tr">
                            <div class="name">全套水鸭温肾助阳汤全套水鸭温肾助阳汤全套水鸭温肾助阳汤全套水鸭温肾助阳汤（送养生包1罐）</div>
                            <div class="tips">套餐A 0.5</div>
                        </div>
                    </div>
                    <div class="prize">￥200 <span class="num">×1</span></div>
                </div>
                <div class="toItem">
                    <span class="icon"></span>
                    <div class="img"></div>
                    <div class="right">
                        <div class="Tr">
                            <div class="name">全套水鸭温肾助阳汤（送养生包1罐）</div>
                            <div class="tips">套餐A 0.5</div>
                        </div>
                    </div>
                    <div class="prize">￥200 <span class="num">×1</span></div>
                </div>
            </li>
        </ul>

        <div class="buy">
            <span class="icon"></span>全选
            <div class="btn">结算(2)</div>
            <div class="total">
                <div class="txt">
                    合计: <span class="num">￥1340</span>
                </div>
                <div class="freight">不含运费</div>
            </div>
            
        </div>

        <!-- 底部 start -->
        <cfoot></cfoot>
        <!-- 底部 end -->


        <div class="prop">
            <!-- <div class="box">
                <div class="text">确定要删除该商品吗？</div>
                <div class="btnBox">
                    <div class="btn">取消</div>
                    <div class="btn">确定</div>
                </div>
            </div> -->
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

                <div class="footer">确定</div>
            </div>
        </div>
    </div>
</template>
<script>

import cfoot from '../../components/foot/foot'
export default {
    mounted(){
        // this.$layer.open({
        //     title: '',
        //     content: '确定要删除该商品吗？',
        //     btn: ['确 定'],
        //     shadeClose: true,
        //     //回调函数
        //     yes: function(index){
        //         console.log(11)
        //     },
        //     cancel: function(index,layero){ //按右上角“X”按钮
        //         console.log(33)
        //     }
        // })
    },
    components:{cfoot}
}
</script>
<style lang="scss" scoped>
.main{
    padding-top: 10px;
    padding-bottom: 200px;
    .icon{
        width: 38px;
        height: 36px;
        margin-top: 20px;
        display: inline-block;
        background: url('../../assets/order/ico.png') 0 0 no-repeat;
        background-size: 100%;
        vertical-align: middle;
        margin-right: 10px;
        float: left;
        &.active{
            background: url('../../assets/order/ico_act.png') 0 0 no-repeat;
            background-size: 100%;
        }
    }
    .buyBox{
        .item{
            background: #fff;
            margin-bottom: 15px;
            
            .title{
                padding: 0 20px;
                height: 80px;
                line-height: 80px;
                font-size: 24px;
                color: #595757;
                border-bottom: 1px solid #ddddde;
                .edit{
                    float: right
                }
            }
            .toItem{
                padding: 20px;
                height: 160px;
                position: relative;
                border-bottom: 1px solid #ddddde;
                &:last-child{
                    border:none;
                }
                .icon{
                    margin-top: 60px;
                }
                .img{
                    width: 160px;
                    height: 160px;
                    background: #ccc;
                    margin-left: 10px;
                    float: left;
                }
                .right{
                    width: calc( 100% - 240px);
                    float: right;
                    display: flex;
                    font-size: 24px;
                    .iconTxt{
                        padding: 2px 8px;
                        height: 34px;
                        line-height: 34px;
                        margin-right: 10px;
                        font-size: 24px;
                        background: #f39901;
                        border-radius: 5px;
                        color: #fff;
                    }
                    .Tr{
                        flex: 1;
                        width: 100%;
                        .name{
                            line-height: 34px;
                            font-size: 24px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                        }
                        .tips{
                            color: #898989;
                            margin: 5px 0
                        }
                    } 
                }
                .rightEdit{
                    width: calc( 100% - 240px);
                    position: absolute;
                    right: 20px;
                    top: 20px;
                    height: 160px;
                    background: #fff;
                    .editL{
                        width: 270px;
                        float: left;
                        margin-left: 20px;
                        // background: red;
                        .top{
                            overflow: hidden;
                            padding-bottom: 22px;
                            border-bottom: 1px solid #ddddde;
                            .iconNum{
                                width:160px;
                                float: left;
                                text-align: center;
                                font-size: 30px;
                                margin: 0 10px;
                                color: #595757;
                                display: inline-block;
                                border: none;
                                background: none;
                            }
                            .icoBtn{
                                width: 44px;
                                height: 44px;
                                float: left;
                                display: inline-block;
                                background: url('../../assets/detail/add1.png') 0 0 no-repeat;
                                background-size: 100%;
                                &.add2{
                                    background: url('../../assets/detail/add2.png') 0 0 no-repeat;
                                    background-size: 100%;
                                }
                            }
                        }
                        .editTxt{
                            font-size: 24px;
                            padding-top: 15px;
                            color: #898989;
                            position: relative;
                            .r{
                                width: 11px;
                                height: 19px;
                                display: block;
                                position: absolute;
                                top: 30px;
                                right: 5px;
                                background: url('../../assets/detail/ico_r.png') 0 0 no-repeat;
                                background-size: 100%;
                                transform: rotate(90deg)
                            }
                        }
                    }
                    .editR{
                        width: 90px;
                        line-height: 160px;
                        height: 160px;
                        text-align: center;
                        font-size: 24px;
                        color: #fff;
                        background: #c3d600;
                        position: absolute;
                        top: 0;
                        right: 0;
                    }
                }
                .prize{
                    color: #f84e37;
                    position: absolute;
                    left: 260px;
                    bottom: 20px;
                    font-size: 24px;
                    width: calc(100% - 290px);
                    .num{
                        float: right;
                        color: #282828
                    }
                }
            }
        }
    }

    .buy{
        height: 100px;
        line-height: 100px;
        position: fixed;
        width: calc(100% - 20px);
        max-width: 800px;
        left: 50%;
        transform: translateX(-50%);
        bottom: 100px;
        background: #fff;
        font-size: 24px; 
        border-top:1px solid #ccc;
        padding-left: 20px;
        color: #595757;
        .icon{
            margin-top: 33px;
        }
        .total{
            width: 300px;
            float: right;
            padding-top: 15px;
            line-height: 35px;
            text-align: right;
            .txt{
                .num{
                    color: #fd6847
                }
            }
            .freight{
                color: #898989
            }
        }
        .btn{
            float: right;
            width: 180px;
            font-size: 24px;
            text-align: center;
            color: #fff;
            background: #45a73a;
            margin-left: 15px;
        }
    }

    .prop{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.8);
        z-index: 10;
        display: none;
        .box{

        }
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
                &:nth-child(3){
                    border:none;
                }
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

        .footer{
            height: 100px;
            line-height: 100px;
            text-align: center;
            background: #45a73a;
            color: #fff;
            font-size: 30px;
        }
    }
}
</style>
