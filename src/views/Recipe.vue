<template>
    <div>
        <Banner>banner loading...</Banner>
        <SubmenuRecipe>submenu recipe loading...</SubmenuRecipe>
        <div class="living_middle">
            <div class="container">
              {{ recipe }}
                <RecipeStepContainer>recipe step container ... </RecipeStepContainer>
                <RecipeStepDetailContainer>Recipe Step detail container ... </RecipeStepDetailContainer>
            </div>
        </div>
        <RecipeRelatedContainer>Recipe Related Container ... </RecipeRelatedContainer>
    </div>
</template>

<script>
import Banner from '../components/Banner.vue';
import SubmenuRecipe from '../components/SubmenuRecipe.vue';
import RecipeStepContainer from '../components/RecipeStepContainer.vue';
import RecipeStepDetailContainer from '../components/RecipeStepDetailContainer.vue';
import RecipeRelatedContainer from '../components/RecipeRelatedContainer.vue';

import useRecipes from '../composables/useRecipes';

export default {
  name: 'Recipe',
  components: {
    Banner,
    RecipeStepContainer,
    RecipeStepDetailContainer,
    SubmenuRecipe,
    RecipeRelatedContainer
  },
  props: {
    id: {
        type: String,
        required: true
    }
  },
  setup(props) {
    const properties = {...props};
    console.log('vista recipe ' + properties)
    // TODO recupeacion de los params
    console.log('id ficha'+ properties.id)
    const { filter/*, recipeById*/ , onRecipesById, recipe } = useRecipes();
    filter.value = {id: properties.id};

    onRecipesById(properties.id)
    return {
     // recipe: recipeById
     recipe
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>