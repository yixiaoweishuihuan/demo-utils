export default {
  name: 'formComponent',
  description: `
  <pre> 
    问题描述: 动态表单提取组件 组件类型动态匹配
    目前任务：
      1. 封装 '添加系统属性'弹窗 (放在tags文件夹下)
        表单字段：'属性名称'----- 普通下拉选择框、单选、选择后将其他属性带出来(readonly)
        其他字段: 属性字段:prop、属性类型:type、是否必填:require

      2. 封装 '添加自定义属性'弹窗 (放在tags文件夹下)
        表单字段：属性名称:label、属性字段:prop、属性类型:type、是否必填:require

      3. 分别封装input、radio、checkbox、select等通用组件 (放在components文件夹下)
    
    表单的数据结构如下:
    students: [
      {
        prop: 'name',
        value: ''
      },
      {
        prop: 'sex',
        value: '男'
      },
      {
        prop: 'hobby',
        value: ''
      },
      {
        prop: 'job',
        value: ''
      }
    ],
    config: {
      name: {
        label: '姓名',
        type: 'input', 
        require: true
      },
      sex: {
        label: '性别',
        type: 'radio',
        require: true
      },
      age: {
        label: '年龄',
        type: 'number',
        require: true
      },
      hobby: {
        label: '爱好',
        type: 'checkbox',
        require: false
      },
      job: {
        label: '职位',
        type: 'select',
        require: false
      }
    }
  </pre>
  `
}
