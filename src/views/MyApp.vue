<template>
    <div>
        <div class="banner wow fadeInUp" data-wow-delay="0.4s">
           <SearchRecipes>search loading...</SearchRecipes>
        </div>

        <!--Submenu>submenu loading...</Submenu-->

            <div id="CUERPO">Loading...</div>

            <div class="content_middle wow bounceInLeft" data-wow-delay="0.4s">
            <div class="container">
                <router-outlet></router-outlet>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderPage from '../components/HeaderPage.vue';
import SearchRecipes from '../components/SearchRecipes.vue'
import Submenu from '../components/Submenu.vue';
import FooterPage from '../components/FooterPage.vue'

export default {
  name: 'MyApp',
  components: {
    HeaderPage,
    SearchRecipes,
    Submenu,
    FooterPage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
