<template>
    <!-- indexar componentes -->
        <div class="col-md-4 wow fadeInLeft" data-wow-delay="0.4s">
            <RecipeStep v-for="item in ToDoItems" :key="item.id">Recipe step {{item}}... </RecipeStep>
        </div>
    </template>
    
    <script>
    import RecipeStep from '../components/RecipeStep.vue';
    
    export default {
      name: 'RecipeStepContainer',
      components: {
        RecipeStep
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
