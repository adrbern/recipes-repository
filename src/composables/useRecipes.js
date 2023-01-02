import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const useRecipes = () => {
  const store = useStore();

  //Enumerados de tipos
  const filter = ref({});
  
  const _getRecipes = async() => {
    const resp = await store.dispatch('getRecipes', filter)
    return resp;
  }

  _getRecipes();

  return {
    //Attr
      filter,
    //Getters
      recipes: computed(() => store.getters['recipesList']),
    //Methods
    //  onRecipes: () => _getRecipes()
  }
}

export default useRecipes;