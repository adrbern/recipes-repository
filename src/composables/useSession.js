import { ref } from 'vue';
import { useStore } from 'vuex';

const useSession = () => {

const store = useStore();

    const userForm = ref(
        email,
        password
    );

  const onLogin = async() => {
    const resp = await store.dispatch('session/signInUser', userForm )
    return resp
  }

  const onLogout = () => {
      store.commit('session/logout')
  }

  const onCreateUser = async() => {
    //const resp = await store.dispatch('session/createUser', userForm )
  }

  return {
    //attr
      userForm,
    //methods
      onLogin: () => onLogin(),
      onLogout: () => onLogout(),
      onCreateUser: () => onCreateUser()
  }
}

export default useSession;