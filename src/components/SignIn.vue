<template>
    <div id="logged" v-if="isLogged"><a v-on:click="onLogout"><img src="images/logged.png"><span>{{this.name}}</span></a></div>
    <div id="loginContainer" v-else>
            <a href="#" id="loginButton"><img src="images/login.png"><span>Iniciar Sesión</span></a>
            <div id="loginBox">
                <div id="loginForm">
                    <fieldset id="body">
                        <fieldset>
                                <label for="email">Usuario</label>
                                <input type="text" name="email" id="email" v-model="email">
                        </fieldset>
                        <fieldset>
                                <label for="password">Contraseña</label>
                                <input type="password" name="password" id="password" v-model="password">
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
import router from '../router/router';
import Session from '../services/session';

export default {
    name: 'SignIn',
    components: {
    },
    data() {
        return {
            email: '',
            password: '',
            isLogged: null,
            name: null
        }
    },
    created () {
        const { isLogged, name } = new Session();

        this.isLogged = isLogged;
        this.name = name;
    },
    methods: {
        async onLogin() {
            try {
                const userLog =  await this.getLogin({
                    email: this.email,
                    password: this.password
                });

                localStorage.setItem('userData', JSON.stringify({
                    token: userLog.token,
                    email: userLog.user.email,
                    name: userLog.user.name
                }));
                
                router.go();
            } catch (e) {
                // Alerta Error login
            }
        },
        async onLogout() {
            localStorage.removeItem('userData');

            router.go();
        },
        async getLogin(payload) {
            try {
                let resp = await fetch('https://recipesontime.herokuapp.com/api/auth/login', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });
                resp = await resp.json(); 

                return resp;
            } catch(e) {
                throw new Error(e);
            };
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
