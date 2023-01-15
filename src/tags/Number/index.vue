<template>
  <el-input-number :value="value" @change="(val) => $emit('input', val)"
   :min="config.min" :max="config.max" :label="config.label" :disabled="config.disabled">
  </el-input-number>
</template>

<script>
export default {
  name: 'NumberView',
  props: {
    value: {
      type: Number,
      default: 0,
      require: true
    },
    config: {
      type: Object,
      default: () => ({
        min: -Infinity,
        max: Infinity,
        label: '请输入数值',
        disabled: false
      }),
      require: true
    }
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="styl" scoped>
@import './index.styl';
</style>
