<template>
  <el-input :value="value" @input="(val)=>$emit('input', val)" :disabled="config.disabled" :clearable="config.clearable"
   :placeholder="config.placeholder">
  </el-input>
</template>

<script>
export default {
  name: 'InputView',
  props: {
    value: {
      type: String,
      default: '',
      require: true
    },
    config: {
      type: Object,
      default: () => ({
        placeholder: '请输入内容',
        disabled: false,
        clearable: false
      }),
      require: false
    }
  },
  data () {
    return {
    }
  },
  methods: {}
}
</script>

<style lang="styl" scoped>
@import './index.styl';
</style>
