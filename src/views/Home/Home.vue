<template>
  <div class="home">
    <el-container class="container-main">
      <el-header height="45px">
        <Topbar />
      </el-header>
      <el-container class="container-view">
        <el-aside width="auto">
          <Sidebar />
        </el-aside>
        <el-main>
          <el-scrollbar>
            <router-view class="pd-40" />
            <Drawer />
          </el-scrollbar>
        </el-main>
      </el-container>
      <el-footer height="45px">
        <Footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Sidebar from '@/tags/Sidebar/Sidebar'
import Topbar from '@/tags/Topbar/Topbar'
import Drawer from '@/tags/Drawer/Drawer'
import Footer from '@/tags/Footer/Footer'
export default {
  name: 'HomeView',
  components: {
    Sidebar,
    Topbar,
    Drawer,
    Footer
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
.home
  .el-scrollbar {
    height: 100%;
  }
  .el-scrollbar__wrap  {
    overflow-x: hidden;
  }
</style>
