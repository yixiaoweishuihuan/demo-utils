<template>
  <el-dialog
    title="添加系统属性"
    :visible.sync="dialogVisible"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    width="50%"
  >
    <el-form ref="form" :model="form" label-width="100px" :rules="rules">
      <el-form-item label="属性名称：" prop="label">
        <el-select v-model="form.label" placeholder="请选择属性名称" @change="selectLabel">
          <el-option
            v-for="item in Object.keys(config)"
            :disabled="propOready.includes(item)"
            :key="item"
            :value="item"
            :label="config[item].label"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item v-if="form.label" label="属性字段：" prop="prop">
        <el-select v-model="form.prop" disabled>
          <el-option
            v-for="item in Object.keys(config)"
            :key="item"
            :value="item"
            :label="item"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item v-if="form.label" label="属性类型：" prop="type">
        <el-select v-model="form.type" disabled>
          <el-option
            v-for="item in Object.values(config)"
            :key="item.type"
            :value="item.type"
            :label="item.typeName"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item v-if="form.label" label="是否必填：" prop="require">
        <el-radio-group v-model="form.require" disabled>
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="cancel('form')">取 消</el-button>
      <el-button type="primary" @click="submitForm('form')">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'AddDialog',
  props: {
    value: {
      type: Boolean,
      default: false,
      require: true
    },
    config: {
      type: Object,
      default: () => ({}),
      require: true
    },
    propOready: {
      type: Array,
      default: () => [],
      require: true
    }
  },
  data () {
    return {
      dialogVisible: false,
      form: {
        label: '', 
        prop: '',
        type: '',
        require: ''
      },
      rules: {
        label: [
          { required: true, message: '请选择属性名称', trigger: 'change' }
        ],
        prop: [
          { required: false, message: '请选择属性字段', trigger: 'change' }
        ],
        type: [
          { required: false, message: '请选择属性类型', trigger: 'change' }
        ],
        require: [
          { required: false, message: '请选择是否必填', trigger: 'change' }
        ]
      }
    }
  },
  watch: {
    value (newVal) {
      this.dialogVisible = newVal
    },
    dialogVisible (newVal) {
      this.$emit('input', newVal)
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message({
            type: 'success',
            message: '添加成功！'
          })
          this.$emit('selectLabel', this.form)
          this.cancel(formName)
        } else {
          return false
        }
      })
    },
    cancel (formName) {
      this.$refs[formName].resetFields()
      this.dialogVisible = false
    },
    selectLabel (val) {
      let { type, require } = this.config[val]
      this.form.prop = val
      this.form.type = type
      this.form.require = require
    }
  },
  created () {}
}
</script>

<style lang="styl" scoped>
@import './index.styl';
</style>
