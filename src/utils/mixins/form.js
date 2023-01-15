import FormFooter from '@/components/FormFooter'

export default {
  components: {
    FormFooter
  },
  data () {
    return {}
  },
  created () {},
  methods: {
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
  }
}
