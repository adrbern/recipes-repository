import { createStore } from 'vuex'
import {v4 as uuid4} from 'uuid'

export default createStore({
  state: {
    
  },
  mutations: {
    toggleTodo(state, id) {
      const recipeIdx = state.recipes.findIndex(recipe => recipe.id === id)

      state.recipes[recipeIdx].completed = !state.recipes[recipeIdx].completed
    },
    createTodo(state, text= '') {
      if(text.length <= 1 ) return 

      state.recipes.push({
        id: uuid4(),
        completed: false,
        text
      })
    }
  },
  actions: {
    onLogin() {

    },
    onLogout() {
        
    }
  },
  getters: {
    pendingRecipes(state, getters, rootState) {
      return state.recipes.filter(recipe => !recipe.completed)
    },
    allRecipes (state, getters, rootState) {
      return state.recipes
    },
    completedRecipes (state, getters, rootState) {
      return state.recipes.filter(recipe => recipe.completed)
    },
    getRecipesByTab: (state, getters, rootState) => (tab) =>  {
      switch(tab){
        case 'all': return getters.allRecipes
        case 'pending': return getters.pendingRecipes
        case 'completed': return getters.completedRecipes
      }
    }
  },
  modules: {
  }
})
