<template>
  <div class="chat-gpt">
    <el-scrollbar ref="myScrollbar">
      <div class="main">
        <div
          class="item"
          :class="{ person: !item.isRobot }"
          v-for="(item, index) in talkLists"
          :key="index"
        >
          <span class="item-content" v-if="item.isRobot"
            ><span class="height-100"
              ><i class="el-icon-cpu mgr-10 avator"></i
            ></span>
            <i class="text-common text-robot mgr-38"
              >{{ item.text
              }}<el-button
                class="btn"
                @click="copy()"
                :data-clipboard-text="item.text"
                v-if="index != 0"
                size="mini"
                type="text"
                >复制</el-button
              ></i
            ></span
          >
          <span class="item-content" v-else
            ><i class="text-common text-person mgl-38">{{ item.text }}</i
            ><span class="height-100"
              ><i class="el-icon-s-custom mgl-10 avator"></i></span
          ></span>
        </div>
        <img v-show="loading" class="loading-png" :src="loadingPng" alt="" />
      </div>
    </el-scrollbar>
    <div class="input-content">
      <el-input
        clearable
        placeholder="请输入问题"
        v-model="question"
        @keydown.enter.native="sendMessage"
      >
        <el-button
          @click="sendMessage"
          :disabled="loading"
          slot="append"
          icon="el-icon-search"
          >发送</el-button
        >
      </el-input>
      <el-button
        class="clear-btn"
        @click="initData"
        :disabled="loading"
        type="primary"
        >清空记录</el-button
      >
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
import debounce from 'lodash.debounce'
import loadingPng from '@/assets/images/loading.png'
import ClipboardJS from 'clipboard'
export default {
  name: 'ChatGPT',
  data () {
    return {
      loadingPng,
      loading: false,
      question: '',
      talkLists: [],
      sendMessage: () => {}
    }
  },
  methods: {
    // 询问答案
    async getMessage () {
      if (this.loading) {
        return this.$message.warning('正在查找中，请稍后再试 !')
      }
      if (!this.question) {
        return this.$message.error('请输入要查询的问题 !')
      }
      this.loading = true
      const text = this.question
      this.talkLists.push({
        isRobot: false,
        text
      })
      try {
        const res = await Axios({
          url: 'http://127.0.0.1:3000',
          method: 'post',
          data: {
            message: this.question
          }
        })
        const { reply = '请求有误，请稍后再试 !' } = res?.data || ''
        // console.log('reply: ', reply)
        this.talkLists.push({
          isRobot: true,
          text: reply
        })
      } catch (error) {
        this.talkLists.push({
          isRobot: true,
          text: '服务器有误，请稍后再试 !'
        })
      } finally {
        this.loading = false
        if (this.question === text) {
          this.question = ''
        }
      }
    },
    // 复制回答
    copy () {
      const Message = this.$message
      const clipboard = new ClipboardJS('.btn')
      clipboard.on('success', function (e) {
        Message.success('复制成功 !')
        e.clearSelection()
      })
      clipboard.on('error', function () {
        Message.error('复制失败，请手动复制 !')
      })
    },
    // 滚动条定位到底部
    scrollToBottom () {
      this.$nextTick(() => {
        this.$refs.myScrollbar.wrap.scrollTop =
          this.$refs.myScrollbar.wrap.scrollHeight
      })
    },
    initData () {
      this.talkLists = [
        {
          isRobot: true,
          text: '你好, 欢迎使用chatGPT !'
        }
      ]
    }
  },
  created () {
    this.initData()
    this.sendMessage = debounce(this.getMessage, 200)
  },
  updated () {
    this.scrollToBottom()
  }
}
</script>

<style lang="styl" scoped>
@import './index.styl';
</style>
<style lang="styl">
.chat-gpt
  .el-scrollbar{
    height:calc(100% - 60px);
    padding: 20px 0
  }
</style>
