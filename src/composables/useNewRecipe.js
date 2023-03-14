import { ref/*, computed*/ } from 'vue';
import { useStore } from 'vuex';

const useSession = () => {
  const store = useStore();
  
  const resgistreRecipe = ref({
    name: 'Nombre',
    type: 'Tipo',
    description: 'Descripcion',
    persons: 'Personas'
  });

  const resgistreIngredients = ref([]); // { ingredientsId, types, sizes }

  const resgistreSteps = ref([]); // { titles, imgs, descriptions, times }

  const _nameValid = (item) => {
      return item.element && (item.element !== '') && (item.element !== item.default);
  };

  const _fieldsValid = (type) => {
    // type --> recipe, ingredients, steps
    const typeMap = {
      recipe: resgistreRecipe.value,
      ingredients: resgistreIngredients.value,
      steps: resgistreSteps.value,
    }
    const validForm = {
      recipe: () => {
        return {
          name: _nameValid({element: typeMap[type].name, default: 'Nombre'}),
          type: _nameValid({element:typeMap[type].type, default: 'Tipo'}),
          description: _nameValid({element:typeMap[type].description, default: 'Descripcion'}),
          persons: _numberValid({element:typeMap[type].persons, default: 'Personas'}),
        }
      }, 
      ingredients: () => {
        return {
          name: _nameValid({element: typeMap[type].name, default: 'Nombre'}),
          type: _nameValid({element:typeMap[type].type, default: 'Tipo'}),
          sise: _nameValid({element:typeMap[type].description, default: 'Medida'}),
        }
      }, 
      steps: () => {
        return {
          title: _nameValid({element: typeMap[type].name, default: 'Nombre'}),
          img: _nameValid({element:typeMap[type].type, default: 'Tipo'}),
          description: _nameValid({element:typeMap[type].description, default: 'Descripcion'}),
          time: _numberValid({element:typeMap[type].persons, default: 'Tiempo'}),
        }
      }, 
    }

      //return _nameValid && _emailValid && _passwordValid;
      return  validForm[type];
  };

  const onRecipeForm = async() => {
    _fieldsValid('recipe');
  }
  const onIngredientsForm = async() => {
    _fieldsValid('recipe');
  } 
  const onStepsForm = async() => {
    _fieldsValid('recipe');
  } 

  const onNewRecipe = async() => {
    let resp = null;
  
   // if (_fieldsValid()) {
      resp = await store.dispatch('registerUser', resgistreForm);
    //}
    
    return resp;
  };

  return {
    //attr
    resgistreRecipe,
    resgistreIngredients,
    resgistreSteps,
    //getters
    //methods
    onRecipeForm: () => onRecipeForm(),
    onIngredientsForm: () => onIngredientsForm(),
    onStepsForm: () => onStepsForm(),
    onNewRecipe: () => onNewRecipe()
  };
}

export default useSession;