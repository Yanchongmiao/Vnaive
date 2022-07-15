import { createApp } from 'vue'
// import { init, testyyyy, a, b } from 'ycTest'
// console.log(init(), testyyyy(), a, b)
import App from './App.vue'
import { bootstrom } from '@/bootstrap'
import { http } from './http'
// eslint-disable-next-line no-unused-expressions
http

const app = createApp(App)
bootstrom(app)
