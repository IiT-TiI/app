<template>
  <div>
    <Topnav/>
    <div class="content">
      <aside v-if="asideVisiable">
        <ul>
          <li>组件1</li>
          <li>组件2</li>
          <li>组件3</li>
          <li>组件4</li>
        </ul>
      </aside>
      <main>主内容</main>
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
  aside{
    background-color: lightgreen;
    width: 10em;
    display: flex;
  }
  aside>ul{
    margin-left: 1em;
  }
</style>