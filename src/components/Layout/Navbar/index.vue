<template>
  <el-menu
    class="navbar"
    mode="horizontal"
  >
    <hamburger
      @toggleClick="toggleSideBar"
      :is-active="sidebar.opened"
      class="hamburger-container"
    ></hamburger>
    <breadcrumb></breadcrumb>
  </el-menu>
</template>

<script>
// import  from ''
import { mapGetters } from 'vuex'
import breadcrumb from '@/components/Layout/Breadcrumb/index'
import hamburger from '@/components/Layout/Hamburger/index'
export default {
  name: 'navbar',
  components: {
    breadcrumb,
    hamburger
  },
  computed: {
    ...mapGetters(['sidebar'])
  },
  data () {
    return {}
  },
  methods: {
    toggleSideBar () {
      this.$store.dispatch('ToggleSideBar')
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0 !important;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .errLog-container {
    display: inline-block;
    position: absolute;
    right: 150px;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
  .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 5px;
      position: relative;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
</style>
