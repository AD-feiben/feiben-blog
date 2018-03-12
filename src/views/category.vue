<template lang="html">
  <div id="category">
    <div class="result" v-show="selectCategory">
      <p class="selectCategory">
        <span>
          {{selectCategory}}
          <i class="fa fa-times" title="取消选择" @click="$router.replace('/categories')"></i>
        </span>
      </p>
      <writing :list="list"></writing>
      <pagination
        class="pagination"
        :total="total"
        :current="current"
        @on-change="pageChange"
      ></pagination>
    </div>
    <div class="categories" v-show="!selectCategory">
      <p>目前共计{{categories.length}}个分类</p>
      <ul>
        <li
          v-for="(item, index) in categories"
          :key="index"
          @click="$router.replace({path:'/categories', query:{category: item}})">
          <i class="fas fa-folder"></i>
          {{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import Writing from '@/components/Writing'
export default {
  components: {
    Pagination,
    Writing
  },
  data () {
    return {
      total: 1,
      current: 1,
      page: 1,
      categories: [],
      selectCategory: '',
      list: []
    }
  },
  watch: {
    $route: function (newVal) {
      this.selectCategory = newVal.query.category || ''
      this.selectCategory && this.getArticle()
    }
  },
  methods: {
    pageChange (val) {
      this.page = val
      this.getArticle()
    },
    getArticle () {
      let req = {
        classify: this.selectCategory, // 选择的分类
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
    this.$axiosGeting(this.$api.classify).then(res => {
      if (res.code === 200) {
        this.categories = res.data.classify
      } else {
        this.$vux.toast.text(res.message)
      }
    })
  }
}
</script>

<style lang="less">
@import '../styles/var.less';
  #category{
    .result{
      .selectCategory{
        text-align: center;
        font-size: @fs-14;
        font-weight: bold;
        span{
          position: relative;
          .fa-times{
            display: none;
            position: absolute;
            top: 0;
            right: -10px;
            font-size: @fs-10;
            cursor: pointer;
          }
        }
        &:hover .fa-times{
          display: block;
        }
      }
    }
    .categories{
      p{
        font-size: @fs-12;
        text-align: center;
        color: @themeColor;
      }
      ul{
        li{
          font-size: @fs-12;
          line-height: 20px;
          color: @themeColor;
          cursor: pointer;
        }
      }
    }
    .pagination{
      margin-top: 20px;
    }
  }
</style>
