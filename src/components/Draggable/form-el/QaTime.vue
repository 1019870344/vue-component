<template>
  <div>
    <li class="blue-element draggable">
      <el-row class="agile-list-row">
        <el-col :span="4">
          <span>时间</span>
        </el-col>
        <el-col :span=20>
          <el-time-select
            v-model="value"
            :picker-options="{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }"
            placeholder="选择时间"
          >
          </el-time-select>
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
      value: ''
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
.agile-list li.blue-element {
  border-left: 3px solid #05e0f0;
}
</style>