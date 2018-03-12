<template lang="html">
  <section id="m-pageheader">
    <blur :blur-amount=20 :url="$config.avatar" class="bg-avatar" v-if="$config.avatarBg"></blur>
    <div class="bg" v-else :style="{backgroundImage: `url(${$config.bgUrl || 'http://img3.iqilu.com/data/attachment/forum/201308/21/163544r6f4ftsysyldsiz6.jpg'})`}"></div>
    <vue-particles
      v-if="$config.particles"
      color="#dedede"
      shapeType="circle"
      :moveSpeed="2"
      class="particles">
     </vue-particles>
     <div class="avatar-wrap">
       <img class="avatar" :src="$config.avatar" :alt="$config.author" :style="{borderRadius: $config.avatarRadius}">
     </div>
     <h1 class="author hover-shadow" v-if="$config.author">{{$config.author}}</h1>
     <p class="description-wrap"><span class="description hover-shadow">{{$config.description}}</span></p>
     <div class="nav-wrap">
       <ul class="nav">
         <li><router-link to="/home" class="hover-shadow" replace>首页</router-link></li>
         <li><router-link to="/categories" class="hover-shadow" replace>分类</router-link></li>
         <li><router-link to="/tags" class="hover-shadow" replace>标签</router-link></li>
         <li><router-link to="/archives" class="hover-shadow" replace>归档</router-link></li>
         <li><router-link to="/contact" class="hover-shadow" replace>联系我</router-link></li>
       </ul>
     </div>
  </section>
</template>

<script>
import { Blur } from 'vux'
export default {
  components: {
    Blur
  }
}
</script>

<style lang="less">
  @import '../styles/var.less';
  #m-pageheader{
    position: relative;
    width: 100%;
    text-align: center;
    color: #fff;
    overflow: hidden;
    .bg{
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 100%;
      background: @bgColor url('http://img3.iqilu.com/data/attachment/forum/201308/21/163544r6f4ftsysyldsiz6.jpg') center no-repeat;
      background-size: cover;
      filter: brightness(60%);
      transform: scale(1);
      animation: scale 20s infinite linear;
    }
    .bg-avatar{
      position: absolute !important;
      z-index: -1;
      width: 100%;
      height: 100% !important;
    }
    @keyframes scale{
      100%{
        transform: scale(2);
      }
    }
    .particles{
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
    }
    .avatar-wrap{
      width: 50px;
      height: 50px;
      padding-top: 20px;
      margin: auto;
      box-sizing: content-box;
      .avatar{
        width: 100%;
        animation: light 5s infinite;
        box-shadow: 0 0 1px #fff;
      }
      @keyframes light{
        50%{
          box-shadow: 0 0 20px #fff;
        }
        100%{
          box-shadow: 0 0 1px #fff;
        }
      }
    }
    .author{
      display: inline-block;
      margin: 8px auto 4px;
      font-size: @fs-18;
      font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    }
    .description-wrap{
      text-align: center;
    }
    .description{
      font-size: @fs-12;
      transition: all .5s;
    }
    .nav-wrap{
      margin: 10px 0;
    }
    .nav{
      display: flex;
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
      justify-content: space-between;
      li{
        flex: 1;
        a{
          display: block;
          padding: 5px 0;
          font-size: @fs-12;
          color: @themeColor;
          text-shadow: 0 0 5px @themeColor;
          &.active{
            color: #fff;
            text-shadow: 0 0 5px #fff;
          }
        }
      }
    }
  }
</style>
