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
  }
}
