<template>
    <div class="header">
        <div class="header-left">
                <div class="logo">
                        <router-link :to="{name: 'home'}"><img src="images/logo.png" alt=""/></router-link>
                </div>
                <div class="menu">
                        <a class="toggleMenu" href="#"><img src="images/nav.png" alt="" /></a>
                        <ul class="nav" id="nav">
                                <li class="active"><router-link :to="{name: 'home'}">Inicio</router-link></li>
                                <li><router-link :to="{name: 'advanced-search'}">Buscador avanzado</router-link></li>
                                <li v-if="isLogged"><router-link :to="{name: 'profile'}">Perfil</router-link></li>
                                <li v-else><router-link :to="{name: 'register'}">Registrate</router-link></li>
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
import SignIn from './SignIn.vue';
//import Session from '../services/session';

export default {
  name: 'HeaderPage',
  components: {
    SignIn
  },
  setup() {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>