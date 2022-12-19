import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const useSession = () => {

const store = useStore();
  const userForm = ref({
    email: '',
    password: ''
  });

  const onLogin = async() => {
    const resp = await store.dispatch('signInUser', userForm )
    return resp
  };

  const onLogout = () => {
      store.commit('logout')
  };

  const onCreateUser = async() => {
    //const resp = await store.dispatch('session/createUser', userForm )
  };

  return {
    //attr
      userForm,
    //getters
      isLogged: computed(() => store.getters['isLogged']),
      username: computed(()=> store.getters['username']),
    //methods
      onLogin: () => onLogin(),
      onLogout: () => onLogout(),
      onCreateUser: () => onCreateUser()
  };
}

export default useSession;