<template>
    <div>
      <SearchRecipes>search loading...</SearchRecipes>
      <Submenu>search loading...</Submenu>
      <div class="content_middle wow bounceInLeft" data-wow-delay="0.4s">
        <div class="living_middle">
          <div class="container">
            <RecipeCard v-for="item in ToDoItems" :key="item.id">ficha receta</RecipeCard>
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

export default {
  name: 'Home',
  components: {
    SearchRecipes,
    Submenu,
    RecipeCard,
    RecipeRelatedContainer
  },
  setup() {
    return {
      ToDoItems: [{}, {}]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
