import Form from '../views/Form/Form'
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
    path: '/form1',
    name: 'form1',
    component: Form,
    meta: {
      title: '表单校验1',
      icon: 'el-icon-loading'
    }
  }
]
