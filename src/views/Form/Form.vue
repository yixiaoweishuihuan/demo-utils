<template>
  <div class="form">
    <el-form :model="form" :rules="rules" ref="ruleForm" label-width="120px">
      <el-form-item label="班级" prop="class">
        <el-input v-model="form.class"></el-input>
      </el-form-item>
      <div class="title">people1:</div>
      <!-- <el-form-item label="姓名" prop="people1.name">
        <el-input v-model="form.people1.name"></el-input>
      </el-form-item> -->
      <el-form-item label="姓名" prop="people1.name" :rules="getRule('姓名')">
        <el-input v-model="form.people1.name"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="people1.sex" :rules="getRule('性别', 'change')">
        <el-select v-model="form.people1.sex" clearable placeholder="请选择性别">
          <el-option label="男" value="0"></el-option>
          <el-option label="女" value="1"></el-option>
        </el-select>
      </el-form-item>
      <div class="title">people2:</div>
      <el-form-item label="姓名" prop="people2.name" :rules="getRule('姓名')">
        <el-input v-model="form.people2.name"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="people2.sex" :rules="getRule('性别', 'change')">
        <!-- <el-input v-model="form.people2.sex"></el-input> -->
        <el-radio-group v-model="form.people2.sex">
          <el-radio :label="0">男</el-radio>
          <el-radio :label="1">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即创建</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'FormView',
  data () {
    return {
      discription: '',
      form: {
        class: '',
        people1: {
          name: '',
          sex: ''
        },
        people2: {
          name: '',
          sex: ''
        }
      },
      rules: {
        class: [{ required: true, message: '班级不能为空！', trigger: 'blur' }]
        // 或者
        // ['people1.name']: [{ required: true, message: '姓名1不能为空！', trigger: 'blur' }]
      }
    }
  },
  methods: {
    getRule (prop, trigger = 'blur') {
      return [{ required: true, message: `${prop}不能为空`, trigger: trigger }]
    },
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('校验通过!')
        } else {
          console.log('校验不通过!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  },
  created () {
    const discription = `
    <pre> 
      问题描述: form数据结构嵌套的表单校验,
      实现行内校验或者动态校验。
      
      例如form的结构为：
      form: {
        class: '',
        people1: {
          name: '',
          sex: ''
        },
        people2: {
          name: '',
          sex: ''
        }
      }
    </pre>
    `
    this.$store.commit('form/setDiscription', discription)
  }
}
</script>

<style lang="styl" scoped>
@import './Form.styl';
</style>
