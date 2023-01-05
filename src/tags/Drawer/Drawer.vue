<template>
  <el-drawer
    size="35%"
    title="问题描述："
    :visible.sync="drawerState"
    direction="rtl"
    :before-close="handleClose"
  >
    <div class="detail" v-dompurify-html="discription"></div>
  </el-drawer>
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
      this.$confirm('确认关闭？')
        .then(_ => {
          this.$store.commit('changeDrawerState', false)
        })
        .catch(_ => {})
    }
  }
}
</script>

<style lang="styl" scoped>
@import './Drawer.styl';
</style>
