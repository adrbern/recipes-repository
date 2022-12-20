<template>
    <div class="content_top wow bounceInRight" data-wow-delay="0.4s">
           <div class="container">
            <div class="col-md-4 bottom_nav">
                <div class="content_menu">
                    <ul>
                        <li class="active"><a href="#">Receta a pasos</a></li> 
                        <li><a href="#">Comentarios</a></li>  
                    </ul>
                </div>
            </div>
            <div class="col-md-4-tiempo filter_grid">
            <ul class="filter3">
                    <li class="fil">Añadir a mis favoritas :</li>
                    <li><a href=""> <i class="icon1"> </i> </a></li>
                </ul>
            </div>
            <div class="col-md-4 filter_grid">
                <ul class="filter4">
                    <li><a href=""> <i class="icon1"> </i> </a></li>
                    <li class="fil">Visitas (200)</li>
                    <li><a href=""> <i class="icon2"> </i> </a></li>
                    <li class="fil2"> Comentarios (50)</li>
                </ul>
            </div>
           </div>
    </div>
</template>

<script>
export default {
  name: 'SubmenuRecipe',
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>