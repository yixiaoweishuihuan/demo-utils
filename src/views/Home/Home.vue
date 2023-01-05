<template>
  <div class="home">
    <div class="topbar">
      demo集合
      <el-button size="mini"
        @click="drawer = true"
        type="primary"
        style="margin: 7px 20px 0 0; float: right;"
      >
        查看描述 ->
      </el-button>
    </div>
    <div class="main">
      <div class="sidebar">我是侧边栏</div>
      <div class="routerContent">
        <el-scrollbar>
          <router-view></router-view>
        </el-scrollbar>
      </div>
      <el-drawer
        size="50%"
        title="问题描述："
        :visible.sync="drawer"
        :direction="direction"
        :before-close="handleClose"
      >
        <div class="detail" style="padding: 0 20px" v-html="discription"></div>
      </el-drawer>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeView',
  components: {},
  data () {
    return {
      drawer: false,
      direction: 'rtl'
    }
  },
  computed: {
    ...mapState('form', ['discription'])
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  }
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
