import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const useRecipes = () => {
  const store = useStore();

  //Enumerados de tipos
  const filter = ref({
    type: null,
    id: ''
  });

  const recipes = computed(() => {
    return store.getters['recipesByType'](filter.value.type);
   })
/*
   const allIngredients = computed(() => {
    return store.getters['getAllIngredients'];
   })*/
  
  const _getIngredientListFormatted = (allIngredients, ingredientList) => {
    return ingredientList.reduce((acc, item) => {
      return [...acc, {...item, name: allIngredients.find((ingredient) => ingredient._id === item._id)?.name}] 
    }, []);
  }

  const _getRecipes = async() => {
    const resp = await store.dispatch('getRecipes', {});

    return resp;
  }

  const _getRecipesById = async(id) => {
    const respRecipe = await store.dispatch('getRecipesById', id);
        // coger el listado de ingredientes y de pasos
    let ingredients = null;

    if (!store.getters['getAllIngredients']) {
      ingredients = (await store.dispatch('getAllIngredients'))?.ingredients;
    }
    
    const all = store.getters['getAllIngredients'] || ingredients;
    // TODo se pueden paralelizar
    const respIngredientsList =  await store.dispatch('getIngredientsListById', respRecipe.recipe.list);
    const respSteps = await store.dispatch('getStepById', respRecipe.recipe.stepId);
    const ingredientListFormat = _getIngredientListFormatted(all, respIngredientsList?.ingredientsList?.ingredients);

    console.log("asdasd")
    console.log(respSteps)
    store.commit('recipeInfo', { recipe: respRecipe.recipe, ingredientsList: ingredientListFormat, steps: respSteps?.steps });
  
    return { respRecipe, respIngredientsList, respSteps };
  }
  
  const recipesByFilterType = (type) => {
    filter.value.type = type
    
    console.log('recalcular ' + recipes.value);

    return recipes.value
  }

  _getRecipes();

  return {
    //Attr
      filter,
      
    //Getters
     recipes,
     recipe: computed(() => store.getters['getRecipe']),
     recipeById: computed(() => {
      console.log('computed')
      const prueba = store.getters['getRecipeById'](filter.value.id);
      console.log(prueba)
      return prueba;
    }),
    //Methods
      onRecipesById: (id) => _getRecipesById(id),
      recipesByFilterType
  }
}

export default useRecipes;