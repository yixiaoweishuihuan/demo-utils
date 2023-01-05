<template>
  <div class="topbar">
    demo集合
    <el-button
      size="mini"
      @click="openDrawer"
      type="primary"
      style="margin: 7px 40px 0 0; float: right"
    >
      查看描述 ->
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'TopbarView',
  data () {
    return {
    }
  },
  methods: {
    openDrawer () {
      this.$store.commit('changeDrawerState', true)
    }
  }
}
</script>

<style lang="styl" scoped>
@import './Topbar.styl';
</style>
