<template lang="html">
  <div id="reward" v-if="$config.wechatReceive || $config.aliReceive">
    <p class="reward-text">{{$config.reward}}</p>
    <div class="show-reward" v-show="!showReward" @click="showReward = true">赞赏支持</div>
    <div v-show="showReward">
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      showReward: false, // 显示赞赏二维码
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
    max-width: 400px;
    margin: 0 auto;
    color: @themeColor;
    font-size: @fs-12;
    .reward-text{
      margin-bottom: 10px;
    }
    .show-reward{
      width: 80px;
      margin: 0 auto;
      border-radius: 13px;
      line-height: 26px;
      text-align: center;
      background-color: @themeColor;
      color: #fff;
      cursor: pointer;
    }
    .recive-switch{
      display: flex;
      justify-content: space-around;
      margin: 10px auto 0;
      width: 160px;
      text-align: center;
      cursor: pointer;
      .switch-item{
        flex: 1;
        line-height: 20px;
        border: 1px solid @themeColor;
        &:first-of-type{
          border-radius: 20px 0 0 20px;
        }
        &:last-of-type{
          border-radius: 0 20px 20px 0;
        }
        &.active{
          color: #fff;
          background: @themeColor;
        }
      }
    }
    .recive-img-wrapper{
      max-width: 120px;
      margin: auto;
    }
    .switch-item, .recive-img-wrapper img{
      transition: all .2s;
    }
  }
</style>
