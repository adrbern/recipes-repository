<template>
    <!-- parametrizar texto y indexar componentes-->
        <div class="living_bottom">
            <div class="container">
                <h2 class="title block-title">Recetas Relacionadas</h2>
                <RecipeRelatedCard v-for="(item, index) in ToDoItems" :align="index">receta relacionada loading ... </RecipeRelatedCard>
            </div>
        </div>
    </template>
    <script>
    import RecipeRelatedCard from '../components/RecipeRelatedCard.vue';
    
    export default {
      name: 'RecipeRelatedContainer',
      components: {
          RecipeRelatedCard
      },
      data() {
        return {
          ToDoItems: [{}, {}]
        }
      }
    }
    </script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
    </style>