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

        <my-search>search loading...</my-search>

        <my-submenu>submenu loading...</my-submenu>

        <div class="clearfix"></div>
    </div>
</template>

<script>
import HeaderPage from './HeaderPage.vue'

export default {
  name: 'MyApp',
  components: {
    HeaderPage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
