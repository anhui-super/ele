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

        <!-- 列表 start -->
        <div class="content">
            <ul class="list">
                <router-link  :to="item.url" tag="li" exact class="item clear" v-for="(item,index) in typeList" :key="index">
                <!-- <li class="item clear"> -->
                    <div class="img"><img :src="item.img" alt=""></div>
                    <div class="right" :style="{color:item.color}">{{item.text}}</div>
                    <div class="r"></div>
                <!-- </li> -->
                </router-link>
            </ul>
        </div>
        <!-- 列表 end -->


        <!-- 底部 start -->
        <cfoot></cfoot>
        <!-- 底部 end -->
    </div>
</template>
<script>

import cfoot from '../../components/foot/foot'
export default {
    data(){
        return{
            typeList:[
                {
                    img:require('../../assets/type/icon1.png'),
                    text:'体质：是在中医理论发展过程中形成的病理生理学概念。查《辞海》无“体质”一词，但对“体”、“质”分别解释为：“体”，指身体，“质”为性质、本质。',
                    url:'/classifyDetail/1',
                    color:'#bcce1a'
                },
                {
                    img:require('../../assets/type/icon2.png'),
                    text:'体质：是在中医理论发展过程中形成的病理生理学概念。查《辞海》无“体质”一词，但对“体”、“质”分别解释为：“体”，指身体，“质”为性质、本质。',
                    url:'/classifyDetail/2',
                    color:'#f0807e'
                },
                {
                    img:require('../../assets/type/icon3.png'),
                    text:'体质：是在中医理论发展过程中形成的病理生理学概念。查《辞海》无“体质”一词，但对“体”、“质”分别解释为：“体”，指身体，“质”为性质、本质。',
                    url:'/classifyDetail/3',
                    color:'#fbc835'
                },
                {
                    img:require('../../assets/type/icon4.png'),
                    text:'体质：是在中医理论发展过程中形成的病理生理学概念。查《辞海》无“体质”一词，但对“体”、“质”分别解释为：“体”，指身体，“质”为性质、本质。',
                    url:'/classifyDetail/4',
                    color:'#96d696'
                }
            ]
        }
    },
    components:{cfoot}
    
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
    .content{
        background: #fff;
        .list{
            .item{
                padding: 25px 20px;
                border-bottom:1px solid #ddddde;
                position: relative;
                &:last-child{
                    border:none;
                }
                .img{
                    width: 150px;
                    height: 150px;
                    float: left;
                    img{
                        width: 100%;
                    }
                }
                .right{
                    width: calc(100% - 210px);
                    float: left;
                    margin-top: 10px;
                    padding-left: 20px;
                    font-size: 20px;
                    line-height: 32px;
                    text-overflow: -o-ellipsis-lastline;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 4;
                    -webkit-box-orient: vertical;
                }
                .r{
                    width: 11px;
                    height: 19px;
                    display: block;
                    position: absolute;
                    top: 90px;
                    right: 20px;
                    background: url('../../assets/detail/ico_r.png') 0 0 no-repeat;
                    background-size: 100%;
                }
            }
        }
    }
}
</style>
