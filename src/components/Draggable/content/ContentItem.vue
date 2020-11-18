<template>
  <div class="content-item">
    <el-row>
      <el-col :span="20">
        <dynamic-form :item="item">
        </dynamic-form>
      </el-col>
      <el-col
        :span="4"
        class="content-item-btn"
      >
        <a
          class="pull-right btn btn-xs btn-primary"
          @click="del(index)"
        >移除</a>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import  from ''
// import { mapGetters } from 'vuex'
import DynamicForm from '@/components/Draggable/content/DynamicForm'

export default {
  components: {
    DynamicForm
  },
  props: ['item', 'index', 'list'],
  data () {
    return {
    }
  },
  methods: {
    del (e) {
      const arr = this.list
      arr.splice(e, 1);// 删除第2个元
    }
  }
}
</script>

<style scoped>
.content-item {
  background: #fafafb;
}
.content-item .content-item-btn {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>