<template>
  <div class="layout">
    <Topnav class="nav"/>
    <div class="content">
      <aside v-if="asideVisiable">
        <ul>
          <li><router-link to="/doc/switch">switch</router-link></li>
          <li><router-link to="/doc/button">button</router-link></li>
          <li><router-link to="/doc/dialog">dialog</router-link></li>
          <li><router-link to="/doc/slide">slide</router-link></li>
          <li><router-link to="/doc/tabs">tabs</router-link></li>
        </ul>
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
import {inject,Ref} from 'vue'
export default {
  components: { Topnav },
  setup(){
    const asideVisiable = inject<Ref<boolean>>('asideVisiable')
    return {asideVisiable}
  }
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0; 
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    background: lightgreen;
  }
}
aside{
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  background-color: lightgreen;
  width: 10em;
  display: flex;
}
aside>ul{
  margin-left: 1em;
}
main {
  overflow: auto;
}
</style>