<template>
  <div>
    <li class="info-element draggable">
      <el-row class="agile-list-row">
        <el-col :span="4">
          <span>复选框</span>
        </el-col>
        <el-col :span=20>
          <template>
            <el-checkbox
              v-model="checked1"
              disabled
            >备选项1</el-checkbox>
            <el-checkbox
              v-model="checked2"
              disabled
            >备选项</el-checkbox>
          </template>
        </el-col>
      </el-row>
    </li>
  </div>
</template>

<script>
// import  from ''
// import { mapGetters } from 'vuex'

export default {
  components: {

  },
  data () {
    return {
      checked1: false,
      checked2: true
    }
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {
    // s...mapGetters(['userPermissions','buttonType'])
  },
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {

  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

  },
  beforeCreate () { }, // 生命周期 - 创建之前
  beforeMount () { }, // 生命周期 - 挂载之前
  beforeUpdate () { }, // 生命周期 - 更新之前
  updated () { }, // 生命周期 - 更新之后
  beforeDestroy () { }, // 生命周期 - 销毁之前
  destroyed () { }, // 生命周期 - 销毁完成
  activated () { } // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

<style scoped>
</style>