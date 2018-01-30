<template lang="html">
  <ul id="m-pagination">
    <li @click="changePage(1, -3)" :class="{diabled: leftDisabled}">&lt;&lt;</li>
    <li
      v-for="i in pageNum"
      :key="i"
      @click="changePage(0, i)"
      :class="{active: i === currentIndex}"
      v-if="i > currentIndex - 3 && i < currentIndex + 3">{{i}}</li>
    <li @click="changePage(1, 3)" :class="{diabled: rightDisabled}">&gt;&gt;</li>
  </ul>
</template>

<script>
export default {
  computed: {
    leftDisabled () {
      return this.currentIndex === 1
    },
    rightDisabled () {
      return this.currentIndex === this.pageNum
    },
    pageNum () {
      return Math.ceil(this.totalNumber / this.pageSize)
    }
  },
  props: {
    total: {
      type: Number,
      default: 1
    },
    current: {
      type: Number,
      default: 1
    },
    size: {
      type: Number,
      default: 10
    }
  },
  data () {
    return {
      currentIndex: this.current,
      totalNumber: this.total,
      pageSize: this.size
    }
  },
  methods: {
    changePage (type, page) {
      let oldVal = this.currentIndex
      if (type) {
        let temp = this.currentIndex + page
        if (temp < 1) {
          this.currentIndex = 1
        } else if (temp > this.pageNum) {
          this.currentIndex = this.pageNum
        } else {
          this.currentIndex = temp
        }
      } else {
        this.currentIndex = page
      }
      if (oldVal !== this.currentIndex) {
        this.$emit('on-change', this.currentIndex)
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../styles/var.less';
  #m-pagination{
    display: flex;
    justify-content: center;
    font-size: @fs-12;
    color: @lightBlack;
    li{
      width: 20px;
      height: 20px;
      text-align: center;
      line-height: 20px;
      cursor: pointer;
      &.active{
        color: @themeColor;
        text-shadow: 0 0 5px @themeColor;
      }
    }
    .diabled{
      color: @lightBlack-disabled;
      cursor: not-allowed;
    }
  }
</style>
