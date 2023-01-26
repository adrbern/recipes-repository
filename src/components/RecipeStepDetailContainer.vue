<template>
    <!-- indexar componentes -->
        <div class="col-md-8 wow fadeInRight" data-wow-delay="0.4s">
            <div class="educate_grid">
                <RecipeStepDetail v-for="step in properties.steps" :key="step.id" :title="step.title" :description="step.description" :time="step.time" :img="step.img">Recipe step detail... </RecipeStepDetail>
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
      props: {
        steps: {
          type: Array,
          required: true,
        }
      },
      setup(props) {
        console.log('RECIPES STEP Detail CONTAINER' + props)
        const properties = { ...props };
        console.log(properties)
        return {
          properties
        }
      }
    }
    </script>
    
    <style scoped>
    </style>
