<template lang="html">
  <ul id="m-writing">
    <li v-for="item in list" :key="item.id" class="m-writing-item">
      <router-link :to="{path: `detail/${item._id}`}" replace>
        <div class="m-writing-text" :class="{noImg: !item.cover}">
          <h3 class="m-writing-title" :title="item.title">
            <span>{{item.title}}</span>
          </h3>
          <p class="m-writing-publishTime">
            <span>{{item.publishedDate}}</span>
            <span class="readingQuantity" v-if="item.readingQuantity">
              <i class="fas fa-eye"></i>
              {{item.readingQuantity}}
            </span>
          </p>
          <p class="m-writing-abstract">{{item.desc}}</p>
          <span class="m-writing-tags" v-if="item.tags">
            <i class="fas fa-tags"></i>
            <span class="tag-item" v-for="(tag, index) in item.tags.split(',')" :key="index">{{tag}}</span>
          </span>
          <span
            class="m-writing-classify"
            v-if="item.classify"
            <i class="fas fa-folder"></i>
            {{item.classify}}
          </span>
        </div>
        <img v-if="item.cover" :src="item.cover" class="m-cover-img">
        <divider class="m-writing-divider">{{$config.divider}}</divider>
      </router-link>
    </li>
  </ul>
</template>

<script>
import { Divider } from 'vux'
export default {
  components: {
    Divider
  },
  props: {
    list: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="less">
  @import '../styles/var.less';
  #m-writing{
    font-size: @fs-12;
    .m-writing-text{
      padding-right: 110px;
      min-height: 100px;
      color: @themeColor;
      &.noImg{
        padding-right: 0;
        min-height: 0;
      }
    }
    .m-writing-title{
      overflow : hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: @fs-14;
      color: @themeColor;
      span{
        position: relative;
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
    .m-writing-publishTime{
      line-height: 2;
      color: @lightBlack;
      font-size: @fs-10;
      .readingQuantity{
        margin-left: 10px;
      }
    }
    .m-writing-abstract{
      overflow : hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      margin-bottom: 5px;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      font-size: @fs-12;
      color: @abstractColor;
    }
    .m-writing-classify, .m-writing-tags{
      font-size: @fs-10;
      color: @themeColor;
    }
    .m-writing-tags{
      margin-right: 10px;
      .tag-item{
        padding: 0 2px;
        border: 1px solid @themeColor;
        border-radius: 2px;
        box-sizing: border-box;
        &+.tag-item{
          margin-left: 5px;
        }
      }
    }
    .m-cover-img{
      position: absolute;
      top: 0;
      right: 0;
      width: 100px;
      height: 100px;
      flex-shrink: 0;
      border-radius: 4px;
      object-fit: cover;
    }
    .m-writing-item{
      position: relative;
      &:nth-last-of-type(1) .m-writing-divider{
        display: none;
      }
    }
  }
</style>
