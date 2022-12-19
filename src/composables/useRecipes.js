import { ref } from 'vue';
import axios from 'axios'


const useRecipes = (initialValue = 1) => {
/* PARAMETROS DE USUARIO LOGADo

    const users = ref([])
  const isLoading = ref(true)
  const currentPage = ref(1)
  const errorMessage = ref()
*/
  const getRecipes = async(page = 1) => {
      if(page<= 0) page = 1

      isLoading.value = true;
      const {data} = await axios.get(`https://reqres.in/api/users`, {
          params: { page }
      })

      if(data.data.length > 0) {
          users.value = data.data;
          currentPage.value = page;
          errorMessage.value = null;
      } else if (currentPage.value > 0) {
          errorMessage.value = 'No hay mas usuarios';
      }

      isLoading.value = false
  }

  getRecipes(initialValue);

  return {
      recipes,
      isLoading,
      currentPage,
      errorMessage,
    
      nextPage: () => getRecipes(currentPage.value + 1),
      prevtPage: () => getRecipes(currentPage.value - 1)
  }
}

export default useRecipes;