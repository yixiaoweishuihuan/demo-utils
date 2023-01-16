<template>
  <div class="form">
    <el-form :model="form" :rules="rules" ref="ruleForm" label-width="120px">
      <el-form-item label="班级" prop="class">
        <el-input v-model="form.class"></el-input>
      </el-form-item>

      <el-form-item
        v-for="(formItem, index) in form.students"
        :key="formItem.prop"
        :label="getLabel(formItem.prop)"
        :prop="`students[${index}].value`"
        :rules="getRule(config[formItem.prop])">
        <component :is="comMap[config[formItem.prop]['type']]" v-model="formItem.value" :config="config[formItem.prop]">
        </component>
      </el-form-item>

      <FormFooter :submitForm="submitForm" :resetForm="resetForm">
        <template #before>
          <el-button type="primary" @click="addSystProp">
            添加系统属性
          </el-button>
          <el-button type="primary" @click="addCustProp">
            添加自定义属性
          </el-button>
        </template>
      </FormFooter>
    </el-form>
    <AddDialog v-model="addDialogShow" :config="config" :propOready="form.students.map(item => item.prop)"  @selectLabel="selectLabel" />
  </div>
</template>

<script>
import { formItemList } from '@/utils/mock/formComponent'
import formMixins from '@/utils/mixins/form'
import baseCompo from '@/utils/mixins/baseCompo'
import AddDialog from '@/tags/FormComponent/AddDialog'
export default {
  name: 'FormView',
  mixins: [formMixins, baseCompo],
  components: {
    AddDialog
  },
  data () {
    return {
      form: {
        class: '',
        students: []
      },
      config: {},
      rules: {
        class: [{ required: true, message: '班级不能为空！', trigger: 'blur' }]
      },
      // 组件触发校验的方式
      compMap: {
        input: {
          trigger: 'blur',
          initVal: '' 
        },
        radio: {
          trigger: 'change',
          initVal: '' 
        },
        number: {
          trigger: 'change',
          initVal: 0
        },
        checkbox: {
          trigger: 'change',
          initVal: []
        },
        select: {
          trigger: 'change',
          initVal: ''
        }
      },
      addDialogShow: false
    }
  },
  methods: {
    getLabel (prop) {
      return this.config[prop]?.label || '未知属性'
    },
    getRule ({ require, label, type }) {
      return [
        {
          required: require,
          message: `${label}不能为空`,
          trigger: this.compMap[type]?.trigger || 'blur'
        }
      ]
    },
    // 新增系统属性
    addSystProp () {
      this.addDialogShow = true
    },
    // 新增自定义属性
    addCustProp () {
      console.log('addCustProp---')
    },
    selectLabel (form) {
      this.form.students.push({
        prop: form.prop,
        value: this.compMap[form.type].initVal
      })
    },
    getFormList () {
      // 模拟接口
      setTimeout(() => {
        if (formItemList.code === 200) {
          const { defaultProp, config } = formItemList.data
          console.log('res---: ', formItemList.data)
          this.form.students = defaultProp || []
          this.config = config
        }
      }, 500)
    }
  },
  mounted () {
    this.getFormList()
  }
}
</script>

<style lang="styl" scoped>
@import './index.styl';
</style>
