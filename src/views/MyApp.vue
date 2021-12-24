<template>
    <div>
      <SearchRecipes>search loading...</SearchRecipes>
      <Submenu>search loading...</Submenu>
      <div class="content_middle wow bounceInLeft" data-wow-delay="0.4s">
        <div class="living_middle">
          <div class="container">
            <RecipeCard>ficha receta</RecipeCard>
            <RecipeCard>ficha receta</RecipeCard>
            <RecipeCard>ficha receta</RecipeCard>
            <RecipeCard>ficha receta</RecipeCard>
          </div>
        </div>
        <!-- LLevarlo a un componente container seguramente -->
        <div class="living_bottom">
   	      <div class="container">
             <h2 class="title block-title">Recetas Relacionadas</h2>
             <RecipeRelatedCard>receta relacionada loading ... </RecipeRelatedCard>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import HeaderPage from '../components/HeaderPage.vue';
import SearchRecipes from '../components/SearchRecipes.vue';
import Submenu from '../components/Submenu.vue';
import RecipeCard from '../components/RecipeCard.vue';
import RecipeRelatedCard from '../components/RecipeRelatedCard.vue';
import FooterPage from '../components/FooterPage.vue';

export default {
  name: 'Home',
  components: {
    HeaderPage,
    SearchRecipes,
    Submenu,
    RecipeCard,
    RecipeRelatedCard,
    FooterPage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
