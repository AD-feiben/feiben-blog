<template lang="html">
  <div id="detail">
    <div id="comment-wrap">
      <!-- 来必力City版安装代码 -->
      <div id="lv-container" data-id="city" :data-uid="$config.dataUid">
      </div>
      <!-- City版安装代码已完成 -->
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    /* eslint-disable */
    (function(d, s) {
      var j, e = d.getElementsByTagName(s)[0]

      if (typeof LivereTower === 'function') { return }

      j = d.createElement(s)
      j.src = 'https://cdn-city.livere.com/js/embed.dist.js'
      j.async = true

      e.parentNode.insertBefore(j, e)
    })(document, 'script')
    /* eslint-enable */
  }
}
</script>

<style lang="less">
  #detail{
    #comment-wrap{
      max-width: 600px;
      margin: auto;
    }
  }
</style>
