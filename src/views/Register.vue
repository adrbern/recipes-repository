<template>
    <div>
        <Banner>banner loading...</Banner>
        <div class="living_middle wow fadeInUp" data-wow-delay="0.4s">
            <div class="container">
                <h2>Rellena los siguientes campos</h2>
                <form method="post" action="contact-post.html">
                    <div class="text">
                        <input type="text" class="text" value="Alias" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Alias ';}">
                    </div>
                    <div class="text">
                        <input type="text" class="text" value="Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email ';}">
                    </div>
                    <div class="text">
                        <input type="text" class="text" value="Contraseña" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Contraseña ';}">
                    </div>
                    <div class="text">
                        <input type="text" class="text" value="Confirmacion de contraseña" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Confirmacion de contraseña ';}">
                    </div>
                    <div class="form-submit1">
                        <input name="submit" type="submit" id="submit" value="Crear cuenta">
                    </div>
                    <div class="clearfix"></div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Banner from '../components/Banner.vue';

export default {
  name: 'Recipe',
  components: {
    Banner
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>