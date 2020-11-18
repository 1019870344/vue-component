<template>
  <div class="ibox">
    <div class="ibox-content">
      <h3>组件列表</h3>
      <p class="small"><i class="fa fa-hand-o-up"></i> 拖动组件</p>
      <ul class="sortable-list agile-list show-box">
        <draggable
          :list="item"
          :options="{group:{name: 'article',pull:'clone'}, sort: false}"
          class="dragArea"
          v-bind="dragOptions"
        >
          <item-item
            v-for="li in item"
            :key="li.index"
            :item="li instanceof Array?li[1]:li"
          >
          </item-item>

        </draggable>
      </ul>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import item from '@/components/Draggable/js/index.js'
import ItemItem from './item-item.vue'
export default {
  components: {
    draggable,
    ItemItem
  },
  data () {
    return {
      dragOptions: { animation: 500 },
      item
    }
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {
  },
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
  }

}
</script>

<style scoped>
@import '../../../assets/css/bootstrap.min.css';
@import '../../../assets/css/animate.css';
@import '../../../assets/css/font-awesome.css';

.el-icon-plus {
  border: solid 1px gainsboro;
  font-size: 40px;
  color: gainsboro;
}

.agile-list-row {
  margin-top: 15px;
}
</style>