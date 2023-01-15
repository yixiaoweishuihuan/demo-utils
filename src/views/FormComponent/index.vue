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
            新增系统属性
          </el-button>
          <el-button type="primary" @click="addCustProp">
            新增自定义属性
          </el-button>
        </template>
      </FormFooter>
    </el-form>
  </div>
</template>

<script>
import { formItemList } from '@/utils/mock/formComponent'
import formMixins from '@/utils/mixins/form'
import baseComponents from '@/utils/mixins/baseComponents'
export default {
  name: 'FormView',
  mixins: [formMixins, baseComponents],
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
      triggerMap: {
        input: 'blur',
        radio: 'change',
        number: 'change',
        checkbox: 'change',
        select: 'change'
      }
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
          trigger: this.triggerMap[type] || 'blur'
        }
      ]
    },
    // 新增系统属性
    addSystProp () {
      console.log('addSystProp---')
    },
    // 新增自定义属性
    addCustProp () {
      console.log('addCustProp---')
    },
    getFormList () {
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
