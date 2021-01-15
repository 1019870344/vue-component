<template>
  <div>
    <div class="container">
      <img src="../../assets/logo.png">
    </div>
    <div id="line" />
    <div class="heart">
      <div class="left" />
      <div class="right" />
      <div class="bottom" />
    </div>
    <div class="circle-body">
      <div class="watch-face">
        <div class="circle" />
        <div class="circle" />
        <div class="circle" />
        <div class="circle" />
        <div class="circle" />
        <div class="circle" />
      </div>
    </div>

    <!-- <div class="run">
      <div class="run-head"></div>
      <div class="run-body"></div>
      <div class="run-arm-l arm">
        <div class="arm-item-l"></div>
      </div>
      <div class="run-arm-r arm">
        <div class="arm-item-r"></div>
      </div>
      <div class="run-left l">
        <div class="item-l item"></div>
      </div>
      <div class="run-right l">
        <div class="item-r item"></div>
      </div>
    </div> -->
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
  // 计算属性，会监听依赖属性值随之变化
  computed: {
    // s...mapGetters(['userPermissions','buttonType'])
  },
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
  // 方法集合
  methods: {

  }

}
</script>

<style scoped>
#line {
  width: 300px;
  height: 50px;
  background: turquoise;
  position: relative;
}
#line::after {
  content: '';
  width: 0;
  height: 3px;
  background: violet;
  position: absolute;
  top: 100%;
  transition: all 2s ease-in-out;
}
#line:hover::after {
  width: 100%;
}

.circle-body {
  width: 300px;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
}

.circle {
  height: 125px;
  width: 125px;
  border-radius: 50%;
  position: absolute;
  mix-blend-mode: screen;
}

.circle:nth-child(1) {
  animation: circle-1 4s infinite ease alternate;
  background: #61bea2;
}
.circle:nth-child(2) {
  background: #61bea2;
  animation: circle-2 4s infinite ease alternate;
}
.circle:nth-child(3) {
  background: #529ca0;
  animation: circle-3 4s infinite ease alternate;
}
.circle:nth-child(4) {
  background: #529ca0;
  animation: circle-4 4s infinite ease alternate;
}
.circle:nth-child(5) {
  background: #529ca0;
  animation: circle-5 4s infinite ease alternate;
}
.circle:nth-child(6) {
  background: #61bea2;
  animation: circle-6 4s infinite ease alternate;
}

.watch-face {
  height: 125px;
  width: 125px;
  animation: rotate 4s cubic-bezier(0.5, 0, 0.5, 1) alternate infinite;
}

@keyframes rotate {
  0% {
    transform: scale(0.15) rotate(180deg);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes circle-1 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-35px, -50px);
  }
}
@keyframes circle-2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-35px, 50px);
  }
}
@keyframes circle-3 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(35px, 50px);
  }
}
@keyframes circle-4 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(35px, -50px);
  }
}
@keyframes circle-5 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-60px, 0);
  }
}
@keyframes circle-6 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(60px, 0);
  }
}
.run {
  position: absolute;
  top: 400px;
}
.run-head {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 1px solid black;
  position: relative;
  left: 300px;
}
.run-body {
  position: relative;
  left: 335px;
  width: 1px;
  height: 100px;
  background: black;
}
.arm {
  position: relative;
  left: 335px;
  width: 1px;
  height: 80px;
  background: black;
}
.run-arm-l {
  top: -70px;
  transform-origin: center top;
  animation: left-2-1 2s linear alternate infinite;
  transform: rotate(120deg);
}
.run-arm-r {
  top: -150px;
  transform-origin: center top;
  animation: left-1-1 2s linear alternate infinite;
  transform: rotate(-120deg);
}
.arm-item-l {
  width: 1px;
  height: 60px;
  position: relative;
  top: 80px;
  background: black;
  animation: left-2-1 4s linear alternate infinite;
  transform-origin: center top;
}
.arm-item-r {
  width: 1px;
  height: 60px;
  position: relative;
  top: 80px;
  background: black;
  animation: left-1-1 4s linear alternate infinite;
  transform-origin: center top;
}
.l {
  width: 1px;
  height: 100px;
  background: black;
  position: relative;
  top: -160px;
  left: 335px;
}
.run-left {
  animation: left-1 1.5s ease-in-out alternate infinite;
  transform-origin: center top;
}
.run-right {
  top: -260px;
  animation: left-2 1.5s ease-in-out alternate infinite;
  transform-origin: center top;
}
.item {
  width: 1px;
  height: 100px;
  position: relative;
  top: 100px;
  background: black;
}
.item-l {
  animation: left-1-1 3s linear alternate infinite;
  transform-origin: center top;
}
.item-r {
  animation: left-1-2 3s linear alternate infinite;
  transform-origin: center top;
}
@keyframes left-1 {
  0% {
    transform: rotate(40deg);
  }

  100% {
    transform: rotate(-40deg);
  }
}
@keyframes left-2 {
  0% {
    transform: rotate(-40deg);
  }
  100% {
    transform: rotate(40deg);
  }
}
@keyframes left-1-1 {
  0% {
    transform: rotate(-5deg);
  }
  25% {
    transform: rotate(-45deg);
  }
  50% {
    transform: rotate(-60deg);
  }
  75% {
    transform: rotate(-45deg);
  }
  100% {
    transform: rotate(-5deg);
  }
}
@keyframes left-1-2 {
  0% {
    transform: rotate(-60deg);
  }
  25% {
    transform: rotate(-45deg);
  }
  50% {
    transform: rotate(-5deg);
  }
  75% {
    transform: rotate(-45deg);
  }
  100% {
    transform: rotate(-60deg);
  }
}
@keyframes left-2-1 {
  0% {
    transform: rotate(5deg);
  }
  25% {
    transform: rotate(45deg);
  }
  50% {
    transform: rotate(60deg);
  }
  75% {
    transform: rotate(45deg);
  }
  100% {
    transform: rotate(5deg);
  }
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.heart {
  width: 10px;
  height: 10px;
  position: relative;
  margin: 200px;
  transition: all 0.5s;
  /* 指定要绑定到选择器的关键帧的名称 */
  animation-name: imgmv;
  /* 设置动画将如何完成一个周期 */
  animation-timing-function: linear;
  /* 指定是否应该轮流反向播放动画。 */
  animation-direction: alternate;
  /* 动画指定需要多少秒或毫秒完成 */
  animation-duration: 5s;
  /* 定义动画的播放次数。 */
  animation-iteration-count: infinite;
  /* 指定动画是否正在运行或已暂停。 */
  /* animation-play-state: running; */
}
.heart:hover {
  transform: scale(1.5);
}
.heart .left {
  background: red;
  width: 10px;
  height: 10px;
  position: absolute;
  transform: rotate(45deg) translateX(-7px);
  border-radius: 50% 0 0 50%;
}
.heart .right {
  background: red;
  width: 10px;
  height: 10px;
  position: absolute;
  transform: rotate(45deg) translateY(-7px);
  border-radius: 50% 50% 0 0;
}
.heart .bottom {
  background: red;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
}
.container {
  width: 125px;
  height: 125px;
  perspective: 500px;
  position: relative;
  border: 4px solid #e5a043;
  background: #fff2dd;
}
img {
  height: 100%;
  width: 100%;
  /* linear	规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）。(匀速)
     ease	规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0.1,0.25,1)）（相对于匀速，中间快，两头慢）。
     ease-in	规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）（相对于匀速，开始的时候慢，之后快）。
     ease-out	规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）（相对于匀速，开始时快，结束时候间慢，）。
     ease-in-out	规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）（相对于匀速，（开始和结束都慢）两头慢）。 */
  transition: transform 1s;
  animation-name: mv;
  animation-timing-function: linear;
  animation-direction: alternate;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-play-state: running;
  transform-origin: top center;
}
img:hover {
  /* transform: translate3d(25px, 25px, 150px); */
  /* transform: rotate3d(0, 1, 1, 60deg); */
  transform: scale3d(1, 1, 2) rotate3d(1, 1, 1, 360deg);
}

@keyframes mv {
  0% {
    transform: rotate(5deg);
  }
  50% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(5deg);
  }
}
@keyframes imgmv {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(25px, -60px);
  }
  50% {
    transform: translate(0px, -120px);
  }
  75% {
    transform: translate(-25px, -180px);
  }
  100% {
    transform: translate(0, -240px);
  }
}
.transform {
  /* 该功能translate3d(25px, 25px, 50px)将图像沿X和Y轴正方向移动25个像素，并沿Z轴正方向移动50个像素。 */
  /* transform: translate3d(25px, 25px, 150px);  */
  /* 该rotate3d()函数围绕[x，y，z]方向向量将3D空间中的元素旋转指定角度。可以写成rotate(vx, vy, vz, angle)。 */
  /* transform: rotate3d(0, 1, 1, 60deg); */
  /* scale3d()函数更改元素的大小。可以写成scale(sx, sy, sz)。除非将其与旋转和透视图等其他变换功能结合使用，否则此功能的效果并不明显。 */
  /* transform: scale3d(1, 1, 2) rotate3d(1, 0, 0, 60deg); */
  /* matrix3d()功能可以一次执行所有3D转换，例如平移，旋转和缩放。它采用4×4转换矩阵]形式的16个参数。 */
  /* transform: matrix3d(
    0.359127,
    -0.469472,
    0.806613,
    0,
    0.190951,
    0.882948,
    0.428884,
    0,
    -0.913545,
    0,
    0.406737,
    0,
    0,
    0,
    0,
    1
  ); */
}
</style>
