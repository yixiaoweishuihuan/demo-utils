<template>
  <div class="topbar">
    <i class="el-icon-s-unfold fs-18  pointer" @click="changeSidebar"></i>
    <span class="title">{{title}}</span>
    <el-button size="mini" @click="openDrawer" type="primary">查看详情</el-button>
  </div>
</template>

<script>
export default {
  name: 'TopbarView',
  data () {
    return {
    }
  },
  computed: {
    title () {
      return this.$route.meta.title || 'demo集合'
    }
  },
  methods: {
    openDrawer () {
      this.$store.commit('changeDrawerState')
    },
    changeSidebar () {
      this.$store.commit('changeSidebar')
    }
  }
}
</script>

<style lang="styl" scoped>
@import './Topbar.styl';
</style>
