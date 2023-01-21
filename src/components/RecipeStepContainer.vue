<template>
    <!-- indexar componentes -->
        <div class="col-md-4 wow fadeInLeft" data-wow-delay="0.4s">
            <RecipeStep v-for="item in properties.ingredients" :key="item.id" :name="item.name" :type="item.type" :size="item.size">Recipe step {{item}}... </RecipeStep>
        </div>
    </template>
    
    <script>
    import RecipeStep from '../components/RecipeStep.vue';
    
    export default {
      name: 'RecipeStepContainer',
      components: {
        RecipeStep
      },
      /*data() {
        return {
          ToDoItems: [{}, {}]
        }
      }*/
      props: {
        ingredients: {
          type: Array,
          required: true,
        }
      },
      setup(props) {
        console.log('RECIPES STEP CONTAINER' + props)
        const properties = {...props};
        console.log(properties)
        return {
          properties
        }
      }
    }
    </script>
    
    <style scoped>
    </style>
