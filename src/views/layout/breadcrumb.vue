<template>
  <!-- 面包屑 -->
  <!-- separator:分隔符 -->
  <el-breadcrumb class="app-levelbar" separator="/">
    <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
      <!-- 这里显示当前页面的面包屑名称 -->
      <span v-if="item.redirect === 'noredirect' || index == levelList.length - 1" class="no-redirect">{{ item.name }}</span>
      <!-- 显示前面的页面的可跳转面包屑名称 -->
      <router-link v-else :to="item.redirect || item.path">{{
        item.name
      }}</router-link>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  created () {
    this.getBreadcrumb()
  },
  data () {
    return {
      levelList: null
    }
  },
  methods: {
    getBreadcrumb () {
      // this.$route.matched包含当前路由的所有嵌套路径片段的路由记录
      // filter过滤器把符合条件的过滤出来，这个地方是把数组的item.name === true过滤出来
      let matched = this.$route.matched.filter((item) => item.name)
      // 通常数组[0]是这个路由的根节点的name
      const first = matched[0]
      // 如果最初的不是首页
      if (first && (first.name !== '首页' || first.path !== '')) {
        // 使用concat函数连接前后两个数组，把首页添加进去
        matched = [{ name: '首页', path: '/' }].concat(matched)
      }
      this.levelList = matched
    }
  },
  watch: {
    // 监视$route的变化，变化就触发方法，这样面包屑的内容也会一直变化
    $route () {
      this.getBreadcrumb()
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.app-levelbar.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 10px;
  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
