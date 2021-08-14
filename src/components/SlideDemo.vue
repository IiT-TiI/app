<template>
  <div>
      slide demo
      <Slide v-model:imglist="x"/>
  </div>
</template>

<script lang="ts">
import Slide from '../lib/Slide.vue'
import { ref } from 'vue'

export default {
  components:{Slide},
  setup(){
    const x=["../asserts/logo.png","../asserts/logo.png","../asserts/logo.png","../asserts/logo.png"]
    return{x}
  }
}
</script>
