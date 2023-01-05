<template>
  <el-menu class="sidebar" default-active="form" :collapse="isCollapse" collapse-transition
  background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <i class="open-btn" @click="isCollapse=!isCollapse"></i>
    <el-menu-item :index="item.name" v-for="(item) in sideList" :key="item.name">
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
      isCollapse: true,
      sideList
    }
  },
  computed: {},
  methods: {}
}
</script>

<style lang="styl" scoped>
@import './Sidebar.styl';
</style>
