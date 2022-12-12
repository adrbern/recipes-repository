<template>
  <!--div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link :to="{name: 'counter'}" >Counter</router-link> | 
    <router-link :to="{name: 'users'}" >Users</router-link> | 
    <router-link :to="{name: 'pokemon-search'}" >Search Pokemon</router-link> | 
    <router-link :to="{name: 'todo'}" >Todo</router-link> | 
    <router-link :to="{name: 'slots'}" >Slots</router-link>
  </div-->

  <div>
    <HeaderPage>header loading...</HeaderPage>

    <router-view v-slot="{Component, route}">
      <keep-alive>
        <component :is="Component" :key="route.name"></component>
      </keep-alive>
    </router-view>

    <FooterPage>footer loading...</FooterPage>
  </div>
</template>

<script>
import HeaderPage from '../components/HeaderPage.vue';
import FooterPage from '../components/FooterPage.vue'

export default {
    components: {
      HeaderPage,
      FooterPage
    },
    setup() {
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
