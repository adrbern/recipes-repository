<template>
    <div>
        <HeaderPage>header loading...</HeaderPage>

        <div class="banner wow fadeInUp" data-wow-delay="0.4s">
            <div class="container_wrap">
                <h1>¿De qué dispones?</h1>
                <div class="dropdown-buttons">
                    <div class="dropdown-button">
                        <select class="dropdown" tabindex="9" data-settings='{"wrapperClass":"flat"}'>
                            <option value="0"> 15 minutos</option>
                            <option value="1"> 30 minutos</option>
                            <option value="2"> 40 minutos</option>
                            <option value="3"> 1 hora</option>
                            <option value="4"> 2 horas</option>
                            <option value="5"> 3 horas </option>
                            <option value="6"> Más de 3 horas</option>
                        </select>
                    </div>
                </div>
                <form>
                    <input type="text" value="Aceite, sal, ternera, ...'" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Aceite, sal, ternera, ...';}">
                    <div class="contact_btn">
                        <a href="./living.html"><label class="btn1 btn-2 btn-2g">Buscar</label></a>
                    </div>
                </form>
                <div class="clearfix"></div>
            </div>
        </div>

            <div id="CUERPO">Loading...</div>

            <div class="content_middle wow bounceInLeft" data-wow-delay="0.4s">
            <div class="container">
        
                <my-recommend-list>..</my-recommend-list>
                <router-outlet></router-outlet>
        
            </div>
        </div>

        <div class="footer">
            <div class="container">
                <div class="footer_grids">
                    <div class="footer-grid">
                        <h4>Recipes On Time</h4>
                        <ul class="list1">
                            <li><a href="contact.html">Contactar</a></li>
                            <li><a href="#">Política de Privacidad</a></li>
                            <li><a href="#">Condiciones de uso</a></li>
                            <li><a href="#">Sugerencias</a></li>
                        </ul>
                    </div>
                    <div class="footer-grid">
                        <h4>Enlaces de interés</h4>
                        <ul class="list1">
                            <li><a href="#">Cocina Europea</a></li>
                            <li><a href="#">Gastronomía americana</a></li>
                            <li><a href="#">Estrellas Michelín </a></li>
                            <li><a href="#">Cocina asiática</a></li>
                        </ul>
                    </div>
                    <div class="footer-grid last_grid">
                        <h4>Redes Sociales</h4>
                        <ul class="footer_social wow fadeInLeft" data-wow-delay="0.4s">
                            <li><a href=""> <i class="fb"> </i> </a></li>
                            <li><a href=""><i class="tw"> </i> </a></li>
                            <li><a href=""><i class="google"> </i> </a></li>
                            <li><a href=""><i class="u_tube"> </i> </a></li>
                        </ul>
                        <div class="copy wow fadeInRight" data-wow-delay="0.4s">
                            <p>&copy;<a href="" target="_blank">Recipes On Time</a> </p>
                            >
                        </div>
                    </div>
                    <div class="clearfix"> </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderPage from './HeaderPage.vue';

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
