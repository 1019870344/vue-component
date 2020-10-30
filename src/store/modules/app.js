import Cookies from 'js-cookie'
// 侧边栏+标签栏
const app = {
  state: {
    // 侧边栏的收缩
    // ！+在这里的意思：
    // 因为从cookie中取出的值都是字符串，所以以str代替取出的值，
    // +str使字符串转换为数字，！为逻辑非运算，！+str代表当str为0或NAN时返回true
    sidebar: {
      opened: !+Cookies.get('sidebarStatus')
    },
    theme: 'default',
    livenewsChannels: Cookies.get('livenewsChannels') || '[]',
    // tab标签栏
    visitedViews: []
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
      state.sidebar.opened = !state.sidebar.opened
    },
    // 添加tab
    ADD_VISITED_VIEWS: (state, view) => {
      // 判断添加的tab如果路径已经存在则return
      if (state.visitedViews.some(v => v.path === view.path)) return
      // 否则添加
      state.visitedViews.push({ name: view.name, path: view.path })
    },
    // 删除tab
    DEL_VISITED_VIEWS: (state, view) => {
      // entries()方法返回数组中的每一项键值对
      // splice()方法添加或删除，格式splice(i,i,obj,obj···),前两个是两个数字，后面是元素，第一个数字代表从第几个删除或添加，第二个数字代表删除几个元素
      // 两个数字后面的元素代表添加这些元素，返回值是被删除掉的元素
      for (const [i, v] of state.visitedViews.entries()) {
        if (v.path === view.path) {
          // 返回被删掉的数组元素
          state.visitedViews.splice(i, 1)
          break
        }
      }
    }
  },
  actions: {
    ToggleSideBar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR')
    },
    addVisitedViews: ({ commit }, view) => {
      commit('ADD_VISITED_VIEWS', view)
    },
    delVisitedViews: ({ commit }, view) => {
      commit('DEL_VISITED_VIEWS', view)
    }
  }
}

export default app
