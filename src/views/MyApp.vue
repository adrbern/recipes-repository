<template>
    <div>
      <SearchRecipes>search loading...</SearchRecipes>
      <Submenu>search loading...</Submenu>
      <div class="content_middle wow bounceInLeft" data-wow-delay="0.4s">
        <div class="living_middle">
          <div class="container" >
            {{recipes }}
            <RecipeCard v-for="item in recipes" :key="item._id" :recipe="item">ficha receta</RecipeCard>
          </div>
        </div>
        <RecipeRelatedContainer>Recipe Related Container ... </RecipeRelatedContainer>    
      </div>
    </div>
</template>

<script>
import SearchRecipes from '../components/SearchRecipes.vue';
import Submenu from '../components/Submenu.vue';
import RecipeCard from '../components/RecipeCard.vue';
import RecipeRelatedContainer from '../components/RecipeRelatedContainer.vue';

import useRecipes from '../composables/useRecipes';

export default {
  name: 'Home',
  components: {
    SearchRecipes,
    Submenu,
    RecipeCard,
    RecipeRelatedContainer
  },
  setup() {
    const { filter, recipes } = useRecipes();

    //onRecipes;

    return {
      filter,
      recipes
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
