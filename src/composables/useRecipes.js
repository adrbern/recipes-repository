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
  
  const _getRecipes = async() => {
    const resp = await store.dispatch('getRecipes', {});

    return resp;
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
     recipeById: computed(() => {
      console.log('computed')
      const prueba = store.getters['getRecipeById'](filter.value.id);
      console.log(prueba)
      return prueba;
    }),
    //Methods
    //  onRecipes: () => _getRecipes()
    recipesByFilterType
  }
}

export default useRecipes;