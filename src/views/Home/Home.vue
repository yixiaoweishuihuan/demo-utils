<template>
  <div class="home">
    <Topbar />
    <div class="main">
      <Sidebar />
      <div class="routerContent">
        <el-scrollbar>
          <router-view />
        </el-scrollbar>
      </div>
      <Drawer />
    </div>
  </div>
</template>

<script>
import Sidebar from '@/tags/Sidebar/Sidebar'
import Topbar from '@/tags/Topbar/Topbar'
import Drawer from '@/tags/Drawer/Drawer'
export default {
  name: 'HomeView',
  components: {
    Sidebar,
    Topbar,
    Drawer
  },
  data () {
    return {}
  },

  methods: {}
}
</script>
<style lang="styl" scoped>
@import './Home.styl';
</style>
<style lang="styl">
.routerContent
  .el-scrollbar {
    height: 100%;
  }
  .el-scrollbar__wrap{
    overflow-x: hidden !important
  }
</style>
