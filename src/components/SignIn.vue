<template>
    <div id="logged" v-if="token"><a v-on:click="onLogout"><img src="images/logged.png"><span>Federico</span></a></div>
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
export default {
    name: 'SignIn',
    components: {
    },
    data() {
        return {
            email: '',
            password: '',
            token: null
        }
    },
    created () {
        this.token = localStorage.getItem('token');
    },
    methods: {
        async onLogin() {
            const userLog =  await this.getLogin({
                email: this.email,
                password: this.password
            });
            const token = userLog.token;

            this.token = token;
            localStorage.setItem('token', userLog.token);
            localStorage.setItem('email', userLog.user.email);
        },
        async onLogout() {
            this.token = null;
            localStorage.removeItem('token');
            localStorage.removeItem('email');
        },
        async getLogin(payload) {
            try {
                let resp = await fetch('http://localhost:8080/api/auth/login', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });
                resp = await resp.json(); 

                return resp;
            } catch(e) {
                console.log(console.warn)
            };
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
