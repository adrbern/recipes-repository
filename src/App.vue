<template>
  <div>
        <HeaderPage>header loading...</HeaderPage>

        <router-view></router-view>

        <FooterPage>footer loading...</FooterPage>
    </div>
</template>

<script>
import HeaderPage from './components/HeaderPage';
import FooterPage from './components/FooterPage';

export default {
  name: 'App',
  components: {
    HeaderPage,
    FooterPage
  }
}
</script>

<style>
</style>
