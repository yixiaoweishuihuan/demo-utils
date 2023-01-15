<template>
  <el-radio-group :value="value" @input="(val) => $emit('input', val)" :disabled="config.disabled">
    <el-radio v-for="(item, index) in config.options" :label="item.value" :key="getKey(item, index)">{{ item.label }}</el-radio>
  </el-radio-group>
</template>

<script>
export default {
  name: 'RadioView',
  props: {
    value:{
      type: [String, Number, Boolean],
      default: '',
      require: true
    },
    config:  {
      type: Object,
      default: () => ({
        options: [],
        disabled: false
      }),
      require: true
    }
  },
  data () {
    return {}
  },
  methods: {
    getKey (item, index) {
      if (item.id !== undefined) {
        return item.id
      }
      if (item.value !== undefined) {
        return item.value
      }
      if (item.label !== undefined) {
        return item.label
      }
      return index
    }
  },
  created () {}
}
</script>

<style lang="styl" scoped>
@import './index.styl';
</style>
