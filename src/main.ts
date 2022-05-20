import { createApp } from 'vue'
import App from './App.vue'
import { bootstrom } from '@/bootstrap'
// import { http } from './http'
const app = createApp(App)
bootstrom(app)
// http.get('/111')
// http.post('/222')
// http.put('/333')
// http.patch('/444')
// http.delete('/555')
// http.uploadFile('/6666')
// let f = new FormData()
// http.post('/222', { data: { name: 'xxx' } })
// http.require({
//   url: '/111',
//   method: 'get',
//   params: { name: 'get' },
// })
// http.require({
//   url: '/222',
//   method: 'POST',
//   data: { name: 'post' },
// })
// http.get('/get', { name: 'get' })
// http.delete(
//   '/delete',
//   { name: 'delete' },
//   {
//     requestOptions: {
//       ignoreRequest: true,
//     },
//   },
// )
// http.delete(
//   '/delete',
//   { name: 'delete' },
//   {
//     requestOptions: {
//       ignoreRequest: true,
//     },
//   },
// )
// let n = new FormData()
// n.append('n', 'xx')
// http.uploadFile('/post', n)
