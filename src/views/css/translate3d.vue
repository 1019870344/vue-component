<template>
  <div>
    <!-- 正方体 -->
    <div class="container">
      <div class="boxes">
        <div class="box" />
        <div class="box" />
        <div class="box" />
        <div class="box" />
        <div class="box" />
        <div class="box" />
      </div>
    </div>
    <div class="columns">
      <div class="cl"><img src="../../assets/dog.jpg"></div>
      <div class="cl"><img src="../../assets/dog.jpg"></div>
      <div class="cl"><img src="../../assets/dog.jpg"></div>
      <div class="cl"><img src="../../assets/dog.jpg"></div>
      <div class="cl"><img src="../../assets/dog.jpg"></div>
      <div class="cl"><img src="../../assets/dog.jpg"></div>
    </div>
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
.container {
  width: 300px;
  height: 300px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 360px;
  float: left;
}
.boxes {
  width: 120px;
  height: 120px;
  position: relative;
  transform-style: preserve-3d;
  animation: around 3s linear infinite;
}
.box {
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.5;
}
.box:nth-child(1) {
  background: blue;
  transform: translateZ(60px);
}
.box:nth-child(2) {
  background: gold;
  transform: translateZ(-60px);
}
.box:nth-child(3) {
  background: aqua;
  transform: translateX(60px) rotate3d(0, 1, 0, 90deg);
}
.box:nth-child(4) {
  background: green;
  transform: translateX(-60px) rotate3d(0, 1, 0, 90deg);
}
.box:nth-child(5) {
  background: red;
  transform: translateY(60px) rotate3d(1, 0, 0, 90deg);
}
.box:nth-child(6) {
  background: hotpink;
  transform: translateY(-60px) rotate3d(1, 0, 0, 90deg);
}
@keyframes around {
  100% {
    transform: rotateX(360deg) rotateZ(720deg);
  }
}
.columns {
  width: 1000px;
  height: 1000px;
  background: wheat;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 3000px;
  transform-style: preserve-3d;
}
.cl {
  width: 150px;
  height: 200px;
  position: absolute;
}
.cl img {
  width: 100%;
  height: 100%;
}
.cl:nth-child(1) {
  background: violet;
  transform: translate3d(0, 0, 150px);
  animation: cl-around 3s linear infinite;
}
.cl:nth-child(2) {
  background: gold;
  transform: translate3d(0, 0, -150px);
}
.cl:nth-child(3) {
  background: rgb(207, 101, 40);
  transform: translate3d(130px, 0, 75px);
}
.cl:nth-child(4) {
  background: rgb(30, 187, 207);
  transform: translate3d(-130px, 0, 75px);
}
.cl:nth-child(5) {
  background: rgb(73, 24, 138);
  transform: translate3d(130px, 0, -75px);
}
.cl:nth-child(6) {
  background: rgb(137, 211, 17);
  transform: translate3d(130px, 0, -75px);
}
@keyframes cl-around {
  from {
    transform: rotateY(0deg) translateZ(0px);
  }
  to {
    transform: rotateY(720deg) translateZ(380px);
  }
}
</style>
