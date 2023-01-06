<template>
  <div class="drawer-content">
    <el-drawer
      custom-class="drawer-cust"
      size="35%"
      title="问题描述："
      :visible.sync="drawerState"
      direction="rtl"
      :before-close="handleClose"
    >
      <div class="detail" v-dompurify-html="discription"></div>
    </el-drawer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'DrawerView',
  data () {
    return {}
  },
  computed: {
    ...mapState('form', ['discription']),
    drawerState () {
      return this.$store.state.drawerState
    }
  },
  methods: {
    handleClose () {
      this.$store.commit('changeDrawerState')
      // this.$confirm('确认关闭？')
      //   .then(_ => {
      //      this.$store.commit('changeDrawerState')
      //   })
      //   .catch(_ => {})
    }
  }
}
</script>

<style lang="styl" scoped>
@import './Drawer.styl';
</style>
<style lang="styl">
.drawer-content
  .drawer-cust {
    background: #f5f5f5
  }
</style>
