<template>
  <div class="topbar">
    <i class="el-icon-s-unfold fs-18  pointer sidebar-icon" :class="{'sidebar-icon-rocate': !sidebarState}" :title="sidebarState?'展开':'收起'" @click="changeSidebar"></i>
    <span class="title">{{title}}</span>
    <el-button size="mini" @click="openDrawer" type="primary">查看描述</el-button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'TopbarView',
  data () {
    return {
    }
  },
  computed: {
    title () {
      return this.$route.meta.title || 'demo集合'
    },
    ...mapState(['sidebarState'])
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
@import './index.styl';
</style>
