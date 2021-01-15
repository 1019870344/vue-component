import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout/index'
const _import = require('./_import_' + process.env.NODE_ENV)
Vue.use(Router)

/**
 * Note: 折叠的根菜单只有在子菜单长度>1时出现
 *
 * 推荐格式：
 *{
      path: '/dashboard',                                   根菜单
      component: Layout,                                    根菜单所在目录
      name: '基础配置管理',                                   根菜单name
      authority: 'baseManager',                             根菜单权限(暂时没实现)
      meta: { title: '基础配置管理', icon: 'dashboard' },     根菜单显示的名字和图标(图标暂时没实现)
      children: [                                           子菜单同上
        {
          path: 'userManager',
          component: _import('admin/user/index'),
          name: '用户管理',
          authority: 'userManager',
          meta: { title: '用户管理', icon: 'dashboard' }
        }]
 }
 *
 * hidden: true                  如果hidden为true，侧边栏不显示该目录
 * alwaysShow: true              如果为true，则不管根菜单里子菜单的长度是否>1都显示可折叠的根菜单
 * redirect: noRedirect          面包屑中使用，如果为noRedirect，则在面包屑中不重定向
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  true的话这个页面的标签页无法关闭
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      children: [{
        path: 'dashboard',
        name: '首页',
        component: _import('dashboard/index'),
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }]
    },
    {
      path: '/userManager',
      component: Layout,
      children: [{
        path: 'userManager',
        name: '用户管理',
        component: _import('admin/user/index'),
        meta: { title: '用户管理', icon: 'dashboard', affix: true }
      }]
    },
    {
      path: '/css',
      component: Layout,
      meta: { title: 'css', icon: 'icon' },
      children: [{
        path: 'css3d',
        name: 'css3d动画',
        component: _import('css/translate3d'),
        meta: { title: 'css3d', icon: 'icon' }
      },
      {
        path: 'css',
        name: 'css动画',
        component: _import('css/translate'),
        meta: { title: 'css', icon: 'icon' }
      }]
    },
    {
      path: '/dashboard',
      component: Layout,
      name: '基础配置管理',
      icon: 'setting',
      authority: 'baseManager',
      meta: { title: '基础配置管理', icon: 'dashboard' },
      children: [
        {
          path: 'companyManager',
          icon: 'category',
          component: _import('admin/company/index'),
          name: '公司管理',
          authority: 'companyManager',
          meta: { title: '公司管理', icon: 'dashboard' }
        },
        {
          path: 'menuManager',
          icon: 'category',
          component: _import('admin/menu/index'),
          name: '菜单管理',
          authority: 'menuManager',
          meta: { title: '菜单管理', icon: 'dashboard' }
        },
        {
          path: 'groupManager',
          icon: 'group_fill',
          component: _import('admin/group/index'),
          name: '角色权限管理',
          authority: 'groupManager',
          meta: { title: '角色权限管理', icon: 'dashboard' }
        },
        {
          path: 'groupTypeManager',
          icon: 'fa-users',
          component: _import('admin/groupType/index'),
          name: '角色类型管理',
          authority: 'groupTypeManager',
          meta: { title: '角色类型管理', icon: 'dashboard' }
        },
        {
          path: 'gateLogManager',
          icon: 'viewlist',
          component: _import('admin/gateLog/index'),
          name: '操作日志管理',
          authority: 'gateLogManager',
          meta: { title: '操作日志管理', icon: 'dashboard' }
        },
        {
          path: 'officeManager',
          icon: 'category',
          component: _import('admin/office/index'),
          name: '公司信息维护',
          authority: 'officeManager',
          meta: { title: '公司信息维护', icon: 'dashboard' }
        },
        {
          path: 'table',
          icon: 'category',
          component: _import('admin/table/index'),
          name: '表格',
          authority: 'table',
          meta: { title: '表格', icon: 'dashboard' }
        },
        {
          path: 'cropper',
          icon: 'category',
          component: _import('admin/cropper/index'),
          name: '裁剪',
          authority: 'cropper',
          meta: { title: '裁剪', icon: 'dashboard' }
        }
      ]
    },
    {
      path: '/nested',
      component: Layout,
      redirect: '/nested/menu1',
      name: 'Nested',
      meta: { title: 'Nested', icon: 'nested' },
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
