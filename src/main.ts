import { createApp } from 'vue'
// import { init, testyyyy, a, b } from 'ycTest'
// console.log(init(), testyyyy(), a, b)
import App from './App.vue'
import { bootstrom } from '@/bootstrap'
import { http } from './http'
// eslint-disable-next-line no-unused-expressions

async function get() {
  http
    .get('/api', { te: '11' }, { requestOptions: { ignoreRequest: false } })
    .catch(() => {})
  http
    .post('/api', { te: '22' }, { requestOptions: { ignoreRequest: false } })
    .catch(() => {})
  http
    .patch('/api', { te: '33' }, { requestOptions: { ignoreRequest: false } })
    .catch(() => {})
  http
    .put('/api', { te: '44' }, { requestOptions: { ignoreRequest: false } })
    .catch(() => {})
  http
    .delete('/api', { te: '55' }, { requestOptions: { ignoreRequest: false } })
    .catch(() => {})
  http.uploadFile('/api', new FormData()).catch(() => {})
  http
    .options('/api', { te: '66' }, { requestOptions: { ignoreRequest: false } })
    .catch(() => {})
  //   http
  //     .require(
  //       { url: '', method: 'GET' },
  //       { requestOptions: { ignoreRequest: false } },
  //     )
  //     .catch(() => {})
}
get()
const app = createApp(App)
bootstrom(app)
