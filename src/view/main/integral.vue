<template>
    <div class="main">
        <ul class="list">
            <li class="item">
                <div class="top">
                    <span class="l">购买商品获取积分</span>
                    <span class="r">2016-03-01</span>
                </div>
                <div class="txt">
                    <span class="l">目前积分：10000</span>
                    <span class="r">+144.00</span>
                </div>
            </li>
            <li class="item">
                <div class="top">
                    <span class="l">购买商品获取积分</span>
                    <span class="r">2016-03-01</span>
                </div>
                <div class="txt">
                    <span class="l">目前积分：10000</span>
                    <span class="r ">+144.00</span>
                </div>
            </li>
            <li class="item">
                <div class="top">
                    <span class="l">购买商品获取积分</span>
                    <span class="r">2016-03-01</span>
                </div>
                <div class="txt">
                    <span class="l">目前积分：10000</span>
                    <span class="r add">-44.00</span>
                </div>
            </li>
        </ul>
    </div>    
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.main{
    .list{
        .item{
            background: #fff;
            padding: 20px;
            font-size: 26px;
            color: #595757;
            border-bottom: 1px solid #ddddde;
            .top{
                margin-bottom: 10px;
                .r{
                    font-size: 22px;
                    color: #898989;
                }
            }
            .txt{
                .l{
                    font-size: 22px;
                    color: #898989
                }
                .r{
                    color: #45a73a;
                    font-size: 30px;
                    &.add{
                        color: #595757
                    }
                }
            }
            .r{
                float: right
            }
        }
    }
}
</style>
