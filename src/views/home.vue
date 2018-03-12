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
      total: 0,
      current: 1,
      page: 1,
      list: []
    }
  },
  methods: {
    pageChange (val) {
      this.page = val
      this.getArticle()
    },
    getArticle () {
      let req = {
        page: this.page
      }
      this.$axiosGeting(this.$api.article, req).then(res => {
        if (res.code === 200) {
          this.list = res.data.articles
          this.total = res.data.total
        } else {
          this.$vux.toast.text(res.message)
        }
      })
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
