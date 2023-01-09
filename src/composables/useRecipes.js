import { ref } from 'vue';
import { useStore } from 'vuex';

const useRecipes = () => {
  const store = useStore();

  //Enumerados de tipos
  const filter = ref({
    type: null
  });
  const recipes = ref([]);
  const recipesBase = ref([]);
  
  const _getRecipes = async() => {
    const resp = await store.dispatch('getRecipes', {});

    recipes.value = resp.recipes;
    recipesBase.value = resp.recipes;

    return resp;
  }

  const recipesByFilterType = (type) => {
    filter.value.type = type
    
    if (filter.value.type) {
      recipes.value = [...recipesBase.value.filter((item) => {
        return item.type === filter.value.type;
    })]
      return
    }

    recipes.value = [...recipesBase.value];
    return
  }

  _getRecipes();

  return {
    //Attr
      filter,
      recipes,
    //Getters
     // recipes: recipesByFilterType(filter.value),
    //Methods
    //  onRecipes: () => _getRecipes()
    recipesByFilterType
  }
}

export default useRecipes;