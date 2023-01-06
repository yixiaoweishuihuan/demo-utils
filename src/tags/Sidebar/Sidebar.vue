<template>
  <el-menu class="sidebar" default-active="/" :collapse="sidebarState" collapse-transition router
  background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <el-menu-item :index="item.path" v-for="item in sideList" :key="item.name">
      <i :class="item.meta.icon"></i>
      <span slot="title">{{ item.meta.title }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import sideList from '@/router/children'
export default {
  name: 'SidebarView',
  data () {
    return {
      sideList
    }
  },
  computed: {
    sidebarState () {
      return this.$store.state.sidebarState
    }
  },
  methods: {}
}
</script>

<style lang="styl" scoped>
@import './Sidebar.styl';
</style>
