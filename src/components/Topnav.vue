<template>
  <div class="topnav">
    <span class="toggleAside" @click="toggleAside"></span>
    <div class="logo">logo</div>
    <div class="menu">menu</div>
  </div>
</template>

<script lang="ts">
import {inject,Ref} from 'vue'
export default({
  setup(){
    const asideVisiable = inject<Ref<boolean>>('asideVisiable')
    const toggleAside = ()=>{
      asideVisiable.value = !asideVisiable.value
    }
    return {toggleAside}
  }
})
</script>

<style lang="scss" scoped>
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
  position: relative;
  >.toggleAside{
    display: none;
    position: absolute;
    left: 15px;
    width: 30px;
    height: 30px;
    background-color: aqua;
    top: 50%;
    transform: translateY(-50%);
  }
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  @media (max-width:500px) {
    >.menu{display: none;}
    >.logo{margin:0 auto}
    >.toggleAside{display: inline-block;}
  }
}
</style>
