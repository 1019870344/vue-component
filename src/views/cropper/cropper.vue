<template>
  <div>
    <vueCropper ref="vuecropper" :url="url" />
    <span slot="footer" class="dialog-footer">
      <el-row>
        <el-col :span="12">
          <el-upload :show-file-list="false" :multiple="false" :auto-upload="false" :on-change="handleChange" class="upload-demo" action=""
            accept="image/png, image/jpeg, image/gif, image/jpg">
            <el-button size="small" type="primary">重新上传</el-button>
          </el-upload>
        </el-col>
        <el-col :span="12">
          <el-button size="small" @click="dialogVisible = false">取 消</el-button>
          <el-button size="small" type="primary" @click="upload()">确 定</el-button>
        </el-col>
      </el-row>
    </span>
  </div>
</template>

<script>
import vueCropper from '@/components/cropper/cropper'

export default {
  components: {
    vueCropper
  },
  data() {
    return {
      url: ''
    }
  },
  // 方法集合
  methods: {
    handleChange(file) {
      const that = this
      that.$refs.vuecropper.handleChange(file)
    }
  }
}
</script>

<style scoped>
</style>
