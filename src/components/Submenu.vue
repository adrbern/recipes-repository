<template>
    <div class="content_top wow bounceInRight" data-wow-delay="0.4s">
        <div class="container">
            <div class="col-md-4 bottom_nav">
                <div class="content_menu">
                    <ul>
                        <li><a href="./entertain.html">Mis Favoritas</a></li> 
                        <li class="active"><a href="#./mis_comentarios.html">Mis Comentarios</a></li>  
                    </ul>
                </div>
            </div>
            <div class="col-md-4-tiempo filter_grid">
                <ul class="filter3">
                    <li class="fil">Ordenar por <br> Estrellas / Comentarios :</li>
                    <li><a href="./ordenarEstrellas.html"> <i class="icon1"> </i> </a></li>
                    <li><a href=""> <i class="icon2"> </i> </a></li>
                </ul>
            </div>
            <div class="col-md-4 filter_grid">
                <ul class="filter">
                    <li class="fi-l">Clase :</li>
                    <li @click="recipesByFilterType('Vegetal')"><a> <i class="icon1"> </i> </a></li>
                    <li @click="recipesByFilterType('Meat')"><a> <i class="icon2"> </i> </a></li>
                    <li @click="recipesByFilterType('Fish')"><a> <i class="icon3"> </i> </a></li>
                    <li @click="recipesByFilterType('Legume')"><a> <i class="icon4"> </i> </a></li>
                    <li @click="recipesByFilterType('Fruit')"><a> <i class="icon5"> </i> </a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import useRecipes from '../composables/useRecipes';

export default {
  name: 'Submenu',
  components: {
  },
  setup() {
    const { filter, recipes, recipesByFilterType } = useRecipes();

    //onRecipes;

    return {
      filter,
      recipes,
      recipesByFilterType
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>