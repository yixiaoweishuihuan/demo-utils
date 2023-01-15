<template>
  <el-select :value="value" @change="(val) => $emit('input', val)" :placeholder="config.placeholder"
     :disabled="config.disabled" :multiple="config.multiple" :clearable="config.clearable">
    <el-option
      v-for="(item, index) in config.options"
      :key="getKey(item, index)"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled">
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: 'SelectView',
  props: {
    value: {
      type: [Number, String, Boolean, Array],
      default: '',
      require: true
    },
    config: {
      type: Object,
      default: () => ({
        options: [],
        placeholder: '请选择',
        disabled: false,
        multiple: false,
        clearable: false
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
  }
}
</script>

<style lang="styl" scoped>
@import './index.styl';
</style>
