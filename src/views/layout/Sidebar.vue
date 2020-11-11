<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      mode="vertical"
      :unique-opened="false"
      :collapse="isCollapse"
      :background-color="variables.menuBg"
      :default-active="$route.path"
      :text-color="variables.menuText"
      :active-text-color="variables.menuActiveText"
      :collapse-transition="false"
    >
      <sidebar-item></sidebar-item>
    </el-menu>
  </el-scrollbar>

</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import variables from '@/style/variables.scss'
export default {
  name: 'sidebar',
  components: { SidebarItem },
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['sidebar']),
    isCollapse () {
      return !this.sidebar.opened
    },
    // 获取variables.scss文件中定义的数据
    variables () {
      return variables
    }
  },
  methods: {},
  created () {
  }
}
</script>

<style scoped></style>
