<template>
    <div id="loginContainer">
        <a href="#" id="loginButton"><img src="images/login.png"><span>Iniciar Sesión</span></a>
        <div id="loginBox">
            <div id="loginForm">
                <fieldset id="body">
                    <fieldset>
                            <label for="email">Usuario</label>
                            <input type="text" name="email" id="email">
                    </fieldset>
                    <fieldset>
                            <label for="password">Contraseña</label>
                            <input type="password" name="password" id="password">
                        </fieldset>
                    <a href="./entertain.html"><input type="submit" id="login" value="Iniciar "></a>
                    <label for="checkbox"><input type="checkbox" id="checkbox"> <i>Recordar</i></label>
                </fieldset>
                    <span><a href="#">Olvidaste tu contraseña?</a></span>
            </div>
        </div>

        <!--div id="logged"><a href="./entertain.html"><img src="images/logged.png"><span>Federico</span></a></div-->

        <div class="clearfix"></div>
    </div>
</template>

<script>
export default {
  name: 'SignIn',
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
