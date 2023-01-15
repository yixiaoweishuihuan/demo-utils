<template>
  <div class="form-footer pdl-40 pdr-40 text-center">
    <slot name="before"></slot>
    <el-button type="primary" @click="submitForm('ruleForm')">
      立即创建
    </el-button>
    <slot></slot>
    <el-button @click="resetForm('ruleForm')"> 重置 </el-button>
    <slot name="after"></slot>
  </div>
</template>

<script>
export default {
  name: 'FormFooter',
  props: {
    value: {
      type: Number,
      default: 0
    },
    submitForm: {
      type: Function,
      default: () => {}
    },
    resetForm: {
      type: Function,
      default: () => {}
    }
  },
  components: {},
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="styl" scoped>
@import './index.styl';
</style>
