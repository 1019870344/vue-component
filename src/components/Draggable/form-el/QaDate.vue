<template>
  <div>
    <li class="blue-element draggable">
      <el-row class="agile-list-row">
        <el-col :span="4">
          <span>日期选择</span>
        </el-col>
        <el-col :span=20>
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
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
      value1: ''
    }
  },
  // 方法集合
  methods: {

  }
}
</script>

<style scoped>
.agile-list li.blue-element {
  border-left: 3px solid #05e0f0;
}
</style>