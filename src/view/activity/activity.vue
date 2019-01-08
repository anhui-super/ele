<template>
    <div class="mian">
        <div class="banner"><img src="../../assets/index/banner.jpg" alt=""></div>
        <div class="time">
            <div class="box">
                <div class="title">距离活动结束还有</div>
                <div class="timeBox">
                    <span class="s">0</span>
                    <span class="s">0</span>
                    <span class="txt">天</span>
                    <span class="s">0</span>
                    <span class="s">0</span>
                    <span class="txt">时</span>
                    <span class="s">0</span>
                    <span class="s">0</span>
                    <span class="txt">分</span>
                    <span class="s">0</span>
                    <span class="s">0</span>
                    <span class="txt">秒</span>
                </div>
            </div>
        </div>

        <list :listBox="listBox" :status='2'></list>
        <div class="listTips">上拉加载更多...</div>
    </div>    
</template>
<script>

import list from '../../components/list/list'
export default {
    data(){
        return{
            listBox:[
            {
            id:1,
            img:require('../../assets/index/img.jpg'),
            name:'全套水鸭温肾助阳汤（送养生包1罐）全套水鸭温肾助阳汤（送养生包1罐）',
            prize:'59.0',
            old:'69.0',
            ze:'5.5折',
            num:15
            },
            {
            id:2,
            img:require('../../assets/index/img.jpg'),
            name:'全套水鸭温肾助阳汤（送养生包1罐）',
            prize:'60.0',
            old:'69.0',
            ze:'5.5折',
            num:15
            },
            {
            id:2,
            img:require('../../assets/index/img.jpg'),
            name:'全套水鸭温肾助阳汤（送养生包1罐）',
            prize:'60.0',
            old:'69.0',
            ze:'5.5折',
            num:10
            },
            {
            id:2,
            img:require('../../assets/index/img.jpg'),
            name:'全套水鸭温肾助阳汤（送养生包1罐）',
            prize:'60.0',
            old:'69.0',
            ze:'5.5折',
            num:1
            }
        ],
        }
    },
    components: {
        list
    },
}
</script>
<style lang="scss" scoped>
.mian{
    .banner{
        line-height: 0;
        img{
            width: 100%;
        }
    }
    .time{
        height: 100px;
        width: 100%;
        background: #fff;
        padding-top: 35px;
        .box{
            width: 570px;
            height: 60px;
            margin: 0 auto;
            border:2px solid #b7b8b8;
            position: relative;
            .title{
                width: 280px;
                height: 30px;
                text-align: center;
                background: #fff;
                position: absolute;
                top: -15px;
                left: 50%;
                font-size: 24px;
                color: #b5b5b6;
                transform: translateX(-50%);
            }
            .timeBox{
                width: 450px;
                height: 50px;
                background: #fff;
                position: absolute;
                bottom: -25px;
                left: 50%;
                padding: 0 30px;
                transform: translateX(-50%);
                span{
                    float: left;
                    height: 50px;
                    display: inline-block;
                    text-align: center;
                    line-height: 50px;
                    &.s{
                        width:33px;
                        background: #000;
                        border-radius: 5px;
                        margin-right: 8px;
                        color: #fff;
                        font-size: 30px;
                        font-family: Arial, Helvetica, sans-serif
                    }
                    &.txt{
                        padding-right: 5px;
                        font-size: 24px;
                        color: #b5b5b6;
                    }
                }
                
            }
        }
    }
}
</style>
