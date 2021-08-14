<template>
  <ul @click="changePic">
    <li>test</li>
    <li>test</li>
    <li>test</li>
    <li>test</li>
  </ul>
</template>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  background: grey;
  border-radius: $h/2;
  position: relative;
}
span {
  position: absolute;
  top: 2px;
  left: 2px;
  transition: left 250ms;
  height: $h2;
  width: $h2;
  background: white;
  border-radius: $h2 / 2;
}
button.checked {
  background: blue;
  > span {
    left: calc(100% - #{$h2} - 2px);
  }
}
button:focus {
  outline: none;
}
</style>

<script lang="ts">
import { ref } from "vue";

export default {
  setup(props, context) {
    const changePic = () => {
        console.log(props)
    };
    return { changePic };
  },
};
</script>
