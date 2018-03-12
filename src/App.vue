<template>
  <div id="app">
    <page-header></page-header>
    <router-view class="content-container"></router-view>
    <page-bottom></page-bottom>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import PageBottom from '@/components/PageBottom'
export default {
  name: 'app',
  components: {
    PageHeader,
    PageBottom
  }
}
</script>

<style lang="less">
  #app{
    .content-container{
      width: 10rem;
      margin: auto;
      padding: 20px;
      box-sizing: border-box;
    }
    @media screen and (min-width: 540px) {
      .content-container{
        width: 100%;
        max-width: 900px;
      }
    }
  }
</style>
