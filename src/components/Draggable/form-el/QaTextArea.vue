<template>
  <div>
    <li class="yellow-element draggable">
      <el-row class="agile-list-row">
        <el-col :span="4">
          <span>备注</span>
        </el-col>
        <el-col :span=20>
          <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="textarea"
          >
          </el-input>
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
      textarea: ''
    }
  },
  // 方法集合
  methods: {

  }
}
</script>

<style scoped>
.agile-list li.yellow-element {
  border-left: 3px solid #d4eb05;
}
</style>