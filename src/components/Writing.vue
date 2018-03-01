<template lang="html">
  <ul id="m-writing">
    <li v-for="item in list" :key="item.id" class="m-writing-item">
      <router-link :to="{path: `detail/${item.id}`}">
        <div class="m-writing-text" :class="{noImg: !item.coverImg}">
          <h3 class="m-writing-title" :title="item.title">
            <span>{{item.title}}</span>
          </h3>
          <p class="m-writing-publishTime">
            <span>{{item.publishTime}}</span>
          </p>
          <p class="m-writing-abstract">{{item.abstract}}</p>
        </div>
        <img v-if="item.coverImg" :src="item.coverImg" class="m-cover-img">
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
  data () {
    return {
      list: [
        {
          id: 1,
          title: '标题',
          abstract: '摘要',
          coverImg: '',
          publishTime: '2018-1-29 14:00:00'
        },
        {
          id: 2,
          title: '标题',
          abstract: '摘要',
          coverImg: 'http://szzjimg-1253796326.picgz.myqcloud.com/szajimgs/1517206877028.jpg',
          publishTime: '2018-1-29 14:00:00'
        }
      ]
    }
  }
}
</script>

<style lang="less">
  @import '../styles/var.less';
  #m-writing{
    padding: 20px;
    max-width: 700px;
    margin: auto;
    font-size: @fs-12;
    .m-writing-text{
      padding-right: 110px;
      min-height: 100px;
      color: @themeColor;
      &.noImg{
        padding-right: 0;
      }
    }
    .m-writing-title{
      overflow : hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: @fs-16;
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
    }
    .m-writing-abstract{
      overflow : hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      font-size: @fs-14;
      color: @abstractColor;
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
