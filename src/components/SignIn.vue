<template>
    <div id="logged" v-if="isLogged"><a v-on:click="onLogout"><img src="images/logged.png"><span>{{this.username}}</span></a></div>
    <div id="loginContainer" v-else>
            <a href="#" id="loginButton"><img src="images/login.png"><span>Iniciar Sesión</span></a>
            <div id="loginBox">
                <div id="loginForm">
                    <fieldset id="body">
                        <fieldset>
                                <label for="email">Usuario</label>
                                <input type="text" name="email" id="email" v-model="userForm.email">
                        </fieldset>
                        <fieldset>
                                <label for="password">Contraseña</label>
                                <input type="password" name="password" id="password" v-model="userForm.password">
                            </fieldset>
                        <a><input type="submit" id="login" value="Iniciar " v-on:click="onLogin"></a>
                        <label for="checkbox"><input type="checkbox" id="checkbox"> <i>Recordar</i></label>
                    </fieldset>
                        <span><a href="#">Olvidaste tu contraseña?</a></span>
                </div>
            </div>
        <div class="clearfix"></div>
    </div>
</template>

<script>
//import { useRouter } from 'vue-router'
import useSession from '../composables/useSession';


export default {
    name: 'SignIn',
    components: {
    },
    setup() {
       //const router = useRouter()
       const { userForm, isLogged, username, onLogin, onLogout } = useSession()

       return {
        userForm,
        isLogged,
        username,
        onLogin: async() => {
            //TODO A lo mejor no hace falta
            const { ok } = await onLogin();
            console.log(ok)
            /*if (ok) {
                router.go();
            }*/
        },
        onLogout: async() => {
            onLogout();
            //TODO A lo mejor no hace falta
            //router.go();
        }
       };
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
