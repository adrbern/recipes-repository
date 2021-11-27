<template>
  <my-app>header loading...</my-app>
</template>









<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'my-app',
  components: {
    my-app: defineAsyncComponent(() => import('@/components/app'))
  }
}
</script>








<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
