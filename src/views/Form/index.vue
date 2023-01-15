<template>
  <div class="form">
    <el-form :model="form" :rules="rules" ref="ruleForm" label-width="120px">
      <el-form-item label="班级" prop="class">
        <el-input v-model="form.class"></el-input>
      </el-form-item>
      <div class="title">学生1:</div>
      <!-- <el-form-item label="姓名" prop="students1.name">
        <el-input v-model="form.students1.name"></el-input>
      </el-form-item> -->
      <el-form-item label="姓名" prop="students1.name" :rules="getRule('姓名')">
        <el-input v-model="form.students1.name"></el-input>
      </el-form-item>
      <el-form-item
        label="性别"
        prop="students1.sex"
        :rules="getRule('性别', 'change')"
      >
        <el-select
          v-model="form.students1.sex"
          clearable
          placeholder="请选择性别"
        >
          <el-option label="男" value="0"></el-option>
          <el-option label="女" value="1"></el-option>
        </el-select>
      </el-form-item>
      <div class="title">学生2:</div>
      <el-form-item label="姓名" prop="students2.name" :rules="getRule('姓名')">
        <el-input v-model="form.students2.name"></el-input>
      </el-form-item>
      <el-form-item
        label="性别"
        prop="students2.sex"
        :rules="getRule('性别', 'change')"
      >
        <!-- <el-input v-model="form.students2.sex"></el-input> -->
        <el-radio-group v-model="form.students2.sex">
          <el-radio :label="0">男</el-radio>
          <el-radio :label="1">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <FormFooter :submitForm="submitForm" :resetForm="resetForm" />
    </el-form>
  </div>
</template>

<script>
import formMixins from '@/utils/mixins/form'
export default {
  name: 'FormView',
  mixins: [formMixins],
  data () {
    return {
      form: {
        class: '',
        students1: {
          name: '',
          sex: ''
        },
        students2: {
          name: '',
          sex: ''
        }
      },
      rules: {
        class: [{ required: true, message: '班级不能为空！', trigger: 'blur' }]
        // 或者
        // ['students1.name']: [{ required: true, message: '姓名1不能为空！', trigger: 'blur' }]
      }
    }
  },
  methods: {
    getRule (prop, trigger = 'blur') {
      return [{ required: true, message: `${prop}不能为空`, trigger: trigger }]
    }
  }
}
</script>

<style lang="styl" scoped>
@import './index.styl';
</style>
