<template lang="html">
  <div id="detail">
    <h1 class="title">{{title}}</h1>
    <p class="desc" v-if="publishedDate|| classify|| readingQuantity">
      {{publishedDate}}·<i class="fas fa-folder" v-if="classify"></i> {{classify}}·阅读{{readingQuantity}}
    </p>
    <div class="content" v-html="htmlContent"></div>
    <div class="tags" v-if="tags">
      <i class="fas fa-tags"></i>
      <span class="tag-item" v-for="(tag, index) in tags.split(',')" :key="index">{{tag}}</span>
    </div>
    <reward></reward>
    <div id="comment-wrap">
      <!-- 来必力City版安装代码 -->
      <div id="lv-container" data-id="city" :data-uid="$config.dataUid">
      </div>
      <!-- City版安装代码已完成 -->
    </div>
  </div>
</template>

<script>
import Reward from '@/components/Reward'
import marked from 'marked'
import highlight from 'highlight.js'
export default {
  components: {
    Reward
  },
  computed: {
    htmlContent: function () {
      marked.setOptions({
        highlight: function (code) {
          return highlight.highlightAuto(code).value
        }
      })
      return this.content ? marked(this.content) : ''
    }
  },
  data () {
    return {
      title: '', // 标题
      readingQuantity: 0, // 阅读量
      content: '', // 内容
      tags: '', // 标签
      classify: '', // 分类
      publishedDate: '' // 发布日期
    }
  },
  created () {
    let key = this.$route.params.id
    if (this.$store.state.detail.articles[key]) {
      let article = this.$store.state.detail.articles[key]
      this.title = article.title
      this.readingQuantity = article.readingQuantity
      this.content = article.content
      this.tags = article.tags
      this.classify = article.classify
      this.publishedDate = article.publishedDate
    } else {
      this.$axiosGeting(`${this.$api.article}/${this.$route.params.id}`).then(res => {
        if (res.code === 200) {
          this.title = res.data.title
          this.readingQuantity = res.data.readingQuantity
          this.content = res.data.content
          this.tags = res.data.tags
          this.classify = res.data.classify
          this.publishedDate = res.data.publishedDate
          let data = {}
          data[this.$route.params.id] = res.data
          this.$store.commit('detail/setDetailData', data)
        } else {
          this.$vux.toast.text(res.message)
        }
      })
    }
  },
  mounted () {
    /* eslint-disable */
    (function(d, s) {
      if (!window.LivereTower) {
        var j, e = d.getElementsByTagName(s)[0]

        if (typeof LivereTower === 'function') { return }

        j = d.createElement(s)
        j.src = 'https://cdn-city.livere.com/js/embed.dist.js'
        j.async = true

        e.parentNode.insertBefore(j, e)
      } else {
        window.LivereTower.init()
      }
    })(document, 'script')
    /* eslint-enable */
  }
}
</script>

<style lang="less">
@import '../styles/var.less';
  #detail{
    max-width: 700px;
    .title{
      text-align: center;
      font-size: @fs-16;
    }
    .desc{
      font-size: @fs-12;
      line-height: 2;
      text-align: center;
      color: @lightBlack;
    }
    .content{
      word-break: break-all;
      font-size: 14px;
      li{display:list-item}
      head{display:none}
      table{
        display:table;
        width: 100%;
        margin-bottom: 20px;
        border: 1px solid #d9d9d9;
        border-collapse: collapse;
        border-left: none;
        word-break: normal;
      }
      tr{
        display:table-row;
        &:nth-of-type(2n){
          background-color: #f8f8f8;
        }
      }
      thead{
        display: table-header-group;
        vertical-align: middle;
        border-color: inherit;
      }
      tbody{display:table-row-group}
      tfoot{display:table-footer-group}
      col{display:table-column}
      colgroup{display:table-column-group}
      td,th{
        display:table-cell;
        padding: 8px;
        border: 1px solid #d9d9d9;
        line-height: 20px;
      }
      caption{display:table-caption}
      th{font-weight:bolder; text-align:center}
      caption{text-align:center}
      body{line-height:1.12}
      h1{font-size:2em; margin:.67em 0}
      h2{font-size:1.5em; margin:.75em 0}
      h3{font-size:1.17em; margin:.83em 0}
      h4,p,blockquote,ul,fieldset,form,ol,dl,dir,menu{margin:1.12em 0}
      blockquote{
        color: #666;
        border-left: 4px solid #ddd;
        padding-left: 20px;
        margin-left: 0;
        font-size: .875em;
        p{
          margin: 0;
          font-style: italic;
        }
      }
      img{
        max-width: 100%;
        width: auto;
        height: auto;
        vertical-align: middle;
        border: 0;
      }
      h5{font-size:.83em; margin:1.5em 0}
      h6{font-size:.75em; margin:1.67em 0}
      h1,h2,h3,h4,h5,h6,b,strong{font-weight:bolder}
      i,cite,em,var,address{font-style:italic}
      pre,code{
        color: #abb2bf;
        background: #292c33;
        overflow-x: scroll;
      }
      // pre,tt,code,kbd,samp{font-family:monospace}
      pre{white-space:pre; padding: 5px;}
      button,textarea,input,object,select{display:inline-block;}
      big{font-size:1.17em}
      small,sub,sup{font-size:.83em}
      sub{vertical-align:sub}
      sup{vertical-align:super}
      table{border-spacing:2px;}
      thead,tbody,tfoot{vertical-align:middle}
      td,th{vertical-align:inherit}
      s,strike,del{text-decoration:line-through}
      hr{
        margin: 0 0 20px;
        border: 0;
        border-top: 1px solid #d9d9d9!important;
      }
      ol,ul,dir,menu,dd{margin-left:40px}
      ol{
        li{list-style-type:decimal}
      }
      ul{
        li{list-style-type: disc}
      }
      ol ul,ul ol,ul ul,ol ol{margin-top:0; margin-bottom:0}
      u,ins{text-decoration:underline}
      :before,:after{white-space:pre-line}
      center{text-align:center}
      abbr,acronym{font-variant:small-caps; letter-spacing:0.1em}
      :link,:visited{text-decoration:underline}
      :focus{outline:thin dotted invert}
      @media print{
        h1{page-break-before:always}
        h1,h2,h3,
        h4,h5,h6{page-break-after:avoid}
        ul,ol,dl{page-break-before:avoid}
      }
    }
    .tags{
      margin: 14px 0;
      font-size: @fs-10;
      color: @lightBlack;
      .tag-item{
        padding: 0 2px;
        border: 1px solid @lightBlack;
        border-radius: 2px;
        box-sizing: border-box;
        &+.tag-item{
          margin-left: 5px;
        }
      }
    }
    #comment-wrap{
      margin: auto;
    }
  }
</style>
