<template>
  <div>
    canvas
    <canvas id="canvas">
      浏览器不支持
    </canvas>
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

    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
  },
  // 方法集合
  methods: {
    draw() {
      const canvas = document.getElementById('canvas') // 获取canvas
      if (canvas.getContext) { // 检测支持性
        const ctx = canvas.getContext('2d')
        ctx.font = '50px sans-serif'
        ctx.fillText('天若有情', 10, 50, 150)
        ctx.strokeText('天若有情', 10, 100, 100)
        // ctx.fillRect(10, 10, 100, 100)
        // ctx.strokeRect(20, 20, 100, 100)
        // ctx.clearRect(20, 20, 20, 20)
        // ctx.beginPath()// 新建路径
        // ctx.moveTo(20, 20) // 把起点设置为x=50px,y=50px
        // ctx.lineTo(50, 20) // 从起点绘制线条到x=200,y=50处
        // ctx.lineTo(200, 100) // 从起点绘制线条到x=200,y=200处
        // ctx.arc(50, 50, 40, 0, Math.PI, false)
        // ctx.arcTo(100, 50, 100, 100, 50)
        // ctx.closePath() // 闭合路径
        // ctx.lineWidth = 20
        // ctx.lineCap = 'butt'
        // ctx.lineCap = 'round'
        // ctx.lineCap = 'square'
        // ctx.lineJoin = 'round'
        // ctx.lineTo(50, 50)
        // ctx.lineTo(100, 50)
        // ctx.lineJoin = 'bevel'
        // ctx.lineTo(50, 50)
        // ctx.lineTo(100, 50)
        // ctx.lineJoin = 'miter'
        // ctx.lineTo(50, 50)
        // ctx.lineTo(100, 50)
        // ctx.setLineDash([10, 1]) // [实线长度, 间隙长度]
        // ctx.lineDashOffset = -0
        // ctx.strokeRect(20, 20, 100, 100)
        // ctx.strokeStyle = 'rgb(102,175,233)'
        // ctx.stroke() // 绘制路径。
        // ctx.fillStyle = 'rgb(102,175,233)'
        // ctx.fill()
      } else {
        return
      }
    }
  },
  mounted() {
    this.draw()
  }
}
</script>

<style scoped>
</style>
