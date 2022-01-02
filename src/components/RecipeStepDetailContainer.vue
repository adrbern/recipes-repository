<template>
<!-- indexar componentes -->
    <div class="col-md-8 wow fadeInRight" data-wow-delay="0.4s">
        <div class="educate_grid">
            <RecipeStepDetail v-for="item in ToDoItems">Recipe step detail... </RecipeStepDetail>
        </div>
    </div>
</template>

<script>
import RecipeStepDetail from '../components/RecipeStepDetail.vue';

export default {
  name: 'RecipeStepContainer',
  components: {
    RecipeStepDetail
  },
  data() {
    return {
      ToDoItems: [{}, {}]
    }
  }
}
</script>

<style scoped>
</style>