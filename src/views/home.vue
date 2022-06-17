<template>
  <div>主页 {{ u }}</div>
  <input type="text" v-model="u" />
</template>

<script lang="ts" setup>
const u = ref('11')
</script>

<style lang="less" scoped></style>
