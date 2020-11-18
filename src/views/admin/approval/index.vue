<template>
  <div>
    <div class="wrapper wrapper-content  animated fadeInRight">
      <el-row>
        <el-col :span="6">
          <Items></Items>
        </el-col>
        <el-col :span="8">
          <Contain></Contain>
        </el-col>
        <el-col :span="8">
          <div class="ibox">
            <div class="ibox-content">
              <h3>已完成</h3>
              <p class="small"><i class="fa fa-hand-o-up"></i> 在列表之间拖动任务面板</p>
              <ul class="sortable-list agile-list">
                <li class="info-element">
                  制定工作日程表
                  <div class="agile-detail">
                    <a
                      href="#"
                      class="pull-right btn btn-xs btn-white"
                    >标记</a>
                    <i class="fa fa-clock-o"></i> 2015.09.10
                  </div>
                </li>
                <li class="warning-element">
                  每天坚持打40个有效电话，挖掘潜在客户
                  <div class="agile-detail">
                    <a
                      href="#"
                      class="pull-right btn btn-xs btn-white"
                    >标签</a>
                    <i class="fa fa-clock-o"></i> 2015.09.09
                  </div>
                </li>
                <li class="warning-element">
                  拜访客户之前要对该客户做全面的了解(客户的潜在需求、职位、权限以及个人性格和爱好)
                  <div class="agile-detail">
                    <a
                      href="#"
                      class="pull-right btn btn-xs btn-white"
                    >标签</a>
                    <i class="fa fa-clock-o"></i> 2015.09.09
                  </div>
                </li>
                <li class="warning-element">
                  提高自己电话营销技巧，灵活专业地与客户进行电话交流
                  <div class="agile-detail">
                    <a
                      href="#"
                      class="pull-right btn btn-xs btn-primary"
                    >确定</a>
                    <i class="fa fa-clock-o"></i> 2015.08.04
                  </div>
                </li>
                <li class="success-element">
                  通过电话销售过程中了解各盛市的设备仪器使用、采购情况及相关重要追踪人
                  <div class="agile-detail">
                    <a
                      href="#"
                      class="pull-right btn btn-xs btn-white"
                    >标记</a>
                    <i class="fa fa-clock-o"></i> 2015.05.12
                  </div>
                </li>

              </ul>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import 'jquery-ui-dist/jquery-ui.min.css'
import Items from '@/components/Draggable/left-item/Item'
import Contain from '@/components/Draggable/content/Content'
export default {
  components: {
    Items,
    Contain
  },
  data () {
    return {
      value: ' '
    }
  },
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

.agile-list li.purple-element {
  border-left: 3px solid #8c09e4;
}

.agile-list li.blue-element {
  border-left: 3px solid #05e0f0;
}

.agile-list li.yellow-element {
  border-left: 3px solid #d4eb05;
}

.agile-list li.success-element {
  border-left: 3px solid #1ab394;
}

.btn {
  margin-top: 10px;
}
</style>