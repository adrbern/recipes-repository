<template>
    <div class="header">
        <div class="header-left">
                <div class="logo">
                        <a href="index.html"><img src="images/logo.png" alt=""/></a>
                </div>
                <div class="menu">
                        <a class="toggleMenu" href="#"><img src="images/nav.png" alt="" /></a>
                        <ul class="nav" id="nav">
                                <li class="active"><a href="index.html">Inicio</a></li>
                                <li><a href="./buscadorAvanzado.html">Buscador Avanzado</a></li>
                                <div class="clearfix"></div>
                        </ul>
                </div>
                <div class="clearfix"></div>
        </div>
        <div class="header-right">
                <SignIn>Sign-in loading...</SignIn>
        </div>
        <div class="clearfix"></div>
    </div>
</template>

<script>
import SignIn from './SignIn.vue'

export default {
  name: 'HeaderPage',
  components: {
    SignIn
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
