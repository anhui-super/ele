<template>
    <div class="footer">
        <router-link  :to="item.url" tag="li" exact class="item" v-for="(item,index) in footDate" :key="index">
            <div class="img">
                <img class="ico1" :src="item.imgact" alt="">
                <img class="ico2" :src="item.img" alt="">
            </div>
            <div class="name">{{item.name}}</div>
        </router-link>
    </div>    
</template>
<script>
export default {
    data(){
        return{
            footDate:[
                {
                    img:require('../../assets/tab/ico1.png'),
                    imgact:require('../../assets/tab/ico1_act.png'),
                    name:'首页',
                    url:'/'
                },
                {
                    img:require('../../assets/tab/ico2.png'),
                    imgact:require('../../assets/tab/ico2_act.png'),
                    name:'分类',
                    url:'/classify'
                },
                {
                    img:require('../../assets/tab/ico3.png'),
                    imgact:require('../../assets/tab/ico3_act.png'),
                    name:'购物车',
                    url:'/buy'
                },
                {
                    img:require('../../assets/tab/ico4.png'),
                    imgact:require('../../assets/tab/ico4_act.png'),
                    name:'我的',
                    url:'/main'
                }
            ],
            tabIndex:0
        }
    }
}
</script>
<style lang="scss" scoped>
.footer{
    position: fixed;
    width: 100%;
    max-width: 800px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    background: #fff;
    border-top: 1px solid #b5b6b6;
    .item{
        flex: 1;
        text-align: center;
        padding-top: 15px;
        .img{
            width: 45px;
            height: 45px;
            margin: 0 auto 5px;
            img{
                max-height: 45px;
                max-width: 45px;
            }
        }
        .ico1{
            display: none;
        }
        .name{
            font-size: 22px;
            color: #666;
        }
        &.active,&.router-link-active{
            .name{
                color: #46a83b
            }
            .ico1{
                display: block
            }
            .ico2{
                display: none;
            }
        }
    }
}
</style>
