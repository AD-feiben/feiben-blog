<template lang="html">
  <footer id="m-pagebottom">
    <p class="m-bottom-top">
      <span v-if="$config.author">{{$config.author}}</span>
      <x-icon v-if="$config.author && $config.since" type="ios-heart" size="14"></x-icon>
      <span v-if="$config.since">
        {{$config.since}}
        <span v-if="$config.since !== currentYear">~ {{currentYear}}</span>
      </span>
    </p>
    <p class="m-copyright">Powered By <a href="https://github.com/AD-feiben">Feiben</a></p>
    <div class="m-links" v-if="$config.friendLinks.length">
      <span>友情链接：</span>
      <span v-for="(item, index) in $config.friendLinks" class="m-link hover-shadow">
        <a :href="item.link" target="_blank">{{item.name}}</a>
      </span>
    </div>
    <p class="record" v-if="$config.record">{{$config.record}}</p>
  </footer>
</template>

<script>
export default {
  computed: {
    currentYear () {
      return new Date().getFullYear().toString()
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../styles/var.less';
  #m-pagebottom{
    padding: 20px;
    text-align: center;
    color: @info;
    background: @bgColor;
    .vux-x-icon {
      fill: @info;
      vertical-align: middle;
    }
    .m-bottom-top{
      font-size: @fs-12;
    }
    .m-copyright{
      margin: 5px 0;
      font-size: @fs-10;
    }
    .m-links{
      font-size: @fs-10;
    }
    .m-link{
      margin-right: 5px;
      a{
        display: inline-block;
        color: @info;
      }
    }
    .record{
      margin-top: 5px;
      font-size: @fs-10;
    }
  }
</style>
