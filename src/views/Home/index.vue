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
            <router-view class="pd-40 mgb-40" />
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
import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'
import Footer from '@/components/Footer'
import Drawer from '@/components/Drawer'
export default {
  name: 'HomeView',
  components: {
    Sidebar,
    Topbar,
    Footer,
    Drawer
  },
  data () {
    return {}
  },

  methods: {}
}
</script>
<style lang="styl" scoped>
@import './index.styl';
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
