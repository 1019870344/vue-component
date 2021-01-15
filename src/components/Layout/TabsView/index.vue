<template>
  <div id="tags-view-container" class="tags-view-container">
    <el-scrollbar ref="scrollContainer" :vertical="false" class="tags-view-wrapper" style="white-space: nowrap;">
      <router-link v-for="tag in visitedViews" ref="tag" :key="tag.path" :class="isActive(tag.path)?'active':''" :to="tag.path" tag="span"
        class="tags-view-item">
        {{ tag.name }}
        <!-- 关闭按钮 -->
        <span v-if="!isAffix(tag)" class="el-icon-close" @click.prevent.stop="closeViewTabs(tag)" />
      </router-link>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    // 获取当前的路由
    visitedViews() {
      return this.$store.state.app.visitedViews
    }
  },
  watch: {
    $route() {
      this.addViewTabs()
    }
  },
  created() {
    this.addViewTabs()
  },
  methods: {
    // 是否激活
    isActive(path) {
      return path === this.$route.path
    },
    // 是否可以关闭
    isAffix(tag) {
      return tag.name && tag.affix
    },
    // 关闭标签
    closeViewTabs(view, $event) {
      console.log($event)
      this.$store.dispatch('delVisitedViews', view)
      // 判断删掉的元素是否是当前正在浏览的页面
      if (this.isActive(view.path)) {
        // 切换活跃页面
        this.toLastView(this.visitedViews, view)
      }
      // $event.preventDefault() // 阻止元素的默认发生
    },
    generateRoute() {
      if (this.$route.matched[this.$route.matched.length - 1].name) {
        return this.$route.matched[this.$route.matched.length - 1]
      }
      this.$route.matched[0].path = '/'
      return this.$route.matched[0]
    },
    addViewTabs() {
      this.$store.dispatch('addVisitedViews', this.generateRoute())
    },
    toLastView(visitedViews, view) {
      // slice()方法截取某个范围的数组的元素
      // 比如slice(1,3)，数组从0开始，包前不包后截取两个数，负数从后往前数
      // 这里是截取最后一个元素
      // 截取最后一个元素，也就是关闭页面后当前活跃页
      const latestView = visitedViews.slice(-1)[0]
      // 如果存在最后一页
      if (latestView) {
        this.$router.push(latestView.path)
      } else {
        // 否则显示默认页
        if (view.name === '首页') {
          // 重定向首页
          this.$router.replace({ path: view.path })
        } else {
          this.$router.push('/')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tags-view-container {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  .tags-view-wrapper {
    .tags-view-item {
      display: inline-block;
      position: relative;
      cursor: pointer;
      height: 26px;
      line-height: 26px;
      border: 1px solid #d8dce5;
      color: #495060;
      background: #fff;
      padding: 0 8px;
      font-size: 12px;
      margin-left: 5px;
      margin-top: 4px;
      &:first-of-type {
        margin-left: 15px;
      }
      &:last-of-type {
        margin-right: 15px;
      }
      &.active {
        background-color: #42b983;
        color: #fff;
        border-color: #42b983;
        &::before {
          content: '';
          background: #fff;
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: relative;
          margin-right: 2px;
        }
      }
    }
  }
  .contextmenu {
    margin: 0;
    background: #fff;
    z-index: 3000;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
    li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;
      &:hover {
        background: #eee;
      }
    }
  }
}
</style>

<style lang="scss">
//reset element css of el-icon-close
.tags-view-wrapper {
  .tags-view-item {
    .el-icon-close {
      width: 16px;
      height: 16px;
      vertical-align: 2px;
      border-radius: 50%;
      text-align: center;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      transform-origin: 100% 50%;
      &:before {
        transform: scale(0.6);
        display: inline-block;
        vertical-align: -3px;
      }
      &:hover {
        background-color: #b4bccc;
        color: #fff;
      }
    }
  }
}
</style>
