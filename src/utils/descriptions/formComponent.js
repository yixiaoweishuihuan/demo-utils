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
        prop: 'age',
        value: 0
      },
      {
        prop: 'hobby',
        value: ['画画']
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
        require: true,
        options: [
          { value: '男', label: '男' },
          { value: '女', label: '女' }
        ]
      },
      age: {
        label: '年龄',
        type: 'number',
        require: true,
        min: 0,
        max: 150,
        label: '请输入年龄',
        disabled: false
      },
      hobby: {
        label: '爱好',
        type: 'checkbox',
        require: false,
        options: [
          { value: '书法', label: '书法' },
          { value: '画画', label: '画画' },
          { value: '阅读', label: '阅读' },
          { value: '爬山', label: '爬山' },
          { value: '打球', label: '打球' },
          { value: '玩游戏', label: '玩游戏' },
          { value: '其他', label: '其他' }
        ]
      },
      job: {
        label: '职位',
        type: 'select',
        require: false,
        options: [
          { value: 12, label: '班长' },
          { value: 13, label: '副班长' },
          { value: 14, label: '纪律委员' },
          { value: 11, label: '学习委员' },
          { value: 10, label: '体育委员' },
          { value: 15, label: '劳动委员' },
          { value: 16, label: '小组长' }
        ],
        clearable: true
      }
    }
  </pre>
  `
}
