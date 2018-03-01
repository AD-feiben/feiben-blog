<template lang="html">
  <div id="reward" v-if="$config.wechatReceive || $config.aliReceive">
    <p class="reward-text">{{$config.reward}}</p>
    <ul class="recive-switch">
      <li
        class="switch-item"
        :class="{active: isWechatRecive}"
        v-if="$config.wechatReceive"
        @click="isWechatRecive = true">微信</li>
      <li
        class="switch-item"
        :class="{active: !isWechatRecive}"
        v-if="$config.aliReceive"
        @click="isWechatRecive = false">支付宝</li>
    </ul>
    <div class="recive-img-wrapper">
      <img
        :src="$config.wechatReceive"
        v-if="$config.wechatReceive"
        v-show="isWechatRecive">
      <img
        :src="$config.aliReceive"
        v-if="$config.aliReceive"
        v-show="!isWechatRecive">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isWechatRecive: false // 微信赞赏
    }
  },
  created () {
    this.isWechatRecive = !!this.$config.wechatReceive
  }
}
</script>

<style lang="less">
  @import '../styles/var.less';
  #reward{
    padding: 10px 20px 0;
    color: @themeColor;
    .recive-switch{
      display: flex;
      justify-content: space-around;
      margin: 10px auto;
      width: 200px;
      line-height: 25px;
      border-radius: 25px;
      text-align: center;
      border: 1px solid @themeColor;
      overflow: hidden;
      .switch-item{
        flex: 1;
        &.active{
          color: #fff;
          background: @themeColor;
        }
      }
    }
    .recive-img-wrapper{
      max-width: 160px;
      margin: auto;
    }
    .switch-item, .recive-img-wrapper img{
      transition: all .2s;
    }
  }
</style>
