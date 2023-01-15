<template>
  <div class="form">
    <el-form :model="form" :rules="rules" ref="ruleForm" label-width="120px">
      <el-form-item label="班级" prop="class">
        <el-input v-model="form.class"></el-input>
      </el-form-item>
      <div
        class="student-item"
        v-for="(item, index) in form.students"
        :key="item.id"
      >
        <div class="title">学生{{ index + 1 }}:</div>
        <el-form-item
          label="姓名"
          :prop="`students[${index}].name`"
          :rules="getRule('姓名')"
        >
          <el-input v-model="item.name"></el-input>
        </el-form-item>
        <el-form-item
          label="性别"
          :prop="`students[${index}].sex`"
          :rules="getRule('性别', 'change')"
        >
          <el-radio-group v-model="item.sex">
            <el-radio label="男">男</el-radio>
            <el-radio label="女">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-button
          @click="delStudent(index)"
          class="del-button"
          type="primary"
          size="small"
          style="margin-left: 40px"
          >删除</el-button
        >
      </div>
      <FormFooter :submitForm="submitForm" :resetForm="resetForm">
        <template #before>
          <el-button type="primary" @click="addStudent">
            新增一个学生
          </el-button>
        </template>
      </FormFooter>
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
        students: [
          {
            name: '',
            sex: ''
          }
        ]
      },
      rules: {
        class: [{ required: true, message: '班级不能为空！', trigger: 'blur' }]
      }
    }
  },
  methods: {
    getRule (prop, trigger = 'blur') {
      return [{ required: true, message: `${prop}不能为空`, trigger: trigger }]
    },
    addStudent () {
      this.form.students.push({
        name: '',
        sex: ''
      })
    },
    delStudent (index) {
      this.form.students.splice(index, 1)
    }
  },
  created () {}
}
</script>

<style lang="styl" scoped>
@import './index.styl';
</style>
