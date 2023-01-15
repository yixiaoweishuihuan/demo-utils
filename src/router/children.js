import Form from '../views/Form'
const FormDynamic = () => import(/* webpackChunkName: 'form' */ '@/views/FormDynamic')
const FormComponent = () => import(/* webpackChunkName: 'form' */ '@/views/FormComponent')
const SelectExpand = () => import(/* webpackChunkName: 'selectExpand' */ '@/views/SelectExpand')

export default [
  {
    path: 'form',
    name: 'form',
    component: Form,
    meta: {
      icon: 'el-icon-menu',
      title: '表单校验'
    }
  },
  {
    path: 'formDynamic',
    name: 'formDynamic',
    component: FormDynamic,
    meta: {
      title: '动态表单校验',
      icon: 'el-icon-s-grid'

    }
  },
  {
    path: 'formComponent',
    name: 'formComponent',
    component: FormComponent,
    meta: {
      title: '表单校验动态组件',
      icon: 'el-icon-office-building'

    }
  },
  {
    path: 'selectExpand',
    name: 'selectExpand',
    component: SelectExpand,
    meta: {
      title: '远程搜索下拉框默认值不可删除',
      icon: 'el-icon-edit'
    }
  },
  {
    path: '*',
    redirect: {
      name: 'form'
    }
  }
]
