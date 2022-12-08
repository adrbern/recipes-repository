<template>
    <div class="col-md-3 margin-verrtical7 grid_box">
        <router-link to="recipe">
            <a href="" class="swipebox" title="Image Title"> <img src="images/p1.jpg" class="img-responsive" alt=""><span class="zoom-icon"></span> </a>
            <div class="grid_box2">
                <h4><a href="#">Photos</a></h4>
                <p>20 Photos</p>
                    <img src="images/star1.png" alt=""/>
            </div>
         </router-link>
    </div>
</template>

<script>
export default {
  name: 'RecipeSimple',
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>