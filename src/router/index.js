import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout'
const _import = require('./_import_' + process.env.NODE_ENV)
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '',
      component: Layout,
      redirect: '/dashboard',
      name: '首页',
      hidden: true,
      children: [
        {
          path: 'dashboard',
          name: '首页',
          component: _import('dashboard/index')
        }
      ]
    },
    {
      path: '/dashboard',
      component: Layout,
      name: '基础配置管理',
      icon: 'setting',
      authority: 'baseManager',
      children: [
        {
          path: 'userManager',
          icon: 'fa-user',
          component: _import('admin/user/index'),
          name: '用户管理',
          authority: 'userManager'
        },
        {
          path: 'companyManager',
          icon: 'category',
          component: _import('admin/company/index'),
          name: '公司管理',
          authority: 'companyManager'
        },
        {
          path: 'menuManager',
          icon: 'category',
          component: _import('admin/menu/index'),
          name: '菜单管理',
          authority: 'menuManager'
        },
        {
          path: 'groupManager',
          icon: 'group_fill',
          component: _import('admin/group/index'),
          name: '角色权限管理',
          authority: 'groupManager'
        },
        {
          path: 'groupTypeManager',
          icon: 'fa-users',
          component: _import('admin/groupType/index'),
          name: '角色类型管理',
          authority: 'groupTypeManager'
        },
        {
          path: 'gateLogManager',
          icon: 'viewlist',
          component: _import('admin/gateLog/index'),
          name: '操作日志管理',
          authority: 'gateLogManager'
        },
        {
          path: 'officeManager',
          icon: 'category',
          component: _import('admin/office/index'),
          name: '公司信息维护',
          authority: 'officeManager'
        },
        {
          path: 'table',
          icon: 'category',
          component: _import('admin/table/index'),
          name: '表格',
          authority: 'table'
        },
        {
          path: 'cropper',
          icon: 'category',
          component: _import('admin/cropper/index'),
          name: '裁剪',
          authority: 'cropper'
        }
      ]
    },
    {
      path: '/nested',
      component: Layout,
      redirect: '/nested/menu1',
      name: 'Nested',
      meta: {
        title: 'Nested',
        icon: 'nested'
      },
      children: [
        {
          path: 'menu1',
          component: () => import('@/views/nested/menu1/index'), // Parent router-view
          name: 'Menu1',
          meta: { title: 'Menu1' },
          children: [
            {
              path: 'menu1-1',
              component: () => import('@/views/nested/menu1/menu1-1'),
              name: 'Menu1-1',
              meta: { title: 'Menu1-1' }
            },
            {
              path: 'menu1-2',
              component: () => import('@/views/nested/menu1/menu1-2'),
              name: 'Menu1-2',
              meta: { title: 'Menu1-2' },
              children: [
                {
                  path: 'menu1-2-1',
                  component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                  name: 'Menu1-2-1',
                  meta: { title: 'Menu1-2-1' }
                },
                {
                  path: 'menu1-2-2',
                  component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                  name: 'Menu1-2-2',
                  meta: { title: 'Menu1-2-2' }
                }
              ]
            },
            {
              path: 'menu1-3',
              component: () => import('@/views/nested/menu1/menu1-3'),
              name: 'Menu1-3',
              meta: { title: 'Menu1-3' }
            }
          ]
        },
        {
          path: 'menu2',
          component: () => import('@/views/nested/menu2/index'),
          name: 'Menu2',
          meta: { title: 'menu2' }
        }
      ]
    }
  ]
})
