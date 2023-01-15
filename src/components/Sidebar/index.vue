<template>
  <el-menu class="sidebar" :default-active="defaultActive" :collapse="sidebarState" collapse-transition router
  background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <el-menu-item :index="item.path" v-for="item in sideList" :key="item.name">
      <i :class="item.meta.icon"></i>
      <span slot="title">{{ item.meta.title }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import sideList from '@/router/children'
import { mapState } from 'vuex'
export default {
  name: 'SidebarView',
  data () {
    return {
      sideList: sideList.filter(item => !item.redirect)
    }
  },
  computed: {
    ...mapState(['sidebarState']),
    defaultActive () {
      return this.$route.path.replace('/', '') || 'form'
    }
  },
  methods: {}
}
</script>

<style lang="styl" scoped>
@import './index.styl';
</style>
