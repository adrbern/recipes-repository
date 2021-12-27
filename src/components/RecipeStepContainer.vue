<template>
<!-- indexar componentes -->
    <div class="col-md-4 wow fadeInLeft" data-wow-delay="0.4s">
        <RecipeStep>Recipe step ... </RecipeStep>
        <RecipeStep>Recipe step ... </RecipeStep>
        <RecipeStep>Recipe step ... </RecipeStep>
        <RecipeStep>Recipe step ... </RecipeStep>
        <RecipeStep>Recipe step ... </RecipeStep>
    </div>
</template>

<script>
import RecipeStep from '../components/RecipeStep.vue';

export default {
  name: 'RecipeStepContainer',
  components: {
    RecipeStep
  }
}
</script>

<style scoped>
</style>