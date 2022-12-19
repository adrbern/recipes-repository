import { ref/*, computed*/ } from 'vue';
import { useStore } from 'vuex';

const useSession = () => {
  const store = useStore();
  
  const resgistreForm = ref({
    username: 'Nombre',
    email: 'Email',
    password: 'Contraseña',
    passwordConfirm: 'Confirmar contaseña'
  });

  const _nameValid = () => {
      return resgistreForm.value.name && (resgistreForm.value.name !== '') && (resgistreForm.value.name !== 'Nombre');
  };
  const _emailValid = () => {
      return resgistreForm.value.email && (resgistreForm.value.email !== '') && (resgistreForm.value.email !== 'Email');
  };
  const _passwordValid = () => {
      const password = resgistreForm.value.password && (resgistreForm.value.password !== '') && (resgistreForm.value.password !== 'Contraseña');
      const passwordConfirm = resgistreForm.value.passwordConfirm && (resgistreForm.value.passwordConfirm !== '') && (resgistreForm.value.passwordConfirm !== 'Confirmar contaseña');

      return password && passwordConfirm && (resgistreForm.value.password === resgistreForm.value.passwordConfirm);
  };
  const _fieldsValid = () => {
      return _nameValid && _emailValid && _passwordValid;
  };

  const onRegister = async() => {
    let resp = null;
  
    if (_fieldsValid) {
      resp = await store.dispatch('registerUser', resgistreForm);
    }
    
    return resp;
  };

  return {
    //attr
      resgistreForm,
    //getters
    //methods
      onRegister: () => onRegister()
  };
}

export default useSession;