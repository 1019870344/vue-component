<script type="text/jsx">
import QaText from '@/components/Draggable/form-el/QaText';
import QaRadio from '@/components/Draggable/form-el/QaRadio';
import QaSelect from '@/components/Draggable/form-el/QaSelect';
import QaDate from '@/components/Draggable/form-el/QaDate';
import QaTime from '@/components/Draggable/form-el/QaTime';
import QaCheckBox from '@/components/Draggable/form-el/QaCheckBox';
import QaTextArea from '@/components/Draggable/form-el/QaTextArea';
import QaUpload from '@/components/Draggable/form-el/QaUpload'

export default {
  name: 'DynamicForm',
  props: {
    item: {
      required: true
    }
  },
  components: {
    QaText, QaSelect, QaDate, QaTime, QaRadio, QaUpload,
    QaCheckBox, QaTextArea
  },
  data () {
    return {}
  },
  methods: {},
  render () {
    const item = this.$props.item;
    // 如果是input输入框
    if (item.list.type === 'text') {
      return <qa-text item={item}></qa-text>
    } else if (item.list.type === 'radio') {
      return <qa-radio item={item}></qa-radio>
    } else if (item.list.type === 'select') {
      return <qa-select item={item}></qa-select>
    } else if (item.list.type === 'checkbox') {
      return <qa-check-box item={item}></qa-check-box>
    } else if (item.list.type === 'upload') {
      return <qa-upload item={item}></qa-upload>
    } else if (item.list.type === 'date-picker') {
      return <qa-date item={item}></qa-date>
    } else if (item.list.type === 'time-picker') {
      return <qa-time item={item}></qa-time>
    } else if (item.list.type === 'textarea') {
      return <qa-text-area item={item}></qa-text-area>
    } else {
      return <div>未识别的组件类型：【{item.list.type}】!</div>
    }
  }
}
</script>
