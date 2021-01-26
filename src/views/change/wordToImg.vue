<template>
  <div>
    <span>输入</span>
    <input v-model="text">
    <button @click="drawLogo">生成</button>
    <img :src="imgSrc">
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
      text: '',
      imgSrc: ''

    }
  },
  // 方法集合
  methods: {
    drawLogo() {
      const text = this.text
      const font = '微软雅黑'
      const fontSize = '50'
      const fontCor = '#5076B8'
      const list = text.split('')
      // 创建画布
      const canvas = document.createElement('canvas')
      // 绘制文字环境
      const context = canvas.getContext('2d')
      // 设置字体
      context.font = font
      // 获取字体宽度
      const width = context.measureText(text).width
      console.log(width * fontSize)
      // 画布宽度
      canvas.width = 702
      // 画布高度
      canvas.height = 180
      // // 画布宽度
      // canvas.width = width * 1.5
      // // 画布高度
      // canvas.height = (width / list.length) + x
      // 填充白色
      context.fillStyle = '#f3f3f3'
      // 绘制文字之前填充白色
      context.fillRect(0, 0, canvas.width, canvas.height)
      // 设置字体
      context.font = fontSize + 'px ' + font
      // 设置水平对齐方式
      context.textAlign = 'center'
      // 设置垂直对齐方式
      context.textBaseline = 'middle'
      // 设置字体颜色
      context.fillStyle = fontCor
      // 绘制文字(参数：要写的字，x坐标，y坐标)
      context.fillText(text, canvas.width / 2, canvas.height / 2)
      // 生成图片信息
      const dataUrl = canvas.toDataURL('image/png')
      this.imgSrc = dataUrl
      return dataUrl
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {

  }
}
</script>

<style scoped>
</style>
