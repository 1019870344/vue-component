<template>
  <div class="ibox">
    <div class="ibox-content">
      <h3>模板设置</h3>
      <p class="small"><i class="fa fa-hand-o-up"></i> 在列表之间拖动任务面板</p>
      <div class="item-box">
        <el-scrollbar style="height:100%">
          <ul class="sortable-list agile-list show-box">
            <draggable
              :list="list"
              :options="{group:{name: 'article',pull:false}, disabled: false, sort: true}"
              class="dragArea11"
              v-bind="dragOptions"
              @change="toChange"
            >
              <content-item
                v-for="(item,index) in list"
                :key="index"
                class="item"
                :index="index"
                :list="list"
                :item="item instanceof Array?item[1]:item"
              ></content-item>

            </draggable>
          </ul>
        </el-scrollbar>
      </div>

    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import ContentItem from '@/components/Draggable/content/ContentItem'
export default {
  components: {
    draggable,
    ContentItem
  },
  data () {
    return {
      list: [
        {
          label: '输入框',
          list: {
            type: 'text',
            name: 'input'
          }
        },
        {
          label: '单选框',
          list: {
            type: 'radio',
            name: 'input'
          }
        },
        {
          label: '复选框',
          list: {
            type: 'checkbox',
            name: 'input'
          }
        },
        {
          label: '下拉框',
          list: {
            type: 'select',
            name: 'input'
          }
        }
      ],
      dragOptions: { animation: 500 }
    }
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {
  },
  // 方法集合
  methods: {
    toChange (e) {
      console.log(e)
      if (e.added) {
        console.log(this.list)
      }
    }
  }
}
</script>

<style scoped>
.dragArea11 {
  width: 354px;
  height: 620px;
}
.item-box {
  background: #f5f5f5;
  border: 1px solid #d6d6d6;
  width: 360px;
  height: 640px;
}
.item-box ul {
  width: 100%;
  height: 100%;
}
.agile-list {
  padding: 0 !important;
}
</style>