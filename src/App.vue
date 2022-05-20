<template>
  <NConfigProvider
    class="flex flex-1 animate__animated animate__bounceInDown"
    :theme="store.theme ? darkTheme : null"
    :cls-prefix="store.prefix"
    :theme-overrides="themeOverrides"
    :locale="getI1n().locale"
    :date-locale="getI1n().date"
  >
    <NGlobalStyle />
    <!-- <button @click="check">新权限</button>removeRoute
    <button @click="removeRoute">清空</button>
    <button @click="old">oldback</button>
    <button @click="newv">newback</button> -->
    <!-- class="animate__animated animate__zoomOut" -->
    <router-view />
  </NConfigProvider>
</template>
<script lang="ts" setup>
import { NConfigProvider, NGlobalStyle, darkTheme } from 'naive-ui'
import { themeStore } from '@/pinia/theme'
import { themeOverrides } from '@/naive'
import {
  zhCN,
  dateZhCN,
  enUS,
  dateEnUS,
  ruRU,
  dateRuRU,
  zhTW,
  dateZhTW,
} from 'naive-ui'
import { Locale } from './enum/locale'
// import { routeStore } from './pinia/modules/routeStore'
// import { newpermissions, oldbackpermissions, newbackpermissions } from './api'
// import { createRoutes } from './router/utils/createRoutes'
// import { removeRoute } from './router/utils/remove'
const store = themeStore()
const getI1n = () => {
  switch (store.language) {
    case Locale.RU:
      return {
        locale: ruRU,
        date: dateRuRU,
      }
    case Locale.EN:
      return {
        locale: enUS,
        date: dateEnUS,
      }
    case Locale.ZH_TW:
      return {
        locale: zhTW,
        date: dateZhTW,
      }
    default:
      return {
        locale: zhCN,
        date: dateZhCN,
      }
  }
}
// const check = async () => {
//   const store = routeStore()
//   let {
//     data: { allAuth, route },
//   } = await newpermissions()
//   removeRoute()
//   store.$patch({
//     originalData: route,
//     auth: allAuth,
//   })
//   createRoutes()
// }
// const old = async () => {
//   const store = routeStore()
//   let {
//     data: { allAuth, route },
//   } = await oldbackpermissions()
//   removeRoute()
//   store.$patch({
//     originalData: route,
//     auth: allAuth,
//   })
//   createRoutes()
// }
// const newv = async () => {
//   const store = routeStore()
//   let {
//     data: { allAuth, route },
//   } = await newbackpermissions()
//   removeRoute()
//   store.$patch({
//     originalData: route,
//     auth: allAuth,
//   })
//   createRoutes()
// }
// console.log(getI1n())
</script>
