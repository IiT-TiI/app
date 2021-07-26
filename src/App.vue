<template>
  <div>hi
    <router-link to="/">test</router-link>|
    <router-link to="/xxx">test2</router-link>
  </div>
  <hr>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>
