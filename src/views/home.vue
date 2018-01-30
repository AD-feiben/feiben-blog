<template lang="html">
  <div id="home">
    <writing></writing>
    <pagination
      class="pagination"
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
  methods: {
    pageChange (val) {
      console.log(val)
    }
  }
}
</script>

<style lang="less">
  #home{
    .pagination{
      margin-bottom: 20px;
    }
  }
</style>
