<template>
  <div>
    <el-upload ref="upload" :multiple="false" :limit="2" :on-remove="handleRemove" :file-list="fileList" :on-change=" handleChange" :auto-upload="false"
      class="upload-demo" action="" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel">
      <el-button slot="trigger" size="small" type="primary" @click="select()">选取文件</el-button>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
      <div slot="tip" class="el-upload__tip">只能上传xlsx/xls文件</div>
    </el-upload>
  </div>
</template>

<script>
// import  from ''
// import { mapGetters } from 'vuex'

export default {
  components: {

  },
  data() {
    return {
      fileList: []
    }
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {
    // s...mapGetters(['userPermissions','buttonType'])
  },
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {

  },
  beforeCreate() { }, // 生命周期 - 创建之前
  beforeMount() { }, // 生命周期 - 挂载之前
  beforeUpdate() { }, // 生命周期 - 更新之前
  updated() { }, // 生命周期 - 更新之后
  beforeDestroy() { }, // 生命周期 - 销毁之前
  destroyed() { }, // 生命周期 - 销毁完成
  activated() { },
  // 方法集合
  methods: {
    select(file, fileList) {
      console.log(file)
      console.log(fileList)
    },
    handleImport() {
      this.dialogExcelVisible = true
    },
    // 提交服务器
    submitUpload() {
      this.$refs.upload.submit()
    },
    // 移除文件
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    // 文件变化
    handleChange(file, fileList) {
      if (fileList.length > 0) {
        this.fileList = [fileList[fileList.length - 1]] // 这一步，是 展示最后一次选择的csv文件
      }
    }
    // // 超出文件限制
    // handleExceed (files, fileList) {
    //   this.$refs.upload.clearFiles()
    //   console.log('上传的文件')
    //   console.log(files)
    //   console.log('已存在的文件')
    //   console.log()
    //   console.log(fileList)
    // },
  } // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

<style scoped>
</style>
