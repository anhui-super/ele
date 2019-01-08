<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  data(){
    return{
      transitionName: 'slide-right'  // 默认动态路由变化为slide-right
    }
  },
  name: 'App',
  watch: {
　　　 '$route' (to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        const toPath = to.path;
        const fromPath = from.path;
        let toPath_flag = 0;
        let fromPath_flag = 0;
        if(toPath == '/index' || toPath == '/invest' || toPath == '/account' || toPath == '/mine'){
          toPath_flag = 1
        }
        if(fromPath == '/index' || fromPath == '/invest' || fromPath == '/account' || fromPath == '/mine'){
          fromPath_flag = 1
        }
        if(navigator.userAgent.match(/OS [0-9]_[0-2]/i)){
          // ios 版本小于9.2以下
          this.transitionName = 'fade'
        }
        else if(toPath_flag * fromPath_flag){
          this.transitionName = 'fade'
        }
        else{
          // console.log(toDepth, fromDepth)
          this.transitionName = toDepth < fromDepth ? 'slide-left' : 'slide-right'
        }
      }
　}
}
</script>
<style>
#app{
  width: 100%;
  min-height: 100%;
  max-width: 800px;
  margin: 0 auto;
  background: #efefef;
  position: relative;
}
*{
  margin: 0;
  padding: 0;

}
h1,h2,h3,h4,h5,i,b,em{
  font-weight: normal;
  font-style: normal;
  margin:0;
}
h1, h2, h3, h4, h5, h6 {
  font-size: 100%;
  font-weight: 400;
  line-height: 2;
}
html *{  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);  }
body,html{
  height: 100%;
  font-size: 24px;
  -webkit-text-size-adjust: 100%;
  -webkit-overflow-scrolling: touch;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  user-select: none;
}
.global-layout {
  	width: 100%;
  	margin: 0 auto;
  	min-width: 320px;
}
a{
  	color: inherit;
  	text-decoration: none;
}
a:active {
  	opacity: .9;
  	color:inherit;
}
ul,ol,li {
  	list-style: none;
}
::-webkit-input-placeholder {
  	color:#999;
    font-size:.14rem;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
    margin: 0;
}
input {
  	height: 1.75em;
  	line-height: normal;
  	font-size: 1em;
  	font: -webkit-small-control;
  	letter-spacing: normal;
  	word-spacing: normal;
  	text-transform: none;
  	text-indent: 0;
  	text-shadow: none;
    outline: none
}

i,em,b{
  	font-style: normal;
  	font-weight: normal;
}
.clear:after{
  content: '';
  display: block;
  clear: both;
}
.listTips{
    line-height: 80px;
    padding-bottom: 10px;
    text-align: center;
    font-size: 22px;
    color: #aaa;
  }


  .page{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    /* height: calc(100% -100px); */
    box-sizing: border-box;
    z-index: 1;
    /* background: #fff; */
    transform: translate3d(0, 0, 0);
    -webkit-overflow-scrolling: touch;
}
  .content{
    /* margin-bottom: 100px; */
    position: absolute;
    top: 0;
    /* right: 0; */
    /* bottom: 0; */
    left: 0;
    z-index: 2;
    overflow: auto;
    transform: translate3d(0, 0, 0);
    -webkit-overflow-scrolling: touch}
  .bar-nav{
    height: .5rem;
    /* line-height: .5rem; */
    text-align: center;
    font-weight: bold;
    border-bottom: 1px solid #cfcfcf}
  .bar-nav .mintui-back:before{
    color: #c8a062;
    font-size: 18px}
 
  .mint-tabbar > .mint-tab-item.is-selected{
    background-color: #fff;
    color: #333
    }
.fade-enter-active, .fade-leave-active{
    transition: all .2s ease}
  .fade-enter, .fade-leave-active{
    opacity: 0}
  .slide-right-enter-active,.slide-left-enter-active,.slide-right-leave-active,.slide-left-leave-active
    {transition: all .35s linear}
  .slide-right-enter, .slide-left-leave-active
   { transform: translate3d(100%, 0, 0);
    opacity: 0}
  .slide-left-enter, .slide-right-leave-active
   { transform: translate3d(-100%, 0, 0)}

  /*加载更多组件的样式*/
  .page-loadmore-wrapper
    {overflow: scroll}

  .mint-spinner
    {display: inline-block;
    vertical-align: middle}

  .mint-loadmore-bottom span
    {display: inline-block;
    transition: .2s linear;
    vertical-align: middle}

  .mint-loadmore-bottom span.rotate
    {transform: rotate(180deg)}
</style>
