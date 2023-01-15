<template>
  <div class="drawer-content">
    <!-- size="auto" -->
    <el-drawer
      custom-class="drawer-cust"
      size="70%"
      title="问题描述："
      :visible.sync="drawerState"
      direction="rtl"
      :before-close="handleClose"
    >
      <el-scrollbar>
        <div class="detail" v-dompurify-html="discription"></div>
      </el-scrollbar>
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
    ...mapState(['discription']),
    drawerState () {
      return this.$store.state.drawerState
    }
  },
  methods: {
    handleClose () {
      this.$store.commit('changeDrawerState')
    }
  }
}
</script>

<style lang="styl" scoped>
@import './index.styl';
</style>
<style lang="styl">
.drawer-content
  .drawer-cust {
    background: #f5f5f5
  }
</style>
