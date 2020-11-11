<template>
  <div class="wrapper">
    <el-button
      type="text"
      @click="dialogVisible = true"
    >点击打开 Dialog</el-button>
    <el-dialog
      title="编辑企业logo"
      :visible.sync="dialogVisible"
      width="450px"
    >
      <el-row :gutter="24">
        <el-col
          :span="12"
          class="cropper_body"
        >
          <div class="vueCropper">
            <vueCropper
              ref="cropper"
              :img="option.img"
              :outputSize="option.size"
              :outputType="option.outputType"
              :info="true"
              :full="option.full"
              :canMove="option.canMove"
              :canMoveBox="option.canMoveBox"
              :fixed="option.fixed"
              :fixedNumber="option.fixedNumber"
              :fixedBox="option.fixedBox"
              :original="option.original"
              :autoCrop="option.autoCrop"
              :autoCropWidth="option.autoCropWidth"
              :autoCropHeight="option.autoCropHeight"
              :centerBox="option.centerBox"
              :high="option.high"
              :infoTrue="option.infoTrue"
              :maxImgSize="option.maxImgSize"
              @realTime="realTime"
              :enlarge="option.enlarge"
              :mode="option.mode"
              :limitMinSize="option.limitMinSize"
            ></vueCropper>
          </div>
        </el-col>
        <el-col :span="12">
          <section class="pre-item">
            <span class="pre-item-text">预览</span>
            <div :style="previewStyle">
              <div :style="previews.div">
                <img
                  :src="previews.url"
                  :style="previews.img"
                >
              </div>
            </div>
          </section>
        </el-col>
      </el-row>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-row>
          <el-col :span="12">
            <el-upload
              class="upload-demo"
              action=""
              :show-file-list="false"
              :multiple="false"
              accept="image/png, image/jpeg, image/gif, image/jpg"
              :auto-upload="false"
              :on-change="handleChange"
            >
              <el-button
                size="small"
                type="primary"
              >重新上传</el-button>
            </el-upload>
          </el-col>
          <el-col :span="12">
            <el-button
              size="small"
              @click="dialogVisible = false"
            >取 消</el-button>
            <el-button
              size="small"
              type="primary"
              @click="upload()"
            >确 定</el-button>
          </el-col>
        </el-row>

      </span>
    </el-dialog>
  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      dialogVisible: false,
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
      example2: {
        img: 'http://cdn.xyxiao.cn/Landscape_2.jpg',
        info: true,
        size: 1,
        outputType: 'jpeg',
        canScale: true,
        autoCrop: true,
        // 只有自动截图开启 宽度高度才生效
        autoCropWidth: 300,
        autoCropHeight: 250,
        fixed: true,
        // 真实的输出宽高
        infoTrue: true,
        fixedNumber: [4, 3]
      },
      example3: {
        img: 'http://cdn.xyxiao.cn/Landscape_1.jpg',
        autoCrop: true,
        autoCropWidth: 200,
        autoCropHeight: 200,
        fixedBox: true
      },
      downImg: '#'
    };
  },
  methods: {
    // 实时预览函数
    realTime (data) {
      const previews = data;
      this.previewStyle = {
        width: previews.w + 'px',
        height: previews.h + 'px',
        overflow: 'hidden',
        margin: '0',
        zoom: 180 / previews.w
      };
      this.previews = data;
    },
    handleChange (file) {
      console.log(file)
      if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(file.name)) {
        this.$message.error('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种');
        return false;
      }
      this.option.img = window.URL.createObjectURL(file.raw);

      // console.log(fileList)
    },
    upload () {
      console.log()
      this.$refs.cropper.getCropBlob(data => {
        this.downImg = window.URL.createObjectURL(data);
        console.log(this.downImg)
      });
    }


  },

  mounted () {

  }
};
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

.test-button {
  display: flex;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #c0ccda;
  color: #1f2d3d;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 20px 10px 0px 0px;
  padding: 9px 15px;
  font-size: 14px;
  border-radius: 4px;
  color: #fff;
  background-color: #50bfff;
  border-color: #50bfff;
  transition: all 0.2s ease;
  text-decoration: none;
  user-select: none;
}

.title {
  display: block;
  text-decoration: none;
  text-align: center;
  line-height: 1.5;
  margin: 20px 0px;
  background-image: -webkit-linear-gradient(
    left,
    #3498db,
    #f47920 10%,
    #d71345 20%,
    #f7acbc 30%,
    #ffd400 40%,
    #3498db 50%,
    #f47920 60%,
    #d71345 70%,
    #f7acbc 80%,
    #ffd400 90%,
    #3498db
  );
  color: transparent;
  -webkit-background-clip: text;
  background-size: 200% 100%;
  animation: slide 5s infinite linear;
  font-size: 40px;
}

/* 预览框 */
.pre-item {
}

.upload-demo {
  float: left;
}
</style>
