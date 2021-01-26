<template>
  <div class="wrapper">
    <el-row :gutter="20">
      <el-col :span="12" class="cropper_body">
        <div class="vueCropper">
          <vueCropper ref="cropper" :img="option.img" :output-size="option.size" :output-type="option.outputType" :info="true" :full="option.full"
            :can-move="option.canMove" :can-move-box="option.canMoveBox" :fixed="option.fixed" :fixed-number="option.fixedNumber" :fixed-box="option.fixedBox"
            :original="option.original" :auto-crop="option.autoCrop" :auto-crop-width="option.autoCropWidth" :auto-crop-height="option.autoCropHeight"
            :center-box="option.centerBox" :high="option.high" :info-true="option.infoTrue" :max-img-size="option.maxImgSize" @realTime="realTime"
            :enlarge="option.enlarge" :mode="option.mode" :limit-min-size="option.limitMinSize"></vueCropper>
        </div>
      </el-col>
      <el-col :span="12">
        <section class="pre-item">
          <span class="pre-item-text">预览</span>
          <div :style="previewStyle">
            <div :style="previews.div">
              <img :src="previews.url" :style="previews.img">
            </div>
          </div>
        </section>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name: 'Vuecropper',
  components: {
  },
  props: ['url'],
  data() {
    return {
      file: {},
      previews: {},
      previewStyle: '',
      option: {
        img: '',
        size: 1,
        full: true, // 是否输出原图比例的截图
        outputType: 'png', // 输出图片格式 jpg png webp
        canMove: true, // 能否拖动图片
        fixedBox: false, // 截图框固定大小
        original: true, // 上传图片是否显示原始宽高 (针对大图 可以铺满)
        canMoveBox: true, // 能否拖动截图框
        autoCrop: true, // 是否自动生成截图框
        fixed: true,
        fixedNumber: [702, 180],
        // 只有自动截图开启 宽度高度才生效
        autoCropWidth: 200,
        autoCropHeight: 150,
        centerBox: true, // 截图框是否限制在图片里(只有在自动生成截图框时才能生效)
        high: true, // 是否根据dpr生成适合屏幕的高清图片
        cropData: {},
        enlarge: 1, // 是否按照截图框比例输出 默认为1
        mode: 'contain', // 图片默认渲染方式
        maxImgSize: 200, // 上传时图片最大大小(默认会压缩尺寸到这个大小)
        limitMinSize: [100, 120], // 截图框最小限制
        infoTrue: true // 真实的输出宽高
      },
      formData: '#'
    }
  },
  methods: {
    // 实时预览函数
    realTime(data) {
      const previews = data
      this.previewStyle = {
        width: previews.w + 'px',
        height: previews.h + 'px',
        overflow: 'hidden',
        margin: '0',
        zoom: 180 / previews.w
      }
      this.previews = data
    },
    handleChange(file) {
      console.log(file)
      const that = this
      that.file = file
      if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(file.name)) {
        that.$message.error('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种')
        return false
      }
      that.option.img = window.URL.createObjectURL(file.raw)
    },
    upload() {
      this.option.img = this.url
    }
  },
  created() {
    this.option.img = this.url
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.vueCropper {
  width: 200px;
  height: 200px;
}
</style>
