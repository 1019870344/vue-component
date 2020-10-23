<template>
  <div class="app-wrapper" >
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <navbar></navbar>
      <appMain></appMain>
    </div>
  </div>
</template>

<script>
import { sidebar, navbar, appMain } from '../layout/'

export default {
  name: 'layout',
  components: {
    sidebar,
    navbar,
    appMain
  },
  data () {
    return {}
  },
  // 方法集合
  methods: {}
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/style/mixin";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  &.hideSidebar {
    .sidebar-container {
      width: 36px;
      overflow: inherit;
    }
    .main-container {
      margin-left: 36px;
    }
  }
  .sidebar-container {
    transition: width 0.28s ease-out;
    width: 210px;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .main-container {
    min-height: 100%;
    transition: margin-left 0.28s ease-out;
    margin-left: 210px;
  }
}
</style>
