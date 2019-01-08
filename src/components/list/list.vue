<template>
    <ul class="list clear">
        <li class="item" v-for="(item,index) in listBox" :key="index">
            <div class="itemBox">
                <img class="img" :src="item.img" alt="">
                <div class="name">{{item.name}}</div>
                <div class="prize">￥{{item.prize}} <span class="old" v-if="status==2">{{item.old}}</span>
                    <span class="r" v-if="status==1">销量:{{item.num}}</span>
                    <span class="btn" v-if="status==2">{{item.ze}}</span>
                </div>
            </div>
        </li>
    </ul>
</template>
<script>
export default {
    props:["listBox","status"],
    mounted(){
    }
}
</script>
<style lang="scss" scoped>
.list{
    // display: flex;
    width: 100%;
    .item{
        float: left;
        width: 50%;
        padding: 10px; 
        box-sizing: border-box;
        
        overflow: hidden;
        .itemBox{
            background: #fff;
            .name{
                font-size: 20px;
                height: 60px;
                line-height: 32px;
                color: #666;
                padding: 0 10px;
                margin: 10px 0;
                text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
            .img{
                width: 100%;
            }
            .prize{
                font-size: 24px;
                color: #ea5413;
                padding: 0 10px 10px;
                .old{
                    font-size: 20px;
                    text-decoration: line-through;
                    color: #aaa
                }
                .r{
                    float: right;
                    font-size: 20px;
                    color: #aaa
                }
                .btn{
                    float: right;
                    padding: 2px 5px;
                    font-size: 18px;
                    border:1px solid #ff0000;
                    color: #ff0000;
                }
            }
        }
        
    }
}
</style>
