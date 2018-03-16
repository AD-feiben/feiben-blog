<template lang="html">
  <div id="tag">
    <div class="result" v-show="selectTag">
      <p class="selectTag">
        <span>
          {{selectTag}}
          <i class="fa fa-times" title="取消选择" @click="$router.replace('/tags')"></i>
        </span>
      </p>
      <writing :list="list"></writing>
      <pagination
        class="pagination"
        :page="page"
        :current="current"
        :total="total"
        @on-change="pageChange"
      ></pagination>
    </div>
    <div class="tags" v-show="!selectTag">
      <p>目前共计{{tags.length}}个标签</p>
      <ul>
        <i class="fas fa-tags"></i>
        <li
          v-for="(item, index) in tags"
          :key="index" @click="$router.replace({path:'/tags', query:{tag: item}})"
          :title="item">{{item}}</li>
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
      page: 1,
      current: 1,
      total: 1,
      tags: [],
      selectTag: '',
      list: []
    }
  },
  watch: {
    $route: function (newVal) {
      this.selectTag = newVal.query.tag || ''
      this.selectTag && this.getArticle()
    }
  },
  methods: {
    pageChange (val) {
      this.page = val
      this.getArticle()
    },
    getArticle () {
      let req = {
        page: this.page,
        tag: this.selectTag
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
    if (this.$store.state.tag.tags.length) {
      this.tags = this.$store.state.tag.tags
    } else {
      this.$axiosGeting(this.$api.tags).then(res => {
        if (res.code === 200) {
          this.tags = res.data.tags
          this.$store.commit('tag/setTagData', this.tags)
        } else {
          this.$vux.toast.text(res.message)
        }
      })
    }
  }
}
</script>

<style lang="less">
@import "../styles/var.less";
  #tag{
    .result{
      .selectTag{
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
    .tags{
      p{
        margin-bottom: 10px;
        font-size: @fs-12;
        text-align: center;
        color: @themeColor;
      }
      ul{
        display: flex;
        font-size: @fs-10;
        color: @themeColor;
        .fa-tags{
          margin-right: 10px;
          line-height: 1.7;
        }
        li{
          padding: 0 2px;
          margin-right: 10px;
          margin-bottom: 10px;
          border-radius: 2px;
          border: 1px solid @themeColor;
          box-sizing: border-box;
          cursor: pointer;
          &:hover{
            color: #fff;
            background-color: @themeColor;
          }
        }
      }
    }
  }
</style>
