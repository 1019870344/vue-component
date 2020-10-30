<template>
  <el-menu mode="vertical" unique-opened :collapse="isCollapse" background-color="#304156" :default-active="$route.path" text-color="#bfcbd9"
    active-text-color="#409EFF">
    <sidebar-item></sidebar-item>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
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
    }
  },
  methods: {},
  created () {
    console.log(this.$route)
  }
}
</script>

<style scoped></style>
