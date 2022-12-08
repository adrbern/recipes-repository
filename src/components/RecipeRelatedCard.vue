<template>
    <div class="col-md-6 post_left wow" :class="alignClass" data-wow-delay="0.4s">
        <div class="mask1"><img src="images/pic4.jpg" alt="image" class="img-responsive zoom-img" /></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus, sem eget sagittis sagittis, nisl magna sodales eros, ut feugiat velit velit non turpis. Cras eu nibh dapibus justo fringilla   <a href="#">More</a></p>
        <div class="divider"></div>
        <p class="field-content"><span>30 Sep 2014</span></p>
    </div>

    <!-- Parametrizar desde fuera con el index el left y el right -->
    <!--
        <div class="col-md-6 post_left wow fadeInRight" data-wow-delay="0.4s">
   	  		<div class="mask1"><img src="images/pic5.jpg" alt="image" class="img-responsive zoom-img" /></div>
   	  	    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus, sem eget sagittis sagittis, nisl magna sodales eros, ut feugiat velit velit non turpis. Cras eu nibh dapibus justo fringilla   <a href="#">More</a></p>
   	  	    <div class="divider"></div>
   	  	    <p class="field-content">30 Sep 2014</span></p>
   	  	</div>
    --> 
</template>

<script>
export default {
  name: 'RecipeRelatedCard',
  components: {
  },
  props: ['align'],
  computed: {
      alignClass() {
          return Number(this.align) ? "fadeInRight" : "fadeInLeft";
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>