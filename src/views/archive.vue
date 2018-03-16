<template lang="html">
  <div id="archive">
    <div class="item" v-for="(item, index) in archives" :key="index">
      <!-- <p class="year">{{item.year}}</p> -->
      <divider class="year">{{item.year}}</divider>
      <ul>
        <li v-for="article in item.articles" :key="article.id">
          <router-link
            :to="{ path: '/detail/' + article._id }"
            class="title"
            replace>
            <span>
              {{article.title}}
            </span>
          </router-link>
          <p class="publishedDate">{{article.publishedDate}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Divider } from 'vux'
export default {
  components: {
    Divider
  },
  data () {
    return {
      archives: []
    }
  },
  created () {
    if (this.$store.state.archive.archives.length) {
      this.archives = this.$store.state.archive.archives
    } else {
      this.$axiosGeting(this.$api.pigeonhole).then(res => {
        if (res.code === 200) {
          this.archives = res.data
          this.$store.commit('archive/setArchiveData', this.archives)
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
#archive{
  .item{
    margin-bottom: 10px;
  }
  .year{
    font-size: @fs-12;
    font-style: italic;
    font-weight: bold;
    text-align: center;
  }
  li{
    padding: 10px 0;
  }
  .title{
    overflow : hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: @fs-12;
    color: @themeColor;
    span{
      position: relative;
      font-weight: 600;
      &::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: @themeColor;
        visibility: hidden;
        transform: scaleX(0);
        transition: all .4s;
      }
      &:hover::before{
        transform: scaleX(1);
        visibility: visible;
      }
    }
  }
  .publishedDate{
    margin-top: 5px;
    font-size: @fs-10;
  }
}
</style>
