<template>
  <div
    :class="classObj"
    class="app-wrapper"
  >
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
        <navbar />
        <TabsView></TabsView>
        <appMain></appMain>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import sidebar from '@/components/Layout/Sidebar/index.vue'
import navbar from '@/components/Layout/Navbar/index.vue'
import appMain from '@/components/Layout/AppMain/index.vue'
import TabsView from '@/components/Layout/TabsView/index.vue'

export default {
  name: 'layout',
  components: {
    sidebar,
    navbar,
    appMain,
    TabsView
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['sidebar']),
    fixedHeader () {
      return this.sidebar.opened
    },
    classObj () {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.opened
      }
    }
  },
  // 方法集合
  methods: {}
}
</script>

<style lang="scss" scoped>
@import '~@/style/mixin.scss';
@import '~@/style/variables.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}
</style>
