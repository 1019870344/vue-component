<template>
  <div class="tabs-view-container">
    <router-link
      class="tabs-view"
      v-for="tag in Array.from(visitedViews)"
      :to="tag.path"
      :key="tag.path"
    >
      <el-tag
        :closable="true"
        :class="isActive(tag.path) ? 'active' : ''"
        @close.prevent="closeViewTabs(tag, $event)"
      >
        {{ tag.name }}</el-tag>
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  created () {
    this.addViewTabs()
  },
  computed: {
    // 获取当前的路由
    visitedViews () {
      return this.$store.state.app.visitedViews.slice(-6)
    }
  },
  methods: {
    closeViewTabs (view, $event) {
      console.log($event)
      this.$store.dispatch('delVisitedViews', view)
      // 判断删掉的元素是否是当前正在浏览的页面
      if (this.isActive(view.path)) {
        // 切换活跃页面
        this.toLastView(this.visitedViews, view)
      }
      // $event.preventDefault() // 阻止元素的默认发生
    },
    generateRoute () {
      if (this.$route.matched[this.$route.matched.length - 1].name) {
        return this.$route.matched[this.$route.matched.length - 1]
      }
      this.$route.matched[0].path = '/'
      return this.$route.matched[0]
    },
    addViewTabs () {
      this.$store.dispatch('addVisitedViews', this.generateRoute())
    },
    isActive (path) {
      return path === this.$route.path
    },
    toLastView (visitedViews, view) {
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
  },
  watch: {
    $route () {
      this.addViewTabs()
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.tabs-view-container {
  display: inline-block;
  vertical-align: top;
  margin-left: 10px;
  .tabs-view {
    margin-left: 10px;
  }
}
.active {
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
</style>
