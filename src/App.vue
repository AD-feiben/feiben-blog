<template>
  <div id="app">
    <page-header></page-header>
    <router-view class="content-container"></router-view>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
export default {
  name: 'app',
  components: {
    PageHeader
  }
}
</script>

<style lang="less">
  #app{
    .content-container{
      width: 10rem;
      height: 500px;
      margin: auto;
      background: orange;
    }
    @media screen and (min-width: 540px) {
      .content-container{
        width: 100%;
        max-width: 900px;
      }
    }
  }
</style>
