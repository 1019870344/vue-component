<template>
  <el-menu
    mode="vertical"
    unique-opened
    theme="dark"
    router
    :collapse="false"
    :default-active="$route.path"
    background-color="#304156"
    text-color="#bfcbd9"
    active-text-color="#409EFF"
  >
    <sidebar-item></sidebar-item>
  </el-menu>
</template>

<script>
import SidebarItem from './SidebarItem'
export default {
  name: 'sidebar',
  components: { SidebarItem },
  data () {
    return {}
  },

  methods: {}
}
</script>

<style scoped></style>
