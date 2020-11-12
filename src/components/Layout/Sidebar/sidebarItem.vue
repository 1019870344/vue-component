<template>
  <div v-if="!item.hidden">
    <template v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow">
      <router-link :to="resolvePath(onlyOneChild.path)">
        <el-menu-item
          :index="resolvePath(onlyOneChild.path)"
          :class="{'submenu-title-noDropdown':!isNest}"
        >
          <svg-icon :icon-class="onlyOneChild.meta.icon" />
          <span>{{ onlyOneChild.meta.title }}</span>
        </el-menu-item>
      </router-link>
    </template>
    <el-submenu
      v-else
      ref="subMenu"
      :index="resolvePath(item.path)"
      popper-append-to-body
    >
      <template slot="title">
        <!-- 这里可以添加icon -->
        <svg-icon :icon-class="item.meta.icon" />
        <span>{{ item.meta.title }}</span>
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'
export default {
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
  data () {
    this.onlyOneChild = null
    return {
      status: 0
    }
  },
  methods: {
    hasOneShowingChild (children = [], parent) {
      // filter把item的children不是hidden的过滤出来
      const showingChildren = children.filter(item => {
        // 如果item的children是hidden则结束
        if (item.hidden) {
          return false
        } else {
          // 否则把item的children赋值给onlyOneChild
          this.onlyOneChild = item
          return true
        }
      })
      // 如果item的children只有一个
      if (showingChildren.length === 1) {
        return true
      }
      // 如果item的children为0
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: '', noShowingChildren: true }
        return true
      }
      // 如果有多个children
      return false
    },
    // path.resolve() 方法会把一个路径或路径片段的序列解析为一个绝对路径。
    // 给定的路径的序列是从右往左被处理的，后面每个 path 被依次解析，直到构造完成一个绝对路径。
    // 例如，给定的路径片段的序列为：/foo、/bar、baz，则调用 path.resolve('/foo', '/bar', 'baz') 会返回 /bar/baz。
    resolvePath (routePath) {
      // 判断路径是否以http/mail/tel开头
      if (/^(https?:|mailto:|tel:)/.test(routePath)) {
        return routePath
      }
      if (/^(https?:|mailto:|tel:)/.test(this.basePath)) {
        return this.basePath
      }
      // 如果不是的话就拼接路径
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped></style>
