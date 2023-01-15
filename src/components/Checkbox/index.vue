<template>
  <el-checkbox-group v-model="mValue" :disabled="config.disabled">
      <el-checkbox v-for="(item, index) in config.options" :key="getKey(item, index)"
       :value="item.value" :label="item.label" :disabled="item.disabled">
      </el-checkbox>
  </el-checkbox-group>
</template>

<script>
/*
  这里把v-model拆开写会有bug change事件拿到的一直是空数组 具体原因还未找到
  因此这里使用了watch监听两个value的值 
*/
export default {
  name: 'CheckboxView',
  props: {
    value: {
      type: Array,
      default: () => [],
      require: true
    },
    config: {
      type: Object,
      default: () => ({
        options: [],
        disabled: false
      }),
      require: true
    }
  },
  watch: {
    value: {
      handler (newValue) {
        this.mValue = newValue
      },
      deep: true,
      immediate: true
    },
    mValue: {
      handler (newValue) {
        this.$emit('input', newValue)
      },
      deep: true,
      immediate: true
    } 
  },
  data () {
    return {
      mValue: []
    }
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
