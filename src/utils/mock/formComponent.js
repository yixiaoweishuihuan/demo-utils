export const formItemList = {
  code: 200,
  data: {
    defaultProp: [
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
      // {
      //   prop: 'hobby',
      //   value: ['画画']
      // },
      // {
      //   prop: 'job',
      //   value: ''
      // }
    ],
    config: {
      name: {
        label: '姓名',
        type: 'input',
        typeName: '输入框',
        require: true
      },
      sex: {
        label: '性别',
        type: 'radio',
        typeName: '单选框',
        require: true,
        options: [
          { value: '男', label: '男' },
          { value: '女', label: '女' }
        ]
      },
      age: {
        label: '年龄',
        type: 'number',
        typeName: '计数器',
        require: true,
        min: 0,
        max: 150,
        label: '请输入年龄',
        disabled: false
      },
      hobby: {
        label: '爱好',
        type: 'checkbox',
        typeName: '复选框',
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
        typeName: '下拉选择框',
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
  }
}
