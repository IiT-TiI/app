<template>
  <router-view></router-view>
</template>

<script lang="ts">
import {provide,ref} from 'vue'
export default {
  name: 'App',
  setup(){
    const width = document.documentElement.clientWidth
    const asideVisiable = ref(width > 500 ? true:false)
    provide('asideVisiable',asideVisiable)
  }
}
</script>
