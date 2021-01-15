<template>
  <div>
    <van-field v-model="fieldValue" is-link readonly label="地区" placeholder="请选择所在地区" @click="show = true" />
    <van-popup v-model="show" round position="bottom">
      <van-cascader v-model="cascaderValue" title="请选择所在地区" :options="options" @close="show = false" @finish="onFinish" />
    </van-popup>
  </div>
</template>

<script>
import DISTRICTS from '@/components/AddressPicker/picker.js'

export default {
  name: 'Hello',
  components: {
  },
  data() {
    return {
      show: false,
      fieldValue: '',
      cascaderValue: '',
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [
        {
          text: '浙江省',
          value: '330000',
          children: [{ text: '杭州市', value: '330100' }]
        },
        {
          text: '江苏省',
          value: '320000',
          children: [{ text: '南京市', value: '320100' }]
        }
      ]
    }
  },
  computed: {
    districts() {
      return DISTRICTS
    }
  },
  methods: {
    combine() {
      const list = []
      const all = this.districts
      const province = this.districts['100000']
      for (const x in province) {
        list.push({
          text: province[x],
          value: x,
          children: []
        })
      }
      list.map((item, index) => {
        for (const y in all[item.value]) {
          item.children.push({
            text: all[item.value][y],
            value: y,
            children: []
          })
        }
        item.children.map((li, index) => {
          for (const z in all[li.value]) {
            li.children.push({
              text: all[li.value][z],
              value: z
            })
          }
        })
      })
      this.options = list
      this.sort(list)
    },
    sort(list) {
      const arr = list
      const segs = []
      // arr.sort((a, b) => a['text'].localeCompare(b['text']))
      const letters = '#abcdefghjklmnopqrstwxyz'.split('')
      letters.forEach((item, i) => {
        const curr = { letter: item, data: [] }
        arr.forEach(item2 => {
          console.log(arr[i])
          console.log(item2)
          if ((!arr[i - 1] || arr[i - 1].localeCompare(item2) <= 0) && item2.localeCompare(arr[i]) === -1) {
            curr.data.push(item2)
          }
        })
        if (curr.data.length) {
          segs.push(curr)
          curr.data.sort((a, b) => a.localeCompare(b))
        }
      })

      console.log(segs)
    },
    onFinish({ selectedOptions }) {
      this.show = false
      this.fieldValue = selectedOptions.map(option => option.text).join('/')
    }

  },
  created() {
    this.combine()
  }
}
</script>

<style>
</style>
