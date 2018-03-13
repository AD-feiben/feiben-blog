<template lang="html">
  <div id="home">
    <writing :list="list"></writing>
    <pagination
      class="pagination"
      :total="total"
      :current="current"
      @on-change="pageChange">
    </pagination>
  </div>
</template>

<script>
import Writing from '@/components/Writing'
import Pagination from '@/components/Pagination'
export default {
  components: {
    Writing,
    Pagination
  },
  data () {
    return {
      total: this.$store.state.home.total,
      current: this.$store.state.home.current,
      page: this.$store.state.home.current,
      list: []
    }
  },
  methods: {
    pageChange (val) {
      this.page = val
      this.getArticle()
    },
    getArticle () {
      if (this.$store.state.home.articles[this.page]) {
        // store 有数据的话直接取store的数据
        this.list = this.$store.state.home.articles[this.page]
        this.total = this.$store.state.home.total
      } else {
        // store 没有数据再请求接口
        let req = {
          page: this.page
        }
        this.$axiosGeting(this.$api.article, req).then(res => {
          if (res.code === 200) {
            this.list = res.data.articles
            this.total = res.data.total
            let data = {
              articles: {},
              total: this.total,
              current: this.page
            }
            data.articles[this.page] = this.list
            this.$store.commit('home/setHomeData', data)
          } else {
            this.$vux.toast.text(res.message)
          }
        })
      }
    }
  },
  created () {
    this.getArticle()
  }
}
</script>

<style lang="less">
  #home{
    .pagination{
      margin-top: 20px;
    }
  }
</style>
