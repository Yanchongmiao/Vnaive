import { PendingType } from '@/type/http'
import { createErrorMsg } from '@/utils/message'
import { defineStore } from 'pinia'
import { toRaw } from 'vue'
interface removeSingle {
  msg: Object
  id: String
}
export const axiosRequestStore = defineStore({
  id: 'axiosRequest',
  state: () => ({
    pending: [] as Array<PendingType>,
  }),
  getters: {
    // 获取所有请求
    getAllPending(state: { pending: Array<PendingType> }) {
      return toRaw(state.pending)
    },
  },
  actions: {
    setPending(value: PendingType) {
      this.pending.push(value)
    },
    // 移除单条
    removePending(item: number) {
      this.pending.splice(item, 1)
    },
    // 匹配单条取消
    cancelSingle(value: removeSingle) {
      const list: Array<any> = this.pending.filter((i) => i.id === value.id)
      if (list.length > 0) {
        list[0].cancel(value.msg || '已取消')
        this.pending.splice(
          this.pending.findIndex((i) => i.id === value.id),
          1,
        )
      } else {
        createErrorMsg({
          title: '取消异常',
          content: '未匹配到取消请求',
        })
      }
    },
  },
})
