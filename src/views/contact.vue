<template lang="html">
  <div id="contact">
    <ul>
      <li class="social-wechat" @click="showDialog = true" v-if="$config.social.wechat">
        <i class="fab fa-weixin" title="微信/微信公众号"></i>
        <p>WeChat</p>
      </li>

      <li v-if="$config.social.github">
        <a :href="$config.social.github" target="_blank">
          <i class="fab fa-github" title="GitHub"></i>
          <p>GitHub</p>
        </a>
      </li>

      <li v-if="$config.social.weibo">
        <a :href="$config.social.weibo" target="_blank">
          <i class="fab fa-weibo" title="微博"></i>
          <p>Weibo</p>
        </a>
      </li>

      <li v-if="$config.social.jianshu">
        <a :href="$config.social.jianshu" target="_blank">
          <i class="fas fa-book" title="简书"></i>
          <p>简书</p>
        </a>
      </li>
    </ul>
    <p class="introduce">欢迎使用以上方式与我联系</p>
    <div v-transfer-dom>
      <x-dialog :show.sync="showDialog" class="dialog-demo">
        <div class="img-box">
          <img :src="$config.social.wechat" style="max-width:100%">
        </div>
        <div @click="showDialog=false">
          <span class="vux-close"></span>
        </div>
      </x-dialog>
    </div>
  </div>

</template>

<script>
import { XDialog, TransferDomDirective as TransferDom } from 'vux'
export default {
  directives: {
    TransferDom
  },
  components: {
    XDialog
  },
  data () {
    return {
      showDialog: false
    }
  }
}
</script>

<style lang="less">
  @import '~vux/src/styles/close';
  @import '../styles/var.less';
  #contact{
    text-align: center;
    ul{
      display: flex;
      justify-content: space-around;
      li{
        cursor: pointer;
      }
    }
    a{
      color: #000;
    }
    .fab,.fas{
      font-size: 20px;
    }
    .introduce{
      margin-top: 20px;
      font-size: @fs-10;
    }
    .weui-dialog{
      border-radius: 8px;
      padding-bottom: 8px;
    }
    .dialog-title {
      line-height: 30px;
      color: #666;
    }
    .img-box {
      height: 350px;
      overflow: hidden;
    }
    .vux-close {
      margin-top: 8px;
      margin-bottom: 8px;
    }
  }
</style>
