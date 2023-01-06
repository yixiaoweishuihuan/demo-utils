import Form from '../views/Form/Form'
const SelectExpand = () => import(/* webpackChunkName: 'selectExpand' */ '../views/SelectExpand/SelectExpand')
export default [
  {
    path: '/',
    name: 'form',
    component: Form,
    meta: {
      title: '表单校验',
      icon: 'el-icon-edit-outline'
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
  }
]
