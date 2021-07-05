
import { elMessage, elAlert } from '~/utils/tipTools'

const normalCode = [4002, 4003]

export default function ({ $axios, redirect, store }) {
  $axios.onRequest(config => {     
    const { token } = store.state
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }
  })
  $axios.onResponse(({ data, status }) => {
    if (status !== 200) {
      elMessage('网络有误', 'error')
      return Promise.reject(data)
    }
    if (data.code !== 200) {
      if (normalCode.includes(data.code)) {
        elAlert('登录失效,请重新登录').then(() => {
          redirect('/login')
        })
      } else {
        elMessage(data.message || 'Error', 'error', 3000)
      }

      return Promise.reject(data)
    } else {
      return data
    }
  })
}