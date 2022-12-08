<template>
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
</template>

<script>

export default {
  name: 'SearchRecipes',
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
