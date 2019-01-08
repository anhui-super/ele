<template>
    <div class="main">
        <!-- 搜索框 start -->
        <div class="seach">
            <div class="seachBox">
                <img class="seachBtn" src="../../assets/index/seach.png" alt="">、
                <input type="text" class="txt" placeholder="输入关键字搜索">
                <span class="btn">搜索</span>
            </div>
            <img class="buy" src="../../assets/index/buy.png" alt="">
        </div>
        <!-- 搜索框 end -->

        <div class="content">
            <div class="left">
                <ul class="listL">
                    <li class="item">阴阳平和体质</li>
                    <li class="item">阴阳平和体质</li>
                </ul>
            </div>
            <div class="right">
                <list :listBox="listBox" :status='1' class="listR"></list>
            </div>
        </div>
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
                },
                {
                id:2,
                img:require('../../assets/index/img.jpg'),
                name:'全套水鸭温肾助阳汤（送养生包1罐）',
                prize:'60.0',
                num:1
                },
                {
                id:2,
                img:require('../../assets/index/img.jpg'),
                name:'全套水鸭温肾助阳汤（送养生包1罐）',
                prize:'60.0',
                num:1
                },
                {
                id:2,
                img:require('../../assets/index/img.jpg'),
                name:'全套水鸭温肾助阳汤（送养生包1罐）',
                prize:'60.0',
                num:1
                },
                {
                id:2,
                img:require('../../assets/index/img.jpg'),
                name:'全套水鸭温肾助阳汤（送养生包1罐）',
                prize:'60.0',
                num:1
                },
                {
                id:2,
                img:require('../../assets/index/img.jpg'),
                name:'全套水鸭温肾助阳汤（送养生包1罐）',
                prize:'60.0',
                num:1
                },
                {
                id:2,
                img:require('../../assets/index/img.jpg'),
                name:'全套水鸭温肾助阳汤（送养生包1罐）',
                prize:'60.0',
                num:1
                },{
                id:2,
                img:require('../../assets/index/img.jpg'),
                name:'全套水鸭温肾助阳汤（送养生包1罐）',
                prize:'60.0',
                num:1
                }
            ],
        }
    },
    mounted(){
        // 拉相关数据
        console.log(this.$route.params.id)
    },
    components:{list}
}
</script>
<style lang="scss" scoped>
.main{
    position: absolute;
    width: 100%;
    max-width: 800px;
    height: 100%;
    .seach{
        height: 90px;
        padding: 0 20px;
        position: relative;
        border-bottom: 1px solid #ccc;
        .buy{
            position: absolute;
            width: 35px;
            position: absolute;
            right: 40px;
            top: 30px
        }
        .seachBox{
            width: calc(100% - 120px);
            height: 60px;
            position: relative;
            top: 15px;
            // margin: 0 auto;
            margin-left: 35px;
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
    .content{
        .listL{
            position: absolute;
            top: 90px;
            left: 0;
            width: 185px;
            background: #fff;
            height: calc(100% - 90px);
            .item{
                height: 90px;
                line-height: 90px;
                border-bottom: 1px solid #ccc;
                text-align: center;
                font-size: 24px;
                color: #595757;
            }
        }
        .listR{
            position: absolute;
            top: 90px;
            width: calc(100% - 195px);
            left: 190px;
            height: calc(100% - 90px);
            overflow-y: scroll
        }
    }
}
</style>
